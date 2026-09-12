import Link from "next/link";
import { INSTAGRAM_URL } from "@/lib/site";

const NAV = [
  { href: "/before-i-knew-you", label: "Roman" },
  { href: "/#personnages", label: "Personnages" },
  { href: "/#musique", label: "Musique" },
  { href: "/#a-propos", label: "À propos" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 px-6 py-20 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">

          {/* Signature */}

          <div>

            <Link
              href="/"
              className="font-serif text-3xl tracking-[0.3em] text-text transition-colors hover:text-gold"
            >
              MEVERLY
            </Link>

            <p className="mt-8 max-w-xs font-serif text-lg italic leading-relaxed text-muted">
              Some stories find us when we need them most.
            </p>

          </div>

          {/* Navigation */}

          <nav className="flex flex-col gap-4">

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="btn-underline relative w-fit py-1 text-[0.7rem] uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Liens sortants */}

          <div className="flex flex-col gap-4">

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-underline relative w-fit py-1 text-[0.7rem] uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold"
            >
              Instagram
            </a>

            <Link
              href="/mentions-legales"
              className="btn-underline relative w-fit py-1 text-[0.7rem] uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold"
            >
              Mentions légales
            </Link>

          </div>

        </div>

        <div className="mt-20 border-t border-gold/10 pt-8">

          <p className="text-xs tracking-[0.15em] text-muted/60">
            © {new Date().getFullYear()} Meverly — Tous droits réservés.
          </p>

        </div>

      </div>

    </footer>
  );
}
