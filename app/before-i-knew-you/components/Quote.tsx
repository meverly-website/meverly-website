export default function Quote() {
  return (
    <section className="px-6 py-28 md:py-40">

      <div className="mx-auto max-w-5xl">

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-20 bg-[#C99A63]/40" />

        {/* Citation */}

        <blockquote
          className="
            text-center

            font-[family-name:var(--font-cormorant)]

            text-3xl
            sm:text-4xl
            lg:text-5xl

            italic
            leading-relaxed

            text-[#E7DDD2]
          "
        >
          « Parfois, aimer quelqu'un,
          c'est simplement lui rappeler
          qu'il mérite encore d'être heureux. »
        </blockquote>

        {/* Signature */}

        <div className="mt-14 flex flex-col items-center">

          <span className="mb-5 h-px w-16 bg-[#C99A63]/40" />

          <p
            className="
              uppercase

              tracking-[0.45em]

              text-xs
              sm:text-sm

              text-[#C99A63]
            "
          >
            Before I Knew You
          </p>

        </div>

      </div>

    </section>
  );
}