import { Request, Response } from 'express';

const genres = [
  { id: 1, name: 'Horror' },
  { id: 2, name: 'Adventure' },
]

export const getGenres = (req: Request, res: Response) => {
  res.json(genres)
}

export const getGenre = (req: Request, res: Response) => {
  const { id } = req.params

  return res.json(genres.find(game => game.id === Number(id)))
}
