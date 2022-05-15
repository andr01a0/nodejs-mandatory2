//import { sequelize } from './db.config.js'
import User from '../models/user.model.js'
import Cart from '../models/cart.model.js'
import Discount from '../models/discount.model.js'
import Product from '../models/product.model.js'
import Item from '../models/item.model.js'

export const models = {
	User,
	Cart,
	Discount,
	Product,
	Item
}