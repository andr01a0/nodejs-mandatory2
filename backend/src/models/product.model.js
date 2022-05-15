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

await Product.sync()

export default Product
