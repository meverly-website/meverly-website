import Button from "./Button";
import Container from "./Container";
import CoverShowcase from "./CoverShowcase";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { BUY_LABEL, BUY_URL } from "@/lib/site";

const THEMES = [
  "Reconstruction",
  "Santé mentale",
  "Musique",
  "Famille de cœur",
  "Slow Burn",
  "Romance M/M",
];

/*
 * overflow-x-clip : entre 1024 et ~1340 px de large, la couverture touche le
 * bord droit de la colonne et son halo (64 px) dépassait de l'écran, ce qui
 * créait un défilement horizontal. `clip` coupe ce débordement sans créer de
 * zone de défilement.
 */

export default function BookSection() {
  return (
    <section id="roman" className="relative scroll-mt-24 overflow-x-clip py-20 md:py-28">

      <Container>

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1fr_auto]
            lg:gap-24
          "
        >

          {/* ================= TEXTE ================= */}

          <RevealOnScroll className="order-2 lg:order-1">

            <SectionHeading
              eyebrow="Le roman"
              title="Before I Knew You"
              align="left"
            />

            <p className="mt-8 max-w-lg text-base leading-8 text-muted sm:text-lg sm:leading-9">
              Ezra vit reclus depuis des années et compose sous un pseudonyme,
              derrière l&apos;écran qui le protège du monde. Sasha, lui, ne
              poursuit qu&apos;un rêve : vivre de la musique. Un simple message
              suffira à changer leur vie.
            </p>

            {/* Thèmes, en bordures fines. */}

            <ul className="mt-10 flex flex-wrap gap-3">

              {THEMES.map((theme) => (
                <li
                  key={theme}
                  className="
                    rounded-edge
                    border
                    border-gold/20
                    px-4
                    py-2
                    text-[0.65rem]
                    uppercase
                    tracking-[0.2em]
                    text-muted
                  "
                >
                  {theme}
                </li>
              ))}

            </ul>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">

              <Button
                variant="primary"
                href={BUY_URL ?? "#"}
                external
                disabled={!BUY_URL}
              >
                {BUY_LABEL}
              </Button>

              <Button variant="secondary" href="/before-i-knew-you">
                Découvrir le roman
              </Button>

            </div>

          </RevealOnScroll>

          {/* ================= COUVERTURE ================= */}

          <RevealOnScroll
            slow
            className="order-1 flex justify-center lg:order-2"
          >
            <CoverShowcase />
          </RevealOnScroll>

        </div>

      </Container>

    </section>
  );
}
