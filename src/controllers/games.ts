import { Request, Response } from 'express';

const games = [
  { id: 1, name: 'Diablo 3' },
  { id: 2, name: 'Zelda' },
]

export const getGames = (req: Request, res: Response) => {
  res.json(games)
}

export const getGame = (req: Request, res: Response) => {
  const { id } = req.params

  return res.json(games.find(genre => genre.id === Number(id)))
}
