import { DataTypes } from 'sequelize'
import { sequelize } from '../configs/db.config.js'

const Item = sequelize.define('Item', {
  itemId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
	quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
		defaultValue: 1
  }
})

Item.associate = (models) => {
  Item.belongsTo(models.Cart, {
    foreignKey: "cartId",
    as: "cart",
  })
	Item.hasOne(models.Product, { as: "product" })
}

await Item.sync()

export default Item
