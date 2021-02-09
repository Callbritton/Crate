import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';


describe('user queries', () => {
  // create express server for test environment
  let server = express();
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

      console.log(response.body)
      // this is the actual expectation
    expect(response.body.data.users.length).toBe(2)
    // need to close the database connection for the test
    // in setup/database.js there is a connection that needs to be closed
    done();
  })
})
