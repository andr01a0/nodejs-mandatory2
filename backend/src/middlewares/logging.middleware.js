import path from 'path'
import { fileURLToPath } from 'url'
import rfs from 'rotating-file-stream'
import logger from 'morgan'

/* solve the '__filename/__dirname is not defined in ES module scope' error */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const consoleLogger = logger('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
})

// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, '../../logs')
})

export const fileLogger = logger('combined', { stream: accessLogStream })
