import Image from "next/image";
import StarDivider from "./StarDivider";
import {
  HERO_CADRAGE,
  HERO_FRAGMENT_HEIGHT,
  HERO_FRAGMENT_SRC,
  HERO_FRAGMENT_WIDTH,
} from "@/lib/site";

/**
 * Le premier écran accueille dans l'univers de l'autrice.
 *
 * Il ne montre plus la composition entière de la couverture, qui apparaît
 * quelques centaines de pixels plus bas : seulement un fragment, le bout de
 * la main claire qui entre par la gauche et le fil qui en repart. Les mains
 * sont propres au tome 1 ; le fil et les étoiles sont communs à la trilogie,
 * c'est sur eux que repose l'écran. ThreadLine reprend le fil là où le
 * fragment s'efface et le fait traverser toute la page.
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

      {/* Fragment : ancré en bas à gauche, fondu vers le noir sur ses bords. */}

      {HERO_CADRAGE === "fragment" && (
        <div
          aria-hidden="true"
          className="
            hero-fragment
            pointer-events-none
            absolute
            bottom-0
            left-0
            w-[44vw]
            opacity-80
            md:w-[min(40vw,520px)]
          "
        >

          <Image
            src={HERO_FRAGMENT_SRC}
            alt=""
            width={HERO_FRAGMENT_WIDTH}
            height={HERO_FRAGMENT_HEIGHT}
            priority
            sizes="(max-width: 768px) 44vw, (max-width: 1300px) 40vw, 520px"
            className="h-auto w-full"
          />

        </div>
      )}

      {/* Voile : garantit le contraste du texte. */}

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
