
export class Genre {
  id: number
  name: string
  gamesCount: number

  constructor(
    id: number,
    name: string,
    gamesCount: number
  ) {
    this.id = id
    this.name = name
    this.gamesCount = gamesCount
  }
}
