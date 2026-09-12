import Image from "next/image";

/**
 * Les deux personnages, traités dans le contraste de la couverture :
 * Ezra en silhouette sombre et refermée, Sasha en ligne claire et ouverte.
 */

type CharacterCardProps = {
  name: string;
  traits: string;
  description: string;
  image: string;
  tone: "dark" | "light";
};

export default function CharacterCard({
  name,
  traits,
  description,
  image,
  tone,
}: CharacterCardProps) {
  const dark = tone === "dark";

  return (
    <article className="group">

      <div
        className={`
          relative
          aspect-[4/3]
          overflow-hidden
          rounded-edge
          border
          ${dark ? "border-text/8" : "border-gold/30"}
        `}
      >

        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 1024px) 92vw, 44vw"
          className={`
            object-cover
            transition-[filter]
            duration-700
            ${
              dark
                ? "brightness-[0.62] saturate-[0.7] group-hover:brightness-[0.72]"
                : "brightness-105 group-hover:brightness-110"
            }
          `}
        />

        {/* Le sombre se referme sur l'image, le clair la laisse respirer. */}

        <div
          aria-hidden="true"
          className={`
            absolute
            inset-0
            ${
              dark
                ? "bg-gradient-to-t from-ink via-ink/70 to-ink/25"
                : "bg-gradient-to-t from-ink/80 via-ink/15 to-transparent"
            }
          `}
        />

      </div>

      <div className={dark ? "mt-8" : "mt-8"}>

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
