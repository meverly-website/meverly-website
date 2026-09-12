import Container from "./Container";
import StarDivider from "./StarDivider";

/**
 * À propos. Section volontairement calme : aucune animation, aucun visuel,
 * du texte resserré et beaucoup de noir.
 */

export default function AboutSection() {
  return (
    <section id="a-propos" className="relative scroll-mt-24 py-28 md:py-40">

      <Container>

        <div className="mx-auto max-w-2xl">

          <StarDivider className="mb-14 justify-start" />

          <p
            className="
              font-serif
              text-3xl
              font-light
              italic
              leading-[1.35]
              text-text
              sm:text-4xl
              lg:text-5xl
            "
          >
            Je crois aux histoires
            <br />
            qui réparent un peu
            <br />
            ceux qui les lisent.
          </p>

          <p className="mt-14 text-base leading-9 text-muted sm:text-lg">
            À celles qui parlent de reconstruction, de confiance, de secondes
            chances et de l&apos;amour sous toutes ses formes. J&apos;écris des
            histoires où les émotions comptent autant que les mots.
          </p>

          <div className="mt-16">

            <span
              aria-hidden="true"
              className="mb-6 block h-px w-14 bg-gold/40"
            />

            <p className="font-serif text-2xl italic text-gold sm:text-3xl">
              — Meverly
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}
