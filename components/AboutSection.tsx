import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import StarDivider from "./StarDivider";

/**
 * Le mot de l'autrice, en clôture de page.
 *
 * Registre factuel : qui écrit, quoi, pourquoi. Pas une seconde envolée après
 * celle du Hero — Inter pour le corps, Cormorant réservé à la signature.
 *
 * Centré, comme le reste du site. Le fil rouge descend à droite des
 * paragraphes puis revient s'éteindre sous la signature : c'est cet ancrage
 * qui referme la page, à défaut de portrait.
 */

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="relative scroll-mt-24 pb-20 pt-16 md:pb-24 md:pt-20 xl:pb-36 xl:pt-32"
    >

      <Container>

        {/*
          Une phrase en deux temps, une ligne chacun. Le bloc est un peu plus
          large que le reste pour que la seconde tienne sur une seule ligne dès
          la tablette ; sur mobile elle se replie, l'écran est trop étroit.
        */}

        <RevealOnScroll className="mx-auto max-w-2xl text-center">

          <StarDivider className="mb-12" />

          <p className="text-base leading-9 text-muted sm:text-lg">
            <span className="block">Certaines histoires parlent d’amour.</span>
            <span className="block">
              Les miennes parlent aussi de ce qu’il faut pour oser y croire
              encore.
            </span>
          </p>

          <div className="mt-14">

            <span
              aria-hidden="true"
              className="mx-auto mb-6 block h-px w-14 bg-gold/40"
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
