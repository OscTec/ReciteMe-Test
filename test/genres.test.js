import request from 'supertest'

import { server } from '../index'

const dummyGenres = [
  { id: 1, name: 'Action', slug: 'action', games_count: 100 },
  { id: 2, name: 'Adventure', slug: 'adventure', games_count: 200 },
  { id: 3, name: 'Fighting', slug: 'fighting', games_count: 300 },
]

jest.mock('../src/providers/genres', () => ({
  getGenres: jest.fn(() => Promise.resolve(dummyGenres)),
}))

afterAll(() => {
  server.close()
})

describe('GET /genres', () => {
  it('responds with 200 and an array of genres', async () => {
    const response = await request(server)
      .get('/genres')
      .set('Accept', 'application/json')

    expect(response.status).toEqual(200)
    expect(response.body).toEqual([
      { id: 1, name: 'Action', gamesCount: 100 },
      { id: 2, name: 'Adventure', gamesCount: 200 },
      { id: 3, name: 'Fighting', gamesCount: 300 },
    ])
  })
})
