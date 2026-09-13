/**
 * Trajets du fil rouge, page par page.
 *
 * Chaque trajet est une suite de points d'ancrage [x, y] : x en pourcentage de
 * la largeur de la page, y en pour-mille de sa hauteur. Le tracé est lissé par
 * une spline de Catmull-Rom, ce qui garantit des tangentes continues : on
 * déplace un point, la courbe suit sans cassure.
 *
 * Les points sont calés sur la géométrie réelle relevée dans le navigateur
 * (sections, blocs de texte, cartes). Un changement de mise en page qui
 * modifie la hauteur d'une section impose de les revérifier.
 *
 * `bands` règle la visibilité le long de la page (arrêts d'un dégradé
 * vertical) : naissance du fil, arrêts, réapparitions, extinction.
 */

export type ThreadPoint = readonly [x: number, y: number];

export type ThreadVariant = {
  points: readonly ThreadPoint[];
  bands: string;
};

export type Thread = {
  desktop: ThreadVariant;
  mobile: ThreadVariant;
};

/** Catmull-Rom → Bézier cubiques, dans le viewBox 100 × 1000 de ThreadLine. */
export function threadPath(points: readonly ThreadPoint[], tension = 6) {
  const p = [points[0], ...points, points[points.length - 1]];
  const r = (n: number) => Math.round(n * 10) / 10;

  let d = `M ${points[0][0]},${points[0][1]}`;

  for (let i = 1; i < p.length - 2; i++) {
    const [x0, y0] = p[i - 1];
    const [x1, y1] = p[i];
    const [x2, y2] = p[i + 1];
    const [x3, y3] = p[i + 2];

    d +=
      ` C ${r(x1 + (x2 - x0) / tension)},${r(y1 + (y2 - y0) / tension)}` +
      ` ${r(x2 - (x3 - x1) / tension)},${r(y2 - (y3 - y1) / tension)}` +
      ` ${r(x2)},${r(y2)}`;
  }

  return d;
}

/* ==================================================================
   ACCUEIL — relevé à 1440 × 6337 et 390 × 6760
================================================================== */

/*
 * Le nœud est le même dessin sur toute la vie du site, simplement recalé :
 * une boucle, un seul croisement. Il n'existe que sur l'accueil.
 */
const HOME_KNOT_DESKTOP: ThreadPoint[] = [
  [59, 511], [71, 519], [76, 529], [65, 537],
  [61, 527], [66, 519], [75, 533], [83, 547],
];

const HOME_KNOT_MOBILE: ThreadPoint[] = [
  [45, 566], [64, 572], [72.5, 580], [55, 586],
  [48, 578], [56, 572], [71, 583], [84, 594],
];

/* Suite commune aux deux cadrages du Hero, desktop, à partir de la respiration. */
const HOME_DESKTOP_BODY: ThreadPoint[] = [
  [22, 105.3],
  [17, 119.2],   // respiration : le texte ne descend pas sous 23 %
  [17, 135.1],
  [24, 151],
  [42, 168.9],   // bande libre entre la respiration et le roman
  [57, 184.8],
  [63.5, 203.7], // roman : gouttière entre le texte (≤ 60 %) et la couverture (≥ 67 %)
  [63.5, 238.5],
  [63, 273.3],
  [64, 298.1],
  [66, 327.9],   // contourne l'étoile, le sur-titre et « Eux deux » (38–62 %)
  [66, 341.8],
  [58, 353.8],
  [50.5, 365.7], // gouttière entre les deux fiches (47–53 %)
  [50, 417.3],
  [50, 467],
  [50, 484],
  [50, 489.5],   // ── s'arrête juste au-dessus de la ligne des prénoms (492 ‰)
  [56, 502],     //    (tronçon masqué)
  ...HOME_KNOT_DESKTOP, // ── réapparaît et se noue, une seule fois du site
  [88, 560],
  [89, 577],     // marge droite de la citation (texte ≤ 81 %)
  [89, 607],
  [88, 637],
  [87, 690],     // univers musical
  [89, 745],
  [88, 785],     // l'onde s'arrête à 81 %
  [86, 818],
  [80, 845],
  [71, 861],     // mot de l'autrice : le texte occupe 8–48 %
  [60, 878],
  [53, 898],
  [43, 914],     // passe sous la signature…
  [32, 926],     // …et s'y éteint
];

/* Suite commune, mobile. Aucune gouttière : le fil suit un bord. */
const HOME_MOBILE_BODY: ThreadPoint[] = [
  [2.5, 97.7],   // bord gauche, le long de la respiration
  [2.5, 139.5],
  [2.5, 199.3],
  [2.5, 259.1],
  [2.5, 318.9],
  [2.5, 378.7],
  [2.5, 458.4],
  [2.5, 518.2],
  [3, 538],
  [9, 546],      // ── vient s'arrêter au début de la ligne des prénoms (549 ‰)
  [22, 554],     //    (tronçon masqué)
  [34, 560],
  ...HOME_KNOT_MOBILE, // ── se noue, et bascule vers le bord droit
  [92, 604],
  [96, 615],
  [96, 640],
  [95, 700],
  [97, 760],
  [96, 800],
  [96, 830],
  [96, 856],
  [88, 864],     // passe entre le dernier paragraphe et la signature
  [66, 873],
  [48, 880],
  [40, 885],     // s'éteint sous la signature
];

/**
 * Cadrage A — le fragment : le fil du Hero est celui de l'illustration ;
 * ThreadLine le reprend là où il sort du cadre, en bas du fragment.
 */
export const HOME_THREAD_FRAGMENT: Thread = {
  desktop: {
    points: [[32, 85.5], [30.5, 94.4], ...HOME_DESKTOP_BODY],
    bands: `
      transparent 0%, transparent 8.5%, #000 9.3%,
      #000 48.3%, transparent 49%,
      transparent 50.6%, #000 51.1%,
      #000 88%, transparent 92.9%`,
  },
  mobile: {
    points: [[39, 79.7], [36, 83.7], [20, 87.7], [6, 91.7], ...HOME_MOBILE_BODY],
    bands: `
      transparent 0%, transparent 7.9%, #000 8.4%,
      #000 53.9%, transparent 54.5%,
      transparent 56.2%, #000 56.6%,
      #000 87.4%, transparent 88.5%`,
  },
};

/**
 * Cadrage B — le fil seul : plus aucune image dans le Hero. Le fil y entre
 * par la gauche, dessiné par le site comme partout ailleurs.
 */
export const HOME_THREAD_FIL: Thread = {
  desktop: {
    points: [[-3, 27.8], [8, 45.7], [18, 65.6], [23, 85.5], ...HOME_DESKTOP_BODY],
    bands: `
      transparent 0%, transparent 2.5%, #000 5%,
      #000 48.3%, transparent 49%,
      transparent 50.6%, #000 51.1%,
      #000 88%, transparent 92.9%`,
  },
  mobile: {
    points: [[-3, 36], [2.5, 52], [2.5, 70], ...HOME_MOBILE_BODY],
    bands: `
      transparent 0%, transparent 3%, #000 5%,
      #000 53.9%, transparent 54.5%,
      transparent 56.2%, #000 56.6%,
      #000 87.4%, transparent 88.5%`,
  },
};

/* ==================================================================
   PAGE DU ROMAN — relevé à 1440 × 6402 et 390 × 7190

   Une continuation, jamais un second nouage : aucune boucle, aucun
   croisement. Le nœud unique du site reste sur l'accueil.
================================================================== */

export const BOOK_THREAD: Thread = {
  desktop: {
    points: [
      [102, 40],     // entre par la droite, sous la navigation
      [90, 60],
      [83, 90],      // à droite du titre (≤ 68 %)
      [82, 130],     // à droite de la couverture (≤ 65 %, filet compris)
      [84, 180],
      [86, 215],
      [87, 250],     // accompagne la lecture du synopsis (texte ≤ 79 %)
      [87, 300],
      [87, 345],
      [90, 375],
      [94, 400],     // thèmes : les mots ne dépassent pas 88 %
      [95, 440],
      [96.5, 475],
      [97, 530],     // Ezra et Sasha : fiches pleine largeur (≤ 94 %)
      [97, 600],
      [97, 680],
      [97, 720],     // longe Liam, dernière fiche de la première rangée
      [96, 750],
      [88, 765],     // ── se resserre dans la place vide de la grille,
      [78, 780],     //    tout près de Félix (≤ 64 %)
      [74, 796],
      [78, 812],
      [86, 840],
      [90, 868],     // marge droite de la citation (texte ≤ 86 %)
      [89.5, 890],
      [82, 905],     // passe la ligne « Before I Knew You »…
      [70, 913],
      [62, 918],     // …et s'éteint juste après
    ],
    bands: `
      transparent 0%, transparent 3.5%, #000 6.5%,
      #000 89.5%, transparent 92%`,
  },
  mobile: {
    points: [
      [96, 25],      // tout est pleine largeur : le fil suit le bord droit
      [96, 60],
      [95, 120],
      [97, 180],     // synopsis
      [96, 240],
      [95, 300],
      [97, 360],     // thèmes
      [96, 420],
      [97, 480],     // les sept fiches, empilées
      [96, 540],
      [97, 600],
      [96, 660],
      [97, 720],
      [96, 780],
      [96, 830],
      [96, 860],     // citation
      [92, 871],
      [82, 882],     // passe sous la citation…
      [72, 888],
      [66, 891],     // …et s'éteint à côté de « Before I Knew You »
    ],
    bands: `
      transparent 0%, transparent 1.5%, #000 4%,
      #000 88.2%, transparent 89.4%`,
  },
};
