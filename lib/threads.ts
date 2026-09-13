/**
 * Trajets du fil rouge, section par section.
 *
 * Chaque section de page porte son propre morceau de fil, étiré à sa hauteur.
 * Les morceaux se raccordent aux frontières : le point de sortie d'une section
 * a le même x que le point d'entrée de la suivante, et le fil y passe à la
 * verticale — la seule direction qui ne change pas quand une section s'étire
 * plus que sa voisine —, pour que la jonction reste invisible.
 *
 * Coordonnées d'un point [x, y] :
 *   y — en % de la hauteur de la section (ou de la partie de section, voir
 *       le nœud) ;
 *   x — en % de la largeur de la « boîte » du fil : l'écran en mobile et en
 *       tablette ; sur ordinateur, une colonne centrée de 1280 px au plus
 *       (1360 px sur la page du roman, dont les images occupent toute la
 *       colonne et ne laissent passer le fil qu'au-delà).
 *
 * Ancrer y à la section plutôt qu'à la page, et x à la colonne sur
 * ordinateur, rend le fil indépendant de la hauteur d'écran (le Hero en
 * dépend) et de la largeur au-delà de 1280 px.
 *
 * Trois variantes, choisies en CSS :
 *   mobile  < 768 px · tablet 768–1279 px · desktop ≥ 1280 px
 *
 * Les points sont échantillonnés régulièrement le long d'une courbe conçue
 * d'un seul tenant, en pixels, pour toute la page : c'est ce qui rend le fil
 * fluide d'une section à l'autre. Resserrés dans les virages, espacés dans
 * les lignes droites, jamais d'un écart plus du double du précédent — sans
 * quoi Catmull-Rom ferait boucler la courbe.
 *
 * `bands` règle la visibilité le long du morceau (arrêts d'un dégradé
 * vertical, en % de sa hauteur) : naissance, arrêts, extinction.
 */

export type Variant = "mobile" | "tablet" | "desktop";

export type ThreadPoint = readonly [x: number, y: number];

export type Segment = {
  points: readonly ThreadPoint[];
  bands?: string;
};

/**
 * Le nœud, une seule fois sur tout le site.
 *
 * Contrairement au reste du fil, la boucle n'est pas étirée : elle est
 * dessinée en pixels, pour rester ronde à toutes les largeurs. Le morceau de
 * la section s'arrête au point d'attache (x, y, en % de la section), la
 * boucle y part vers le bas, tourne vers `side`, se croise, et rend le fil à
 * la verticale juste sous le point d'attache ; `after` reprend de là jusqu'au
 * bas de la section.
 */
export type Knot = {
  x: number;
  y: number;
  side: "left" | "right";
  after: Segment;
};

export type ThreadPiece = Segment & { knot?: Knot };

export type SectionThread = Partial<Record<Variant, ThreadPiece>>;

export type Bezier = readonly [
  x0: number, y0: number,
  c1x: number, c1y: number,
  c2x: number, c2y: number,
  x1: number, y1: number,
];

/** Catmull-Rom → Bézier cubiques : tangentes continues entre les points. */
export function threadCurves(points: readonly ThreadPoint[], tension = 6): Bezier[] {
  const p = [points[0], ...points, points[points.length - 1]];
  const curves: Bezier[] = [];

  for (let i = 1; i < p.length - 2; i++) {
    const [x0, y0] = p[i - 1];
    const [x1, y1] = p[i];
    const [x2, y2] = p[i + 1];
    const [x3, y3] = p[i + 2];

    curves.push([
      x1, y1,
      x1 + (x2 - x0) / tension, y1 + (y2 - y0) / tension,
      x2 - (x3 - x1) / tension, y2 - (y3 - y1) / tension,
      x2, y2,
    ]);
  }

  return curves;
}

const round = (n: number) => Math.round(n * 100) / 100;

/** Chemin SVG d'une suite de Bézier. */
function bezierPath(curves: readonly Bezier[]) {
  return curves.reduce(
    (d, [, , c1x, c1y, c2x, c2y, x1, y1]) =>
      `${d} C ${round(c1x)},${round(c1y)} ${round(c2x)},${round(c2y)} ${round(x1)},${round(y1)}`,
    `M ${round(curves[0][0])},${round(curves[0][1])}`
  );
}

/** Chemin SVG, dans le viewBox 100 × 100 du segment. */
export function threadPath(points: readonly ThreadPoint[]) {
  return bezierPath(threadCurves(points));
}

/** Demi-largeur de la boucle du nœud, en pixels. */
export const KNOT_SIZE: Record<Variant, number> = {
  mobile: 32,
  tablet: 42,
  desktop: 56,
};

/** Marge autour de la boucle, pour que le halo ne soit pas rogné. */
const KNOT_PAD = 14;

/**
 * La boucle est une trochoïde : le fil descend en décrivant un tour complet,
 * comme un point d'une roue qui roule. Pour t ∈ [π, 3π] :
 *   x = b (1 + cos t)
 *   y = a (t − π) − β sin t
 * Le fil part et revient à la verticale (x′ = 0 en π et 3π). β > a donne la
 * boucle ; β plus grand que b l'arrondit (sans lui, elle finit en pointe).
 */
export function knotCurves(b: number, side: Knot["side"]) {
  const a = 0.4 * b;
  const beta = 1.4 * b;
  const s = side === "right" ? 1 : -1;

  const point = (t: number) => [
    s * b * (1 + Math.cos(t)),
    a * (t - Math.PI) - beta * Math.sin(t),
  ];
  const tangent = (t: number) => [
    -s * b * Math.sin(t),
    a - beta * Math.cos(t),
  ];

  const steps = 24;
  const dt = (2 * Math.PI) / steps;
  const curves: Bezier[] = [];

  for (let k = 0; k < steps; k++) {
    const t0 = Math.PI + k * dt;
    const t1 = t0 + dt;
    const [x0, y0] = point(t0);
    const [x1, y1] = point(t1);
    const [dx0, dy0] = tangent(t0);
    const [dx1, dy1] = tangent(t1);

    curves.push([
      x0, y0,
      x0 + (dx0 * dt) / 3, y0 + (dy0 * dt) / 3,
      x1 - (dx1 * dt) / 3, y1 - (dy1 * dt) / 3,
      x1, y1,
    ]);
  }

  return { curves, height: 2 * Math.PI * a };
}

/**
 * La boucle prête à poser : chemin, taille de la boîte, et position du point
 * d'attache dans cette boîte (en pixels).
 */
export function knotGeometry(b: number, side: Knot["side"]) {
  const { curves, height } = knotCurves(b, side);

  const xs = curves.flatMap(([x0, , c1x, , c2x, , x1]) => [x0, c1x, c2x, x1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);

  const anchorX = KNOT_PAD - minX;
  const shifted = curves.map(
    ([x0, y0, c1x, c1y, c2x, c2y, x1, y1]) =>
      [
        x0 + anchorX, y0 + KNOT_PAD,
        c1x + anchorX, c1y + KNOT_PAD,
        c2x + anchorX, c2y + KNOT_PAD,
        x1 + anchorX, y1 + KNOT_PAD,
      ] as const
  );

  return {
    d: bezierPath(shifted),
    width: Math.ceil(maxX - minX + 2 * KNOT_PAD),
    height: Math.ceil(height + 2 * KNOT_PAD),
    loopHeight: height,
    anchorX,
    pad: KNOT_PAD,
  };
}

/* Les trajets sont définis plus bas, page par page. */

export const HOME_THREAD = {
  hero: {
    mobile: {
      points: [
        [-6, 30], [-5.43, 31.88], [-4.61, 34.51], [-3.41, 38.32],
        [-1.8, 43.85], [0.25, 51.9], [1.74, 63.73], [1.8, 80.99],
        [1.8, 91.28], [1.8, 96.91], [1.8, 100],
      ],
      bands: "transparent 0%, transparent 37%, #000 61%, #000 100%",
    },
    tablet: {
      points: [
        [-6, 30], [-5.36, 32.15], [-4.36, 35.14], [-2.97, 39.49],
        [-1.25, 46.1], [0.58, 56.24], [1.01, 64.05], [1, 73.69],
        [1, 87.56], [1, 95.41], [1, 100],
      ],
      bands: "transparent 0%, transparent 37%, #000 61%, #000 100%",
    },
    desktop: {
      points: [
        [-6, 16], [-5.25, 17.88], [-4.16, 20.55], [-2.57, 24.42],
        [-0.29, 30.06], [2.91, 38.46], [7.31, 50.93], [13.26, 68.9],
        [15.73, 79.8], [16.89, 89.68], [17, 96.61], [17, 100],
      ],
      bands: "transparent 0%, transparent 28%, #000 55%, #000 100%",
    },
  },
  breath: {
    mobile: {
      points: [
        [1.8, 0], [1.8, 4.22], [1.8, 10.14], [1.8, 18.84], [1.8, 31.32],
        [1.8, 49.58], [1.8, 76.02], [1.8, 90.62], [1.8, 100],
      ],
    },
    tablet: {
      points: [
        [1, 0], [1, 3.52], [1, 8.43], [1, 15.7], [1, 26.22], [1, 41.4],
        [1, 63.47], [1, 83.2], [1, 93.91], [1, 100],
      ],
    },
    desktop: {
      points: [
        [17, 0], [17, 3.46], [16.8, 8.4], [16.38, 15.5], [15.63, 25.59],
        [15, 40.54], [14.86, 56.16], [15.43, 65.4], [16.53, 72.86],
        [18.34, 80.45], [21.03, 88.08], [23.64, 92.93], [26.87, 96.14],
        [30, 100],
      ],
    },
  },
  roman: {
    mobile: {
      points: [
        [1.8, 0], [1.8, 0.83], [1.8, 2.01], [1.8, 3.74], [1.8, 6.2],
        [1.8, 9.77], [1.8, 14.99], [1.8, 22.52], [1.8, 31.85],
        [1.8, 41.17], [1.8, 50.49], [1.8, 59.81], [1.8, 69.14],
        [1.8, 78.46], [1.8, 87.78], [1.8, 94.03], [1.8, 97.49],
        [1.8, 100],
      ],
    },
    tablet: {
      points: [
        [1, 0], [1, 1.4], [1, 3.36], [1, 6.2], [1, 10.37], [1, 16.4],
        [1, 25.1], [1, 37.76], [1, 54.27], [1, 70.78], [1, 85.19],
        [1, 93.14], [1, 97.54], [1, 100],
      ],
    },
    desktop: {
      points: [
        [30, 0], [31.06, 0.69], [32.61, 1.62], [34.86, 2.92],
        [38.15, 4.72], [42.92, 7.36], [49.89, 10.73], [55.72, 14],
        [58.57, 17.1], [61.34, 20.86], [63.45, 24.62], [64.21, 27.08],
        [64.47, 29.11], [64.5, 31.47], [64.5, 34.89], [64.5, 39.87],
        [64.5, 47.08], [64.5, 57.51], [64.91, 71.56], [64.84, 80.54],
        [63.97, 85.54], [62.22, 91.41], [60.3, 95.06], [58.16, 97.56],
        [56, 100],
      ],
    },
  },
  personnages: {
    mobile: {
      points: [
        [1.8, 0], [1.8, 0.75], [1.8, 1.8], [1.8, 3.35], [1.8, 5.6],
        [1.8, 8.84], [1.8, 13.52], [1.8, 20.35], [1.8, 28.7],
        [1.8, 37.06], [1.8, 45.42], [1.8, 53.78], [1.8, 62.14],
        [1.8, 70.5], [1.8, 78.41], [1.8, 82.74], [1.8, 85.14],
        [2.17, 86.44], [3.22, 87.26], [5.07, 88.1], [7.19, 88.69],
        [9.92, 89.19], [14.11, 89.82], [20.39, 90.61], [29.15, 91.22],
        [41.95, 91.66], [60.47, 92.44], [77.31, 93.11], [86.3, 93.76],
        [91.25, 94.04], [93.89, 94.36], [95.72, 94.84], [97, 95.45],
        [97.84, 96.14], [98.2, 96.95], [98.2, 97.88], [98.2, 99.23],
        [98.2, 100],
      ],
      bands: "#000 0%, #000 80.5%, transparent 85%, transparent 97.9%, #000 100%",
    },
    tablet: {
      points: [
        [1, 0], [1, 1.11], [1, 2.67], [1, 4.98], [1, 8.29], [1, 13.12],
        [1, 20.09], [1, 30.21], [1, 43.34], [1, 56.46], [1, 69.59],
        [1, 77.7], [1, 82.18], [1, 84.66], [1.1, 86.01], [1.82, 86.82],
        [2.81, 87.38], [4.17, 88.1], [6.23, 88.95], [8.29, 89.33],
        [11.33, 89.54], [15.72, 90.05], [22.11, 90.78], [31.42, 91.35],
        [44.91, 91.77], [59.54, 92.41], [74.18, 92.96], [84.76, 93.65],
        [90.65, 93.64], [94.56, 94.13], [96.75, 94.95], [98.08, 95.6],
        [98.81, 96.42], [99, 97.44], [99, 98.66], [99, 100],
      ],
      bands: "#000 0%, #000 80.5%, transparent 85%, transparent 97.9%, #000 100%",
    },
    desktop: {
      points: [
        [56, 0], [55.06, 0.58], [53.66, 1.34], [51.61, 2.4],
        [48.63, 3.93], [44.31, 6.11], [39.85, 9.03], [36.5, 12.22],
        [34.83, 14.85], [33.61, 18.15], [33.41, 20.64], [33.82, 22.99],
        [34.83, 25.31], [36.34, 27.33], [37.89, 28.65], [39.63, 29.58],
        [42.24, 30.77], [44.83, 32.31], [47.45, 33.99], [48.6, 35.19],
        [49.31, 36.44], [49.85, 38.18], [50, 40.2], [50, 43.11],
        [50, 47.37], [50, 53.53], [50, 62.44], [50, 72.25], [50, 77.64],
        [50, 80.62], [50.16, 82.24], [50.59, 83.32], [51.45, 84.56],
        [52.26, 85.23], [53.43, 85.88], [55.23, 86.65], [57.86, 87.75],
        [61.7, 88.88], [65.93, 90.44], [68.14, 91.53], [69.27, 92.21],
        [69.82, 93.03], [70, 93.97], [70, 95.01], [70, 96.53],
        [70, 98.73], [70, 100],
      ],
      bands: "#000 0%, #000 80%, transparent 83.5%, transparent 94.6%, #000 97.6%, #000 100%",
    },
  },
  citation: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 46.94], [98.2, 100],
      ],
      knot: {
        x: 98.2,
        y: 4,
        side: "left",
        after: {
          points: [
            [98.2, 0], [98.2, 2.41], [98.2, 5.8], [98.2, 10.8],
            [98.2, 18.02], [98.2, 28.48], [98.2, 43.63], [98.2, 65.54],
            [98.2, 83.21], [98.2, 92.91], [98.2, 100],
          ],
        },
      },
    },
    tablet: {
      points: [
        [99, 0], [99, 38.45], [99, 100],
      ],
      knot: {
        x: 99,
        y: 4,
        side: "left",
        after: {
          points: [
            [99, 0], [99, 1.91], [99, 4.57], [99, 8.53], [99, 14.18],
            [99, 22.44], [99, 34.37], [99, 51.66], [99, 74.12], [99, 87.56],
            [99, 94.89], [99, 100],
          ],
        },
      },
    },
    desktop: {
      points: [
        [70, 0], [70, 37.45], [70, 100],
      ],
      knot: {
        x: 70,
        y: 4,
        side: "right",
        after: {
          points: [
            [70, 0], [70, 1.87], [69.96, 4.55], [70.21, 8.38],
            [70.81, 11.13], [72.03, 14.39], [73.71, 17.23], [75.23, 18.85],
            [77.43, 20.54], [80.64, 23.05], [85.25, 26.66], [88.8, 30.53],
            [90.8, 33.83], [92.07, 37.2], [92.99, 41.39], [93.2, 44.81],
            [93.22, 49.21], [93.32, 55.58], [93.48, 64.8], [93.41, 78.2],
            [93.14, 89.75], [93.02, 96.07], [93, 100],
          ],
        },
      },
    },
  },
  musique: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 1.46], [98.2, 3.52], [98.2, 6.55],
        [98.2, 10.95], [98.2, 17.26], [98.2, 26.39], [98.2, 39.66],
        [98.2, 56.01], [98.2, 72.36], [98.2, 86.09], [98.2, 93.63],
        [98.2, 97.83], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 1.43], [99, 3.44], [99, 6.34], [99, 10.61],
        [99, 16.78], [99, 25.76], [99, 38.78], [99, 55.67], [99, 72.56],
        [99, 86.25], [99, 93.76], [99, 97.86], [99, 100],
      ],
    },
    desktop: {
      points: [
        [93, 0], [92.99, 1.37], [93, 3.35], [93.02, 6.18], [93.1, 10.29],
        [93.25, 16.26], [93.45, 24.88], [93.54, 37.4], [93.5, 54.19],
        [92.85, 70.96], [92.13, 85.36], [91.26, 93.27], [90.56, 97.55],
        [90, 100],
      ],
    },
  },
  auteur: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 2.5], [98.2, 6.01], [98.2, 11.15],
        [98.2, 18.53], [98.2, 29.31], [98.2, 44.93], [98.27, 60.68],
        [96.88, 69.22], [94.05, 75.67], [89.79, 81.46], [84.86, 85.52],
        [79.62, 88.2], [71.68, 91.41], [59.78, 95.06], [50, 97.8],
      ],
      bands: "#000 0%, #000 76%, transparent 96%, transparent 100%",
    },
    tablet: {
      points: [
        [99, 0], [99, 2.97], [99, 7.11], [99, 13.2], [99, 21.99],
        [99, 34.75], [99, 53.26], [98.56, 63.42], [97.69, 68.78],
        [96.51, 72.87], [95.16, 75.76], [93.22, 78.54], [90.2, 81.73],
        [85.76, 85.87], [80.22, 88.48], [72.16, 91.22], [61.09, 94.68],
        [54.94, 96.44], [51.55, 97.36], [50, 97.8],
      ],
      bands: "#000 0%, #000 76%, transparent 96%, transparent 100%",
    },
    desktop: {
      points: [
        [90, 0], [89.7, 2.71], [89.21, 6.55], [88.46, 12.07],
        [87.28, 19.99], [85.55, 31.4], [82.61, 47.57], [79.48, 57.96],
        [74.84, 68.46], [68.87, 77.32], [61.91, 84.04], [52.91, 90.43],
        [47.87, 93.33], [44, 95.5],
      ],
      bands: "#000 0%, #000 66%, transparent 92%, transparent 100%",
    },
  },
} satisfies Record<string, SectionThread>;

export const BOOK_THREAD = {
  hero: {
    mobile: {
      points: [
        [103, 12], [102.63, 13.18], [102.08, 14.83], [101.3, 17.21],
        [100.27, 20.74], [98.97, 25.83], [98.2, 33.21], [98.2, 43.95],
        [98.2, 57.34], [98.2, 70.73], [98.2, 84.11], [98.2, 92.31],
        [98.2, 96.84], [98.2, 100],
      ],
      bands: "transparent 0%, transparent 11%, #000 29%, #000 100%",
    },
    tablet: {
      points: [
        [103, 12], [102.69, 12.99], [102.2, 14.42], [101.49, 16.47],
        [100.57, 19.46], [99.65, 23.86], [99.02, 30.32], [99, 39.71],
        [99, 51.78], [99, 63.85], [99, 75.92], [99, 87.69], [99, 94.14],
        [99, 97.7], [99, 100],
      ],
      bands: "transparent 0%, transparent 11%, #000 29%, #000 100%",
    },
    desktop: {
      points: [
        [106, 17], [105.21, 17.74], [104.04, 18.77], [102.33, 20.24],
        [99.88, 22.42], [96.66, 25.92], [92.68, 31.52], [89.78, 38.05],
        [88.6, 43.86], [87.83, 52.11], [87.98, 64.16], [88.86, 77.42],
        [89.87, 88.58], [90.48, 94.73], [90.84, 98.13], [91, 100],
      ],
      bands: "transparent 0%, transparent 16%, #000 31%, #000 100%",
    },
  },
  synopsis: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 0.87], [98.2, 2.08], [98.2, 3.89],
        [98.2, 6.45], [98.2, 10.16], [98.2, 15.58], [98.2, 23.4],
        [98.2, 33.09], [98.2, 42.77], [98.2, 52.46], [98.2, 62.15],
        [98.2, 71.83], [98.2, 81.52], [98.2, 90.62], [98.2, 95.64],
        [98.2, 98.37], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 1.43], [99, 3.43], [99, 6.4], [99, 10.66],
        [99, 16.82], [99, 25.77], [99, 38.74], [99, 55.6], [99, 72.46],
        [99, 86.18], [99, 93.74], [99, 97.84], [99, 100],
      ],
    },
    desktop: {
      points: [
        [91, 0], [91.09, 1.49], [91.21, 3.64], [91.35, 6.72],
        [91.53, 11.23], [91.71, 17.74], [91.83, 27.22], [91.91, 40.91],
        [91.75, 59.16], [90.32, 77.31], [90.4, 89.08], [91.12, 95.56],
        [92.5, 100],
      ],
    },
  },
  themes: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 2.09], [98.2, 5.03], [98.2, 9.37],
        [98.2, 15.64], [98.2, 24.76], [98.2, 37.97], [98.2, 57.1],
        [98.2, 78.26], [98.2, 89.9], [98.2, 96.31], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 2.84], [99, 6.81], [99, 12.7], [99, 21.24],
        [99, 33.59], [99, 51.44], [99, 75.97], [99, 89.38], [99, 100],
      ],
    },
    desktop: {
      points: [
        [92.5, 0], [92.93, 2.38], [93.61, 5.7], [94.64, 10.4],
        [96.34, 16.98], [98.2, 24.15], [98.87, 28.86], [99.3, 35.71],
        [99.3, 41.95], [99.3, 51.08], [99.3, 64.31], [99.3, 82.82],
        [99.3, 92.97], [99.3, 100],
      ],
    },
  },
  personnages: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 0.37], [98.2, 0.9], [98.2, 1.66], [98.2, 2.77],
        [98.2, 4.38], [98.2, 6.72], [98.2, 10.11], [98.2, 14.3],
        [98.2, 18.49], [98.2, 22.68], [98.2, 26.87], [98.2, 31.06],
        [98.2, 35.25], [98.2, 39.44], [98.2, 43.63], [98.2, 47.82],
        [98.2, 52.01], [98.2, 56.2], [98.2, 60.39], [98.2, 64.58],
        [98.2, 68.77], [98.2, 72.96], [98.2, 77.15], [98.2, 81.34],
        [98.2, 85.53], [98.2, 89.72], [98.2, 93.91], [98.2, 97],
        [98.2, 98.69], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 0.48], [99, 1.15], [99, 2.11], [99, 3.51],
        [99, 5.56], [99, 8.53], [99, 12.82], [99, 18.44], [99, 24.06],
        [99, 29.68], [99, 35.31], [99, 40.93], [99, 46.55], [99, 52.17],
        [99, 57.79], [99, 63.42], [99, 69.04], [99, 74.66], [99, 80.28],
        [99, 85.91], [99, 91.53], [99, 95.76], [99, 98.11], [99, 99.4],
        [99, 100],
      ],
    },
    desktop: {
      points: [
        [99.3, 0], [99.3, 0.61], [99.3, 1.49], [99.3, 2.76],
        [99.3, 4.59], [99.3, 7.24], [99.3, 11.1], [99.3, 16.68],
        [99.3, 24.14], [99.3, 31.59], [99.3, 39.04], [99.3, 46.49],
        [99.3, 53.94], [99.3, 61.39], [99.3, 68.84], [99.3, 76.29],
        [99.3, 83.74], [99.3, 91.19], [99.3, 95.73], [99.3, 98.21],
        [99.3, 100],
      ],
    },
  },
  citation: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 2.03], [98.2, 4.88], [98.2, 9.08],
        [98.2, 15.11], [98.2, 23.81], [98.2, 36.49], [98.2, 54.82],
        [97.55, 70.53], [95.29, 78.97], [92.77, 83.34], [89.66, 86.38],
        [85.24, 89.31], [78.02, 92.55], [70.09, 95.09], [62, 97.6],
      ],
      bands: "#000 0%, #000 80%, transparent 99%, transparent 100%",
    },
    tablet: {
      points: [
        [99, 0], [99, 2.28], [99, 5.47], [99, 10.18], [99, 16.99],
        [99, 26.8], [99, 41.04], [99.02, 58.27], [98.71, 67.72],
        [97.83, 72.74], [96.16, 78.11], [94.04, 82.41], [91.27, 85.99],
        [88.89, 87.69], [85.34, 89.34], [80.21, 91.75], [72.62, 94.29],
        [66.69, 96.18], [63.47, 97.15], [62, 97.6],
      ],
      bands: "#000 0%, #000 80%, transparent 99%, transparent 100%",
    },
    desktop: {
      points: [
        [99.3, 0], [99.3, 2.25], [99.31, 5.47], [99.28, 10.11],
        [98.98, 16.79], [97.91, 26.29], [96.61, 40.14], [95.75, 50.35],
        [94.43, 57.77], [92.85, 62.89], [91.13, 66.28], [88.92, 69.13],
        [85.53, 72.47], [80.44, 76.31], [73.15, 79.86], [68.26, 81.57],
        [64.5, 83],
      ],
      bands: "#000 0%, #000 64%, transparent 86%, transparent 100%",
    },
  },
} satisfies Record<string, SectionThread>;
