/**
 * Constantes partagées du site.
 */

/**
 * Fiches Amazon du roman : une par édition.
 *
 * Tant qu'une URL reste `null`, cette édition n'a pas de bouton : une mention
 * dit qu'elle arrive. On ne met jamais de lien inventé ni de placeholder
 * mort. Les deux éditions s'activent indépendamment : renseigner une URL ici
 * suffit, rien d'autre à changer.
 */
export const BUY_PAPERBACK_URL: string | null = null;

export const BUY_EBOOK_URL: string | null = null;

/**
 * Le roman est paru dès qu'une des deux éditions est en vente. C'est le seul
 * interrupteur de la hiérarchie des actions :
 *
 * - avant la sortie, « Lire un extrait » est l'action principale (or plein)
 *   et l'achat une simple mention, sans bouton ;
 * - dès qu'une URL est renseignée, l'achat devient principal et l'extrait
 *   secondaire, partout (accueil, page du roman, navigation, fin d'extrait).
 *
 * Il pilote aussi les textes : « paraîtra » devient « est disponible ».
 */
export const IS_RELEASED = Boolean(BUY_PAPERBACK_URL || BUY_EBOOK_URL);

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
