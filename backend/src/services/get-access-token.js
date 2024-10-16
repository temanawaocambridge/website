const msalClient = require('./msal-client')

let accessToken = null
let tokenExpirationTime = null

async function getAccessToken () {
  // Check if the token is expired or not present
  if (!accessToken || Date.now() >= tokenExpirationTime) {
    const tokenRequest = {
      scopes: ['https://graph.microsoft.com/.default']
    }

    try {
      const authResult = await msalClient.acquireTokenByClientCredential(tokenRequest)
      accessToken = authResult.accessToken

      // Set the expiration time (typically, tokens expire after 1 hour)
      tokenExpirationTime = Date.now() + (authResult.expiresIn * 1000) // Use expiresIn from authResult
    } catch (error) {
      console.error('Error acquiring access token:', error)
      throw new Error('Could not get access token')
    }
  }

  return accessToken
}

module.exports = getAccessToken
