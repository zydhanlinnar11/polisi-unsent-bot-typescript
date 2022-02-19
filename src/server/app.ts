import express from 'express'
import Routes from './routes'

export default function setupServer() {
  try {
    const app = express()

    app.listen(process.env.PORT || 8000)
    app.use('/', Routes())
    console.log('Server started')
  } catch (e) {
    console.error('Unable to start server')
  }
}
