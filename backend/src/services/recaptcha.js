require('dotenv').config()
const axios = require('axios')

async function verifyRecaptcha (recaptchaToken) {
  const url = `https://www.google.com/recaptcha/api/siteverify`

  try {
    const response = await axios.post(url, null, {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      },
    });

    return response.data
  } catch (error) {
    console.error('Error verifying reCAPTCHA token:', error)
    throw new Error('Failed to verify reCAPTCHA token')
  }
}

module.exports = verifyRecaptcha