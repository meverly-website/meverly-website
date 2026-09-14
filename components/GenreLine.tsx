/**
 * La ligne de genre du roman, partagée par la fiche technique (page du roman)
 * et la section « Le roman » de l'accueil, qui n'en porte que cette ligne.
 * Chaque mention reste d'un tenant : la ligne ne se coupe qu'entre elles.
 */

type GenreLineProps = {
  className?: string;
};

export default function GenreLine({ className = "" }: GenreLineProps) {
  return (
    <p className={`text-[0.7rem] uppercase tracking-[0.28em] text-text/80 sm:text-xs ${className}`}>
      <span className="whitespace-nowrap">Romance contemporaine</span>
      {" · "}
      <span className="whitespace-nowrap">M/M</span>
      {" · "}
      <span className="whitespace-nowrap">Slow burn</span>
    </p>
  );
}
