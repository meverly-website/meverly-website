import Image from "next/image";
import StarDivider from "@/components/StarDivider";

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

/*
 * `sizes` : largeur réellement dessinée, pas celle de la carte. Les images
 * sont recadrées (object-cover) dans des cartes plus hautes que leur ratio :
 * une carte principale de 420 px de haut dessine une image de 840 px de large,
 * même sur un écran de 360. Les valeurs sont plafonnées pour qu'un téléphone
 * reçoive une version de 1080 à 1920 px, et non de 3840 comme sans `sizes`.
 */

export default function Characters() {
  return (
    <section className="px-6 py-16 md:py-24 xl:py-36">

      <div className="mx-auto max-w-7xl">

        {/* Séparateur */}

        <StarDivider className="mb-16" />

        {/* Personnages principaux */}

        <div className="space-y-10 md:space-y-14">

          {mainCharacters.map((character) => (

            <article
              key={character.name}
              className="group relative overflow-hidden rounded-[4px]"
            >

              <Image
                src={character.image}
                alt={character.name}
                width={1800}
                height={900}
                sizes="(max-width: 639px) 640px, (max-width: 1023px) 800px, 1232px"
                className="
                  h-[420px]
                  sm:h-[520px]
                  lg:h-[600px]

                  w-full
                  object-cover

                  transition-transform
                  duration-700


                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-black/20 to-transparent" />

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

                    text-[#CFC4B8]
                  "
                >
                  {character.traits}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* Personnages secondaires */}

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14 xl:mt-20 xl:grid-cols-3">

          {secondaryCharacters.map((character) => (

            <article
              key={character.name}
              className="group relative overflow-hidden rounded-[4px]"
            >

              <Image
                src={character.image}
                alt={character.name}
                width={900}
                height={700}
                sizes="(max-width: 639px) 380px, 480px"
                className="
                  h-[320px]
                  sm:h-[340px]

                  w-full
                  object-cover

                  transition-transform
                  duration-700


                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-black/25 to-transparent" />

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

                    text-[#CFC4B8]
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