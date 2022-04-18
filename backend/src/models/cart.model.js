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

Cart.associate = (models) => {
  Cart.belongsTo(models.User, {
    foreignKey: "userId",
    as: "user",
  })
  Cart.hasMany(models.Item, { as: "item" })
}

await Cart.sync()

export default Cart
