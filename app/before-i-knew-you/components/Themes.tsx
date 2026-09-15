import StarDivider from "@/components/StarDivider";

/*
 * Sur téléphone, la taille des mots suit la largeur d'écran : à taille fixe,
 * « Reconstruction » débordait de sa colonne et chevauchait « Santé mentale »
 * sur un écran de 320.
 *
 * Le genre (slow burn, romance M/M) est passé dans la fiche technique, en
 * haut de page : il ne reste ici que les thèmes, en deux colonnes.
 *
 * La grille porte son intitulé : elle suit le bloc replié des thèmes
 * sensibles, et sans titre elle se lisait comme son contenu.
 */

export default function Themes() {
  const themes = [
    "Reconstruction",
    "Santé mentale",
    "Musique",
    "Famille de cœur",
  ];

  return (
    <section className="px-6 py-16 md:py-24 xl:py-36">

      <div className="mx-auto max-w-4xl">

        {/* Séparateur */}

        <StarDivider className="mb-10" />

        <h2 className="text-center text-[0.7rem] uppercase tracking-[0.45em] text-gold">
          Les thèmes du roman
        </h2>

        {/* Grille */}

        <div
          className="
            mt-12
            md:mt-14
            grid
            grid-cols-2
            gap-y-10
            gap-x-6
            sm:gap-x-8

            md:gap-y-14
            xl:gap-y-20
          "
        >

          {themes.map((theme) => (

            <div
              key={theme}
              className="text-center"
            >

              <p
                className="
                  font-[family-name:var(--font-cormorant)]

                  text-[clamp(1.25rem,6.4vw,1.875rem)]
                  sm:text-4xl
                  md:text-5xl

                  leading-tight

                  text-[#F5F1EB]

                  transition
                  duration-300

                  hover:text-[#EFC17E]
                "
              >
                {theme}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}