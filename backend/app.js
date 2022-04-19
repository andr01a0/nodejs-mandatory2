import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { fileLogger, consoleLogger } from './src/middlewares/logging.middleware.js'
import { error, errorHandler } from './src/middlewares/error.handling.middleware.js'
import storeRouter from './src/routes/store.route.js'

const app = express()

// setup the logger
app.use(consoleLogger)
app.use(fileLogger)

app.use('/api/', helmet())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

import path from "path"
app.use(express.static(path.resolve('../frontend/public')))

// routes
app.use('/api', storeRouter)

// catch 404 and forward to error handler
app.use(error)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log('Server is listening on port', PORT)
})
