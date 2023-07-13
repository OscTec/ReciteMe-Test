interface Game {
  id: number
  name: string
  slug: string
  added: number
}

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
  games: Game[]
}
