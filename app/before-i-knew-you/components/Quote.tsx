import StarDivider from "@/components/StarDivider";
export default function Quote() {
  return (
    <section className="px-6 py-20 md:py-28 xl:py-40">

      <div className="mx-auto max-w-5xl">

        {/* Séparateur */}

        <StarDivider className="mb-16" />

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

            text-[#CFC4B8]
          "
        >
          « Parfois, aimer quelqu&apos;un,
          c&apos;est simplement lui rappeler
          qu&apos;il mérite encore d&apos;être heureux. »
        </blockquote>

        {/* Signature */}

        <div className="mt-14 flex flex-col items-center">

          <span className="mb-5 h-px w-16 bg-[#EFC17E]/40" />

          <p
            className="
              uppercase

              tracking-[0.45em]

              text-xs
              sm:text-sm

              text-[#EFC17E]
            "
          >
            Before I Knew You
          </p>

        </div>

      </div>

    </section>
  );
}