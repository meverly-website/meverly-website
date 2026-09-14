/**
 * « Thèmes sensibles abordés » : un avertissement facile à trouver, qui ne
 * dramatise pas la page.
 *
 * Replié par défaut, avec un <details> natif (aucun JavaScript) : certaines
 * lectrices veulent la liste, d'autres préfèrent ne rien savoir à l'avance —
 * le contenu n'est jamais visible sans une action de leur part. Registre de
 * la fiche technique : discret, crème secondaire, ni rouge (réservé au fil),
 * ni pictogramme d'alerte, ni fond coloré.
 *
 * Le marqueur natif est remplacé par un chevron fin qui pivote à
 * l'ouverture ; le résumé garde le focus visible du site, et s'ouvre au
 * clavier (Entrée, Espace) comme tout <summary>.
 */

type SensitiveThemesProps = {
  /** La liste du roman, dans lib/books.ts. */
  themes: readonly string[];
  className?: string;
};

/* Espaces insécables : « 24 h/24 » et « 7 j/7 » ne se coupent pas en fin de ligne. */
const NBSP = " ";

export default function SensitiveThemes({ themes, className = "" }: SensitiveThemesProps) {
  return (
    <details className={`group ${className}`}>

      <summary
        className="
          mx-auto
          flex
          w-fit
          cursor-pointer
          list-none
          items-center
          gap-3
          py-2
          text-xs
          uppercase
          tracking-[0.25em]
          text-muted
          transition-colors
          duration-500
          hover:text-text
          [&::-webkit-details-marker]:hidden
        "
      >
        Thèmes sensibles abordés

        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className="h-2.5 w-2.5 text-gold/70 transition-transform duration-500 group-open:rotate-180"
        >
          <path d="M1.5 4 6 8.5 10.5 4" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </summary>

      <div className="mt-6 text-left">

        <p className="text-sm leading-7 text-muted">
          Ce roman aborde des sujets qui peuvent heurter. Si vous préférez les
          découvrir en lisant, vous pouvez refermer cette section.
        </p>

        <ul className="mt-5 list-none space-y-2.5 text-sm leading-6 text-muted">
          {themes.map((theme) => (
            <li key={theme} className="flex gap-4">
              <span aria-hidden="true" className="mt-3 block h-px w-3 shrink-0 bg-gold/50" />
              <span>{theme}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs leading-6 text-muted/70">
          Si l&apos;un de ces sujets vous touche personnellement, le{" "}
          <a
            href="tel:3114"
            className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-text"
          >
            3114
          </a>
          , numéro national de prévention du suicide, est joignable gratuitement,
          {` 24${NBSP}h/24 et 7${NBSP}j/7.`}
        </p>

      </div>

    </details>
  );
}
