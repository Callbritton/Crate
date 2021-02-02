// Mutations - Our requests that are going to affect any data that we have on our own server.
// RoR (PATCH, DESTROY)

// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// Imports UserType from the file in module/user/types.js
import { UserType } from './types'
// Imports the 'create' and 'remove' functions from module/user/resolvers.js
// create == RoR create/post api calls for User
// remove == RoR destroy api calls for User
import { create, remove } from './resolvers'

// Create
// This defines the mutation for an api call for userSignup
export const userSignup = {
  // UserType == is defined in 'types.js'. This is a GraphQLObjectType
  type: UserType,
  // has three arguements [name, email, password]
  args: {
    name: {
      // this is a String
      name: 'name',
      type: GraphQLString
    },

    email: {
        // this is a String
      name: 'email',
      type: GraphQLString
    },

    password: {
        // this is a String
      name: 'password',
      type: GraphQLString
    }
  },
  // applies resolver create
  resolve: create
}

// Remove
// This defines the mutation for an api call for userRemove
export const userRemove = {
  // UserType == is defined in 'types.js'. This is a GraphQLObjectType
  type: UserType,
  // has one arguement [id]
  args: {
    id: {
      // defines user input as a Integer
      name: 'id',
      type: GraphQLInt
    }
  },
  // applies resolver remove
  resolve: remove
}
