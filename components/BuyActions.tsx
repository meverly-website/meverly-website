import Link from "next/link";
import Button from "./Button";
import { BUY_EBOOK_URL, BUY_PAPERBACK_URL } from "@/lib/site";

/**
 * Les actions du roman : acheter (broché, e-book) et lire un extrait.
 *
 * Un seul niveau fort par écran : jamais trois pastilles or côte à côte.
 * L'achat forme un seul groupe, sous un intitulé, les deux éditions en
 * boutons secondaires de même poids — pas d'or plein : désactivé, il
 * attirerait l'œil vers une action impossible.
 *
 * « Lire un extrait » est tertiaire par son poids visuel, pas par son
 * importance — pour une autrice qu'on découvre, c'est souvent le premier
 * clic, et tant que les éditions ne sont pas en vente, la seule action
 * possible. Il vient donc juste sous l'achat, en grand, avec de l'air.
 */

type BuyActionsProps = {
  /** Lien vers l'extrait (absent sur la page de l'extrait elle-même). */
  withExtract?: boolean;
  /** « responsive » : centré tant que la page est empilée, à gauche en deux colonnes. */
  align?: "left" | "center" | "responsive";
  className?: string;
};

const ALIGN = {
  left: { text: "", row: "" },
  center: { text: "text-center", row: "justify-center" },
  responsive: { text: "text-center lg:text-left", row: "justify-center lg:justify-start" },
};

export default function BuyActions({
  withExtract = true,
  align = "left",
  className = "",
}: BuyActionsProps) {
  return (
    <div className={`${ALIGN[align].text} ${className}`}>

      <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
        Acheter le roman
      </p>

      <div className={`mt-5 flex flex-wrap gap-4 ${ALIGN[align].row}`}>
        <Edition href={BUY_PAPERBACK_URL}>Broché</Edition>
        <Edition href={BUY_EBOOK_URL}>E-book</Edition>
      </div>

      <Availability />

      {withExtract && (
        <div className="mt-8">

          <Link
            href="/before-i-knew-you/extrait"
            className="group inline-flex items-center gap-5 font-serif text-3xl font-light italic text-text transition-colors duration-500 hover:text-gold"
          >
            Lire un extrait
            <span aria-hidden="true" className="btn-trail" />
          </Link>

          <p className="mt-3 text-sm text-muted">
            Le premier chapitre, en entier.
          </p>

        </div>
      )}

    </div>
  );
}

function Edition({
  href,
  children,
}: {
  href: string | null;
  children: React.ReactNode;
}) {
  return (
    <Button variant="secondary" href={href ?? "#"} external disabled={!href}>
      {children}
    </Button>
  );
}

/* Ce qui n'est pas encore en vente est dit une fois, sous les boutons. */

function Availability() {
  const missing = [
    !BUY_PAPERBACK_URL && "broché",
    !BUY_EBOOK_URL && "e-book",
  ].filter(Boolean);

  if (missing.length === 0) return null;

  return (
    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted">
      {missing.length === 2
        ? "Bientôt disponible"
        : `Édition ${missing[0]} bientôt disponible`}
    </p>
  );
}
