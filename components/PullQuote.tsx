import RevealOnScroll from "./RevealOnScroll";
import StarDivider from "./StarDivider";

/**
 * La citation, en très grand et isolée, juste après le Hero : elle donne le
 * ton avant le roman. Le nœud du fil n'est plus ici mais chez les
 * personnages, qu'il relie.
 *
 * La source est une attribution (tiret, titre de l'œuvre) collée à la
 * citation : isolée en capitales dorées loin en dessous, elle flottait comme
 * une étiquette sans rapport.
 */

type PullQuoteProps = {
  children: React.ReactNode;
  source?: string;
};

export default function PullQuote({ children, source }: PullQuoteProps) {
  return (
    <section className="relative px-6 pb-10 pt-14 md:pb-14 md:pt-20 xl:pb-20 xl:pt-28">

      <RevealOnScroll slow className="mx-auto max-w-4xl">

        <StarDivider className="mb-12 md:mb-14" />

        <figure>

          <blockquote
            className="
              text-center
              font-serif
              text-3xl
              font-light
              italic
              leading-relaxed
              text-text
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {children}
          </blockquote>

          {source && (
            <figcaption className="mt-6 text-center font-serif text-lg italic text-muted sm:text-xl md:mt-8">
              —&nbsp;<cite>{source}</cite>
            </figcaption>
          )}

        </figure>

      </RevealOnScroll>

    </section>
  );
}
