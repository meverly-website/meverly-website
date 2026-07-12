import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[65vh] sm:h-[72vh] lg:h-[80vh] items-center justify-center overflow-hidden">

      {/* Image */}

      <Image
        src="/bookhero.jpg"
        alt="Before I Knew You"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-[#0E0B0B]" />

      {/* Contenu */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        {/* Ligne */}

        <div className="mx-auto mb-8 h-px w-16 bg-[#C99A63]/50 sm:mb-10 sm:w-24" />

        {/* Titre */}

        <h1
          className="
            font-[family-name:var(--font-cormorant)]

            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[7rem]

            leading-[0.9]
            tracking-[0.05em]

            text-[#F5F1EB]
          "
        >
          BEFORE I
          <br />
          KNEW YOU
        </h1>

        {/* Citation */}

        <p
          className="
            mx-auto
            mt-8

            font-[family-name:var(--font-cormorant)]

            text-lg
            sm:text-2xl
            md:text-3xl

            italic
            text-[#D9C8B7]
          "
        >
          Tu n'as pas besoin d'être fort tout le temps
        </p>

        {/* Ligne */}

        <div className="mx-auto mt-10 h-px w-12 bg-[#C99A63]/40 sm:w-16" />

      </div>

      {/* Dégradé bas */}

      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-[#0E0B0B] to-transparent sm:h-36 lg:h-40" />

    </section>
  );
}