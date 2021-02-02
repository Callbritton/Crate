// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
// Makes UserType
const UserType = new GraphQLObjectType({
  // The Object is a User
  name: 'user',
  description: 'User type',
  // All attributes that are matched in the model.js
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

// User Login type
// Makes UserLoginType
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',
  // needs user and token (given in api response)
  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
// Makes UserGenderType
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',
  // needs id and name (given in api response)
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

// Exports UserType, UserLoginType and UserGenderType
export { UserType, UserLoginType, UserGenderType }
