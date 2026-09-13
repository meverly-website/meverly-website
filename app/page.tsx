import StickyNav from "@/components/StickyNav";
import ThreadLine from "@/components/ThreadLine";
import Hero from "@/components/Hero";
import Breath from "@/components/Breath";
import BookSection from "@/components/BookSection";
import CharactersSection from "@/components/CharactersSection";
import PullQuote from "@/components/PullQuote";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { HOME_THREAD } from "@/lib/threads";

export default function Home() {
  return (
    <>
      <StickyNav />

      {/* Le fil traverse toute la page, derrière le contenu. */}

      <div className="relative">

        <ThreadLine thread={HOME_THREAD} />

        <main className="relative z-10">

          <Hero />

          <Breath />

          <BookSection />

          <CharactersSection />

          {/*
            Trois temps, trois lignes : chaque souffle a la sienne. L'ancienne
            citation reste en clôture de la page du roman — les deux pages ne
            portent pas la même.
          */}

          <PullQuote source="Before I Knew You">
            <span className="block">&laquo; Pas invincible.</span>
            <span className="mt-6 block md:mt-9">Pas complètement guéri.</span>
            <span className="mt-6 block text-balance md:mt-9">
              Mais suffisamment fort pour continuer d&apos;avancer. &raquo;
            </span>
          </PullQuote>

          <MusicSection />

          <AboutSection />

        </main>

        <div className="relative z-10">
          <Footer />
        </div>

      </div>
    </>
  );
}
