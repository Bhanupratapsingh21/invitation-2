// Fixed, deterministic petal positions so server and client markup match.
const PETALS = [
  { left: 6, delay: 0, duration: 14, drift: 40, scale: 1 },
  { left: 18, delay: 5, duration: 17, drift: -30, scale: 0.7 },
  { left: 31, delay: 2, duration: 15, drift: 60, scale: 0.9 },
  { left: 45, delay: 8, duration: 18, drift: -50, scale: 0.6 },
  { left: 58, delay: 3.5, duration: 16, drift: 30, scale: 1.1 },
  { left: 70, delay: 10, duration: 19, drift: -40, scale: 0.8 },
  { left: 82, delay: 1, duration: 15, drift: 50, scale: 0.7 },
  { left: 93, delay: 6.5, duration: 17, drift: -20, scale: 0.9 },
];

export function Petals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              scale: p.scale,
              background: i % 3 === 0 ? "var(--rani)" : "var(--rose)",
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
