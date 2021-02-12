import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import connection from '../../../setup/database';

const User = require('../model')
import models from '../../../setup/models'
const params = require('../../../config/params.json')
const bcrypt = require('bcrypt')
const config = require('../../../config/server.json')

describe('user queries', () => {
  // create express server for test environment
  let server = express()
  let user
  // this is a beforeBlock
  beforeAll(() => {
    server.use(
      // with this endpoint
      '/',
      graphqlHTTP({
        // load the schema that already exsists
        schema: schema,
        // don't load the graphiql
        graphiql: false,
      })
    )
    console.log('INFO - Server started.')
  })

  it('can successfully query users with names', async (done) => {
    // this is from the Supertest docs
    const response = await request(server)
    // this is a post request
      .post('/')
      // this is the body of the request
      .send({ query: '{users { name } }'})
      // this should be successful
      .expect(200)
    // console.log(response.body)
      // this is the actual expectation
    expect(response.body.data.users.length).toBe(10)
    // need to close the database connection for the test
    // in setup/database.js there is a connection that needs to be closed
    done();
  })

  it('gets information for a specific user', async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ user(id: 2) { id name email password role style_survey } }' })
      .expect(200)

    const user = response.body.data.user
    expect(user).toHaveProperty('id')
    expect(user.id).toBe(2)
    expect(user).toHaveProperty('name')
    expect(user.name).toEqual('The User')
    expect(user).toHaveProperty('email')
    expect(user.email).toEqual('user@crate.com')
    expect(user).toHaveProperty('password')
    expect(user.password).toEqual('$2b$10$i2WCJpKmdEa/.j7yAjjj1..wGHX6ucia5on3FomDzmjvNv.jjduyG')
    expect(user).toHaveProperty('role')
    expect(user.role).toEqual('USER')
    expect(user).toHaveProperty('style_survey')
    expect(user.style_survey).toBe(2)
  })

  it('can generate a user without a style_survey', async () => {
    const response = await request(server)
    .post('/')
    .send({ query: '{ user(id: 2) { id name email password role } }'})
    .expect(200)

    const user = response.body.data.user
    expect(user.id).toBe(2)
  })

  it('cannot generate a user response without attributes', async () => {
    const response = await request(server)
    .post('/')
    .send({ query: '{ user(id: 2) { } }' })
    .expect(400)

    expect(response.body.errors[0].message).toBe('Syntax Error: Expected Name, found }')
  })

  it('can find a specific users style description', async (done) => {
    // const user = models.User.create({
    //   id: 1,
    //   name: 'Mod4 Student',
    //   email: 'student@example.com',
    //   password: bcrypt.hashSync('password', config.saltRounds),
    //   role: params.user.roles.user,
    //   style_survey: 3
    // })
    // console.log(user.id)
    console.log("INFO - Mod4 Student user created.")

    const user_response = await request(server)
      .post('/')
      .send({
        query:
          `query { styleByUser(id: 2 ) { description } }`
      })
      .expect(200)
      console.log(user_response.body)

    const userStyle = user_response.body.data.styleByUser
    expect(userStyle.description).toBe('Edgy')
    expect(userStyle.description).not.toBe('Casual')
  done()
  })

  it('cannot find a specific users style description if user doesnt exsist', async (done) => {
    const user_response = await request(server)
      .post('/')
      .send({
        query:
          `query { styleByUser(id: 100 ) { description } }`
      })
      .expect(200)

    expect(user_response.body.errors[0].message).toBe(`We cannot find that user.`)
  done()
  })

  xit('can find a style description given a styleId', async (done) => {

  })

  xit('cannot find a style description given a styleId that does not exsist', async (done) => {

  })
})
