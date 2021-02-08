// The query parts (Index and Show in rails) appears to be broken out into
// this specific file (seperate from mutations)

// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// Again, imports GraphQL functionaity

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// This seems to be similar to the Rails Index action

// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// This seems to be similar to the Rails Show action

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
