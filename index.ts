import express from 'express'
import { Request, Response } from 'express'

import * as genresController from './src/controllers/genres'
import * as gamesController from './src/controllers/games'

const app = express()

app.get('/', function (req: Request, res: Response) {
  res.status(200).json('Hello World')
})

app.get('/genres', genresController.getGenres)
app.get('/genres/:id', genresController.getGenre)

app.get('/games', gamesController.getGames)
app.get('/games/:id', gamesController.getGame)

const port = 3000
export const server = app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
