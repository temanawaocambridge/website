const tape = require('tape')
const request = require('supertest')
const app = require('../../src/app')

tape('Test GraphQL query', (t) => {
  request(app)
    .post('/graphql') // GraphQL endpoint
    .send({
      query: `{
        healthCheck {
          status
        }
      }`
    }) // Send a GraphQL query to test
    .expect(200) // Expect a successful status
    .end((err, res) => {
      if (err) {
        t.fail('Error with GraphQL query')
      } else {
        t.equal(res.body.data.test, true, 'GraphQL query returns correct response')
      }
      t.end()
    })
})

tape('Test GraphQL error handling', (t) => {
  request(app)
    .post('/graphql')
    .send({
      query: `{
        nonExistentField
      }`
    }) // Query a non-existent field to trigger an error
    .expect(400) // Expect a bad request
    .end((err, res) => {
      if (err) {
        t.fail('Error with error handling')
      } else {
        t.ok(res.body.errors, 'Correctly returns errors for invalid query')
        t.end()
      }
    })
})
