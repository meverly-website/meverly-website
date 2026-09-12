import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import StarDivider from "./StarDivider";

/**
 * Le mot de l'autrice, en clôture de page.
 *
 * Registre factuel : qui écrit, quoi, pourquoi. Pas une seconde envolée après
 * celle du Hero — Inter pour le corps, Cormorant réservé à la signature.
 *
 * Le bloc est calé à gauche : la moitié droite reste libre pour que le fil
 * rouge vienne y descendre et s'y éteindre, à hauteur de la signature. C'est
 * cet ancrage qui referme la page, à défaut de portrait.
 */

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="relative scroll-mt-24 pb-28 pt-24 md:pb-36 md:pt-32"
    >

      <Container>

        <RevealOnScroll className="max-w-xl">

          <StarDivider className="mb-12 justify-start" />

          <p className="text-base leading-9 text-muted sm:text-lg">
            À celles qui parlent de reconstruction, de confiance, de secondes
            chances et de l&apos;amour sous toutes ses formes.
          </p>

          <p className="mt-7 text-base leading-9 text-muted sm:text-lg">
            J&apos;écris des histoires où les émotions comptent autant que les
            mots.
          </p>

          <div className="mt-14">

            <span
              aria-hidden="true"
              className="mb-6 block h-px w-14 bg-gold/40"
            />

            <p className="font-serif text-2xl italic text-gold sm:text-3xl">
              — Meverly
            </p>

          </div>

        </RevealOnScroll>

      </Container>

    </section>
  );
}
