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
   ACCUEIL — relevé à 1440 × 6355 et 390 × 6757
================================================================== */

/*
 * Le nœud est le même dessin sur toute la vie du site, simplement recalé :
 * une boucle, un seul croisement. Il n'existe que sur l'accueil.
 */
const HOME_KNOT_DESKTOP: ThreadPoint[] = [
  [59, 509.6], [71, 517.5], [76, 527.5], [65, 535.5],
  [61, 525.5], [66, 517.5], [75, 531.5], [83, 545.5],
];

const HOME_KNOT_MOBILE: ThreadPoint[] = [
  [45, 566], [64, 572], [72.5, 580], [55, 586],
  [48, 578], [56, 572], [71, 583], [84, 594],
];

/* Desktop, à partir de la respiration. */
const HOME_DESKTOP_BODY: ThreadPoint[] = [
  [22, 105],
  [17, 118.9],   // respiration : le texte ne descend pas sous 23 %
  [17, 134.7],
  [24, 150.6],
  [42, 168.4],   // bande libre entre la respiration et le roman
  [57, 184.3],
  [63.5, 203.1], // roman : gouttière entre le texte (≤ 60 %) et la couverture (≥ 67 %)
  [63.5, 237.8],
  [63, 272.5],
  [64, 297.3],
  [66, 327],   // contourne l'étoile, le sur-titre et « Eux deux » (38–62 %)
  [66, 340.8],
  [58, 352.8],
  [50.5, 364.7], // gouttière entre les deux fiches (47–53 %)
  [50, 416.1],
  [50, 465.7],
  [50, 482.6],
  [50, 488.1],   // ── s'arrête juste au-dessus de la ligne des prénoms (490,7 ‰)
  [56, 500.6],     //    (tronçon masqué)
  ...HOME_KNOT_DESKTOP, // ── réapparaît et se noue, une seule fois du site
  [88, 558.4],
  [89, 575.8],     // marge droite de la citation (texte ≤ 81 %)
  [89, 607.1],
  [88, 638],
  [87, 690.9],     // univers musical
  [89, 745.7],
  [88, 785.6],     // l'onde s'arrête à 81 %
  [82, 845],     // mot de l'autrice, désormais centré : texte 30–70 %
  [78, 870],     // passe à droite du premier paragraphe…
  [77, 892],     // …et du second
  [72, 905],     // longe le filet et la signature par la droite
  [64, 915],     // passe sous la signature…
  [56, 921],
  [50, 925],     // …et s'y éteint, au centre
];

/* Mobile, à partir de la respiration. Aucune gouttière : le fil suit un bord. */
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
  [96, 856],     // mot de l'autrice centré, pleine largeur : le fil tient le bord
  [95, 866],
  [90, 876],     // passe à droite de la signature…
  [78, 881],
  [64, 884],
  [54, 886],     // …et s'éteint dessous
];

/**
 * Le Hero n'a plus d'image : le fil y entre par la gauche, dessiné par le
 * site comme partout ailleurs. Il repose sur le fil et les étoiles, communs
 * aux trois tomes — rien à refaire au premier écran quand le tome 2 sortira.
 */
export const HOME_THREAD: Thread = {
  desktop: {
    points: [[-3, 27.7], [8, 45.6], [18, 65.4], [23, 85.3], ...HOME_DESKTOP_BODY],
    bands: `
      transparent 0%, transparent 2.5%, #000 5%,
      #000 48.2%, transparent 48.9%,
      transparent 50.5%, #000 51%,
      #000 90.5%, transparent 92.6%`,
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
