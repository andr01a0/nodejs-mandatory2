import userModel from '../models/user.model.js'
import cartModel from '../models/cart.model.js'
import itemModel from '../models/item.model.js'
import productModel from '../models/product.model.js'
import discountModel from '../models/discount.model.js'

export default {
	getUsers: async (req, res, next) => {
		try {
			return await userModel.findAll()
		} catch (err) {
			next(err)
		}
	},
	createUser: async (req, res, next) => {
		try {
			const user = await userModel.create(req.body)
			await cartModel.create({
				userId: user.userId
			})
			return user
		} catch (err) {
			next(err)
		}
	},
	getUserById: async (req, res, next) => {
		try {
			return await userModel.findOne({
				where: {
					userId: req.params.id
				}
			})
		} catch (err) {
			next(err)
		}
	},
	getUserCartProducts: async (req, res, next) => {
		try {
			const cart = await cartModel.findOne({
				where: {
					userId: req.params.cartId
				}
			})
			return await itemModel.findAll({
				where: {
					cartId: cart.cartId
				}
			})
		} catch (err) {
			next(err)
		}
	},
	addProductToCart: async (req, res, next) => {
		try {
			const cart = await cartModel.findOne({
				where: {
					userId: req.params.cartId
				}
			})
			const product = await productModel.findOne({
				where: {
					productId: req.params.productId
				}
			})
			return item = await itemModel.create({
				cartId: cart.cartId,
				productId: product.productId,
				quantity: req.body.quantity
			})
		} catch (err) {
			next(err)
		}
	},
	getProducts: async (req, res, next) => {
		try {
			return await productModel.findAll()
		} catch (err) {
			next(err)
		}
	},
	createProduct: async (req, res, next) => {
		try {
			return await productModel.create(req.body)
		} catch (err) {
			next(err)
		}
	},
	getProductById: async (req, res, next) => {
		try {
			return await productModel.findOne({
				where: {
					productId: req.params.productId
				}
			})
		} catch (err) {
			next(err)
		}
	}
}
