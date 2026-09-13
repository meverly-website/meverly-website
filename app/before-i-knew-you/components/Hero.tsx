import CoverShowcase from "@/components/CoverShowcase";
import StarDivider from "@/components/StarDivider";

/**
 * Ouverture de la page du roman.
 *
 * L'ancienne version pointait vers `/bookhero.jpg`, un fichier absent de
 * `public/` : l'image était cassée en production. Elle est remplacée par une
 * ouverture typographique sur le champ d'étoiles, avec la couverture mise en
 * scène — même langage que la page d'accueil.
 */

export default function Hero() {
  return (
    <section className="px-6 pb-16 pt-32 md:pb-20 md:pt-40 xl:pb-32 xl:pt-52">

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        <StarDivider className="mb-10" />

        <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
          Le roman
        </p>

        <h1
          className="
            mt-8
            font-serif
            text-5xl
            font-light
            leading-[0.95]
            tracking-[0.04em]
            text-text
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          BEFORE I
          <br />
          KNEW YOU
        </h1>

        <p className="mt-10 font-serif text-xl italic text-muted sm:text-2xl md:text-3xl">
          Tu n&apos;as pas besoin d&apos;être fort tout le temps.
        </p>

        <CoverShowcase href="#synopsis" eager className="mt-14 flex justify-center md:mt-16 xl:mt-20" />

      </div>

    </section>
  );
}
