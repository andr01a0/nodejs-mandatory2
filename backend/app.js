import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { fileLogger, consoleLogger } from './src/middlewares/logging.middleware.js'
import { error, errorHandler } from './src/middlewares/error.handling.middleware.js'
import passport from 'passport'
import jwtConfig from './src/configs/jwt.config.js'
import storeRoute from './src/routes/store.route.js'
import authRoute from './src/routes/authentication.route.js'

const app = express()

// setup the logger
app.use(consoleLogger)
app.use(fileLogger)

// helmet security
app.use('/api/', helmet())

// pass the global passport object to the jwtConfig
jwtConfig(passport)
// passportjs initialization
app.use(passport.initialize())

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// setup cors
app.use(cors())

// serve frontend
import path from "path"
app.use(express.static(path.resolve('../frontend/public')))

// backend routes
app.use('/api', passport.authenticate('jwt', { session: false }), storeRoute)
app.use('/', authRoute)

// catch 404 and forward to error handler
app.use(error)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log('Server is listening on port', PORT)
})
