import { DataTypes } from 'sequelize'
import { sequelize } from '../configs/db.config.js'

const Discount = sequelize.define('Discount', {
  discountId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  percentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  },
  code: {
    type: DataTypes.STRING
  }
})

await Discount.sync()

export default Discount
