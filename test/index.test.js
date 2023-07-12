import request from 'supertest'

import { server } from '../index'

afterAll(() => {
  server.close();
})

describe('GET /', ()=> {
  it('responds with 200 and Hello World', async () => {
    const response = await request(server)
      .get('/')
      .set('Accept', 'application/json')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual('Hello World')
  })
})
