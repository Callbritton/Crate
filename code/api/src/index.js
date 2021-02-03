// Imports
// This is like a runner file

// Express == minimal and flexible Node.js web application FRAMEWORK that
// provides a robust set of features for web and mobile applications

// API's == with a myriad of HTTP utility methods and middleward at your disposal
// creating a robust API is quick and easy

// Performance == provides a thin layer of fundamental web application features,
// without obscurring Node.js features

// Frameworks == many other popular frameworks are based on Express
import express from 'express'

// App Imports
// Imports from the setup folder to handle parsing, graphiql,
import setupLoadModules from './setup/load-modules'
import setupGraphQL from './setup/graphql'
import setupUpload from './setup/upload'
import setupStartServer from './setup/start-server'

// Create express server
// This is used in each of setup calls (line 28, line 31, line 34, line 37)
const server = express()

// Setup load modules
// Where is this method in './setup/load-modules'
setupLoadModules(server)

// Setup uploads
// This is a const that is defined in './setup/upload'
setupUpload(server)

// Setup GraphQL
setupGraphQL(server)

// Start server
setupStartServer(server)
