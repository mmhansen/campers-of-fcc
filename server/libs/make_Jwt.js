import jwt from 'jwt-simple'
import config from './config'
/**
 * return token based on given id
 * current time thrown in there for a little random data
 */
export default function tokenForUser(id) {
   const timestamp = new Date().getTime();
   return jwt.encode({ sub: id, iat: timestamp }, config().secret)
}
