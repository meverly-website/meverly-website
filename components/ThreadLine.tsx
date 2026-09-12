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
 * Calé sur la géométrie relevée à 1440 × 6175 : le fil naît dans
 * l'illustration du Hero, longe la gouttière entre le texte et la couverture,
 * descend entre les deux personnages, se croise une seule fois dans la bande
 * vide qui précède la citation, file dans la marge droite, puis revient
 * vers la gauche pour s’éteindre à hauteur de la signature de l’autrice,
 * ce qui referme la page. Il ne traverse aucun paragraphe.
 */

const DESKTOP_PATH =
  "M 74,81 C 75,86.7 78.8,104.8 80,115 " +
  "C 81.2,125.2 81.8,133.3 81,142 C 80.2,150.7 77.8,158.3 75,167 " +
  "C 72.2,175.7 66,182.8 64,194 C 62,205.2 63.3,221.3 63,234 " +
  "C 62.8,246.7 62,253.2 62.5,270 C 63,286.8 66.8,319.7 66,335 " +
  "C 65.3,350.3 60.5,355.2 58,362 C 55.5,368.8 52.5,365.8 51,376 " +
  "C 49.5,386.2 49.3,409.8 49,423 C 48.7,436.2 49.7,446.3 49,455 " +
  "C 48.3,463.7 46.2,468 45,475 C 43.8,482 42.8,491.2 42,497 " +
  "C 41.2,502.8 39,505.2 40,510 C 41,514.8 45.3,521.7 48,526 " +
  "C 50.7,530.3 54.2,533.5 56,536 C 57.8,538.5 56.5,538.8 59,541 " +
  "C 61.5,543.2 68.2,546 71,549 C 73.8,552 77,555.8 76,559 " +
  "C 75,562.2 67.5,568.3 65,568 C 62.5,567.7 60.8,560.2 61,557 " +
  "C 61.2,553.8 63.7,547.8 66,549 C 68.3,550.2 72.2,559.2 75,564 " +
  "C 77.8,568.8 80.8,572.8 83,578 C 85.2,583.2 86.8,587.5 88,595 " +
  "C 89.2,602.5 89.8,613.8 90,623 C 90.2,632.2 89.5,639.2 89,650 " +
  "C 88.5,660.8 87,673.2 87,688 C 87,702.8 89.2,723 89,739 " +
  "C 88.8,755 87.3,770.5 86,784 C 84.7,797.5 83.5,809 81,820 " +
  "C 78.5,831 74.5,841 71,850 C 67.5,859 63,866.3 60,874 " +
  "C 57,881.7 55.8,889.8 53,896 C 50.2,902.2 46.5,906.3 43,911 " +
  "C 39.5,915.7 33.8,921.8 32,924";

/*
 * Mobile, relevé à 390 × 6588 : le texte occupe 6 à 94 % de la largeur, il
 * n'existe aucune gouttière. Le fil longe donc le bord droit et ne rentre
 * dans le cadre que pour se nouer, dans la zone vide qui sépare la fin des
 * personnages de la citation.
 */

const MOBILE_PATH =
  "M 85,56 C 86.2,64.7 90.3,88.8 92,108 " +
  "C 93.7,127.2 94.8,148.3 95,171 C 95.2,193.7 92.8,219.8 93,244 " +
  "C 93.2,268.2 95.8,292 96,316 C 96.2,340 94.5,364 94,388 " +
  "C 93.5,412 92.8,435.8 93,460 C 93.2,484.2 95,517.7 95,533 " +
  "C 95,548.3 95.7,547.2 93,552 C 90.3,556.8 82.8,558.5 79,562 " +
  "C 75.2,565.5 70.3,569 70,573 C 69.7,577 73.8,584.3 77,586 " +
  "C 80.2,587.7 86.5,585.3 89,583 C 91.5,580.7 92.8,572.5 92,572 " +
  "C 91.2,571.5 84.2,576.3 84,580 C 83.8,583.7 89,586.8 91,594 " +
  "C 93,601.2 95.2,609 96,623 C 96.8,637 96.5,659.8 96,678 " +
  "C 95.5,696.2 92.8,714 93,732 C 93.2,750 96.7,772.2 97,786 " +
  "C 97.3,799.8 95.2,804.7 95,815 C 94.8,825.3 95.8,842.5 96,848";

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
        ${desktop ? "thread-svg--desktop" : "thread-svg--mobile"}
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
