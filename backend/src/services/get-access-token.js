const msalClient = require('./msal-client');

let accessToken = null;
let tokenExpirationTime = null;

async function getAccessToken() {
  // Check if the token is expired or not present
  if (!accessToken || Date.now() >= tokenExpirationTime) {
    const tokenRequest = {
      scopes: ['https://graph.microsoft.com/.default']
    };

    try {
      const authResult = await msalClient.acquireTokenByClientCredential(tokenRequest);
      accessToken = authResult.accessToken;

      // Set the expiration time (using expiresIn if available, else estimate 1 hour)
      if (authResult.expiresIn) {
        tokenExpirationTime = Date.now() + (authResult.expiresIn * 1000); // expiresIn is in seconds
      } else if (authResult.expiresOn) {
        tokenExpirationTime = new Date(authResult.expiresOn).getTime(); // expiresOn might be a datetime string
      } else {
        // If no expiration info is available, assume 1 hour validity as fallback
        tokenExpirationTime = Date.now() + (60 * 60 * 1000); // 1 hour
      }

    } catch (error) {
      console.error('Error acquiring access token:', error);
      return null;
    }
  }

  return accessToken;
}

module.exports = getAccessToken;
