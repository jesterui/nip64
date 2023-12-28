import { parseGame, ParseTree } from '@mliebelt/pgn-parser'

export const parsePgn = (pgn: string): Promise<ParseTree> => {
  return new Promise((resolve, reject) => {
    try {
      resolve(parseGame(pgn))
    } catch (e) {
      reject(e)
    }
  })
}

export const validatePgn = (pgn: string) => {
  try {
    const parsed = parseGame(pgn)
    return !!parsed
  } catch (e) {
    return false
  }
}
