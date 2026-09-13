import StarDivider from "./StarDivider";

/**
 * Le premier écran accueille dans l'univers de l'autrice.
 *
 * Le titre, très espacé, se resserre un peu sous 370 px de large : à taille
 * fixe, il touchait les deux bords d'un écran de 320.
 *
 * Aucune image : la couverture apparaît quelques centaines de pixels plus
 * bas, et les mains de l'illustration sont propres au tome 1. L'écran repose
 * sur ce qui est commun aux trois tomes — le fil et les étoiles. Le fil y
 * entre par la gauche, tracé par ThreadSection, et traverse ensuite toute la
 * page.
 */

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[66svh]
        items-start
        md:items-center
        justify-center
        overflow-hidden
        px-6
        pb-16
        pt-28
      "
    >

      {/* Voile : assombrit le fond derrière le texte, sans contour. */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_46%_42%_at_50%_50%,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.6)_55%,transparent_78%)]
        "
      />

      {/* Accueil */}

      <div className="relative z-10 max-w-2xl text-center">

        <h1
          className="
            font-serif
            text-[clamp(2.25rem,13vw,3rem)]
            font-light
            leading-none
            tracking-[0.3em]
            text-text
            sm:text-6xl
            md:text-7xl
          "
        >
          MEVERLY
        </h1>

        <p className="mt-7 text-[0.7rem] uppercase tracking-[0.45em] text-gold">
          Autrice de romance contemporaine
        </p>

        <StarDivider size={12} className="mt-10" />

        <p
          className="
            mt-10
            font-serif
            text-2xl
            font-light
            italic
            leading-[1.35]
            text-muted
            sm:text-3xl
          "
        >
          Je crois aux histoires qui réparent un peu ceux qui les lisent.
        </p>

      </div>

    </section>
  );
}
