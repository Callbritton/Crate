// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import StyleType from './types'
import { create, update, remove } from './resolvers'

// Style create
export const styleCreate = {
  type: StyleType,
  args: {
    description: {
      name: 'description',
      type: GraphQLString
    },
    image_url: {
      name: 'image_url',
      type: GraphQLString
    }
  },
  resolve: create
}

// Style update
export const styleUpdate = {
  type: StyleType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    description: {
      name: 'description',
      type: GraphQLString
    },
    image_url: {
      name: 'image_url',
      type: GraphQLString
    }
  },
  resolve: update
}

// Style remove
export const styleRemove = {
  type: StyleType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
