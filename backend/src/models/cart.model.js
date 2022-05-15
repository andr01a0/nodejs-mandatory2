import { DataTypes } from 'sequelize'
import { sequelize } from '../configs/db.config.js'

const Cart = sequelize.define('Cart', {
  cartId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
})

await Cart.sync()

export default Cart
