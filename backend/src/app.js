const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors') // Enable CORS
// const helmet = require('helmet') // Security middleware
// const bodyParser = require('body-parser')

// GraphQL type definitions and resolvers
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: false
})

const app = express()

// Set up CORS to allow requests from both your production website and localhost (for development)
const allowedOrigins = ['https://temanawaocambridge.org.nz', `http://localhost:${process.env.PORT}`]

const corsOptions = {
  origin: function (origin, cb) {
    // Allow requests with no origin (like mobile apps, curl, Postman, etc.) or from allowed domains
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS'))
    }
  },
  credentials: true // This allows cookies and other credentials to be sent from the client
}

app.use(cors(corsOptions)) // Apply CORS middleware

// Add additional middleware (security, body parsing)
// app.use(helmet())
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
