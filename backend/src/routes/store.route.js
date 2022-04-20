import express from 'express'
const router = express.Router()
import storeController from '../controllers/store.controller.js'

// user
router
.get('/user', function(req, res, next) {
  storeController.getUsers(req, res, next)
})
.post('/user', function(req, res, next) {
  storeController.createUser(req, res, next)
})
.get('/user/:id', function(req, res, next) {
  storeController.getUserById(req, res, next)
})
.get('/user/:id/cart/product', function(req, res, next) {
  storeController.getUserCartProducts(req, res, next)
})
// user - cart - product
.post('/user/:id/cart/product', function(req, res, next) {
  storeController.addProductToCart(req, res, next)
})
// product
.get('/product', function(req, res, next) {
  storeController.getProducts(req, res, next)
})
.post('/product', function(req, res, next) {
  storeController.createProduct(req, res, next)
})
.get('/product/:id', function(req, res, next) {
  storeController.getProductById(req, res, next)
})

export default router
