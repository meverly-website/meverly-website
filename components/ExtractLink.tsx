import Link from "next/link";
import { EXTRACT_HREF, IS_RELEASED } from "@/lib/site";

/**
 * Le lien vers le premier chapitre, en bouton : texte en italique, dans la
 * typographie de la lecture.
 *
 * Son poids suit la sortie du roman (IS_RELEASED) : tant que rien n'est en
 * vente, c'est l'action principale du site, en or plein — la seule sur son
 * écran. Dès que l'achat ouvre, il redevient secondaire, filet or sans fond,
 * et l'or plein revient à l'achat.
 */

type ExtractLinkProps = {
  children?: React.ReactNode;
};

const WEIGHT = IS_RELEASED
  ? "border-gold font-light text-text hover:bg-gold/10 hover:text-gold"
  : "border-gold bg-gold font-normal text-background hover:border-text hover:bg-text";

export default function ExtractLink({ children = "Lire un extrait" }: ExtractLinkProps) {
  return (
    <Link
      href={EXTRACT_HREF}
      className={`
        group
        inline-flex
        items-center
        gap-5
        rounded-edge
        border
        px-6
        py-3.5
        font-serif
        text-[1.35rem]
        sm:px-8
        sm:text-2xl
        italic
        transition-colors
        duration-500
        ${WEIGHT}
      `}
    >
      {children}
      <span aria-hidden="true" className="btn-trail" />
    </Link>
  );
}
