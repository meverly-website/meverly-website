import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section
        className="
          relative
          flex
          h-[60vh]
          min-h-[520px]
          items-center
          justify-center
          overflow-hidden
          sm:h-[62vh]
          lg:h-[65vh]
        "
      >

        {/* Image */}

        <Image
          src="/hero.jpg"
          alt="Meverly"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55" />

        {/* Contenu */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            px-6
            pt-10
            text-center
          "
        >

          {/* Nom */}

          <h1
            className="
              font-[family-name:var(--font-cormorant)]
              text-5xl
              tracking-[0.15em]
              text-[#F5F1EB]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              lg:tracking-[0.22em]
            "
          >
            MEVERLY
          </h1>

          {/* Citation */}

          <div className="mt-7 sm:mt-9 lg:mt-10">

            <p
              className="
                font-[family-name:var(--font-cormorant)]
                text-xl
                italic
                leading-relaxed
                text-[#F5F1EB]
                sm:text-2xl
                lg:text-3xl
              "
            >
              L'amour ne guérit pas tout.
            </p>

            <p
              className="
                mt-2
                font-[family-name:var(--font-cormorant)]
                text-xl
                italic
                leading-relaxed
                text-[#F5F1EB]
                sm:mt-3
                sm:text-2xl
                lg:text-3xl
              "
            >
              Mais parfois, il offre une raison de recommencer.
            </p>

          </div>

          {/* Petit repère visuel */}

          <div className="mx-auto mt-9 h-px w-12 bg-[#C99A63]/60 sm:mt-11" />

        </div>

      </section>
    </>
  );
}