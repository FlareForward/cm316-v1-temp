import type { GameState } from './GameState';
import type { Move } from './Move';
import type { Piece } from './Piece';
import { Color } from './Color';

/**
 * Applies a move to the game state, returning a new game state.
 */
export function applyMove(state: GameState, move: Move): GameState {
  const { from, to, piece } = move;
  const newBoard: (Piece | null)[][] = state.board.map((row) => [...row]);
  newBoard[from.row][from.col] = null;
  newBoard[to.row][to.col] = piece;
  return {
    ...state,
    board: newBoard,
    turn: state.turn === Color.White ? Color.Black : Color.White,
    history: [...state.history, move],
  };
}
