import { DataTypes } from 'sequelize'
import { sequelize } from '../configs/db.config.js'

const Product = sequelize.define('Product', {
  productId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
	name: {
    type: DataTypes.STRING,
    allowNull: false
  },
	description: {
    type: DataTypes.STRING
  },
	price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
})

Product.associate = (models) => {
  Product.belongsToMany(models.Item, {
    foreignKey: "itemId",
    as: "item",
  })
	Product.hasOne(models.Discount, { as: "discount" })
}

await Product.sync()

export default Product
