import type { CSSProperties, ReactNode } from "react";
import {
  KNOT_SIZE,
  knotGeometry,
  threadPath,
  type Knot,
  type Segment,
  type SectionThread,
  type ThreadPiece,
  type Variant,
} from "@/lib/threads";

/**
 * Enveloppe une section de page et y dessine son morceau de fil rouge.
 *
 * Le fil est derrière le contenu (`isolate` + `-z-10`) et en position absolue
 * sur la section, rogné sur les côtés (`overflow-x-clip`, la marge du halo du
 * nœud déborderait sinon de l'écran) : il n'élargit jamais la page et ne
 * décale rien. Quatre tracés au plus — téléphone, grand mobile, tablette,
 * ordinateur — dont un seul est affiché.
 *
 * Sur ordinateur, le tracé est posé sur une colonne centrée et non sur la
 * largeur d'écran : il reste à sa place quel que soit l'écran. `wide` élargit
 * cette colonne (page du roman). Voir lib/threads.ts pour les coordonnées.
 */

type ThreadSectionProps = {
  thread?: SectionThread;
  wide?: boolean;
  children: ReactNode;
};

const VARIANT_BOX: Record<Variant, string> = {
  mobile: "min-[480px]:hidden",
  phablet: "hidden min-[480px]:block md:hidden",
  tablet: "hidden md:block xl:hidden",
  desktop: "mx-auto hidden xl:block",
};

export default function ThreadSection({ thread, wide = false, children }: ThreadSectionProps) {
  return (
    <div className="relative isolate">

      {(["mobile", "phablet", "tablet", "desktop"] as const).map((variant) => {
        const piece = thread?.[variant];

        return piece ? (
          <div
            key={variant}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 -z-10 overflow-x-clip ${VARIANT_BOX[variant]} ${
              variant === "desktop" ? (wide ? "max-w-[1360px]" : "max-w-7xl") : ""
            }`}
          >
            <ThreadPieceSvg piece={piece} variant={variant} />
          </div>
        ) : null;
      })}

      {children}

    </div>
  );
}

function ThreadPieceSvg({ piece, variant }: { piece: ThreadPiece; variant: Variant }) {
  if (!piece.knot) {
    return <ThreadSvg segment={piece} style={{ top: 0, height: "100%" }} />;
  }

  return (
    <KnotPieces
      segment={piece}
      knot={piece.knot}
      geometry={knotGeometry(KNOT_SIZE[variant], piece.knot.side)}
    />
  );
}

/*
 * Trois boîtes empilées : le fil jusqu'au point d'attache (étiré), la boucle
 * (à taille fixe) et la suite, qui commence exactement sous la boucle. Un SVG
 * en position absolue ne s'étire pas entre top et bottom : les hauteurs sont
 * données explicitement.
 */
function KnotPieces({
  segment,
  knot,
  geometry,
}: {
  segment: Segment;
  knot: Knot;
  geometry: ReturnType<typeof knotGeometry>;
}) {
  const { d, width, height, loopHeight, anchorX, pad } = geometry;

  return (
    <>
      <ThreadSvg
        segment={segment}
        style={{ top: 0, height: `${knot.y}%` }}
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="thread-svg absolute"
        style={{
          left: `calc(${knot.x}% - ${anchorX}px)`,
          top: `calc(${knot.y}% - ${pad}px)`,
        }}
      >
        <path className="thread-path" d={d} />
      </svg>

      <ThreadSvg
        segment={knot.after}
        style={{
          top: `calc(${knot.y}% + ${loopHeight}px)`,
          height: `calc(${100 - knot.y}% - ${loopHeight}px)`,
        }}
      />
    </>
  );
}

function ThreadSvg({ segment, style }: { segment: Segment; style: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        ...style,
        ...(segment.bands ? { "--thread-bands": segment.bands } : {}),
      } as CSSProperties}
      className="thread-svg absolute left-0 w-full"
    >
      <path
        className="thread-path"
        d={threadPath(segment.points)}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
