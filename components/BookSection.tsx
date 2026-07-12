import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

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

        <Link
          href="/before-i-knew-you"
          className="
            group
            relative
            block
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

                {/* Invitation */}

                <div
                  className="
                    mt-14

                    flex
                    flex-col

                    items-center
                    lg:items-start
                  "
                >

                  <span
                    className="
                      mb-5

                      h-px
                      w-16

                      bg-[#C99A63]/50

                      transition-all
                      duration-500

                      group-hover:w-28
                      group-hover:bg-[#C99A63]
                    "
                  />

                  <span
                    className="
                      uppercase

                      tracking-[0.45em]

                      text-sm

                      text-[#C99A63]

                      transition-all
                      duration-500

                      group-hover:text-white
                      group-hover:tracking-[0.55em]
                    "
                  >
                    Explorer
                  </span>

                </div>

              </div>

            </div>

          </div>

        </Link>

      </Container>
    </section>
  );
}