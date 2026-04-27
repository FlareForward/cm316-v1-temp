import type { Square } from './Square';
import type { Piece } from './Piece';

export interface Move {
  from: Square;
  to: Square;
  piece: Piece;
}
