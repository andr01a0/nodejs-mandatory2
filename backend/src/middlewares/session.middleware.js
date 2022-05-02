import Session from 'express-session'
import { sequelize } from '../configs/db.config.js'
import sequelizeStore from 'connect-session-sequelize'

const SequelizeStore = sequelizeStore(Session.Store)

export const session = Session({
	secret: process.env.SESSION_SECRET,
	store: new SequelizeStore({
		db: sequelize,
	}),
	resave: false,
  saveUninitialized: false,
	rolling: true,
	cookie: {
		maxAge: 360000,
		secure: false
	}
})
