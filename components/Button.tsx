type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({
  children,
  href = "#",
}: ButtonProps) {
  return (
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-[#C99A63]
        bg-transparent
        px-10
        py-4
        text-sm
        uppercase
        tracking-[0.25em]
        text-[#F4EEE7]
        transition-all
        duration-500
        hover:bg-[#C99A63]
        hover:text-[#090909]
      "
    >
      {children}
    </a>
  );
}