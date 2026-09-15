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
    <footer className="relative border-t border-gold/10 px-6 py-14 md:py-16 lg:px-10 xl:py-20">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-12 md:flex-row md:gap-16 md:items-start md:justify-between">

          {/* Signature : le nom seul, sans devise (retirée à la demande de l'autrice). */}

          <div>

            <Link
              href="/"
              className="font-serif text-3xl tracking-[0.3em] text-text transition-colors hover:text-gold"
            >
              MEVERLY
            </Link>

          </div>

          {/* Navigation */}

          {/*
            Sur mobile, chaque lien est une cible de 36 px espacée de 8 :
            assez pour le doigt, sans changer le rythme de la liste.
          */}

          <nav className="flex flex-col gap-2 md:gap-4">

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="btn-underline relative w-fit py-2.5 text-[0.7rem] md:py-1 uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Liens sortants */}

          <div className="flex flex-col gap-2 md:gap-4">

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-underline relative w-fit py-2.5 text-[0.7rem] md:py-1 uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold"
            >
              Instagram
            </a>

            <Link
              href="/mentions-legales"
              className="btn-underline relative w-fit py-2.5 text-[0.7rem] md:py-1 uppercase tracking-[0.3em] text-muted transition-colors hover:text-gold"
            >
              Mentions légales
            </Link>

          </div>

        </div>

        <div className="mt-14 border-t border-gold/10 pt-8 md:mt-16 xl:mt-20">

          <p className="text-xs tracking-[0.15em] text-muted/60">
            © {new Date().getFullYear()} Meverly — Tous droits réservés.
          </p>

        </div>

      </div>

    </footer>
  );
}
