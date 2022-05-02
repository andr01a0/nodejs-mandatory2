import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { fileLogger, consoleLogger } from './src/middlewares/logging.middleware.js'
import { error, errorHandler } from './src/middlewares/error.handling.middleware.js'
import storeRouter from './src/routes/store.route.js'
import { session } from './src/middlewares/session.middleware.js'
import { checkSignIn } from './src/middlewares/authorization.middleware.js'
import passport from 'passport'

const app = express()

// setup the logger
app.use(consoleLogger)
app.use(fileLogger)

app.use('/api/', helmet())
app.use(cors())

// settings for the session
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

// serve frontend
import path from "path"
app.use(express.static(path.resolve('../frontend/public')))

// backend routes
app.use('/api', checkSignIn, storeRouter)

// catch 404 and forward to error handler
app.use(error)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log('Server is listening on port', PORT)
})
