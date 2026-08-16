import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const AMAZON_LINK = "#AMAZON-LINK";

export default function BookSection() {
  return (
    <section
      id="books"
      className="relative overflow-hidden bg-[#0E0B0B] py-28 md:py-40"
    >
      {/* Halo lumineux */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-1/2
          h-[600px]
          w-[600px]
          -translate-y-1/2
          rounded-full
          bg-[#C99A63]/5
          blur-[120px]
        "
      />

      <Container>

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-24 bg-[#C99A63]/40" />

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1fr_0.8fr]
            lg:gap-24
          "
        >

          {/* ================= TEXTE ================= */}

          <div className="order-2 text-center lg:order-1 lg:text-left">

            <p
              className="
                text-sm
                uppercase
                tracking-[0.45em]
                text-[#C99A63]
              "
            >
              Le roman
            </p>

            <h2
              className="
                mt-6
                font-[family-name:var(--font-cormorant)]
                text-5xl
                leading-[0.95]
                text-[#F5F1EB]
                sm:text-6xl
                md:text-7xl
              "
            >
              Before I Knew You
            </h2>

            <p
              className="
                mt-6
                font-[family-name:var(--font-cormorant)]
                text-2xl
                italic
                text-[#D9C8B7]
                md:text-3xl
              "
            >
              L'amour qui reconstruit.
            </p>

            <div className="mt-10 h-px w-20 bg-[#C99A63]/40 mx-auto lg:mx-0" />

            <p
              className="
                mx-auto
                mt-10
                max-w-lg
                font-[family-name:var(--font-cormorant)]
                text-2xl
                italic
                leading-relaxed
                text-[#E7DDD2]
                md:text-3xl
                lg:mx-0
              "
            >
              Parfois, une seule personne suffit à
              changer toute une histoire.
            </p>

            {/* Boutons */}

            <div
              className="
                mt-12
                flex
                flex-col
                items-center
                gap-4
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >

              <Link
                href="/before-i-knew-you"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#C99A63]/60
                  px-7
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#F5F1EB]
                  transition-all
                  duration-300
                  hover:bg-[#C99A63]
                  hover:text-[#0E0B0B]
                "
              >
                Découvrir le roman
                <span>→</span>
              </Link>

              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#C99A63]
                  px-7
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#0E0B0B]
                  transition-all
                  duration-300
                  hover:bg-[#F5F1EB]
                "
              >
                Acheter le roman
                <span>→</span>
              </a>

            </div>

          </div>

          {/* ================= COUVERTURE ================= */}

          <div className="order-1 flex justify-center lg:order-2">

            <Link
              href="/before-i-knew-you"
              className="group relative block"
            >

              {/* Halo derrière */}

              <div
                className="
                  absolute
                  inset-8
                  rounded-full
                  bg-[#C99A63]/10
                  blur-[80px]
                  transition
                  duration-700
                  group-hover:bg-[#C99A63]/20
                "
              />

              {/* Couverture */}

              <div
                className="
                  relative
                  w-[260px]
                  overflow-hidden
                  shadow-[0_30px_80px_rgba(0,0,0,0.65)]
                  transition-all
                  duration-700
                  group-hover:-translate-y-3
                  group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]
                  sm:w-[320px]
                  md:w-[360px]
                "
              >

                <Image
                  src="/cover.jpg"
                  alt="Couverture de Before I Knew You"
                  width={1024}
                  height={1536}
                  priority
                  sizes="
                    (max-width: 640px) 260px,
                    (max-width: 768px) 320px,
                    360px
                  "
                  className="
                    h-auto
                    w-full
                    object-cover
                  "
                />

              </div>

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}