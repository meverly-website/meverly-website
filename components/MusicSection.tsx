import Button from "./Button";
import Container from "./Container";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import SoundWave from "./SoundWave";
import { SPOTIFY_URL } from "@/lib/site";

/**
 * La musique du roman.
 *
 * Le titre seul, sans surtitre « Univers musical » (retiré à la demande de
 * l'autrice, comme dans la fiche technique). Le lien Spotify reste un simple
 * bouton sortant : pas de lecteur intégré.
 */

export default function MusicSection() {
  return (
    <section id="musique" className="relative scroll-mt-24 pb-10 pt-16 md:pb-14 md:pt-24 xl:pb-24 xl:pt-40">

      <Container>

        <RevealOnScroll>
          <SectionHeading title="Ce qu'ils écoutent" />
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mt-12 max-w-2xl text-center">

          <p className="font-serif text-xl italic leading-relaxed text-muted sm:text-2xl">
            Les morceaux qui ont accompagné l&apos;écriture de cette histoire,
            inspiré certaines scènes et façonné son atmosphère.
          </p>

        </RevealOnScroll>

        {/* L'onde, dans le langage de la couverture. */}

        <RevealOnScroll slow className="mt-14 md:mt-16 xl:mt-24">

          <div className="relative mx-auto h-40 max-w-4xl sm:h-52">
            <SoundWave />
          </div>

        </RevealOnScroll>

        <RevealOnScroll className="mt-12 flex justify-center md:mt-14 xl:mt-20">

          <Button variant="secondary" href={SPOTIFY_URL} external>
            Écouter la playlist
          </Button>

        </RevealOnScroll>

      </Container>

    </section>
  );
}
