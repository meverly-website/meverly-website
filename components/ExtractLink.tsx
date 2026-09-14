import Link from "next/link";

/**
 * Le lien vers le premier chapitre, en bouton encadré : filet or plein et
 * texte en italique, plus visible que les boutons d'achat encore désactivés,
 * puisque c'est l'action ouverte dès aujourd'hui. Jamais d'or plein — un seul
 * par écran, réservé à l'achat.
 */

type ExtractLinkProps = {
  children?: React.ReactNode;
};

export default function ExtractLink({ children = "Lire un extrait" }: ExtractLinkProps) {
  return (
    <Link
      href="/before-i-knew-you/extrait"
      className="
        group
        inline-flex
        items-center
        gap-5
        rounded-edge
        border
        border-gold
        px-6
        py-3.5
        font-serif
        text-[1.35rem]
        sm:px-8
        sm:text-2xl
        font-light
        italic
        text-text
        transition-colors
        duration-500
        hover:bg-gold/10
        hover:text-gold
      "
    >
      {children}
      <span aria-hidden="true" className="btn-trail" />
    </Link>
  );
}
