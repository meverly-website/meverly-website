/**
 * Le fil rouge du destin, prolongé de l'illustration du Hero jusqu'au bas de
 * la page.
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
 * Calé sur la géométrie relevée à 1440 × 5565 : le fil naît dans
 * l'illustration du Hero, longe la gouttière entre le texte et la couverture,
 * descend entre les deux personnages, se croise une seule fois dans la bande
 * vide qui précède la citation, puis file dans la marge droite. Il ne
 * traverse aucun paragraphe.
 */

const DESKTOP_PATH =
  "M 74,90 C 75,96.3 78.8,116.7 80,128 " +
  "C 81.2,139.3 81.8,148.5 81,158 C 80.2,167.5 77.3,175.5 75,185 " +
  "C 72.7,194.5 68.5,202.5 67,215 C 65.5,227.5 66.3,245.8 66,260 " +
  "C 65.7,274.2 65,281.3 65,300 C 65,318.7 67.2,355 66,372 " +
  "C 64.8,389 60.5,394.3 58,402 C 55.5,409.7 52.5,406.7 51,418 " +
  "C 49.5,429.3 49.3,455.5 49,470 C 48.7,484.5 49.7,495.3 49,505 " +
  "C 48.3,514.7 46.2,520.2 45,528 C 43.8,535.8 42.8,545.7 42,552 " +
  "C 41.2,558.3 39,560.7 40,566 C 41,571.3 45.3,579.3 48,584 " +
  "C 50.7,588.7 54.2,591.3 56,594 C 57.8,596.7 56.5,597.5 59,600 " +
  "C 61.5,602.5 68.2,605.7 71,609 C 73.8,612.3 77,616.5 76,620 " +
  "C 75,623.5 67.5,630.3 65,630 C 62.5,629.7 60.8,621.5 61,618 " +
  "C 61.2,614.5 63.7,607.7 66,609 C 68.3,610.3 72.2,620.7 75,626 " +
  "C 77.8,631.3 80.8,635.3 83,641 C 85.2,646.7 86.8,651.5 88,660 " +
  "C 89.2,668.5 89.8,681.7 90,692 C 90.2,702.3 89.5,710 89,722 " +
  "C 88.5,734 87,747.7 87,764 C 87,780.3 89.2,802.3 89,820 " +
  "C 88.8,837.7 87.3,855 86,870 C 84.7,885 82.8,896.7 81,910 " +
  "C 79.2,923.3 76.5,935 75,950 C 73.5,965 72.5,991.7 72,1000";

/*
 * Mobile, relevé à 390 × 5954 : le texte occupe 6 à 94 % de la largeur, il
 * n'existe aucune gouttière. Le fil longe donc le bord droit et ne rentre
 * dans le cadre que pour se nouer, dans la zone vide qui sépare la fin des
 * personnages de la citation.
 */

const MOBILE_PATH =
  "M 85,62 C 86.2,71.7 90.3,98.7 92,120 " +
  "C 93.7,141.3 94.8,165 95,190 C 95.2,215 92.8,243.3 93,270 " +
  "C 93.2,296.7 95.8,323.3 96,350 C 96.2,376.7 94.5,403.3 94,430 " +
  "C 93.5,456.7 92.8,483.3 93,510 C 93.2,536.7 95,573 95,590 " +
  "C 95,607 95.7,606.7 93,612 C 90.3,617.3 82.8,618.2 79,622 " +
  "C 75.2,625.8 70.3,630.5 70,635 C 69.7,639.5 73.8,647.2 77,649 " +
  "C 80.2,650.8 86.5,648.7 89,646 C 91.5,643.3 92.8,633.7 92,633 " +
  "C 91.2,632.3 84.2,637.8 84,642 C 83.8,646.2 89,650 91,658 " +
  "C 93,666 95.2,674.7 96,690 C 96.8,705.3 96.5,730 96,750 " +
  "C 95.5,770 92.8,790 93,810 C 93.2,830 96.8,849.2 97,870 " +
  "C 97.2,890.8 94.8,913.3 94,935 C 93.2,956.7 92.3,989.2 92,1000";

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
