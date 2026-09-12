import StickyNav from "@/components/StickyNav";
import ThreadLine from "@/components/ThreadLine";
import Hero from "@/components/Hero";
import Breath from "@/components/Breath";
import BookSection from "@/components/BookSection";
import CharactersSection from "@/components/CharactersSection";
import PullQuote from "@/components/PullQuote";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StickyNav />

      {/* Le fil traverse toute la page, derrière le contenu. */}

      <div className="relative">

        <ThreadLine variant="desktop" />
        <ThreadLine variant="mobile" />

        <main className="relative z-10">

          <Hero />

          <Breath />

          <BookSection />

          <CharactersSection />

          <PullQuote source="Before I Knew You">
            &laquo; Parfois, aimer quelqu&apos;un, c&apos;est simplement lui
            rappeler qu&apos;il mérite encore d&apos;être heureux. &raquo;
          </PullQuote>

          <MusicSection />

          <AboutSection />

          <FinalCta />

        </main>

        <div className="relative z-10">
          <Footer />
        </div>

      </div>
    </>
  );
}
