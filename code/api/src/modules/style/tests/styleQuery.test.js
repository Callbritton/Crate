import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';
import connection from '../../../setup/database';

describe('style queries', () => {
  let server = express()
  beforeAll(() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
      })
    )
    console.log('INFO - Server started.')
  })

  it('gets information for a specific style', async (done) => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ style(id: 1) { description image_url } }' })
      .expect(200)
    // console.log(response)
  })
})
