// Imports

// Imports needed functionality from GraphQL
import { GraphQLSchema } from 'graphql'

// Imports CRUD functionality from queries and mutations to populate the schema (?)
// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
