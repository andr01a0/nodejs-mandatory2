import { DataTypes } from 'sequelize'
import { sequelize } from '../configs/db.config.js'
import bcrypt from 'bcrypt'

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

User.addHook("beforeCreate", newUser => {
  newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10), null)
})

User.prototype.validatePassword = (pass, hash) => {
  return bcrypt.compareSync(pass, hash)
}

await User.sync()

export default User
