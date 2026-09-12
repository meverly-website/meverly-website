/**
 * Révélation à l'entrée dans le viewport.
 *
 * L'animation est pilotée par `animation-timeline: view()` (voir globals.css) :
 * aucun listener de scroll, aucun JavaScript envoyé au navigateur. Sans support
 * de la timeline, ou si l'utilisateur demande un mouvement réduit, le contenu
 * est simplement affiché.
 */

type RevealOnScrollProps = {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "li" | "figure";
  /** Révélation plus longue, pour les grands blocs. */
  slow?: boolean;
  className?: string;
};

export default function RevealOnScroll({
  children,
  as: Tag = "div",
  slow = false,
  className = "",
}: RevealOnScrollProps) {
  return (
    <Tag className={`reveal ${slow ? "reveal-slow" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
