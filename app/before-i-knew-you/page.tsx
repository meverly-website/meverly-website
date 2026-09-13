import StickyNav from "@/components/StickyNav";
import ThreadSection from "@/components/ThreadSection";
import { BOOK_THREAD } from "@/lib/threads";
import Hero from "./components/Hero";
import Synopsis from "./components/Synopsis";
import Themes from "./components/Themes";
import Characters from "./components/Characters";
import Quote from "./components/Quote";
import Footer from "@/components/Footer";

/*
 * La page utilise la navigation du site plutôt qu'une barre propre : le §8 ne
 * définit qu'un seul système de navigation, et l'ancienne BookNavbar en
 * dupliquait un second, dans l'ancienne palette.
 *
 * Le fil de l'accueil se poursuit ici, section par section : il accompagne le
 * synopsis, se resserre à hauteur des personnages et s'éteint après la
 * citation. Une continuation, pas un second nouage.
 */

export default function BeforeIKnewYouPage() {
  return (
    <>
      <StickyNav />

      <main className="text-text">

        <ThreadSection thread={BOOK_THREAD.hero}>
          <Hero />
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.synopsis}>
          <section id="synopsis" className="scroll-mt-28">
            <Synopsis />
          </section>
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.themes}>
          <section id="themes" className="scroll-mt-28">
            <Themes />
          </section>
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.personnages}>
          <section id="characters" className="scroll-mt-28">
            <Characters />
          </section>
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.citation}>
          <section id="quote" className="scroll-mt-28">
            <Quote />
          </section>
        </ThreadSection>

      </main>

      <Footer />
    </>
  );
}
