import storeService from '../services/store.service.js'

export default {
	getUsers: async (req, res, next) => {
		try {
			res.json(await storeService.getUsers())
		} catch (err) {
			next(err)
		}
	},
	createUser: async (req, res, next) => {
		try {
			res.json(await storeService.createUser(req, res, next))
		} catch (err) {
			next(err)
		}
	},
	getUserById: async (req, res, next) => {
		try {
			res.json(await storeService.getUserById(req, res, next))
		} catch (err) {
			next(err)
		}
	},
	getUserCartProducts: async (req, res, next) => {
		try {
			res.json(await storeService.getUserCartProducts(req, res, next))
		} catch (err) {
			next(err)
		}
	},
	addProductToCart: async (req, res, next) => {
		try {
			res.json(await storeService.addProductToCart(req, res, next))
		} catch (err) {
			next(err)
		}
	},
	getProducts: async (req, res, next) => {
		try {
			res.json(await storeService.getProducts())
		} catch (err) {
			next(err)
		}
	},
	createProduct: async (req, res, next) => {
		try {
			res.json(await storeService.createProduct(req, res, next))
		} catch (err) {
			next(err)
		}
	},
	getProductById: async (req, res, next) => {
		try {
			res.json(await storeService.getProductById(req, res, next))
		} catch (err) {
			next(err)
		}
	}
}
