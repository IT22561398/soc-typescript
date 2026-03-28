import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full relative overflow-hidden">
      {/* Animated cyberpunk background */}
      <div className="cyber-bg" />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none" />
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-[#1a1035cc] cyber-border neon z-10 shadow-xl">
        <button
          onClick={onReset}
          className="text-accent text-base px-4 py-2 rounded-lg hover:bg-marked neon transition-colors font-mono tracking-widest"
        >
          ← Back
        </button>
        <h1 className="font-extrabold neon neon-flicker tracking-widest text-2xl" style={{ color: 'var(--color-cyberblue)', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace' }}>
          SOC OPS
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center neon text-lg py-2 px-4 z-10 animate-fade-in" style={{ color: 'var(--color-accent)', fontFamily: 'VT323, monospace' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-(--color-bingo) text-black text-center py-3 font-extrabold text-2xl neon animate-pulse z-10 shadow-lg" style={{ textShadow: '0 0 8px #fffb00, 0 0 16px #ff00ea', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace' }}>
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3 z-10">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
