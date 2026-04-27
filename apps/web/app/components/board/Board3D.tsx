import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Mesh, MeshBasicMaterial, BoxGeometry } from 'three';
import { Chess } from 'chess.js';

interface BoardSquareProps {
  size: number;
  x: number;
  y: number;
  isDark: boolean;
}

function BoardSquare({ size, x, y, isDark }: BoardSquareProps) {
  const z = isDark ? -0.1 : 0.1;
  return (
    <mesh position={[x * size, y * size, z]}>
      <boxGeometry args={[size, size, 0.05]} />
      <meshBasicMaterial color={isDark ? 0x888888 : 0xdddddd} />
    </mesh>
  );
}

interface Board3DProps {}

function Board3D({}: Board3DProps) {
  const game = new Chess();
  const boardSize = 1;

  return (
    <Canvas camera={{ position: [0, 5, 5] }}>
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <BoardSquare
            key={`${row}-${col}`}
            size={boardSize}
            x={col}
            y={row}
            isDark={(row + col) % 2 === 0}
          />
        ))
      )}
    </Canvas>
  );
}

export default Board3D;
