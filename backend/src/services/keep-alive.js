require('dotenv').config()
const axios = require('axios')

const url = process.env.NODE_ENV === 'production'
  ? process.env.PRODUCTION_BACKEND_URL
  : `http://localhost:${4000}`

const keepServerAlive = () => {
  console.log('Starting keep alive service')
  setInterval(async () => {
    try {
      const response = await axios.get(`${url}`)
      console.log(`Health check: ${response.status} - ${response.data}`)
    } catch (error) {
      console.error('Health check error:', error.message)
    }
  }, 14 * 60 * 1000) // Ping every 14 minutes
}

module.exports = keepServerAlive
