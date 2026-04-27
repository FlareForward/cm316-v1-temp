import type { GameState } from './GameState';
import type { Move } from './Move';
import type { Square } from './Square';
import type { Piece } from './Piece';

/**
 * Checks if a move is legal in the current game state.
 * @param state The current game state.
 * @param move The move to check.
 * @returns True if the move is legal, false otherwise.
 */
export function isLegalMove(state: GameState, move: Move): boolean {
  // Check if the piece exists at the 'from' square.
  const fromSquare = state.board[move.from.row][move.from.col];
  if (!fromSquare) {
    return false;
  }

  // TODO: Add more comprehensive move validation logic.
  // This is a stub; actual validation requires checking piece type,
  // destination square legality, checks, etc.

  return true;
}
