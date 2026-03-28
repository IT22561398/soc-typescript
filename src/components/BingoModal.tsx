interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
      <div className="cyber-bg absolute inset-0 opacity-60 pointer-events-none" />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none" />
      <div className="relative bg-[#1a1035ee] cyber-border neon rounded-2xl p-10 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out] z-10">
        <div className="text-7xl mb-4 animate-pulse neon-flicker" style={{ textShadow: '0 0 24px #fffb00, 0 0 48px #ff00ea', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace' }}>
          🎉
        </div>
        <h2 className="text-5xl font-extrabold neon neon-flicker mb-2 tracking-widest" style={{ color: 'var(--color-bingo)', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace' }}>
          BINGO!
        </h2>
        <p className="neon mb-8 text-lg animate-fade-in" style={{ color: 'var(--color-accent)', fontFamily: 'VT323, monospace' }}>
          You completed a line!
        </p>
        <button
          onClick={onDismiss}
          className="w-full neon neon-flicker bg-accent hover:bg-accent-light text-black font-extrabold py-4 px-8 rounded-xl text-2xl shadow-[0_0_32px_8px_var(--color-marked)] transition-all duration-200 cyber-border tracking-widest animate-bounce"
          style={{ textShadow: '0 0 8px #00fff7, 0 0 16px #ff00ea', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace' }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
