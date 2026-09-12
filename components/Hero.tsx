import Image from "next/image";
import StarDivider from "./StarDivider";
import {
  HERO_ATMOSPHERE_SRC,
  HERO_ILLUSTRATION_HEIGHT,
  HERO_ILLUSTRATION_WIDTH,
} from "@/lib/site";

/**
 * Le premier écran accueille dans l'univers de l'autrice.
 *
 * L'illustration de la couverture n'est plus le sujet : elle passe derrière le
 * texte, atténuée et fondue dans le noir. Ses mains se devinent, son fil rouge
 * reste l'élément le plus lumineux — c'est lui qui amorce le scroll, et
 * ThreadLine le reprend pour traverser toute la page.
 */

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[66svh]
        items-center
        justify-center
        overflow-hidden
        px-6
        pb-16
        pt-28
      "
    >

      {/* Atmosphère */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >

        <Image
          src={HERO_ATMOSPHERE_SRC}
          alt=""
          width={HERO_ILLUSTRATION_WIDTH}
          height={HERO_ILLUSTRATION_HEIGHT}
          priority
          sizes="(max-width: 860px) 96vw, 860px"
          className="hero-atmosphere w-[min(96vw,860px)] max-w-none opacity-45"
        />

      </div>

      {/* Voile : garantit le contraste du texte par-dessus l'illustration. */}

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
            text-5xl
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
