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
    <section className="px-6 py-24 md:py-36">

      <div className="mx-auto max-w-6xl">

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-20 bg-[#C99A63]/40" />

        {/* Grille */}

        <div
          className="
            grid
            grid-cols-2
            gap-y-14
            gap-x-8

            md:grid-cols-3
            md:gap-y-20
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

                  hover:text-[#C99A63]
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