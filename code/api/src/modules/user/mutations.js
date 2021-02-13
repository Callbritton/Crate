// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, update } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    style_survey: {
      name: 'style_survey',
      type: GraphQLInt
    }
  },
  resolve: create
}
// Update
export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    },
    role: {
      name: 'role',
      type: GraphQLString
    },
    style_survey: {
      name: 'style_survey',
      type: GraphQLInt
    }
  },
  resolve: update
}

export const styleUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
    password: {
      name: 'password',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    },
    style_survey: {
      name: 'style_survey',
      type: GraphQLInt
    },
    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: update
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
