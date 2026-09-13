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
   ACCUEIL — relevé à 1440 × 6291 et 390 × 6657
================================================================== */

/*
 * Le nœud est le même dessin sur toute la vie du site, simplement recalé :
 * une boucle, un seul croisement. Il n'existe que sur l'accueil.
 */
const HOME_KNOT_DESKTOP: ThreadPoint[] = [
  [59, 514.8], [71, 522.8], [76, 532.9], [65, 540.9],
  [61, 530.8], [66, 522.8], [75, 536.9], [83, 551],
];

const HOME_KNOT_MOBILE: ThreadPoint[] = [
  [45, 574.5], [64, 580.6], [72.5, 588.7], [55, 594.8],
  [48, 586.7], [56, 580.6], [71, 591.8], [84, 602.9],
];

/* Desktop, à partir de la respiration. */
const HOME_DESKTOP_BODY: ThreadPoint[] = [
  [22, 106.1],
  [17, 120.1],   // respiration : le texte ne descend pas sous 23 %
  [17, 136.1],
  [24, 152.1],
  [42, 170.1],   // bande libre entre la respiration et le roman
  [57, 186.2],
  [63.5, 205.2], // roman : gouttière entre le texte (≤ 60 %) et la couverture (≥ 67 %)
  [63.5, 240.2],
  [63, 275.3],
  [64, 300.3],
  [66, 330.3],   // contourne l'étoile, le sur-titre et « Eux deux » (38–62 %)
  [66, 344.3],
  [58, 356.4],
  [50.5, 368.4], // gouttière entre les deux fiches (47–53 %)
  [50, 420.3],
  [50, 470.4],
  [50, 487.5],
  [50, 493.1],   // ── s'arrête juste au-dessus de la ligne des prénoms (495,6 ‰)
  [56, 505.7],     //    (tronçon masqué)
  ...HOME_KNOT_DESKTOP, // ── réapparaît et se noue, une seule fois du site
  [88, 564.1],
  [89, 581.7],     // marge droite de la citation (texte ≤ 81 %)
  [89, 613.3],
  [88, 644.5],
  [87, 697.9],     // univers musical
  [89, 753.3],
  [88, 793.6],     // l'onde s'arrête à 81 %
  [82, 853.6],   // mot de l'autrice, centré : la phrase occupe 28–72 %
  [78, 878.9],   // passe à droite de la première ligne…
  [77, 891],     // …et de la seconde
  [72, 904],     // longe le filet et la signature par la droite
  [64, 914.2],   // passe sous la signature…
  [56, 920.2],
  [50, 924.2],   // …et s'y éteint, au centre
];

/* Mobile, à partir de la respiration. Aucune gouttière : le fil suit un bord. */
const HOME_MOBILE_BODY: ThreadPoint[] = [
  [2.5, 99.2],   // bord gauche, le long de la respiration
  [2.5, 141.6],
  [2.5, 202.3],
  [2.5, 263],
  [2.5, 323.7],
  [2.5, 384.4],
  [2.5, 465.3],
  [2.5, 526],
  [3, 546.1],
  [9, 554.2],      // ── vient s'arrêter au début de la ligne des prénoms (557,5 ‰)
  [22, 562.3],     //    (tronçon masqué)
  [34, 568.4],
  ...HOME_KNOT_MOBILE, // ── se noue, et bascule vers le bord droit
  [92, 613.1],
  [96, 624.2],
  [96, 649.6],
  [95, 710.5],
  [97, 771.4],
  [96, 812.1],
  [96, 842.4],   // mot de l'autrice centré, pleine largeur : le fil tient le bord
  [96, 853.8],
  [95, 864.1],
  [90, 874.1],   // passe à droite de la signature…
  [78, 879.2],
  [64, 882.2],
  [54, 884.3],   // …et s'éteint dessous
];

/**
 * Le Hero n'a plus d'image : le fil y entre par la gauche, dessiné par le
 * site comme partout ailleurs. Il repose sur le fil et les étoiles, communs
 * aux trois tomes — rien à refaire au premier écran quand le tome 2 sortira.
 */
export const HOME_THREAD: Thread = {
  desktop: {
    points: [[-3, 28], [8, 46.1], [18, 66.1], [23, 86.2], ...HOME_DESKTOP_BODY],
    bands: `
      transparent 0%, transparent 2.5%, #000 5.1%,
      #000 48.7%, transparent 49.4%,
      transparent 51%, #000 51.5%,
      #000 90.4%, transparent 92.5%`,
  },
  mobile: {
    points: [[-3, 36.5], [2.5, 52.8], [2.5, 71.1], ...HOME_MOBILE_BODY],
    bands: `
      transparent 0%, transparent 3.1%, #000 5.1%,
      #000 54.7%, transparent 55.3%,
      transparent 57%, #000 57.5%,
      #000 87.2%, transparent 88.3%`,
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
