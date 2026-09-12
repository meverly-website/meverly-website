import Image from "next/image";
import StarDivider from "./StarDivider";
import {
  HERO_ILLUSTRATION_HEIGHT,
  HERO_ILLUSTRATION_SRC,
  HERO_ILLUSTRATION_WIDTH,
} from "@/lib/site";

/**
 * L'affiche éditoriale prolongée.
 *
 * L'illustration de la couverture — les deux mains, le fil — occupe le premier
 * écran. Le fil qui en sort en bas à droite est repris par ThreadLine, qui le
 * fait descendre dans toute la page : le site se lit comme la continuation de
 * la couverture, pas comme une page décorée d'un motif inspiré d'elle.
 */

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-svh
        flex-col
        items-center
        justify-center
        px-6
        pb-20
        pt-28
      "
    >

      {/* Illustration — bornée en hauteur pour que le premier écran tienne. */}

      <div className="relative flex w-full max-w-[860px] justify-center">

        <Image
          src={HERO_ILLUSTRATION_SRC}
          alt="Deux mains qui se tendent l'une vers l'autre, reliées aux poignets par le fil rouge du destin, sur un ciel étoilé."
          width={HERO_ILLUSTRATION_WIDTH}
          height={HERO_ILLUSTRATION_HEIGHT}
          priority
          sizes="(max-width: 900px) 94vw, 860px"
          className="h-auto max-h-[54svh] w-auto max-w-full"
        />

      </div>

      {/* Titre — présent, mais il ne concurrence pas l'illustration. */}

      <div className="relative z-10 mt-10 text-center">

        <StarDivider size={12} className="mb-6" />

        <h1
          className="
            font-serif
            text-2xl
            font-light
            leading-none
            tracking-[0.16em]
            text-gold
            sm:text-3xl
            md:text-4xl
          "
        >
          <span className="sr-only">Meverly, autrice de </span>
          BEFORE I KNEW YOU
        </h1>

        <p
          className="
            mt-5
            font-serif
            text-base
            italic
            text-muted
            sm:text-lg
          "
        >
          Certaines rencontres ne se prévoient pas.
        </p>

      </div>

    </section>
  );
}
