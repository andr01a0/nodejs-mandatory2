import express from 'express'
const router = express.Router()
import User from '../models/user.model.js'
import issueJWT from '../utils/jwt.utils.js'

router
.post('/login', (req, res, next) => {
	User.findOne({where: { username: req.body.username }})
	.then(user => {
		if (!user) {
			return res.status(401).json({ message: 'Wrong username or password' })
		}
		
		const validPassword = user.validatePassword(req.body.password, user.password)

		if (!validPassword) {
			return res.status(401).json({ message: 'Wrong username or password' })
		}

		const tokenObject = issueJWT(user)

		return res.status(200).json({
			success: true,
			token: tokenObject.token,
			expiresIn: tokenObject.expires
		})
	})
	.catch(err => {
		return next(err)
	})
})
.post('/signup', (req, res, next) => {
	// create new User in sequelize
	User.create(req.body)
	.then(user => {
		res.json({ success: true, user: user })
	})
	.catch(err => {
		return next(err)
	})
})

export default router
