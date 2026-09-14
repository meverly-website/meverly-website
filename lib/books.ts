/**
 * Données propres à chaque roman.
 *
 * Ce qui dépend du livre (et changera pour les tomes 2 et 3) vit ici, pas
 * dans les composants : un nouveau tome ajoute son entrée, les composants
 * restent les mêmes.
 */

export type Book = {
  /**
   * Thèmes sensibles abordés, affichés repliés par défaut. La liste relève de
   * l'autrice : elle est reprise telle quelle, sans ajout ni reformulation.
   */
  sensitiveThemes: readonly string[];
};

export const BEFORE_I_KNEW_YOU: Book = {
  sensitiveThemes: [
    "Violences homophobes et harcèlement",
    "Rejet familial",
    "Automutilation, dont une rechute au cours du récit",
    "Relation passée abusive : manipulation, violences physiques et psychologiques",
    "Harcèlement et intimidation",
    "Crises de panique et réactions post-traumatiques",
  ],
};
