"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { BUY_URL, INSTAGRAM_URL } from "@/lib/site";

/**
 * Navigation du site.
 *
 * Transparente au-dessus du Hero, puis barre fine et floutée une fois la
 * première hauteur d'écran passée. La bascule est détectée par un
 * IntersectionObserver sur une sentinelle haute d'un écran — jamais par un
 * listener de scroll recalculé à chaque frame.
 */

/*
 * Instagram remplace Contact : la page de contact est supprimée, et c'est
 * désormais le canal assumé. Il tient aussi la navigation à quatre entrées,
 * qui paraissait dégarnie à trois.
 */

const LINKS = [
  { href: "/before-i-knew-you", label: "Roman", external: false },
  { href: "/#personnages", label: "Personnages", external: false },
  { href: "/#musique", label: "Musique", external: false },
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
];

const DESKTOP_LINK =
  "btn-underline relative py-1 text-[0.7rem] uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold";

const MOBILE_LINK =
  "font-serif text-4xl font-light text-text transition-colors hover:text-gold";

export default function StickyNav() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = sentinel.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCondensed(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  /* Menu plein écran : on gèle le défilement et on ferme à l'échappement. */

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>

      {/* Sentinelle : haute d'un écran, à partir du haut du document. */}

      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-screen w-px"
      />

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-[background-color,border-color,backdrop-filter]
          duration-500
          ${
            condensed
              ? "border-b border-gold/10 bg-ink/70 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }
        `}
      >

        <div
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            gap-6
            px-6
            transition-[height]
            duration-500
            lg:px-10
            ${condensed ? "h-16" : "h-24"}
          `}
        >

          {/* Signature — se réduit au monogramme une fois condensée. */}

          <Link
            href="/"
            aria-label="Meverly, accueil"
            className="relative block shrink-0 font-serif text-xl tracking-[0.3em] text-text transition-colors hover:text-gold"
          >

            <span
              className={`block transition-opacity duration-500 ${
                condensed ? "opacity-0" : "opacity-100"
              }`}
            >
              MEVERLY
            </span>

            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 transition-opacity duration-500 ${
                condensed ? "opacity-100" : "opacity-0"
              }`}
            >
              M
            </span>

          </Link>

          {/* ================= DESKTOP ================= */}

          <nav className="hidden items-center gap-7 md:flex lg:gap-10">

            {LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={DESKTOP_LINK}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={DESKTOP_LINK}>
                  {link.label}
                </Link>
              )
            )}

          </nav>

          {/*
            Contour or plutôt qu'or plein : le bouton d'achat de la navbar est
            permanent, il ne doit pas concurrencer le primary de la page —
            un seul or plein par écran.
          */}

          <div className="hidden shrink-0 lg:block">

            <Button
              variant="secondary"
              href={BUY_URL ?? "#"}
              external
              disabled={!BUY_URL}
              className="px-6 py-3 text-[0.65rem]"
            >
              {BUY_URL ? "Acheter" : "Bientôt"}
            </Button>

          </div>

          {/* ================= MOBILE ================= */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-end text-text transition-colors hover:text-gold md:hidden"
          >

            <span aria-hidden="true" className="flex flex-col items-end gap-[6px]">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </span>

          </button>

        </div>

      </header>

      {/* ================= MENU PLEIN ÉCRAN ================= */}

      <div
        hidden={!open}
        className="fixed inset-0 z-[60] bg-ink/97 backdrop-blur-2xl md:hidden"
      >

        <div className="flex h-full flex-col px-6 py-7">

          <div className="flex items-center justify-between">

            <span className="font-serif text-xl tracking-[0.3em] text-text">
              MEVERLY
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="flex h-10 w-10 items-center justify-end text-text transition-colors hover:text-gold"
            >

              <span aria-hidden="true" className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-px w-5 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-px w-5 -rotate-45 bg-current" />
              </span>

            </button>

          </div>

          <nav className="mt-16 flex flex-col gap-8">

            {LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={MOBILE_LINK}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={MOBILE_LINK}
                >
                  {link.label}
                </Link>
              )
            )}

          </nav>

          <div className="mt-auto flex flex-col gap-8 pb-4">

            <Button
              variant="primary"
              href={BUY_URL ?? "#"}
              external
              disabled={!BUY_URL}
              className="w-full"
            >
              {BUY_URL ? "Acheter le roman" : "Bientôt disponible"}
            </Button>

          </div>

        </div>

      </div>

    </>
  );
}
