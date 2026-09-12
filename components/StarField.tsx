/**
 * Semis d'étoiles de la couverture, généré en SVG.
 *
 * Les positions sont tirées d'un générateur pseudo-aléatoire à graine fixe :
 * le semis est irrégulier mais identique à chaque rendu, donc le HTML du
 * serveur et celui du client concordent. Aucune image bitmap, aucun script.
 */

type StarFieldProps = {
  /** Nombre de points. Densité faible par défaut, conformément à la DA. */
  count?: number;
  /** Nombre d'étoiles à quatre branches semées parmi les points. */
  sparkles?: number;
  seed?: number;
  className?: string;
};

/** mulberry32 : petit PRNG déterministe. */
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

export default function StarField({
  count = 110,
  sparkles = 7,
  seed = 20260912,
  className = "",
}: StarFieldProps) {
  const random = createRandom(seed);

  const dots = Array.from({ length: count }, () => ({
    cx: random() * 1000,
    cy: random() * 1000,
    r: 0.5 + random() * 0.9,
    opacity: 0.18 + random() * 0.52,
    warm: random() > 0.78,
  }));

  const points = Array.from({ length: sparkles }, () => ({
    x: random() * 1000,
    y: random() * 1000,
    scale: 4 + random() * 5,
    opacity: 0.3 + random() * 0.4,
  }));

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >

      <defs>

        {/* L'étoile à quatre branches de la couverture. */}

        <path
          id="starfield-sparkle"
          d="M0,-1 Q0.14,-0.14 1,0 Q0.14,0.14 0,1 Q-0.14,0.14 -1,0 Q-0.14,-0.14 0,-1 Z"
        />

      </defs>

      {dots.map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx.toFixed(1)}
          cy={dot.cy.toFixed(1)}
          r={dot.r.toFixed(2)}
          fill={dot.warm ? "var(--color-gold)" : "var(--color-text)"}
          opacity={dot.opacity.toFixed(2)}
        />
      ))}

      {points.map((point, index) => (
        <use
          key={index}
          href="#starfield-sparkle"
          transform={`translate(${point.x.toFixed(1)} ${point.y.toFixed(1)}) scale(${point.scale.toFixed(1)})`}
          fill="var(--color-text)"
          opacity={point.opacity.toFixed(2)}
        />
      ))}

    </svg>
  );
}
