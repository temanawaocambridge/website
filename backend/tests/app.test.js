const test = require('tape')
const request = require('supertest')
const app = require('../src/app')

test('Test if the server starts and responds to requests', (t) => {
  request(app)
    .get('/') // Test an endpoint
    .expect(404) // Expecting a 404 since the root is not defined in app.js
    .end((err, res) => {
      if (err) {
        t.fail('Failed to start server or handle request')
      } else {
        t.equal(res.status, 404, 'Correctly returns 404 for undefined routes')
      }
      t.end()
    })
})
