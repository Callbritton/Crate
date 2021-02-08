// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// This appears to be where we define the object type and it's attributes
// to be imported and utilized by mutations and query

// Crate type
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType
