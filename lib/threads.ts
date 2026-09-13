/**
 * Trajets du fil rouge, section par section.
 *
 * Chaque section de page porte son propre morceau de fil, étiré à sa hauteur.
 * Les morceaux se raccordent aux frontières : le point de sortie d'une section
 * a le même x que le point d'entrée de la suivante, et le fil y passe à la
 * verticale, pour que la jonction soit invisible.
 *
 * Coordonnées d'un point [x, y] :
 *   y — en % de la hauteur de la section ;
 *   x — en % de la largeur de la « boîte » du fil : l'écran en mobile et en
 *       tablette, la colonne de contenu (1280 px au plus) sur ordinateur.
 *
 * Ancrer y à la section plutôt qu'à la page, et x à la colonne sur
 * ordinateur, rend le fil indépendant de la hauteur d'écran (le Hero en
 * dépend) et de la largeur au-delà de 1280 px : un changement de texte ou
 * d'écran ne décale plus rien ailleurs que dans la section concernée.
 *
 * Trois variantes, choisies en CSS :
 *   mobile  < 768 px · tablet 768–1279 px · desktop ≥ 1280 px
 *
 * En mobile et en tablette, le fil longe les bords de l'écran (1,8 % et 1 %
 * de la largeur) : les marges n'y font que 24 px, et ce sont les seules
 * positions qui restent hors du texte sur toute la plage de largeurs. Il ne
 * s'en écarte que là où la page lui laisse de la place : le nœud, au-dessus
 * de la citation, et l'extinction, sous la signature.
 *
 * Les points se suivent à intervalles comparables (un écart au plus double du
 * suivant) : un point très proche d'un voisin lointain ferait boucler la
 * courbe.
 *
 * `bands` règle la visibilité le long de la section (arrêts d'un dégradé
 * vertical, en % de la section) : naissance, arrêts, extinction.
 */

export type ThreadPoint = readonly [x: number, y: number];

export type Segment = {
  points: readonly ThreadPoint[];
  bands?: string;
};

export type SectionThread = {
  mobile?: Segment;
  tablet?: Segment;
  desktop?: Segment;
};

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

/** Chemin SVG, dans le viewBox 100 × 100 du segment. */
export function threadPath(points: readonly ThreadPoint[]) {
  const r = (n: number) => Math.round(n * 100) / 100;
  const curves = threadCurves(points);

  return curves.reduce(
    (d, [, , c1x, c1y, c2x, c2y, x1, y1]) =>
      `${d} C ${r(c1x)},${r(c1y)} ${r(c2x)},${r(c2y)} ${r(x1)},${r(y1)}`,
    `M ${r(points[0][0])},${r(points[0][1])}`
  );
}

/* Les trajets sont définis plus bas, page par page. */

export const HOME_THREAD = {
  hero: {
    mobile: {
      points: [
        [-3, 43.62], [1.8, 63.1], [1.8, 98.2], [1.8, 100],
      ],
      bands: "transparent 0%, transparent 37.05%, #000 60.95%, #000 100%",
    },
    tablet: {
      points: [
        [-3, 43.62], [1, 63.1], [1, 98.2], [1, 100],
      ],
      bands: "transparent 0%, transparent 37.05%, #000 60.95%, #000 100%",
    },
    desktop: {
      points: [
        [-9.62, 29.65], [2.75, 48.82], [14, 70.01], [19.62, 91.29],
        [19.88, 98.32], [19.88, 100],
      ],
      bands: "transparent 0%, transparent 26.48%, #000 54.01%, #000 100%",
    },
  },
  breath: {
    mobile: {
      points: [
        [1.8, 0], [1.8, 3.14], [1.8, 96.86], [1.8, 100],
      ],
    },
    tablet: {
      points: [
        [1, 0], [1, 3.14], [1, 96.86], [1, 100],
      ],
    },
    desktop: {
      points: [
        [19.88, 0], [19.88, 2.35], [18.5, 17.25], [12.88, 37.92],
        [12.88, 61.55], [20.75, 85.18], [29.66, 97.65], [31.57, 100],
      ],
    },
  },
  roman: {
    mobile: {
      points: [
        [1.8, 0], [1.8, 0.74], [1.8, 99.26], [1.8, 100],
      ],
    },
    tablet: {
      points: [
        [1, 0], [1, 0.74], [1, 99.26], [1, 100],
      ],
    },
    desktop: {
      points: [
        [31.57, 0], [33.51, 1.24], [41, 6.19], [57.88, 18.71],
        [65.19, 33.49], [65.19, 60.7], [64.63, 88], [65.07, 98.76],
        [65.16, 100],
      ],
    },
  },
  personnages: {
    mobile: {
      points: [
        [1.8, 0], [1.8, 0.61], [1.8, 45], [1.8, 70], [1.8, 82],
        [1.8, 88.6], [9, 90.6], [22, 92.9], [36, 95.5], [50, 98],
        [60, 99.4], [60, 100],
      ],
      bands: "#000 0%, #000 85.2%, transparent 88.4%, transparent 100%",
    },
    tablet: {
      points: [
        [1, 0], [1, 0.61], [1, 45], [1, 70], [1, 82], [1, 88.6],
        [9, 90.6], [22, 92.9], [36, 95.5], [50, 98], [60, 99.4],
        [60, 100],
      ],
      bands: "#000 0%, #000 85.2%, transparent 88.4%, transparent 100%",
    },
    desktop: {
      points: [
        [65.16, 0], [65.25, 0.68], [63, 3], [54, 6.5], [42, 10],
        [34.5, 14.5], [33.5, 20.5], [35, 26.5], [41, 31], [48.5, 34.5],
        [50, 38], [50, 55.71], [50, 77.26], [50, 82], [50, 87.02],
        [56.75, 92.44], [58, 99.32], [58, 100],
      ],
      bands: "#000 0%, #000 82.5%, transparent 85.4%, transparent 94.29%, #000 96.44%, #000 100%",
    },
  },
  citation: {
    mobile: {
      points: [
        [60, 0], [60, 1], [62.5, 3.5], [72.5, 8.86], [55, 15.18],
        [48, 6.79], [71, 12.07], [84, 23.56], [92, 34.12], [98.2, 45.61],
        [98.2, 98.44], [98.2, 100],
      ],
      bands: "transparent 0%, transparent 1%, #000 5.5%, #000 100%",
    },
    tablet: {
      points: [
        [60, 0], [60, 1], [62.5, 3.5], [74, 8.5], [78.5, 14.5],
        [69, 19.5], [65, 13.5], [70, 8.5], [78, 16.5], [86, 24],
        [94, 31], [99, 40], [99, 50], [99, 70], [99, 98.44], [99, 100],
      ],
      bands: "transparent 0%, transparent 1%, #000 5.5%, #000 100%",
    },
    desktop: {
      points: [
        [58, 0], [58, 1.04], [60.13, 3.38], [73.63, 8.59],
        [79.25, 15.16], [66.88, 20.37], [62.38, 13.8], [68, 8.59],
        [78.13, 17.77], [87.13, 26.95], [93.88, 38.14], [93.88, 58.72],
        [92.75, 79.04], [91.84, 98.96], [91.8, 100],
      ],
    },
  },
  musique: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 1.11], [98.2, 98.89], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 1.11], [99, 98.89], [99, 100],
      ],
    },
    desktop: {
      points: [
        [91.8, 0], [91.77, 0.93], [91.63, 12.45], [93.88, 44.96],
        [92.75, 68.61], [87.05, 99.07], [86.84, 100],
      ],
    },
  },
  auteur: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 2.03], [98.2, 70.25], [90, 83.75], [78, 90.64],
        [64, 94.69], [54, 97.52],
      ],
      bands: "#000 0%, #000 80.91%, transparent 95.77%, transparent 100%",
    },
    tablet: {
      points: [
        [99, 0], [99, 2.03], [99, 70.25], [90, 83.75], [78, 90.64],
        [64, 94.69], [54, 97.52],
      ],
      bands: "#000 0%, #000 80.91%, transparent 95.77%, transparent 100%",
    },
    desktop: {
      points: [
        [86.84, 0], [86.64, 1.9], [86, 7.81], [81.5, 38.13],
        [80.38, 52.62], [74.75, 68.2], [65.75, 80.43], [56.75, 87.61],
        [50, 92.41],
      ],
      bands: "#000 0%, #000 68.2%, transparent 93.37%, transparent 100%",
    },
  },
} satisfies Record<string, SectionThread>;

export const BOOK_THREAD = {
  hero: {
    mobile: {
      points: [
        [98.2, 18.27], [98.2, 43.84], [98.2, 98.98], [98.2, 100],
      ],
      bands: "transparent 0%, transparent 10.96%, #000 29.23%, #000 100%",
    },
    tablet: {
      points: [
        [99, 18.27], [99, 43.84], [99, 98.98], [99, 100],
      ],
      bands: "transparent 0%, transparent 10.96%, #000 29.23%, #000 100%",
    },
    desktop: {
      points: [
        [108.5, 18.94], [95, 28.41], [87.13, 42.61], [86, 61.55],
        [88.25, 85.22], [90.3, 99.26], [90.3, 100],
      ],
      bands: "transparent 0%, transparent 16.57%, #000 30.77%, #000 100%",
    },
  },
  synopsis: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 0.78], [98.2, 99.22], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 0.78], [99, 99.22], [99, 100],
      ],
    },
    desktop: {
      points: [
        [90.3, 0], [90.3, 1.01], [90.5, 2.46], [91.63, 25.23],
        [91.63, 57.76], [91.63, 87.04], [93.31, 98.99], [93.52, 100],
      ],
    },
  },
  themes: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 1.64], [98.2, 98.36], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 1.64], [99, 98.36], [99, 100],
      ],
    },
    desktop: {
      points: [
        [93.52, 0], [93.75, 1.76], [95, 11.38], [99.5, 39.61],
        [100.63, 84.79], [101.22, 98.24], [101.32, 100],
      ],
    },
  },
  personnages: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 0.34], [98.2, 99.66], [98.2, 100],
      ],
    },
    tablet: {
      points: [
        [99, 0], [99, 0.34], [99, 99.66], [99, 100],
      ],
    },
    desktop: {
      points: [
        [101.32, 0], [101.41, 0.41], [102.31, 5.72], [102.88, 20.32],
        [102.88, 38.91], [102.88, 60.15], [102.88, 70.77],
        [101.75, 78.74], [92.75, 82.72], [81.5, 86.7], [77, 90.95],
        [81.5, 95.2], [87.11, 99.59], [87.62, 100],
      ],
    },
  },
  citation: {
    mobile: {
      points: [
        [98.2, 0], [98.2, 1.69], [98.2, 30], [98.2, 45], [98.2, 58.01],
        [95, 72], [88.5, 84], [80, 89.5], [70, 93.5], [64, 96],
      ],
      bands: "#000 0%, #000 84.73%, transparent 99.3%, transparent 100%",
    },
    tablet: {
      points: [
        [99, 0], [99, 1.69], [99, 30], [99, 45], [99, 58.01], [99, 72],
        [88.5, 84], [80, 89.5], [70, 93.5], [64, 96],
      ],
      bands: "#000 0%, #000 84.73%, transparent 99.3%, transparent 100%",
    },
    desktop: {
      points: [
        [87.62, 0], [88.12, 1.53], [90.5, 9.74], [95, 37.25],
        [94.44, 58.86], [86, 73.59], [72.5, 81.45], [63.5, 86.37],
      ],
      bands: "#000 0%, #000 63.77%, transparent 88.33%, transparent 100%",
    },
  },
} satisfies Record<string, SectionThread>;
