const msalClient = require('./msal-client')

async function getAccessToken () {
  const tokenRequest = {
    scopes: ['https://graph.microsoft.com/.default']
  }

  try {
    const authResult = await msalClient.acquireTokenByClientCredential(tokenRequest)
    return authResult.accessToken
  } catch (error) {
    console.error('Error acquiring access token:', error)
    throw new Error('Could not get access token')
  }
}

module.exports = getAccessToken
