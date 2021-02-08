// Imports

// JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

import jwt from 'jsonwebtoken'

// We are importing ENV data like port and API key
import serverConfig from '../config/server.json'

// This attempts to authenticate request and return error message if
// authentication token is not valid.

// Authentication middleware
export default function (request, response, next) {
  let authToken = request.headers.authorization

  if (authToken && authToken !== null) {
    try {
      const token = authToken.split(' ')
      request.user = jwt.verify(token[1], serverConfig.secret)
    } catch (e) {
      console.warn('Invalid token detected.')
    }
  } else {
    request.user = {}
  }

  next()
}
