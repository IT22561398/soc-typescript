
interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden">
      {/* Animated cyberpunk background */}
      <div className="cyber-bg" />
      <div className="absolute inset-0 cyber-scanlines pointer-events-none" />
      <div className="relative z-10 text-center max-w-md mx-auto flex flex-col items-center">
        <h1 className="text-6xl font-extrabold neon neon-flicker mb-2 tracking-widest drop-shadow-lg" style={{ letterSpacing: '0.15em', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace', color: 'var(--color-cyberblue)' }}>
          SOC OPS
        </h1>
        <p className="text-2xl neon mb-8 animate-pulse" style={{ color: 'var(--color-marked)', fontFamily: 'VT323, monospace' }}>
          Social Bingo
        </p>
        <div className="bg-[#1a1035cc] cyber-border p-6 mb-8 animate-fade-in shadow-2xl">
          <h2 className="font-semibold neon text-lg mb-3" style={{ color: 'var(--color-cyberyellow)' }}>How to play</h2>
          <ul className="text-left text-(--color-cyberblue) text-base space-y-2 font-mono">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>
        <button
          onClick={onStart}
          className="w-full neon neon-flicker bg-accent hover:bg-accent-light text-black font-extrabold py-4 px-8 rounded-xl text-2xl shadow-[0_0_32px_8px_var(--color-marked)] transition-all duration-200 cyber-border tracking-widest mt-2 animate-bounce"
          style={{ textShadow: '0 0 8px #00fff7, 0 0 16px #ff00ea', fontFamily: 'Orbitron, Share Tech Mono, VT323, monospace' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
