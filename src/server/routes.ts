import express from 'express'
import HomePage from './pages'

const Routes = () => {
  const router = express.Router()

  router.get('/', HomePage)

  return router
}

export default Routes
