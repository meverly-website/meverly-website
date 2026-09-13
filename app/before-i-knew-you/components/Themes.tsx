import StarDivider from "@/components/StarDivider";
export default function Themes() {
  const themes = [
    "Reconstruction",
    "Santé mentale",
    "Musique",
    "Famille de cœur",
    "Slow Burn",
    "Romance M/M",
  ];

  return (
    <section className="px-6 py-16 md:py-24 xl:py-36">

      <div className="mx-auto max-w-6xl">

        {/* Séparateur */}

        <StarDivider className="mb-16" />

        {/* Grille */}

        <div
          className="
            grid
            grid-cols-2
            gap-y-10
            gap-x-8

            md:grid-cols-3
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

                  text-3xl
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