import Link from "next/link";
import Button from "./Button";
import { BUY_EBOOK_URL, BUY_PAPERBACK_URL } from "@/lib/site";

/**
 * Les actions du roman : acheter (broché, e-book) et lire un extrait.
 *
 * Un seul niveau fort par écran : jamais trois pastilles or côte à côte.
 * « Lire un extrait » est tertiaire par son poids visuel, pas par son
 * importance — pour une autrice qu'on découvre, c'est souvent le premier
 * clic, et tant que les éditions ne sont pas en vente, la seule action
 * possible. Il vient donc juste sous l'achat, en grand, avec de l'air.
 *
 * Deux arrangements, en attente d'arbitrage :
 *   A — l'achat en un seul groupe, les deux éditions en boutons de même poids ;
 *   B — broché en primaire, e-book en secondaire.
 */

export const BUY_LAYOUT: "A" | "B" = "A";

type BuyActionsProps = {
  /** Lien vers l'extrait (absent sur la page de l'extrait elle-même). */
  withExtract?: boolean;
  align?: "left" | "center";
  className?: string;
};

export default function BuyActions({
  withExtract = true,
  align = "left",
  className = "",
}: BuyActionsProps) {
  const centered = align === "center";
  const row = `flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`;

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>

      {BUY_LAYOUT === "A" ? (
        <div>

          <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
            Acheter le roman
          </p>

          <div className={`mt-6 ${row}`}>
            <Edition href={BUY_PAPERBACK_URL} variant="secondary">
              Broché
            </Edition>
            <Edition href={BUY_EBOOK_URL} variant="secondary">
              E-book
            </Edition>
          </div>

        </div>
      ) : (
        <div className={row}>
          <Edition href={BUY_PAPERBACK_URL} variant="primary">
            Acheter le roman
          </Edition>
          <Edition href={BUY_EBOOK_URL} variant="secondary">
            Acheter l&apos;e-book
          </Edition>
        </div>
      )}

      <Availability />

      {withExtract && (
        <div className="mt-14">

          <Link
            href="/before-i-knew-you/extrait"
            className="group inline-flex items-center gap-5 font-serif text-3xl font-light italic text-text transition-colors duration-500 hover:text-gold sm:text-4xl"
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
  variant,
  children,
}: {
  href: string | null;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) {
  return (
    <Button variant={variant} href={href ?? "#"} external disabled={!href}>
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
