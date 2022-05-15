import { models } from '../configs/db.models.config.js'

export default {
	getUsers: async (req, res, next) => {
			return await models.User.findAll()
	},
	createUser: async (req, res, next) => {
		const user = await models.User.create(req.body)
		await models.Cart.create({
			userId: user.userId
		})
		return user
	},
	getUserById: async (req, res, next) => {
		return await models.User.findOne({
			where: {
				userId: req.params.id
			}
		})
	},
	getUserCartProducts: async (req, res, next) => {
		const cart = await models.Cart.findOne({
			where: {
				userId: req.params.cartId
			}
		})
		return await models.Item.findAll({
			where: {
				cartId: cart.cartId
			}
		})
	},
	addProductToCart: async (req, res, next) => {
		const cart = await models.Cart.findOne({
			where: {
				userId: req.params.cartId
			}
		})
		const product = await models.Product.findOne({
			where: {
				productId: req.params.productId
			}
		})
		return item = await models.Item.create({
			cartId: cart.cartId,
			productId: product.productId,
			quantity: req.body.quantity
		})
	},
	getProducts: async (req, res, next) => {
		return await models.Product.findAll()
	},
	createProduct: async (req, res, next) => {
		return await models.Product.create(req.body)
	},
	getProductById: async (req, res, next) => {
		return await models.Product.findOne({
			where: {
				productId: req.params.productId
			}
		})
	}
}
