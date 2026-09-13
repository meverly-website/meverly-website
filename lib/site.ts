/**
 * Constantes partagées du site.
 */

/**
 * Fiche Amazon du roman.
 *
 * Tant qu'elle n'existe pas, cette valeur reste `null` et tous les boutons
 * d'achat s'affichent en « Bientôt disponible », désactivés. On ne remet
 * jamais de lien inventé ni de placeholder mort : renseigner l'URL ici
 * réactive l'ensemble des boutons d'achat du site, et rien d'autre à changer.
 */
export const BUY_URL: string | null = null;

export const BUY_LABEL = BUY_URL ? "Acheter le roman" : "Bientôt disponible";

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
