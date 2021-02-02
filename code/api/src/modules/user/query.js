// Writes all the queries (RoR (GET/SHOW/NEW/INDEX methods/routes) api calls for a user)
// Imports
// Pulls details (datatypes from graphql) from the graphql package
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
// Imports UserType from the module/user/types.js This is a GraphQLObjectType
// Imports UserLoginType from the module/user/types.js This is a GraphQLObjectType
// Imports UserGenderType from the module/user/types.js This is a GraphQLObjectType
import { UserType, UserLoginType, UserGenderType } from './types'
// Imports getAll, getById, login, getGenders from module/user/resolvers.js
// getAll == writes a behavior for calling all Users in database
// getById == writes a behavior for calling a single User (by id's)
// login == passed params of email and password
// getGenders == writes a behavior for calling a list of user by a passed gender in the api call
import { getAll, getById, login, getGenders } from './resolvers'

// All
// Writes the query variable (users) for getting a list of all users
export const users = {
  // Defines a List (graphql) datatype; This returns a list of all the user graphql objects
  type: new GraphQLList(UserType),
  // there are no arguements for users
   // calls resolver behavior getAll
  resolve: getAll
}

// By ID
// Writes the query variable (user) for returning a single user by id
export const user = {
   // Defines it as a graphql object
  type: UserType,
  // Takes an arguement
  args: {
    // This arguement needs an id and that id is defined as an Integer
    id: { type: GraphQLInt }
  },
  // calls resolver behavior getById
  resolve: getById
}

// Auth
// Writes the query variable (userLogin) for returning data after a successful login
export const userLogin = {
  // Defines a graphql object that deal with authentication
  type: UserLoginType,
  // This take three arguements
  args: {
    email: {
      // an email arguement
      // This arguement needs an email and that email is defined as an String
      name: 'email',
      type: GraphQLString
    },

    password: {
      // a password arguement
      // This arguement needs a password and that password is defined as an String
      name: 'password',
      type: GraphQLString
    },

    role: {
      // a role arguement
      // This arguement needs a role and that role is defined as an String
      name: 'role',
      type: GraphQLString
    }
  },
  // calls resolver behavior login
  resolve: login
}

// Genders
// Writes the query variable (userGenders) for returning a list of users by a passed param of gender
export const userGenders = {
  // Defines a graphql object; returns a list of all user (found by gender)
  type: new GraphQLList(UserGenderType),
  // this takes no arguements
  // calls resolver behavior getGenders
  resolve: getGenders
}
