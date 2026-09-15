import Image from "next/image";

/**
 * Les deux personnages, traités dans le contraste de la couverture :
 * Ezra en silhouette sombre et refermée, Sasha en ligne claire et ouverte.
 *
 * Plus de photographies : elles donnaient un visage aux personnages, que le
 * roman laisse à la lecture. Chaque carte porte la main du personnage, tirée
 * de l'illustration de la couverture et passée dans sa seule teinte — or
 * pour Sasha, gris éteint pour Ezra ; le rouge reste au fil de la page.
 * Images générées par scripts/build-assets.mjs.
 *
 * Le cadre est opaque : le fil rouge peut passer derrière.
 */

type CharacterCardProps = {
  name: string;
  traits: string;
  description: string;
  tone: "dark" | "light";
};

export default function CharacterCard({
  name,
  traits,
  description,
  tone,
}: CharacterCardProps) {
  const dark = tone === "dark";

  return (
    <article>

      <div
        className={`
          relative
          aspect-[4/3]
          overflow-hidden
          rounded-edge
          border
          bg-ink
          ${dark ? "border-text/10" : "border-gold/30"}
        `}
      >

        <Image
          src={`/characters/hand-${name.toLowerCase()}.png`}
          alt=""
          fill
          sizes="(max-width: 767px) 92vw, 44vw"
          className="object-contain p-[6%]"
        />

      </div>

      <div className="mt-8">

        <h3
          className={`
            font-serif
            text-4xl
            font-light
            leading-none
            sm:text-5xl
            ${dark ? "text-muted" : "text-text"}
          `}
        >
          {name}
        </h3>

        <p className="mt-5 text-[0.65rem] uppercase tracking-[0.3em] text-gold">
          {traits}
        </p>

        <p className="mt-6 max-w-md text-base leading-8 text-muted">
          {description}
        </p>

      </div>

    </article>
  );
}
