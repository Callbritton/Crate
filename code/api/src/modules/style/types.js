// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Style type
const StyleType = new GraphQLObjectType({
  name: 'style',
  description: 'Style Type',

  fields: () => ({
    id: { type: GraphQLInt },
    description: { type: GraphQLString },
    image_url: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default StyleType
