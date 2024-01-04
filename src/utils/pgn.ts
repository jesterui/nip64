import { split, SplitGame, parseGames, ParseTree } from '@mliebelt/pgn-parser'

export const parsePgn = (pgn: string): Promise<ParseTree[]> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(parseGames(pgn))
    } catch (e) {
      reject(e)
    }
  })
}

export const validatePgn = (pgn: string) => {
  try {
    const parsed = parseGames(pgn)
    return parsed?.length > 0
  } catch (e) {
    return false
  }
}

export const splitPgn = (pgn: string): SplitGame[] => split(pgn)
