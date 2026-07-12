import BookNavbar from "./components/BookNavbar";
import Hero from "./components/Hero";
import Synopsis from "./components/Synopsis";
import Themes from "./components/Themes";
import Characters from "./components/Characters";
import Quote from "./components/Quote";
import Footer from "@/components/Footer";

export default function BeforeIKnewYouPage() {
  return (
    <>
      <BookNavbar />

      <main className="bg-[#0E0B0B] text-[#F5F1EB]">
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