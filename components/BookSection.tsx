import Button from "./Button";
import BuyActions from "./BuyActions";
import Container from "./Container";
import CoverShowcase from "./CoverShowcase";
import RevealOnScroll from "./RevealOnScroll";
import GenreLine from "./GenreLine";
import SectionHeading from "./SectionHeading";
import { EXTRACT_HREF, IS_RELEASED, PRE_RELEASE_NOTE } from "@/lib/site";

/*
 * overflow-x-clip : entre 1024 et ~1340 px de large, la couverture touche le
 * bord droit de la colonne et son halo (64 px) dépassait de l'écran, ce qui
 * créait un défilement horizontal. `clip` coupe ce débordement sans créer de
 * zone de défilement.
 */

export default function BookSection() {
  return (
    <section id="roman" className="relative scroll-mt-24 overflow-x-clip pb-14 pt-10 md:pb-20 md:pt-14 xl:pb-28 xl:pt-20">

      <Container>

        <div
          className="
            grid
            items-center
            gap-10
            md:gap-12
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

            {/*
              La ligne de genre seule : la fiche détaillée (pages, formats,
              langue) reste sur la page du roman.
            */}

            <GenreLine className="mt-8" />

            {/*
              La hiérarchie suit la sortie (IS_RELEASED) : avant, l'extrait
              en or plein et l'achat en simple mention ; après, l'achat passe
              devant. Le groupe d'achat est celui de la page du roman
              (BuyActions) : on achète depuis l'accueil, sans détour, et les
              deux pages proposent toujours les mêmes éditions.
              « Découvrir le roman » reste secondaire dans les deux cas.
            */}

            {IS_RELEASED ? (
              <>

                <BuyActions withExtract={false} align="left" className="mt-12" />

                <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">

                  <Button variant="secondary" href="/before-i-knew-you">
                    Découvrir le roman
                  </Button>

                  <Button variant="ghost" href={EXTRACT_HREF}>
                    Lire un extrait
                  </Button>

                </div>

              </>
            ) : (
              <>

                <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">

                  <Button variant="primary" href={EXTRACT_HREF}>
                    Lire un extrait
                  </Button>

                  <Button variant="secondary" href="/before-i-knew-you">
                    Découvrir le roman
                  </Button>

                </div>

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted">
                  {PRE_RELEASE_NOTE}
                </p>

              </>
            )}

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
