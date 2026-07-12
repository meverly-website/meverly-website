type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="text-center">

      {subtitle && (
        <p className="text-sm uppercase tracking-[0.35em] text-[#C99A63]">
          {subtitle}
        </p>
      )}

      <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl text-[#F4EEE7]">
        {title}
      </h2>

    </div>
  );
}