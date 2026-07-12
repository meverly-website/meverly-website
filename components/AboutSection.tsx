import Image from "next/image";
import Container from "./Container";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0E0B0B] py-24 md:py-40"
    >
      <Container>

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-24 bg-[#C99A63]/40" />

        {/* Carte */}

        <div className="relative overflow-hidden rounded-3xl">

          <div className="relative h-[520px] sm:h-[620px] lg:h-[720px]">

            {/* Image */}

            <Image
              src="/about.jpg"
              alt="L'univers de Meverly"
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

            {/* Contenu */}

            <div className="absolute inset-0 flex items-center">

              <div
                className="
                  max-w-xl

                  px-8
                  sm:px-12
                  lg:px-20
                "
              >

                {/* Citation */}

                <p
                  className="
                    font-[family-name:var(--font-cormorant)]

                    text-3xl
                    sm:text-4xl
                    lg:text-5xl

                    italic
                    leading-relaxed

                    text-[#F5F1EB]
                  "
                >
                  Je crois aux histoires
                  <br />
                  qui réparent un peu
                  <br />
                  ceux qui les lisent.
                </p>

                {/* Texte */}

                <p
                  className="
                    mt-10

                    text-base
                    sm:text-lg

                    leading-8
                    sm:leading-9

                    text-[#F5F1EB]/90
                  "
                >
                  À celles qui parlent de reconstruction,
                  de confiance,
                  de secondes chances
                  et de l'amour sous toutes ses formes.
                </p>

                <p
                  className="
                    mt-6

                    text-base
                    sm:text-lg

                    leading-8
                    sm:leading-9

                    text-[#F5F1EB]/90
                  "
                >
                  J'écris des histoires où les émotions
                  comptent autant que les mots.
                </p>

                {/* Signature */}

                <div className="mt-12 flex flex-col">

                  <span
                    className="
                      mb-4

                      h-px
                      w-16

                      bg-[#C99A63]/50
                    "
                  />

                  <p
                    className="
                      font-[family-name:var(--font-cormorant)]

                      text-2xl
                      sm:text-3xl

                      italic

                      text-[#C99A63]
                    "
                  >
                    — Meverly
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}