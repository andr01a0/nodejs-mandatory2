import { DataTypes } from 'sequelize'
import { sequelize } from '../configs/db.config.js'

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

User.associate = (models) => {
  User.hasOne(models.Cart, { as: "cart" })
}

await User.sync()

export default User
