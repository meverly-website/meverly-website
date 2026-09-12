/**
 * Onde stylisée pour la section musicale : des traits fins en or sur le noir,
 * dans le langage graphique de la couverture. Généré en SVG, à graine fixe,
 * donc identique à chaque rendu.
 */

function createRandom(seed: number) {
  let state = seed;

  return function random() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;

    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type SoundWaveProps = {
  bars?: number;
  seed?: number;
  className?: string;
};

export default function SoundWave({
  bars = 88,
  seed = 4021,
  className = "",
}: SoundWaveProps) {
  const random = createRandom(seed);
  const step = 1000 / bars;

  const lines = Array.from({ length: bars }, (_, index) => {
    const position = index / (bars - 1);

    // Enveloppe : l'onde s'éteint aux deux extrémités.
    const envelope = Math.sin(Math.PI * position) ** 0.7;

    const amplitude = (0.12 + random() * 0.88) * envelope;

    return {
      x: index * step + step / 2,
      height: 8 + amplitude * 132,
      opacity: 0.15 + amplitude * 0.5,
    };
  });

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
      className={`h-full w-full ${className}`}
    >

      {lines.map((line, index) => (
        <line
          key={index}
          x1={line.x.toFixed(1)}
          x2={line.x.toFixed(1)}
          y1={(150 - line.height).toFixed(1)}
          y2={(150 + line.height).toFixed(1)}
          stroke="var(--color-gold)"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
          opacity={line.opacity.toFixed(2)}
        />
      ))}

    </svg>
  );
}
