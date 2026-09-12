import Button from "./Button";
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

        <RevealOnScroll className="mt-24 flex justify-center">

          <Button variant="ghost" href="/before-i-knew-you#characters">
            Tous les personnages
          </Button>

        </RevealOnScroll>

      </Container>

    </section>
  );
}
