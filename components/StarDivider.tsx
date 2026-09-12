/**
 * L'étoile à quatre branches de la couverture, en séparateur de sections.
 * Elle remplace les traits fins de l'ancienne maquette.
 */

type StarDividerProps = {
  size?: number;
  className?: string;
};

export default function StarDivider({
  size = 16,
  className = "",
}: StarDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex justify-center ${className}`}
    >

      <svg
        width={size}
        height={size}
        viewBox="-1 -1 2 2"
        className="text-gold"
      >

        <path
          d="M0,-1 Q0.13,-0.13 1,0 Q0.13,0.13 0,1 Q-0.13,0.13 -1,0 Q-0.13,-0.13 0,-1 Z"
          fill="currentColor"
        />

      </svg>

    </div>
  );
}
