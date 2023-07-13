import { apiBaseUrl, apiKey } from '../../config'
import { Genre } from '../interfaces/Genre'

export const getGenres = async (): Promise<Genre[] | undefined> => {
  try {
  const response = await fetch(`${apiBaseUrl}/genres?key=${apiKey}`)
  const data = await response.json()
  return data.results
  } catch (error) {
    console.error
  }
}

export const getGenre = async (id: number): Promise<Genre | undefined> => {
  try {
    const response = await fetch(`${apiBaseUrl}/genres/${id}?key=${apiKey}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error
  }
}
