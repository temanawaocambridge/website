const express = require('express')
const { ApolloServer } = require('apollo-server-express')
// const helmet = require('helmet') // Security middleware
// const cors = require('cors') // Enable CORS
// const bodyParser = require('body-parser')

// GraphQL type definitions and resolvers
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

// Add middleware (security, CORS, body parsing)
// app.use(helmet())
// app.use(cors())
// app.use(bodyParser.json())

async function startApolloServer () {
  await server.start() // Start Apollo Server
  server.applyMiddleware({ app }) // Apply Apollo middleware to the Express app

  console.log('Apollo Server is set up and middleware applied')
}

// Call the function to start Apollo Server
startApolloServer().catch(err => {
  console.error('Error starting Apollo Server: ', err)
})

module.exports = app // Export the app so server.js can use it
