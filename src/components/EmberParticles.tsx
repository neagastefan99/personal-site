"use client";

export default function EmberParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-10vh) translateX(var(--drift)) scale(1); opacity: 0; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .ember {
          position: absolute;
          bottom: -10px;
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          background: radial-gradient(circle, #FF6B2B, #FF4500 40%, transparent 70%);
          animation: float-up var(--duration) var(--delay) linear infinite,
                     flicker calc(var(--duration) * 0.3) var(--delay) ease-in-out infinite;
          filter: blur(0.5px);
        }
      `}</style>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="ember"
          style={{
            left: `${Math.random() * 100}%`,
            "--size": `${Math.random() * 3 + 1.5}px`,
            "--duration": `${Math.random() * 8 + 8}s`,
            "--delay": `${Math.random() * -20}s`,
            "--drift": `${(Math.random() - 0.5) * 100}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
