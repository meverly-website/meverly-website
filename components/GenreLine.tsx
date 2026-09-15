/**
 * La ligne de genre du roman, partagée par la fiche technique (page du roman)
 * et la section « Le roman » de l'accueil, qui n'en porte que cette ligne.
 * Chaque mention reste d'un tenant. Sous 640 px, la ligne ne tient pas : elle
 * passe sur deux lignes fixes (« Romance contemporaine » / « M/M · Slow
 * burn ») plutôt que de laisser un point médian pendre en fin de ligne.
 */

type GenreLineProps = {
  className?: string;
};

export default function GenreLine({ className = "" }: GenreLineProps) {
  return (
    <p className={`text-[0.7rem] uppercase leading-6 tracking-[0.28em] text-text/80 sm:text-xs ${className}`}>
      <span className="block whitespace-nowrap sm:inline">Romance contemporaine</span>
      <span className="hidden sm:inline"> · </span>
      <span className="whitespace-nowrap">M/M</span>
      {" · "}
      <span className="whitespace-nowrap">Slow burn</span>
    </p>
  );
}
