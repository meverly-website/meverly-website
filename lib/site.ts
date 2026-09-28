/**
 * Constantes partagées du site.
 */

/**
 * Où acheter le roman. Une adresse = un bouton : la fiche Amazon vend le
 * broché et le numérique sous la même adresse, un seul bouton les couvre
 * donc tous les deux.
 *
 * Tant qu'une adresse reste `null`, sa plateforme n'a pas de bouton : on ne
 * met jamais de lien inventé ni de placeholder mort, et on n'annonce pas une
 * plateforme qui n'est pas ouverte. Renseigner une adresse ici suffit :
 * boutons, hiérarchie et textes de disponibilité suivent.
 */
export const AMAZON_URL: string | null = "https://www.amazon.fr/dp/B0HK44TR8H";

export const KOBO_URL: string | null = null;

/**
 * Les points de vente, dans l'ordre d'affichage. `formats` ne sert pas aux
 * libellés (le bouton porte le nom de la plateforme) mais aux textes de
 * disponibilité : la fiche technique et la fin de l'extrait.
 */
export const STORES = [
  { label: "Amazon", href: AMAZON_URL, formats: ["broché", "numérique"] },
  { label: "Kobo", href: KOBO_URL, formats: ["numérique"] },
] as const;

export const STORES_ON_SALE = STORES.filter((store) => store.href);

const FORMATS = ["broché", "numérique"] as const;
const ON_SALE_FORMATS = FORMATS.filter((format) =>
  STORES_ON_SALE.some((store) => (store.formats as readonly string[]).includes(format))
);
const AWAITED_FORMATS = FORMATS.filter((format) => !ON_SALE_FORMATS.includes(format));

/**
 * Le roman est paru dès qu'une plateforme est ouverte. C'est le seul
 * interrupteur de la hiérarchie des actions :
 *
 * - avant la sortie, « Lire un extrait » est l'action principale (or plein)
 *   et l'achat une simple mention, sans bouton ;
 * - dès qu'une adresse est renseignée, l'achat devient principal et l'extrait
 *   secondaire, partout (accueil, page du roman, navigation, fin d'extrait).
 */
export const IS_RELEASED = STORES_ON_SALE.length > 0;

/**
 * La disponibilité, dite une fois pour toutes : en une ligne pour la fiche
 * technique, en une phrase pour la fin de l'extrait, en une mention sous les
 * boutons. Un format qui n'est en vente nulle part n'est jamais annoncé comme
 * disponible.
 */
export const AVAILABILITY_FACT =
  AWAITED_FORMATS.length === 0
    ? "Broché & numérique"
    : ON_SALE_FORMATS.length === 0
      ? "À paraître en broché & numérique"
      : `En ${ON_SALE_FORMATS[0]}, ${AWAITED_FORMATS[0]} à paraître`;

export const AVAILABILITY_SENTENCE =
  AWAITED_FORMATS.length === 0
    ? "Before I Knew You est disponible en broché et en numérique."
    : ON_SALE_FORMATS.length === 0
      ? "Before I Knew You paraîtra en broché et en numérique."
      : `Before I Knew You est disponible en ${ON_SALE_FORMATS[0]} ; l'édition ${AWAITED_FORMATS[0] === "broché" ? "brochée" : "numérique"} paraîtra bientôt.`;

/** Le format encore attendu, dit sous les boutons — rien quand tout est là. */
export const FORMAT_SOON =
  AWAITED_FORMATS.length === 1
    ? `Édition ${AWAITED_FORMATS[0] === "broché" ? "brochée" : "numérique"} bientôt disponible`
    : null;

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
