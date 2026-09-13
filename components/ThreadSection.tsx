import type { CSSProperties, ReactNode } from "react";
import { threadPath, type Segment, type SectionThread } from "@/lib/threads";

/**
 * Enveloppe une section de page et y dessine son morceau de fil rouge.
 *
 * Le fil est derrière le contenu (`isolate` + `-z-10`) et en position absolue
 * sur la section : il n'élargit jamais la page et ne décale rien. Trois tracés
 * au plus — mobile, tablette, ordinateur — dont un seul est affiché.
 *
 * Sur ordinateur, le tracé est posé sur la colonne de contenu (1280 px au
 * plus, centrée) et non sur la largeur d'écran : il reste à sa place quel que
 * soit l'écran. Voir lib/threads.ts pour les coordonnées.
 */

type ThreadSectionProps = {
  thread?: SectionThread;
  children: ReactNode;
};

export default function ThreadSection({ thread, children }: ThreadSectionProps) {
  return (
    <div className="relative isolate">

      {thread?.mobile && (
        <ThreadSvg segment={thread.mobile} className="-z-10 md:hidden" />
      )}

      {thread?.tablet && (
        <ThreadSvg segment={thread.tablet} className="-z-10 hidden md:block xl:hidden" />
      )}

      {thread?.desktop && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 mx-auto hidden max-w-7xl xl:block"
        >
          <ThreadSvg segment={thread.desktop} />
        </div>
      )}

      {children}

    </div>
  );
}

function ThreadSvg({
  segment,
  className = "",
}: {
  segment: Segment;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={
        segment.bands
          ? ({ "--thread-bands": segment.bands } as CSSProperties)
          : undefined
      }
      className={`thread-svg pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <path
        className="thread-path"
        d={threadPath(segment.points)}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
