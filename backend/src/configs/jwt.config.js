import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import fs from "fs"
import path from "path"
import User from "../models/user.model.js"
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pathToKey = path.join(__dirname, '../..', 'id_rsa_pub.pem')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
}

export default (passport) => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    User.findOne(jwt_payload.sub)
      .then(user => {
        if (user) {
          return done(null, user)
        }
        return done(null, false)
      })
      .catch(err => console.log(err))
  }))
}