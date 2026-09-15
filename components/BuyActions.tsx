import Button from "./Button";
import ExtractLink from "./ExtractLink";
import {
  BUY_EBOOK_URL,
  BUY_PAPERBACK_URL,
  IS_RELEASED,
  PRE_RELEASE_NOTE,
} from "@/lib/site";

/**
 * Les actions du roman : lire un extrait, acheter (broché, e-book).
 *
 * Un seul or plein par écran, et jamais sur une action impossible. La
 * hiérarchie suit IS_RELEASED :
 *
 * - avant la sortie, « Lire un extrait » est l'action principale ; l'achat
 *   n'est qu'une mention discrète, sans bouton désactivé qui attirerait l'œil
 *   vers ce qu'on ne peut pas faire ;
 * - après la sortie, les éditions en vente passent devant, la première en or
 *   plein, et l'extrait devient secondaire. Une édition encore absente n'a
 *   pas de bouton : une ligne dit qu'elle arrive.
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

const EDITIONS = [
  { label: "Broché", href: BUY_PAPERBACK_URL },
  { label: "E-book", href: BUY_EBOOK_URL },
];

const NOTE = "text-xs uppercase tracking-[0.25em] text-muted";

export default function BuyActions({
  withExtract = true,
  align = "left",
  className = "",
}: BuyActionsProps) {
  const extract = withExtract && (
    <div>

      <ExtractLink />

      <p className="mt-3 text-sm text-muted">
        Le premier chapitre, en entier.
      </p>

    </div>
  );

  if (!IS_RELEASED) {
    return (
      <div className={`${ALIGN[align].text} ${className}`}>
        {extract}
        <p className={`${withExtract ? "mt-7" : ""} ${NOTE}`}>{PRE_RELEASE_NOTE}</p>
      </div>
    );
  }

  const onSale = EDITIONS.filter((edition) => edition.href);
  const missing = EDITIONS.find((edition) => !edition.href);

  return (
    <div className={`${ALIGN[align].text} ${className}`}>

      <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
        Acheter le roman
      </p>

      <div className={`mt-5 flex flex-wrap gap-4 ${ALIGN[align].row}`}>
        {onSale.map((edition, index) => (
          <Button
            key={edition.label}
            variant={index === 0 ? "primary" : "secondary"}
            href={edition.href ?? undefined}
            external
          >
            {edition.label}
          </Button>
        ))}
      </div>

      {missing && (
        <p className={`mt-4 ${NOTE}`}>
          Édition {missing.label.toLowerCase()} bientôt disponible
        </p>
      )}

      {extract && <div className="mt-8">{extract}</div>}

    </div>
  );
}
