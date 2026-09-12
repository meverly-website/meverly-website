import StickyNav from "@/components/StickyNav";
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

      <main className="relative text-text">

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

      <Footer />
    </>
  );
}
