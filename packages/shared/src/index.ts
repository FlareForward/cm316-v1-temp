import type { Color } from './Color';
import type { Square } from './Square';
import type { Piece } from './Piece';
import type { Move } from './Move';
import type { GameState } from './GameState';

import { createInitialGameState } from './createInitialGameState';
import { isLegalMove } from './isLegalMove';
import { applyMove } from './applyMove';

export { Color, Square, Piece, Move, GameState };
export { createInitialGameState, isLegalMove, applyMove };
