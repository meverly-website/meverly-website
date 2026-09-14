import BookFacts from "@/components/BookFacts";
import BuyActions from "@/components/BuyActions";
import CoverShowcase from "@/components/CoverShowcase";

/**
 * Ouverture de la page du roman : le bloc de décision.
 *
 * Tout ce qui sert à décider tient dans le premier écran, avant le résumé :
 * la couverture d'un côté ; de l'autre le titre, l'accroche, la fiche
 * technique et les actions. Sur téléphone, le même ordre s'empile, avec une
 * couverture un peu plus petite pour que les actions restent hautes.
 *
 * La colonne de texte ne dépasse pas la hauteur de la couverture. Pas de
 * couverture fixe au défilement.
 */

export default function Hero() {
  return (
    /*
      overflow-x-clip : page empilée, la couverture occupe toute la largeur de
      la colonne et son halo (64 px) déborderait de l'écran.
    */
    <section className="overflow-x-clip px-6 pb-16 pt-24 md:pb-20 md:pt-32 lg:pt-24 xl:pb-28">

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-8
          sm:gap-12
          lg:grid-cols-[auto_1fr]
          lg:gap-20
          xl:gap-24
        "
      >

        <CoverShowcase
          href="#synopsis"
          eager
          widths="w-[180px] sm:w-[240px] lg:w-[320px] xl:w-[360px]"
          sizes="(max-width: 639px) 180px, (max-width: 1023px) 240px, (max-width: 1279px) 320px, 360px"
          className="flex justify-center"
        />

        <div className="text-center lg:text-left">

          <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
            Le roman
          </p>

          <h1
            className="
              mt-4
              font-serif
              text-5xl
              font-light
              leading-[0.95]
              tracking-[0.04em]
              text-text
              sm:text-6xl
            "
          >
            BEFORE I
            <br />
            KNEW YOU
          </h1>

          <p className="mt-4 font-serif text-xl italic text-muted sm:text-2xl">
            Tu n&apos;as pas besoin d&apos;être fort tout le temps.
          </p>

          <BookFacts className="mt-6 lg:mt-8" />

          <div id="acheter" className="mt-7 scroll-mt-28 lg:mt-8">
            <BuyActions align="responsive" />
          </div>

        </div>

      </div>

    </section>
  );
}
