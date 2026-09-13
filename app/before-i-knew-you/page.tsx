import StickyNav from "@/components/StickyNav";
import ThreadLine from "@/components/ThreadLine";
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
 */

export default function BeforeIKnewYouPage() {
  return (
    <>
      <StickyNav />

      {/*
        Le fil de l'accueil se poursuit ici : il accompagne le synopsis, se
        resserre à hauteur des personnages et s'éteint après la citation.
        Une continuation, pas un second nouage.
      */}

      <div className="relative">

        <ThreadLine thread={BOOK_THREAD} />

        <main className="relative z-10 text-text">

          <Hero />

          <section id="synopsis" className="scroll-mt-28">
            <Synopsis />
          </section>

          <section id="themes" className="scroll-mt-28">
            <Themes />
          </section>

          <section id="characters" className="scroll-mt-28">
            <Characters />
          </section>

          <section id="quote" className="scroll-mt-28">
            <Quote />
          </section>

        </main>

        <div className="relative z-10">
          <Footer />
        </div>

      </div>
    </>
  );
}
