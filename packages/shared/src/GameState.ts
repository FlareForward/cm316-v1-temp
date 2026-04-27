import { Square } from './Square';
import { Piece } from './Piece';
import { Move } from './Move';
import { Color } from './Color';

export interface GameState {
  board: (Piece | null)[][];
  turn: Color;
  history: Move[];
}
