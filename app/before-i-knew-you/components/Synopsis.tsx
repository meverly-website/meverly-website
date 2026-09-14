import ExtractLink from "@/components/ExtractLink";
import SensitiveThemes from "@/components/SensitiveThemes";
import StarDivider from "@/components/StarDivider";
import { BEFORE_I_KNEW_YOU } from "@/lib/books";

/**
 * Le résumé, après le bloc de décision : une colonne de lecture d'environ
 * 65 signes, avec sa lettrine. Il se termine par une seule porte vers le
 * premier chapitre, le même bouton encadré que dans le bloc de décision — la
 * seule action répétée sur la page.
 */

export default function Synopsis() {
  return (
    <section className="px-6 py-14 md:py-20 xl:py-28">

      <div className="mx-auto max-w-[34em] text-base sm:text-lg">

        <StarDivider className="mb-12" />

        <div className="space-y-7 leading-8 text-muted sm:leading-9">

          <p className="first-letter:float-left first-letter:mr-[0.1em] first-letter:mt-[0.08em] first-letter:font-serif first-letter:text-[3.6em] first-letter:leading-[0.8] first-letter:text-gold">
            À vingt-cinq ans, Ezra vit reclus depuis des années. Marqué par les
            violences homophobes qu&apos;il a subies et le rejet de sa famille, il
            s&apos;est réfugié dans la musique, composant sous un pseudonyme derrière
            l&apos;écran qui le protège du monde.
          </p>

          <p>
            À vingt et un ans, Sasha poursuit un seul rêve : vivre de sa passion
            pour la musique. Lorsqu&apos;il découvre les compositions d&apos;un mystérieux
            producteur connu sous le nom d&apos;E.02, il décide de lui écrire, sans
            imaginer que ce simple message changera leur vie.
          </p>

          <p>
            Au fil de leurs échanges, une complicité inattendue naît entre eux.
            Derrière les silences d&apos;Ezra, Sasha découvre un homme profondément
            blessé, tandis qu&apos;Ezra retrouve peu à peu le goût d&apos;espérer grâce à ce
            jeune musicien incapable d&apos;abandonner ceux qu&apos;il aime.
          </p>

          <p>
            Mais lorsque la frontière entre leur amitié et leurs sentiments
            commence à s&apos;effacer, le passé d&apos;Ezra menace de tout faire voler en
            éclats. Car certaines blessures ne disparaissent pas simplement parce
            qu&apos;on rencontre la bonne personne.
          </p>

        </div>

        {/* Signature et porte vers le chapitre, centrées : la fin du résumé. */}

        <div className="mt-14 text-center">

          <span aria-hidden="true" className="mx-auto mb-6 block h-px w-16 bg-gold/40" />

          <p className="text-balance font-serif text-2xl italic leading-relaxed text-muted sm:text-3xl">
            Une histoire de reconstruction, de musique et d&apos;amour.
          </p>

          {/* Pour qui vient de finir le résumé : une seule porte, vers le chapitre. */}

          <div className="mt-10">
            <ExtractLink>Lire le premier chapitre</ExtractLink>
          </div>

        </div>

        {/* Après le résumé, jamais dans le bloc de décision : ce n'est pas ce qui aide à choisir. */}

        <SensitiveThemes themes={BEFORE_I_KNEW_YOU.sensitiveThemes} className="mt-12" />

      </div>

    </section>
  );
}
