import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div
      className="grid grid-cols-5 gap-2 w-full max-w-md mx-auto aspect-square cyber-border neon bg-[#1a1035cc] p-3 shadow-[0_0_64px_8px_var(--color-cyberpink)] relative animate-fade-in"
      style={{ boxShadow: '0 0 32px 4px var(--color-cyberblue), 0 0 64px 8px var(--color-cyberpink)' }}
    >
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
