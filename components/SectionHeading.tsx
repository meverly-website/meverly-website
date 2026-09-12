import StarDivider from "./StarDivider";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  as?: "h1" | "h2";
  align?: "center" | "left";
  /** L'étoile à quatre branches en séparateur, au-dessus du titre. */
  divider?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  as: Tag = "h2",
  align = "center",
  divider = true,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>

      {divider && (
        <StarDivider
          className={`mb-10 ${centered ? "" : "justify-start"}`}
        />
      )}

      {eyebrow && (
        <p className="text-[0.7rem] uppercase tracking-[0.45em] text-gold">
          {eyebrow}
        </p>
      )}

      <Tag
        className={`
          ${eyebrow ? "mt-7" : ""}
          font-serif
          text-5xl
          font-light
          leading-[0.95]
          tracking-[0.01em]
          text-text
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
        `}
      >
        {title}
      </Tag>

    </div>
  );
}
