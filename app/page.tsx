import Hero from "@/components/Hero";
import BookSection from "@/components/BookSection";
import PlaylistSection from "@/components/PlaylistSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BookSection />
      <PlaylistSection />
      <AboutSection />
      <Footer />
    </>
  );
}