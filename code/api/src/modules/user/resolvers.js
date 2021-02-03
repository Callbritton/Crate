// Imports
// bcrypt == a password-hashing function
import bcrypt from 'bcrypt'
// jwt == is an open standard that defines a compact and
// self-contained way of securely transmitting information between parties as a JSON object.
// This information can be verified and trusted because it is digitally signed.
import jwt from 'jsonwebtoken'

// App Imports

Imports server details
import serverConfig from '../../config/server'
// Imports JSON param details about models
import params from '../../config/params'
// Imports SQL objects database models
import models from '../../setup/models'

// Create
// This gets called in modules/user/mutations.js
// Exports a create function that takes name, email and password
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  // The await expression causes async function execution to pause until
  // a Promise is settled (that is, fulfilled or rejected),
  // and to resume execution of the async function after fulfillment.
  // When resumed, the value of the await expression is that of the fulfilled Promise
  const user = await models.User.findOne({ where: { email } })
  // Goes into this conditional if a user does not exsist
  if (!user) {
    // User does not exists
    // This makes the password encrypted. Think gem 'bcrypt'
    // the saltRounds is equal to 10
    // This is gets from the config/server.json
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)
    // Call and create a User with (name, email and passwordHashed)
    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    // Returns the error
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

// Exports a login function that takes an email and password
// parentValue == property returns the parent node of the specified node, as a Node object.
export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })
  // The User does NOT exist in database
  if (!user) {
    // User does not exists
    // Returns the error
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
    // User does exsist
  } else {
    // Defines a new variable (userDetails) that calls a user.get
    const userDetails = user.get()

    // User exists
    // Confirmation that password matches
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    // When the passords do NOT match
    if (!passwordMatch) {
      // Incorrect password
      // Returns the error
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
      // Success! The raw password and the hashed-password match
    } else {
      // Returns userDetailsToken (has id, name, email, role) for User
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      Returns
      return {
        // userDetails is defined on line 58
        user: userDetails,
        // takes two arguements (made above) and jwt secret
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
// Exports a function for getting a user in a database (by ID)
export async function getById(parentValue, { id }) {
  // returns after promise is given (a single user that matches ID)
  return await models.User.findOne({ where: { id } })
}

// Get all
// Exports a function for getting all users in a database
export async function getAll() {
  // returns after promise is given (all users)
  return await models.User.findAll()
}

// Delete
// Exports a function for deleting a user in a database (by ID)
export async function remove(parentValue, { id }) {
  // returns after promise is fulfilled, the user is deleted
  return await models.User.destroy({ where: { id } })
}

// User genders
// Exports a function for getting a products gender
export async function getGenders() {
  returns
  // returns params of gender male and female (Integer)
  return Object.values(params.user.gender)
}
