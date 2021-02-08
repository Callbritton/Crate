// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

// Query

// Similar to the mutations.js file, this creates the variable (maybe called a method?)
// that is used for all the Read functionality (Index and Show)
// Will probably need to add ...survey to the fields hash (for show, anyway)
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
  })
})

export default query
