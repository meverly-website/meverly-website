import StarDivider from "@/components/StarDivider";

/*
 * La citation de clôture. Sa source est une attribution collée à la
 * citation (tiret, titre de l'œuvre), comme sur l'accueil : en capitales
 * dorées sous un filet, elle flottait comme une étiquette.
 */

export default function Quote() {
  return (
    <section className="px-6 py-20 md:py-28 xl:py-40">

      <div className="mx-auto max-w-5xl">

        {/* Séparateur */}

        <StarDivider className="mb-16" />

        <figure>

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

          <figcaption className="mt-6 text-center font-serif text-lg italic text-muted sm:text-xl md:mt-8">
            —&nbsp;<cite>Before I Knew You</cite>
          </figcaption>

        </figure>

      </div>

    </section>
  );
}
