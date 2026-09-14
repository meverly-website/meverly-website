import GenreLine from "./GenreLine";
import { IS_RELEASED } from "@/lib/site";

/**
 * Fiche technique du roman, dans l'esprit d'une fiche d'éditeur : une
 * information de référence, pas un argument de vente. Elle reste discrète et
 * ne concurrence ni la couverture ni les boutons.
 *
 * L'en-tête (le genre) est d'une autre nature que les données qui suivent :
 * il passe légèrement au-dessus, elles en niveau tertiaire.
 */

const FACTS = [
  "570 pages",
  /* Même donnée que les liens d'achat : pas de disponibilité annoncée avant la sortie. */
  IS_RELEASED ? "Broché & numérique" : "À paraître en broché & numérique",
  "Roman en français",
];

type BookFactsProps = {
  className?: string;
};

export default function BookFacts({ className = "" }: BookFactsProps) {
  return (
    <div className={className}>

      <GenreLine />

      <span
        aria-hidden="true"
        className="mx-auto my-4 block h-px w-10 bg-gold/40 lg:mx-0 lg:my-5"
      />

      {/*
        Empilée à côté de la couverture ; sur la page empilée (téléphone,
        tablette), les données se suivent sur une ou deux lignes, séparées par
        le point médian, pour que les actions restent hautes.
      */}

      <ul className="flex list-none flex-wrap justify-center gap-y-1 text-sm leading-6 text-muted lg:block lg:space-y-1.5">
        {FACTS.map((fact, index) => (
          <li key={fact} className="whitespace-nowrap lg:whitespace-normal">
            {fact}
            {index < FACTS.length - 1 && (
              <span aria-hidden="true" className="mx-2.5 text-gold/50 lg:hidden">·</span>
            )}
          </li>
        ))}
      </ul>

    </div>
  );
}
