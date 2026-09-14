import BuyActions from "@/components/BuyActions";
import StarDivider from "@/components/StarDivider";
export default function Synopsis() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14 md:py-20 xl:py-32">

      {/* Ligne */}

      <StarDivider className="mb-12 justify-start" />

      {/* Texte */}

      <div
        className="
          space-y-8

          text-base
          sm:text-lg

          leading-8
          sm:leading-9

          text-[#CFC4B8]
        "
      >

        <p>
          À vingt-cinq ans, Ezra vit reclus depuis des années. Marqué par les
          violences homophobes qu&apos;il a subies et le rejet de sa famille, il
          s&apos;est réfugié dans la musique, composant sous un pseudonyme derrière
          l&apos;écran qui le protège du monde.
        </p>

        <p>
          À vingt et un ans, Sasha poursuit un seul rêve : vivre de sa passion
          pour la musique. Lorsqu&apos;il découvre les compositions d&apos;un mystérieux
          producteur connu sous le nom d&apos;E.02, il décide de lui écrire, sans
          imaginer que ce simple message changera leur vie.
        </p>

        <p>
          Au fil de leurs échanges, une complicité inattendue naît entre eux.
          Derrière les silences d&apos;Ezra, Sasha découvre un homme profondément
          blessé, tandis qu&apos;Ezra retrouve peu à peu le goût d&apos;espérer grâce à ce
          jeune musicien incapable d&apos;abandonner ceux qu&apos;il aime.
        </p>

        <p>
          Mais lorsque la frontière entre leur amitié et leurs sentiments
          commence à s&apos;effacer, le passé d&apos;Ezra menace de tout faire voler en
          éclats. Car certaines blessures ne disparaissent pas simplement parce
          qu&apos;on rencontre la bonne personne.
        </p>

      </div>

      {/* Signature */}

      <div className="mt-16 flex flex-col">

        <span className="mb-6 h-px w-16 bg-[#EFC17E]/40" />

        <p
          className="
            font-[family-name:var(--font-cormorant)]

            text-2xl
            sm:text-3xl

            italic
            leading-relaxed

            text-[#CFC4B8]
          "
        >
          Une histoire de reconstruction, de musique et d&apos;amour.
        </p>

      </div>

      {/* Acheter, ou d'abord lire : juste après le résumé. */}

      <div id="acheter" className="mt-20 scroll-mt-28">
        <BuyActions />
      </div>

    </section>
  );
}