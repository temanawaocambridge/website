require('dotenv').config()

const app = require('./app')
const keepServerAlive = require('./services/keep-alive')

const PORT = process.env.PORT || 4000

keepServerAlive()

app.get('/health', (_, res) => {
  res.send('OK')
})

const url = process.env.NODE_ENV === 'production'
  ? process.env.PRODUCTION_BACKEND_URL
  : `http//localhost:${PORT}/graphql`

app.listen(PORT, () => {
  console.log(`Server is running at ${url}`)
})
