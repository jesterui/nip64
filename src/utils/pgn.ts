import { Chess } from 'chess.js'

const VALIDATION_CHESS = new Chess()

export const validatePgn = (pgn: string) => {
  if (!pgn || pgn.trim().length === 0) return false

  try {
    VALIDATION_CHESS.loadPgn(pgn, { strict: true })
    return true
  } catch (e) {
    return false
  }
}
