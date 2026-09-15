import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import StarDivider from "./StarDivider";
import { INSTAGRAM_URL } from "@/lib/site";

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
      className="relative scroll-mt-24 pb-20 pt-10 md:pb-24 md:pt-14 xl:pb-36 xl:pt-24"
    >

      <Container>

        {/*
          Trois paragraphes : qui elle est, ce qu'elle écrit, le premier roman.
          text-pretty évite qu'un mot reste seul en fin de paragraphe centré.
        */}

        <RevealOnScroll className="mx-auto max-w-2xl text-center">

          <StarDivider className="mb-12" />

          <div className="space-y-6 text-pretty text-base leading-8 text-muted sm:text-lg sm:leading-9">
            <p>
              Je suis Meverly, autrice indépendante et amoureuse des histoires
              qui prennent le temps de laisser leurs personnages se
              reconstruire.
            </p>
            <p>
              J’écris sur les liens qui se créent quand on ne les attend plus,
              les blessures qui ne disparaissent pas en un claquement de doigts,
              les familles que l’on choisit et les secondes chances que l’on
              s’accorde.
            </p>
            <p>Before I Knew You est mon premier roman.</p>
          </div>

          <div className="mt-14">

            <span
              aria-hidden="true"
              className="mx-auto mb-6 block h-px w-14 bg-gold/40"
            />

            <p className="font-serif text-2xl italic text-gold sm:text-3xl">
              — Meverly
            </p>

          </div>

          {/*
            L'invitation Instagram vit ici plutôt qu'en section à part : un
            lien simple (aucune intégration, aucun script), qui referme le mot
            de l'autrice sans répéter une section juste au-dessus du footer.
          */}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-500 hover:text-gold sm:tracking-[0.25em]"
          >
            @meverlybooks sur Instagram
            <span aria-hidden="true" className="btn-trail" />
          </a>

        </RevealOnScroll>

      </Container>

    </section>
  );
}
