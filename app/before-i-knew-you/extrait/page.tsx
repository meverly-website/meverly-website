import type { Metadata } from "next";
import Button from "@/components/Button";
import BuyActions from "@/components/BuyActions";
import Footer from "@/components/Footer";
import StarDivider from "@/components/StarDivider";
import StickyNav from "@/components/StickyNav";
import { readChapter, type Inline } from "@/lib/chapter";
import { IS_RELEASED } from "@/lib/site";

/**
 * « Lire un extrait » : le premier chapitre, en entier.
 *
 * Une page de lecture, pas une page de site : colonne d'environ 65 signes,
 * corps plus grand qu'ailleurs et en rem (la taille de police du navigateur
 * est respectée), texte en crème et non justifié, paragraphes au rythme
 * régulier. Pas de fil rouge : un motif animé dans la marge gênerait la
 * lecture.
 *
 * Le texte vit dans content/before-i-knew-you/chapitre-1.md : l'autrice le
 * corrige là, sans toucher à cette page.
 */

const DESCRIPTION =
  "Le premier chapitre de Before I Knew You, la romance M/M contemporaine de Meverly, à lire en entier.";

export const metadata: Metadata = {
  title: "Lire le premier chapitre de Before I Knew You",
  description: DESCRIPTION,
  alternates: {
    canonical: "https://meverly.fr/before-i-knew-you/extrait",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://meverly.fr/before-i-knew-you/extrait",
    siteName: "Meverly",
    title: "Lire le premier chapitre de Before I Knew You — Meverly",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1734,
        height: 907,
        alt: "Meverly — Before I Knew You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lire le premier chapitre de Before I Knew You — Meverly",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

function Text({ content }: { content: Inline[] }) {
  return content.map((part, index) =>
    part.em ? <em key={index}>{part.text}</em> : part.text
  );
}

export default function ExtraitPage() {
  const chapter = readChapter("before-i-knew-you", "chapitre-1");
  const firstParagraph = chapter.blocks.findIndex((block) => block.type === "paragraph");

  return (
    <>
      <StickyNav />

      <main className="px-6 text-text">

        {/* ================= TITRE ================= */}

        <header className="mx-auto max-w-3xl pb-16 pt-36 text-center md:pb-20 md:pt-44">

          <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
            Before I Knew You
          </p>

          <h1 className="mt-8 font-serif text-5xl font-light leading-none tracking-[0.02em] sm:text-6xl">
            {chapter.title}
          </h1>

          <StarDivider className="mt-12" />

        </header>

        {/* ================= CHAPITRE ================= */}

        {/*
          La largeur est en em, pour suivre la taille du texte : 25,5em de
          Cormorant font environ 65 signes par ligne (mesuré), à toutes les
          tailles. Sur téléphone, c'est l'écran qui limite, vers 40 signes.
        */}

        <article
          className="
            mx-auto
            max-w-[25.5em]
            font-serif
            text-[1.3rem]
            leading-[1.75]
            text-text
            sm:text-[1.4rem]
            lg:text-[1.5rem]
          "
        >

          {chapter.blocks.map((block, index) => {
            if (block.type === "break") {
              return (
                <StarDivider
                  key={index}
                  size={12}
                  className="my-[2.2em]"
                />
              );
            }

            if (block.type === "message") {
              return (
                <div
                  key={index}
                  className="my-[1.4em] border-l border-gold/30 pl-[1em] font-sans text-[0.8em] leading-[1.7] text-muted"
                >
                  {block.lines.map((line, lineIndex) => (
                    <p key={lineIndex}>
                      <Text content={line} />
                    </p>
                  ))}
                </div>
              );
            }

            const lettrine = index === firstParagraph;

            return (
              <p
                key={index}
                className={`
                  mb-[0.85em]
                  ${
                    lettrine
                      ? "first-letter:float-left first-letter:mr-[0.08em] first-letter:mt-[0.06em] first-letter:text-[3.4em] first-letter:leading-[0.8] first-letter:text-gold"
                      : ""
                  }
                `}
              >
                <Text content={block.content} />
              </p>
            );
          })}

        </article>

        {/* ================= LA SUITE ================= */}

        <section className="mx-auto max-w-2xl pb-24 pt-28 text-center md:pb-32 md:pt-36">

          <StarDivider className="mb-14" />

          <p className="text-xs uppercase tracking-[0.4em] text-gold sm:text-sm">
            La suite commence au chapitre 2
          </p>

          <p className="mt-6 font-serif text-4xl font-light italic leading-tight sm:text-5xl">
            Prêt·e à rencontrer Ezra&nbsp;?
          </p>

          <p className="mt-10 text-base leading-8 text-muted sm:text-lg">
            {IS_RELEASED
              ? "Before I Knew You est disponible en broché et en ebook."
              : "Before I Knew You paraîtra en broché et en ebook."}
          </p>

          {/* Chaque mention reste d'un tenant ; seules les séparations passent à la ligne. */}

          <p className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted/70">
            <span className="whitespace-nowrap">570 pages</span>
            <span className="whitespace-nowrap">Slow burn M/M</span>
            {/* Séparateur du site : le point médian, partout (voir la fiche technique). */}
            <span className="whitespace-nowrap">Musique · Reconstruction</span>
          </p>

          <BuyActions withExtract={false} align="center" className="mt-14" />

          <div className="mt-14">
            <Button variant="ghost" href="/before-i-knew-you">
              Revenir au roman
            </Button>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
