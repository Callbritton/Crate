// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}


export async function update(parentValue, { name, email, password, role, style_survey }) {
  // if(auth.user) {
  const userUpdate = await models.User.findOne( {where: { email } })
      {
        userUpdate.style_survey = style_survey
      }
      await userUpdate.save()
    return userUpdate
    if(!user) {
      throw new Error('User does not exsist!')
    } else {
      return await models.User.findOne({ where: { email } })
    }
  // } else {
  //    throw new Error('Operation denied.')
  // }
}

// export async function update(parentValue, { id, name, password, email, style_survey, role }, { auth }) {
//   if(auth.user) {
//     return await models.User.update(
//       {
//         name,
//         password,
//         email,
//         style_survey,
//         role
//       },
//       {where: {id}}
//     )
//   } else {
//     throw new Error('Operation denied.')
//   }
// }

export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role,
        style_survey: userDetails.style_survey
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Get User Style
export async function getUserStyle(parentValue, { id }) {
  const user = await models.User.findOne({ where: { id } })
  if (!user) {
    // User does not exists
    throw new Error(`We cannot find that user.`)
  } else {
  const userDetails = user.get()
    return await models.Style.findOne({
      where: { id: userDetails.style_survey } })
  }
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
}
