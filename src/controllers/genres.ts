import { Request, Response } from 'express'

import * as genreProvider from '../providers/genres'
import { Genre } from '../dtos/genre'

export const getGenres = async (req: Request, res: Response) => {
  const rawGenres = await genreProvider.getGenres()

  if (!rawGenres) {
    return res.status(500).json({ message: 'Internal server error' })
  }

  const genres = rawGenres.map((genre) => new Genre(
    genre.id,
    genre.name,
    genre.games_count
  ))

  res.json(genres)
}

export const getGenre = async (req: Request, res: Response) => {
  const { id } = req.params

  const genre = await genreProvider.getGenre(Number(id))

  if (!genre) {
    return res.status(404).json({ message: 'Genre not found' })
  }

  return res.json(new Genre(genre.id, genre.name, genre.games_count))
}
