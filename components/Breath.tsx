import RevealOnScroll from "./RevealOnScroll";

/**
 * Respiration. Une phrase, seule, beaucoup de noir autour :
 * le rythme retombe après le Hero.
 */

export default function Breath() {
  return (
    <section className="relative px-6 py-24 md:py-28">

      <RevealOnScroll className="mx-auto max-w-3xl text-center">

        <p
          className="
            font-serif
            text-3xl
            font-light
            italic
            leading-[1.4]
            text-text
            md:text-4xl
            lg:text-5xl
          "
        >
          L&apos;amour ne guérit pas tout.
          <br />
          Mais parfois, il offre une raison de recommencer.
        </p>

      </RevealOnScroll>

    </section>
  );
}
