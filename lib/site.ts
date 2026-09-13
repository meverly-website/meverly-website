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

/** Illustration détourée de la couverture : les deux mains et le fil. */
export const HERO_ILLUSTRATION_SRC = "/hero-illustration.png";

/**
 * Même illustration, mains atténuées et fil préservé, pour le fond du Hero.
 * L'écart est fait à la génération, pas en CSS : une baisse d'opacité
 * atténuerait le fil autant que les mains.
 */
export const HERO_ATMOSPHERE_SRC = "/hero-atmosphere.png";

/**
 * Cadrage du Hero, en attente d'arbitrage :
 *   "fragment" — le bout de la main claire et le fil qui en repart ;
 *   "fil"      — plus d'image, seulement le fil dessiné par le site.
 * Le Hero et le trajet du fil de l'accueil suivent tous deux cette valeur.
 */
export const HERO_CADRAGE: "fragment" | "fil" = "fragment";

/**
 * Fragment du Hero, taillé dans la variante atmosphère par
 * scripts/build-assets.mjs.
 */
export const HERO_FRAGMENT_SRC = "/hero-fragment.png";

export const HERO_FRAGMENT_WIDTH = 345;
export const HERO_FRAGMENT_HEIGHT = 263;

export const HERO_ILLUSTRATION_WIDTH = 1114;
export const HERO_ILLUSTRATION_HEIGHT = 774;
