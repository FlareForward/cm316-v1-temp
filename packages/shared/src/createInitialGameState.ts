import type { GameState } from './GameState';
import { Color } from './Color';
import type { Piece } from './Piece';

export function createInitialGameState(): GameState {
  const board: (Piece | null)[][] = [];
  for (let row = 0; row < 8; row++) {
    board[row] = [];
    for (let col = 0; col < 8; col++) {
      board[row][col] = null;
    }
  }

  // Place pawns
  for (let col = 0; col < 8; col++) {
    board[1][col] = { type: 'pawn', color: Color.Black };
    board[6][col] = { type: 'pawn', color: Color.White };
  }

  // Place other pieces
  board[0][0] = { type: 'rook', color: Color.Black };
  board[0][7] = { type: 'rook', color: Color.Black };
  board[0][1] = { type: 'knight', color: Color.Black };
  board[0][6] = { type: 'knight', color: Color.Black };
  board[0][2] = { type: 'bishop', color: Color.Black };
  board[0][5] = { type: 'bishop', color: Color.Black };
  board[0][3] = { type: 'queen', color: Color.Black };
  board[0][4] = { type: 'king', color: Color.Black };

  board[7][0] = { type: 'rook', color: Color.White };
  board[7][7] = { type: 'rook', color: Color.White };
  board[7][1] = { type: 'knight', color: Color.White };
  board[7][6] = { type: 'knight', color: Color.White };
  board[7][2] = { type: 'bishop', color: Color.White };
  board[7][5] = { type: 'bishop', color: Color.White };
  board[7][3] = { type: 'queen', color: Color.White };
  board[7][4] = { type: 'king', color: Color.White };

  return {
    board,
    turn: Color.White,
    history: [],
  };
}
