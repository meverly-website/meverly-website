import Link from "next/link";

/**
 * Bouton unique du site.
 *
 * primary   — or plein, texte sombre. Un seul par écran, réservé à l'achat.
 * secondary — contour or fin, texte crème.
 * ghost     — texte seul, soulignement qui se dessine au survol.
 *
 * Aucun bouton rouge : le rouge est réservé au fil.
 */

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  /** Lien interne (Link) ou, avec external, lien sortant. */
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  /** Le trait qui s'allonge au survol. Absent par défaut sur ghost. */
  trail?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

const BASE = `
  group
  relative
  inline-flex
  items-center
  justify-center
  gap-4
  text-xs
  uppercase
  tracking-[0.25em]
  transition-colors
  duration-500
`;

const VARIANTS = {
  primary: `
    rounded-edge
    bg-gold
    px-8
    py-4
    text-background
    hover:bg-text
  `,
  secondary: `
    rounded-edge
    border
    border-gold/45
    px-8
    py-4
    text-text
    hover:border-gold
    hover:text-gold
  `,
  ghost: `
    btn-underline
    py-1
    text-muted
    hover:text-gold
  `,
} as const;

const DISABLED = `
  cursor-default
  opacity-45
  hover:bg-gold
  hover:border-gold/45
  hover:text-inherit
`;

export default function Button({
  children,
  variant = "secondary",
  href,
  external = false,
  type = "button",
  disabled = false,
  loading = false,
  trail,
  className = "",
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const inactive = disabled || loading;
  const showTrail = trail ?? variant !== "ghost";

  const classes = [
    BASE,
    VARIANTS[variant],
    inactive ? DISABLED : "",
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>

      {showTrail && !loading && (
        <span
          aria-hidden="true"
          className="btn-trail"
        />
      )}

      {loading && (
        <span
          aria-hidden="true"
          className="h-1 w-1 animate-pulse rounded-full bg-current"
        />
      )}
    </>
  );

  /* Lien neutralisé : « Bientôt disponible ». Ni navigation, ni curseur main. */

  if (href && inactive) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={ariaLabel}
        className={classes}
      >
        {content}
      </span>
    );
  }

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={inactive}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
      className={classes}
    >
      {content}
    </button>
  );
}
