// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import StyleType from './types'
import { getAll, getById } from './resolvers'

// Style All
export const styles = {
  type: new GraphQLList(StyleType),
  resolve: getAll
}

// Style By ID
export const styleById = {
  type: StyleType,
  args: {
    styleId: { type: GraphQLInt }
  },
  resolve: getById
}
