import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const AMAZON_LINK = "#AMAZON-LINK";

export default function BookSection() {
  return (
    <section
      id="books"
      className="bg-[#0E0B0B] py-24 md:py-40"
    >
      <Container>

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-24 bg-[#C99A63]/40" />

        {/* Carte */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
          "
        >

          <div className="relative h-[520px] sm:h-[620px] lg:h-[760px]">

            {/* Image */}

            <Image
              src="/booksection.jpg"
              alt="Before I Knew You"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              className="
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.04]
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

            {/* Contenu */}

            <div
              className="
                absolute
                inset-0

                flex
                items-center

                justify-center
                lg:justify-start

                px-8
                sm:px-12
                lg:px-20
              "
            >

              <div className="max-w-xl text-center lg:text-left">

                {/* Phrase */}

                <p
                  className="
                    font-[family-name:var(--font-cormorant)]

                    text-3xl
                    sm:text-4xl
                    lg:text-5xl

                    italic
                    leading-relaxed

                    text-[#F5F1EB]

                    transition
                    duration-500

                    group-hover:text-white
                  "
                >
                  Parfois,
                  <br />
                  une seule personne
                  <br />
                  suffit à changer
                  <br />
                  toute une histoire.
                </p>

                {/* Actions */}

                <div
                  className="
                    mt-12
                    flex
                    flex-col
                    items-center
                    gap-5
                    lg:items-start
                  "
                >

                  {/* Lien vers la page du roman */}

                  <Link
                    href="/before-i-knew-you"
                    className="
                      inline-flex
                      items-center
                      gap-3

                      text-sm
                      uppercase
                      tracking-[0.35em]

                      text-[#C99A63]

                      transition-all
                      duration-300

                      hover:text-white
                      hover:tracking-[0.45em]
                    "
                  >
                    Découvrir le roman

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  {/* Acheter */}

                  <a
                    href={AMAZON_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-3

                      rounded-full

                      border
                      border-[#C99A63]

                      bg-[#C99A63]/10

                      px-7
                      py-4

                      text-xs
                      uppercase
                      tracking-[0.25em]

                      text-[#F5F1EB]

                      backdrop-blur-sm

                      transition-all
                      duration-300

                      hover:bg-[#C99A63]
                      hover:text-[#0E0B0B]
                      hover:shadow-[0_10px_35px_rgba(201,154,99,0.25)]
                    "
                  >
                    Acheter le roman

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}