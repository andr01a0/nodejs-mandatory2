import userModel from '../models/user.model.js'
import cartModel from '../models/cart.model.js'
import itemModel from '../models/item.model.js'
import productModel from '../models/product.model.js'
import discountModel from '../models/discount.model.js'

export default {
	getUsers: async (req, res, next) => {
			return await userModel.findAll()
	},
	createUser: async (req, res, next) => {
		const user = await userModel.create(req.body)
		await cartModel.create({
			userId: user.userId
		})
		return user
	},
	getUserById: async (req, res, next) => {
		return await userModel.findOne({
			where: {
				userId: req.params.id
			}
		})
	},
	getUserCartProducts: async (req, res, next) => {
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
	},
	addProductToCart: async (req, res, next) => {
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
	},
	getProducts: async (req, res, next) => {
		return await productModel.findAll()
	},
	createProduct: async (req, res, next) => {
		return await productModel.create(req.body)
	},
	getProductById: async (req, res, next) => {
		return await productModel.findOne({
			where: {
				productId: req.params.productId
			}
		})
	}
}
