import Image from "next/image";
import Link from "next/link";
import { COVER_HEIGHT, COVER_SRC, COVER_WIDTH } from "@/lib/site";

/**
 * La couverture mise en scène : pas encadrée dans un rectangle centré, mais
 * posée dans le noir, doublée d'un filet or décalé — registre imprimé.
 * Ratio d'origine conservé, aucun recadrage.
 */

type CoverShowcaseProps = {
  href?: string;
  className?: string;
  /**
   * Couverture visible dès l'arrivée (page du roman) : chargée tout de suite
   * et en priorité, c'est elle qui fait le premier affichage.
   */
  eager?: boolean;
};

export default function CoverShowcase({
  href = "/before-i-knew-you",
  className = "",
  eager = false,
}: CoverShowcaseProps) {
  return (
    <div className={`relative ${className}`}>

      {/*
        Halo, très bas, pour décoller la couverture du fond. Sur mobile il ne
        déborde que de 24 px sur les côtés : à 64 px, une couverture de 240 px
        faisait 368 px de large et élargissait la page sur un écran de 360.
      */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-x-6
          -inset-y-16
          sm:-inset-16
          bg-[radial-gradient(closest-side,rgba(239,193,126,0.07),transparent)]
        "
      />

      <Link
        href={href}
        className="group relative block w-[240px] sm:w-[300px] lg:w-[360px]"
        aria-label="Découvrir Before I Knew You"
      >

        {/* Filet or décalé : marque d'imprimeur plutôt que cadre. */}

        <span
          aria-hidden="true"
          className="
            absolute
            -bottom-6
            -right-6
            block
            h-full
            w-full
            rounded-edge
            border
            border-gold/25
            transition-transform
            duration-700
            group-hover:translate-x-1
            group-hover:translate-y-1
          "
        />

        <Image
          src={COVER_SRC}
          alt="Couverture du roman Before I Knew You, de Meverly"
          width={COVER_WIDTH}
          height={COVER_HEIGHT}
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 360px"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="
            relative
            h-auto
            w-full
            rounded-edge
            shadow-[0_30px_90px_rgba(0,0,0,0.75)]
          "
        />

      </Link>

    </div>
  );
}
