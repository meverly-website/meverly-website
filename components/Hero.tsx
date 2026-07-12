import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="relative flex h-[75vh] sm:h-[80vh] lg:h-[85vh] items-center justify-center overflow-hidden">

        <Image
          src="/hero.jpg"
          alt="Meverly"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

          <h1
            className="
              font-[family-name:var(--font-cormorant)]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl

              tracking-[0.15em]
              sm:tracking-[0.20em]
              md:tracking-[0.25em]

              text-[#F5F1EB]
            "
          >
            MEVERLY
          </h1>

          <div className="mt-10 sm:mt-14 lg:mt-16">

            <p
              className="
                font-[family-name:var(--font-cormorant)]
                text-2xl
                sm:text-3xl
                lg:text-4xl
                italic
                leading-relaxed
                text-[#F5F1EB]
              "
            >
              L'amour ne guérit pas tout.
            </p>

            <p
              className="
                mt-4
                sm:mt-6

                font-[family-name:var(--font-cormorant)]
                text-2xl
                sm:text-3xl
                lg:text-4xl
                italic
                leading-relaxed
                text-[#F5F1EB]
              "
            >
              Mais parfois, il offre une raison de recommencer.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}