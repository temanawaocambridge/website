// const test = require('tape')
// const sinon = require('sinon')
// const axios = require('axios')
// const getAccessToken = require('../services/get-access-token')
// const resolvers = require('../graphql/resolvers')

// // Mock data
// const mockFields = { /* your mock fields here */ }
// const mockAccessToken = 'mock-access-token'

// test('submitGetHelpRequest mutation', async (t) => {
//   // Arrange: Set up mocks
//   sinon.stub(getAccessToken).returns(Promise.resolve(mockAccessToken))

//   const axiosPostStub = sinon.stub(axios, 'post').returns(Promise.resolve({ data: {} }))

//   // Act: Call the resolver
//   const result = await resolvers.Mutation.submitGetHelpRequest(mockFields)

//   // Assert: Verify the expected behavior
//   t.ok(result, 'should return true')

//   // Verify axios.post was called with the correct parameters
//   const expectedGraphUrl = `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items`
//   t.ok(axiosPostStub.calledOnce, 'axios.post should be called once')
//   t.ok(axiosPostStub.calledWith(expectedGraphUrl, { fields: mockFields }, {
//     headers: {
//       Authorization: `Bearer ${mockAccessToken}`,
//       'Content-Type': 'application/json'
//     }
//   }), 'axios.post should be called with the correct URL and data')

//   // Clean up
//   axiosPostStub.restore()
//   t.end()
// })
