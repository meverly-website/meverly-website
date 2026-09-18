import GenreLine from "./GenreLine";
import { AVAILABILITY_FACT } from "@/lib/site";

/**
 * Fiche technique du roman, dans l'esprit d'une fiche d'éditeur : une
 * information de référence, pas un argument de vente. Elle reste discrète et
 * ne concurrence ni la couverture ni les boutons.
 *
 * L'en-tête (le genre) est d'une autre nature que les données qui suivent :
 * il passe légèrement au-dessus, elles en niveau tertiaire.
 */

/* Le point médian précède la donnée qu'il introduit, jamais en fin de ligne. */
function Separator({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`mx-2.5 text-gold/50 lg:hidden ${className}`}>·</span>;
}

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
        Empilée à côté de la couverture. Sur la page empilée, une disposition
        fixe plutôt qu'un retour à la ligne libre, qui laissait un point médian
        pendre en fin de ligne (« 570 pages · ») : sur une ligne à partir de
        640 px ; en dessous, « 570 pages · Roman en français » puis la
        disponibilité sur sa propre ligne.
      */}

      <ul className="flex list-none flex-wrap justify-center gap-y-1 text-sm leading-6 text-muted lg:block lg:space-y-1.5">
        <li className="order-1 whitespace-nowrap">570 pages</li>
        <li className="order-3 basis-full whitespace-nowrap sm:order-2 sm:basis-auto">
          <Separator className="hidden sm:inline" />
          {AVAILABILITY_FACT}
        </li>
        <li className="order-2 whitespace-nowrap sm:order-3">
          <Separator />
          Roman en français
        </li>
      </ul>

    </div>
  );
}
