import type { CSSProperties } from "react";
import { threadPath, type Thread, type ThreadVariant } from "@/lib/threads";

/**
 * Le fil rouge du destin, étiré sur toute la hauteur de la page qui le porte.
 *
 * Les trajets vivent dans lib/threads.ts, un par page. Chaque page rend deux
 * tracés — desktop et mobile — sélectionnés en CSS plutôt que recalculés.
 *
 * Le viewBox 100 × 1000 est étiré aux dimensions du conteneur
 * (`preserveAspectRatio="none"`) : x se lit en pourcentage de la largeur,
 * y en pour-mille de la hauteur. `vector-effect="non-scaling-stroke"` garde
 * le trait à son épaisseur réelle malgré cet étirement.
 *
 * Le SVG est en position absolue sur son conteneur (`inset-0`) : il n'élargit
 * jamais la page et ne décale aucun contenu. Le dessin progressif, les arrêts
 * et la dégradation en fil statique sont dans globals.css. Aucun JavaScript.
 */

type ThreadLineProps = {
  thread: Thread;
};

export default function ThreadLine({ thread }: ThreadLineProps) {
  return (
    <>
      <ThreadSvg variant={thread.desktop} className="hidden md:block" />
      <ThreadSvg variant={thread.mobile} className="md:hidden" />
    </>
  );
}

function ThreadSvg({
  variant,
  className,
}: {
  variant: ThreadVariant;
  className: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      style={{ "--thread-bands": variant.bands } as CSSProperties}
      className={`
        thread-svg
        pointer-events-none
        absolute
        inset-0
        z-0
        h-full
        w-full
        ${className}
      `}
    >

      <path
        className="thread-path"
        d={threadPath(variant.points)}
        vectorEffect="non-scaling-stroke"
      />

    </svg>
  );
}
