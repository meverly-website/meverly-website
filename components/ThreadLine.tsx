/**
 * Le fil rouge du destin, prolongé de la couverture jusqu'au bas de la page.
 *
 * Un seul tracé visible à la fois : la variante desktop et la variante mobile
 * sont deux `path` distincts, sélectionnés en CSS, plutôt qu'un recalcul.
 *
 * Le viewBox 100 × 1000 est étiré aux dimensions du conteneur
 * (`preserveAspectRatio="none"`) : x se lit en pourcentage de la largeur de la
 * page, y en pour-mille de sa hauteur. `vector-effect="non-scaling-stroke"`
 * garde le trait à son épaisseur réelle malgré cet étirement.
 *
 * Le dessin progressif, l'effacement par endroits et la dégradation en fil
 * statique sont dans globals.css. Aucun JavaScript.
 */

/*
 * Les deux tracés sont calés sur la géométrie réelle de la page d'accueil,
 * relevée à 1440 × 7760 : le fil passe dans les gouttières et les marges, et
 * ne traverse aucun paragraphe. Là où il n'y a pas de passage libre — titre
 * des personnages, lien de fin de section, section à propos — c'est le masque
 * de globals.css qui l'efface, et il réapparaît plus loin.
 *
 * Il se croise une seule fois, vers y=531, dans la bande vide qui précède la
 * citation. Ce nouage ne se répète nulle part ailleurs.
 */

const DESKTOP_PATH =
  "M 69,70 C 70.2,78 74.5,102.2 76,118 C 77.5,133.8 79,148.8 78,165 " +
  "C 77,181.2 72.5,198.8 70,215 C 67.5,231.2 64.8,246.2 63,262 " +
  "C 61.2,277.8 60.8,295 59,310 C 57.2,325 53.5,337 52,352 " +
  "C 50.5,367 50.3,383.3 50,400 C 49.7,416.7 49.7,437.3 50,452 " +
  "C 50.3,466.7 50.7,478.7 52,488 C 53.3,497.3 54.3,503.2 58,508 " +
  "C 61.7,512.8 70.3,513.2 74,517 C 77.7,520.8 81.3,527.2 80,531 " +
  "C 78.7,534.8 69.2,540.7 66,540 C 62.8,539.3 60.8,530.7 61,527 " +
  "C 61.2,523.3 64,516.3 67,518 C 70,519.7 75.5,531.2 79,537 " +
  "C 82.5,542.8 86.2,546.8 88,553 C 89.8,559.2 90.3,563.5 90,574 " +
  "C 89.7,584.5 86.3,599 86,616 C 85.7,633 88.2,655 88,676 " +
  "C 87.8,697 86.3,721.3 85,742 C 83.7,762.7 80.3,780.7 80,800 " +
  "C 79.7,819.3 82.3,841 83,858 C 83.7,875 84.7,886.3 84,902 " +
  "C 83.3,917.7 80.8,935.7 79,952 C 77.2,968.3 74,992 73,1000";

/*
 * Mobile : le texte occupe 6 à 94 % de la largeur, il n'existe aucune
 * gouttière. Le fil longe donc le bord droit sur toute la page, en ondulant
 * légèrement, et ne rentre dans le cadre que pour se nouer — dans la grande
 * zone vide qui sépare la fin des personnages de la citation.
 */

const MOBILE_PATH =
  "M 88,74 C 88.8,83.7 91.7,110.2 93,132 C 94.3,153.8 96,179.5 96,205 " +
  "C 96,230.5 92.8,258.3 93,285 C 93.2,311.7 96.8,338.3 97,365 " +
  "C 97.2,391.7 94.7,422.5 94,445 C 93.3,467.5 95.5,488.5 93,500 " +
  "C 90.5,511.5 82.8,508.7 79,514 C 75.2,519.3 70.3,525.8 70,532 " +
  "C 69.7,538.2 73.8,548.5 77,551 C 80.2,553.5 86.5,550.7 89,547 " +
  "C 91.5,543.3 92.8,530 92,529 C 91.2,528 84.2,535.3 84,541 " +
  "C 83.8,546.7 89,553.2 91,563 C 93,572.8 95.2,584.7 96,600 " +
  "C 96.8,615.3 96.5,634.2 96,655 C 95.5,675.8 92.8,700.8 93,725 " +
  "C 93.2,749.2 96.8,774.2 97,800 C 97.2,825.8 94.2,856.7 94,880 " +
  "C 93.8,903.3 96.3,920 96,940 C 95.7,960 92.7,990 92,1000";

type ThreadLineProps = {
  variant: "desktop" | "mobile";
};

export default function ThreadLine({ variant }: ThreadLineProps) {
  const desktop = variant === "desktop";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className={`
        thread-svg
        pointer-events-none
        absolute
        inset-0
        z-0
        h-full
        w-full
        ${desktop ? "hidden md:block" : "md:hidden"}
      `}
    >

      <path
        className="thread-path"
        d={desktop ? DESKTOP_PATH : MOBILE_PATH}
        vectorEffect="non-scaling-stroke"
      />

    </svg>
  );
}
