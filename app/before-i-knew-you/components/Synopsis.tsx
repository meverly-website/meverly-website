export default function Synopsis() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-32">

      {/* Ligne */}

      <div className="mb-12 h-px w-20 bg-[#C99A63]/40" />

      {/* Texte */}

      <div
        className="
          space-y-8

          text-base
          sm:text-lg

          leading-8
          sm:leading-9

          text-[#E7DED4]
        "
      >

        <p>
          À vingt-cinq ans, Ezra vit reclus depuis des années. Marqué par les
          violences homophobes qu'il a subies et le rejet de sa famille, il
          s'est réfugié dans la musique, composant sous un pseudonyme derrière
          l'écran qui le protège du monde.
        </p>

        <p>
          À vingt et un ans, Sasha poursuit un seul rêve : vivre de sa passion
          pour la musique. Lorsqu'il découvre les compositions d'un mystérieux
          producteur connu sous le nom d'E.02, il décide de lui écrire, sans
          imaginer que ce simple message changera leur vie.
        </p>

        <p>
          Au fil de leurs échanges, une complicité inattendue naît entre eux.
          Derrière les silences d'Ezra, Sasha découvre un homme profondément
          blessé, tandis qu'Ezra retrouve peu à peu le goût d'espérer grâce à ce
          jeune musicien incapable d'abandonner ceux qu'il aime.
        </p>

        <p>
          Mais lorsque la frontière entre leur amitié et leurs sentiments
          commence à s'effacer, le passé d'Ezra menace de tout faire voler en
          éclats. Car certaines blessures ne disparaissent pas simplement parce
          qu'on rencontre la bonne personne.
        </p>

      </div>

      {/* Signature */}

      <div className="mt-16 flex flex-col">

        <span className="mb-6 h-px w-16 bg-[#C99A63]/40" />

        <p
          className="
            font-[family-name:var(--font-cormorant)]

            text-2xl
            sm:text-3xl

            italic
            leading-relaxed

            text-[#D9C8B7]
          "
        >
          Une histoire de reconstruction, de musique et d'amour.
        </p>

      </div>

    </section>
  );
}