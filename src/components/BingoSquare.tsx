import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center cyber-border rounded-xl transition-all duration-150 select-none min-h-[60px] text-xs leading-tight neon shadow-lg font-mono';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[var(--color-bingo)] border-[var(--color-bingo)] text-black animate-pulse neon-flicker'
      : 'bg-[var(--color-marked)] border-[var(--color-marked-border)] text-[var(--color-accent)] shadow-[0_0_16px_4px_var(--color-cyberpink)] neon-flicker'
    : 'bg-[#18122B] text-[var(--color-accent)] hover:bg-[var(--color-accent-light)] hover:text-black neon';

  const freeSpaceClasses = square.isFreeSpace ? 'font-extrabold text-base neon neon-flicker' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
      style={{ textShadow: square.isMarked ? '0 0 8px #ff00ea, 0 0 16px #00fff7' : '0 0 4px #00fff7', fontFamily: 'VT323, Orbitron, Share Tech Mono, monospace' }}
    >
      <span className="wrap-break-word hyphens-auto text-base md:text-lg lg:text-xl">
        {square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-(--color-marked-border) text-lg neon neon-flicker">✓</span>
      )}
    </button>
  );
}
