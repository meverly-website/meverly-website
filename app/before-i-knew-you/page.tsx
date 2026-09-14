import type { Metadata } from "next";
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

/*
 * Adresse canonique propre : sans elle, la page hérite de celle du layout
 * (l'accueil) et passe pour un doublon auprès des moteurs. Titre, description
 * et partage restent ceux du site.
 */

export const metadata: Metadata = {
  alternates: {
    canonical: "https://meverly.fr/before-i-knew-you",
  },
};

export default function BeforeIKnewYouPage() {
  return (
    <>
      <StickyNav />

      <main className="text-text">

        <ThreadSection thread={BOOK_THREAD.hero} wide>
          <Hero />
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.synopsis} wide>
          <section id="synopsis" className="scroll-mt-28">
            <Synopsis />
          </section>
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.themes} wide>
          <section id="themes" className="scroll-mt-28">
            <Themes />
          </section>
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.personnages} wide>
          <section id="characters" className="scroll-mt-28">
            <Characters />
          </section>
        </ThreadSection>

        <ThreadSection thread={BOOK_THREAD.citation} wide>
          <section id="quote" className="scroll-mt-28">
            <Quote />
          </section>
        </ThreadSection>

      </main>

      <Footer />
    </>
  );
}
