import Link from "next/link";
import CharacterCard from "./CharacterCard";
import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

/**
 * Ezra et Sasha seulement : les cinq personnages secondaires restent
 * réservés à la page du roman.
 *
 * Le décalage vertical des deux colonnes reprend la diagonale de la
 * couverture, main claire d'un côté, silhouette sombre de l'autre.
 */

export default function CharactersSection() {
  return (
    <section
      id="personnages"
      className="relative scroll-mt-24 py-28 md:py-40"
    >

      <Container>

        <RevealOnScroll>
          <SectionHeading eyebrow="Les personnages" title="Eux deux" />
        </RevealOnScroll>

        <div
          className="
            mt-24
            grid
            gap-20
            md:grid-cols-2
            md:gap-14
            lg:gap-20
          "
        >

          <RevealOnScroll slow className="md:mt-24">

            <CharacterCard
              name="Ezra"
              traits="Réservé · Patient · Calme"
              description="Reclus depuis des années, il compose sous un pseudonyme, derrière l'écran qui le protège du monde."
              image="/characters/ezra.jpg"
              tone="dark"
            />

          </RevealOnScroll>

          <RevealOnScroll slow>

            <CharacterCard
              name="Sasha"
              traits="Lumineux · Énergique · Loyal"
              description="Un seul rêve, vivre de la musique — et l'incapacité d'abandonner ceux qu'il aime."
              image="/characters/sasha.jpg"
              tone="light"
            />

          </RevealOnScroll>

        </div>

        {/*
          Pas de bouton : une ligne, dont les prénoms sont le lien. Niveau
          tertiaire — texte seul et trait qui s'allonge au survol, comme les
          autres liens du site, mais dans la typographie de la phrase plutôt
          qu'en capitales d'interface. Le fil rouge vient s'y arrêter.
        */}

        <RevealOnScroll className="mt-24 text-center">

          <p className="font-serif text-xl font-light italic leading-relaxed text-muted sm:text-2xl">
            Ils ne sont pas seuls :{" "}
            <Link
              href="/before-i-knew-you#characters"
              aria-label="Noah, Gabriel, Liam, Adam et Félix — tous les personnages du roman"
              className="group text-text transition-colors duration-500 hover:text-gold"
            >
              Noah, Gabriel, Liam,{" "}
              <span className="whitespace-nowrap">
                Adam et Félix
                <span
                  aria-hidden="true"
                  className="btn-trail ml-3 align-middle"
                />
              </span>
            </Link>
          </p>

        </RevealOnScroll>

      </Container>

    </section>
  );
}
