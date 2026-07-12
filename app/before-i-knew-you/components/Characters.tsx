import Image from "next/image";

const mainCharacters = [
  {
    name: "Ezra",
    traits: "Réservé · Patient · Calme",
    image: "/characters/ezra.jpg",
  },
  {
    name: "Sasha",
    traits: "Lumineux · Énergique · Loyal",
    image: "/characters/sasha.jpg",
  },
];

const secondaryCharacters = [
  {
    name: "Noah",
    traits: "Timide · Fleur bleue · Espiègle",
    image: "/characters/noah.jpg",
  },
  {
    name: "Gabriel",
    traits: "Professionnel · Détendu · Strict",
    image: "/characters/gabriel.jpg",
  },
  {
    name: "Liam",
    traits: "Inspirant · Rieur · Protecteur",
    image: "/characters/liam.jpg",
  },
  {
    name: "Adam",
    traits: "Sérieux · Sentimental · Perdu",
    image: "/characters/adam.jpg",
  },
  {
    name: "Félix",
    traits: "Drôle · Amoureux · Solaire",
    image: "/characters/felix.jpg",
  },
];

export default function Characters() {
  return (
    <section className="px-6 py-24 md:py-36">

      <div className="mx-auto max-w-7xl">

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-20 bg-[#C99A63]/40" />

        {/* Personnages principaux */}

        <div className="space-y-10 md:space-y-14">

          {mainCharacters.map((character) => (

            <article
              key={character.name}
              className="group relative overflow-hidden rounded-[40px]"
            >

              <Image
                src={character.image}
                alt={character.name}
                width={1800}
                height={900}
                className="
                  h-[420px]
                  sm:h-[520px]
                  lg:h-[600px]

                  w-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.04]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 lg:p-16">

                <h3
                  className="
                    font-[family-name:var(--font-cormorant)]

                    text-5xl
                    sm:text-6xl
                    lg:text-7xl

                    text-[#F5F1EB]
                  "
                >
                  {character.name}
                </h3>

                <p
                  className="
                    mt-5

                    text-base
                    sm:text-lg

                    italic

                    text-[#D9C8B7]
                  "
                >
                  {character.traits}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* Personnages secondaires */}

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {secondaryCharacters.map((character) => (

            <article
              key={character.name}
              className="group relative overflow-hidden rounded-[32px]"
            >

              <Image
                src={character.image}
                alt={character.name}
                width={900}
                height={700}
                className="
                  h-[320px]
                  sm:h-[340px]

                  w-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.04]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <h3
                  className="
                    font-[family-name:var(--font-cormorant)]

                    text-4xl
                    sm:text-5xl

                    text-[#F5F1EB]
                  "
                >
                  {character.name}
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    sm:text-base

                    italic
                    leading-relaxed

                    text-[#D9C8B7]
                  "
                >
                  {character.traits}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}