
export class Game {
  id: number
  name: string
  released: string
  rating: number

  constructor(
    id: number,
    name: string,
    released: string,
    rating: number
  ) {
    this.id = id
    this.name = name
    this.released = released
    this.rating = rating
  }
}
