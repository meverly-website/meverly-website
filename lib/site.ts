/**
 * Constantes partagées du site.
 */

/**
 * Fiches Amazon du roman : une par édition.
 *
 * Tant qu'une URL reste `null`, cette édition n'a pas de bouton : une mention
 * dit qu'elle arrive. On ne met jamais de lien inventé ni de placeholder
 * mort. Les deux éditions s'activent indépendamment : renseigner une URL ici
 * suffit, rien d'autre à changer — boutons, hiérarchie et textes suivent.
 */
export const BUY_PAPERBACK_URL: string | null = null;

export const BUY_EBOOK_URL: string | null =
  "https://www.amazon.fr/dp/B0HK44TR8H";

/**
 * Les deux éditions, dans l'ordre d'affichage. `soon` est la mention affichée
 * tant que l'édition n'est pas en vente, `fact` son nom dans la fiche
 * technique.
 */
export const EDITIONS = [
  {
    label: "Broché",
    href: BUY_PAPERBACK_URL,
    soon: "Édition brochée bientôt disponible",
    fact: "broché",
    sentence: "l'édition brochée",
  },
  {
    label: "E-book",
    href: BUY_EBOOK_URL,
    soon: "Édition numérique bientôt disponible",
    fact: "numérique",
    sentence: "l'édition numérique",
  },
] as const;

const ON_SALE = EDITIONS.filter((edition) => edition.href);
const AWAITED = EDITIONS.filter((edition) => !edition.href);

/**
 * Le roman est paru dès qu'une des deux éditions est en vente. C'est le seul
 * interrupteur de la hiérarchie des actions :
 *
 * - avant la sortie, « Lire un extrait » est l'action principale (or plein)
 *   et l'achat une simple mention, sans bouton ;
 * - dès qu'une URL est renseignée, l'achat devient principal et l'extrait
 *   secondaire, partout (accueil, page du roman, navigation, fin d'extrait).
 */
export const IS_RELEASED = ON_SALE.length > 0;

/**
 * La disponibilité, dite une fois pour toutes : en une ligne pour la fiche
 * technique, en une phrase pour la fin de l'extrait. Une seule édition en
 * vente ne fait jamais annoncer l'autre comme disponible.
 */
export const AVAILABILITY_FACT =
  AWAITED.length === 0
    ? "Broché & numérique"
    : ON_SALE.length === 0
      ? "À paraître en broché & numérique"
      : `En ${ON_SALE[0].fact}, ${AWAITED[0].fact} à paraître`;

export const AVAILABILITY_SENTENCE =
  AWAITED.length === 0
    ? "Before I Knew You est disponible en broché et en numérique."
    : ON_SALE.length === 0
      ? "Before I Knew You paraîtra en broché et en numérique."
      : `Before I Knew You est disponible en ${ON_SALE[0].fact} ; ${AWAITED[0].sentence} paraîtra bientôt.`;

/** Où l'on choisit son édition, sur la page du roman. */
export const BUY_ANCHOR = "/before-i-knew-you#acheter";

export const EXTRACT_HREF = "/before-i-knew-you/extrait";

/*
 * La mention d'achat avant la sortie. « Achat » plutôt que « Bientôt
 * disponible » seul : placée sous « Lire un extrait », la formule nue
 * semblait parler de l'extrait.
 */
export const PRE_RELEASE_NOTE = "Achat bientôt disponible";

export const SPOTIFY_URL =
  "https://open.spotify.com/playlist/1mFzKIixcOMPV1c6nObEuj?si=5a944628db514b1d";

export const INSTAGRAM_URL = "https://www.instagram.com/meverlybooks/";

/**
 * Couverture du roman, régénérée par scripts/build-assets.mjs.
 *
 * La source fait 1250 × 2000, ce qui couvre un écran 3× jusqu’à 360 px
 * de large — la borne de la mise en scène.
 */
export const COVER_SRC = "/cover.png";

export const COVER_WIDTH = 1250;
export const COVER_HEIGHT = 2000;
