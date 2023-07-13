import { Request, Response } from 'express'

import * as gameProvider from '../providers/games'
import { Game } from '../dtos/game'

export const getGames = async (req: Request, res: Response) => {
  const rawGenres = await gameProvider.getGames()

  if (!rawGenres) {
    return res.status(500).json({ message: 'Internal server error' })
  }

  let filteredGenres = rawGenres

  if (req.query.rating) {
    const rating = Number(req.query.rating)
    filteredGenres = rawGenres.filter(game => Math.floor(game.rating) === rating)
  }

  const genres = filteredGenres.map((game) => new Game(
    game.id,
    game.name,
    game.released,
    game.rating
  ))

  res.json(genres)
}

export const getGame = async (req: Request, res: Response) => {
  const { id } = req.params

  const game = await gameProvider.getGame(Number(id))

  if (!game) {
    return res.status(404).json({ message: 'Game not found' })
  }

  return res.json(new Game(game.id, game.name, game.released, game.rating))
}
