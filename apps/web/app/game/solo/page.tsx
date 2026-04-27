'use client';

import React from 'react';
import Board3D from '../../components/board/Board3D';
import { Chess } from 'chess.js';

export default function SoloGamePage() {
  const game = new Chess();

  // Stub Stockfish move (always returns the first legal move)
  const getStockfishMove = () => {
    const legalMoves = game.moves();
    return legalMoves[0];
  };

  const handleMove = (move: string) => {
    game.move(move);
    // Get Stockfish response
    const stockfishMove = getStockfishMove();
    if (stockfishMove) {
      game.move(stockfishMove);
    }
  };

  return (
    <div>
      <h1>Chess Solo</h1>
      <Board3D />
    </div>
  );
}
