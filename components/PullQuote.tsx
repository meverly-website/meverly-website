import RevealOnScroll from "./RevealOnScroll";
import StarDivider from "./StarDivider";

/**
 * La citation, en très grand et isolée, juste après le Hero : elle donne le
 * ton avant le roman. Le nœud du fil n'est plus ici mais chez les
 * personnages, qu'il relie.
 */

type PullQuoteProps = {
  children: React.ReactNode;
  source?: string;
};

export default function PullQuote({ children, source }: PullQuoteProps) {
  return (
    <section className="relative px-6 py-16 md:py-24 xl:py-36">

      <RevealOnScroll slow className="mx-auto max-w-4xl">

        <StarDivider className="mb-16" />

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
          <p className="mt-16 text-center text-[0.65rem] uppercase tracking-[0.45em] text-gold">
            {source}
          </p>
        )}

      </RevealOnScroll>

    </section>
  );
}
