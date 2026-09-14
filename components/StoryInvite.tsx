import ExtractLink from "./ExtractLink";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

/**
 * « Entrez dans l'histoire » : l'accès au premier chapitre depuis l'accueil,
 * avant le mot de l'autrice. Le même bouton encadré que sur la page du roman.
 */

export default function StoryInvite() {
  return (
    <section id="histoire" className="relative scroll-mt-24 py-16 md:py-20 xl:py-32">

      <RevealOnScroll className="mx-auto max-w-3xl px-6 text-center">

        <SectionHeading eyebrow="Le premier chapitre" title="Entrez dans l'histoire" />

        <div className="mt-12">
          <ExtractLink />
        </div>

        <p className="mt-3 text-sm text-muted">
          Le premier chapitre, en entier.
        </p>

      </RevealOnScroll>

    </section>
  );
}
