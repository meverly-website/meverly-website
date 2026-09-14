import StickyNav from "@/components/StickyNav";
import ThreadSection from "@/components/ThreadSection";
import Hero from "@/components/Hero";
import PullQuote from "@/components/PullQuote";
import BookSection from "@/components/BookSection";
import CharactersSection from "@/components/CharactersSection";
import MusicSection from "@/components/MusicSection";
import StoryInvite from "@/components/StoryInvite";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { HOME_THREAD } from "@/lib/threads";

/*
 * Chaque section porte son morceau de fil rouge (ThreadSection) : le fil naît
 * dans le Hero, se noue une seule fois chez les personnages — les deux qu'il
 * relie — et s'éteint sous la signature de l'autrice.
 */

export default function Home() {
  return (
    <>
      <StickyNav />

      <main>

        <ThreadSection thread={HOME_THREAD.hero}>
          <Hero />
        </ThreadSection>

        {/*
          Trois temps, trois lignes : chaque souffle a la sienne. L'ancienne
          citation reste en clôture de la page du roman — les deux pages ne
          portent pas la même.
        */}

        <ThreadSection thread={HOME_THREAD.citation}>
          <PullQuote source="Before I Knew You">
            <span className="block">&laquo; Pas invincible.</span>
            <span className="block">Pas complètement guéri.</span>
            <span className="block text-balance">
              Mais suffisamment fort pour continuer d&apos;avancer. &raquo;
            </span>
          </PullQuote>
        </ThreadSection>

        <ThreadSection thread={HOME_THREAD.roman}>
          <BookSection />
        </ThreadSection>

        <ThreadSection thread={HOME_THREAD.personnages}>
          <CharactersSection />
        </ThreadSection>

        <ThreadSection thread={HOME_THREAD.musique}>
          <MusicSection />
        </ThreadSection>

        <ThreadSection thread={HOME_THREAD.histoire}>
          <StoryInvite />
        </ThreadSection>

        <ThreadSection thread={HOME_THREAD.auteur}>
          <AboutSection />
        </ThreadSection>

      </main>

      <Footer />
    </>
  );
}
