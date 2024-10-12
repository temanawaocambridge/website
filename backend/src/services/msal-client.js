require('dotenv').config()
const { ConfidentialClientApplication } = require('@azure/msal-node')

if (!process.env.MICROSOFT_CLIENT_ID || !process.env.MICROSOFT_TENANT_ID || !process.env.MICROSOFT_CLIENT_SECRET) {
  throw new Error('Missing environment variables for MSAL client configuration')
}

const msalConfig = {
  auth: {
    clientId: process.env.MICROSOFT_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET
  }
}

const msalClient = new ConfidentialClientApplication(msalConfig)

module.exports = msalClient
