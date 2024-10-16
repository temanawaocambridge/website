require('dotenv').config()
const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors'); // Enable CORS
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')

// GraphQL type definitions and resolvers
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: false,
  introspection: true, // Enable introspection for Apollo Sandbox in production
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(), // Enable GraphQL Playground
  ],
});

const app = express();

// Set up CORS to allow requests from both your production website and localhost (for development)
const allowedOrigins = [
  process.env.PRODUCTION_WEBSITE_URL,
  `${process.env.PRODUCTION_BACKEND_URL}/graphql`,
  `http://localhost:${process.env.PORT || 4000}`,
  'http://localhost:3001' // dev website url
].filter(Boolean)

const corsOptions = {
  origin: function (origin, cb) {
    // Allow requests with no origin (like mobile apps, curl, Postman, etc.) or from allowed domains
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      console.error('Not allowed by CORS', origin)
      cb(new Error('Not allowed by CORS',))
    }
  },
  credentials: true, // This allows cookies and other credentials to be sent from the client
};

app.use(cors(corsOptions)); // Apply CORS middleware

async function startApolloServer() {
  await server.start(); // Start Apollo Server
  server.applyMiddleware({ app }); // Apply Apollo middleware to the Express app
}

// Call the function to start Apollo Server
startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server: ', err);
});

module.exports = app; // Export the app so server.js can use it
