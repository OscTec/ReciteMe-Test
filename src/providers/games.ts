import { apiBaseUrl, apiKey } from '../../config'
import { Game } from '../interfaces/Game'

export const getGames = async (): Promise<Game[] | undefined> => {
  try {
  const response = await fetch(`${apiBaseUrl}/games?key=${apiKey}`)
  const data = await response.json()
  return data.results
  } catch (error) {
    console.error
  }
}

export const getGame = async (id: number): Promise<Game | undefined> => {
  try {
    const response = await fetch(`${apiBaseUrl}/games/${id}?key=${apiKey}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error
  }
}