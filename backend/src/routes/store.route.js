import express from 'express'
const router = express.Router()
import storeController from '../controllers/store.controller.js'

router.get('/', function(req, res, next) {
  res.send('Store route')
})

export default router
