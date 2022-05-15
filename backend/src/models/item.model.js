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

await Item.sync()

export default Item
