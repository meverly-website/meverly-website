import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E0B0B] px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* Desktop */}

        <div className="hidden md:grid grid-cols-3 items-center">

          {/* Instagram */}

          <a
            href="https://instagram.com/TON_COMPTE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="justify-self-start group"
          >
            <FaInstagram
              size={24}
              className="
                text-[#F5F1EB]
                transition-all
                duration-300
                group-hover:text-[#C99A63]
                group-hover:scale-110
              "
            />
          </a>

          {/* Logo */}

          <Link
            href="/"
            className="justify-self-center"
          >
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-4xl
                tracking-[0.40em]
                text-[#F5F1EB]
                transition
                duration-300
                hover:text-[#C99A63]
              "
            >
              MEVERLY
            </h2>
          </Link>

          {/* Contact */}

          <Link
            href="/contact"
            aria-label="Contact"
            className="justify-self-end group"
          >
            <Mail
              size={24}
              className="
                text-[#F5F1EB]
                transition-all
                duration-300
                group-hover:text-[#C99A63]
                group-hover:scale-110
              "
            />
          </Link>

        </div>

        {/* Mobile */}

        <div className="flex flex-col items-center gap-5 md:hidden">

          {/* Logo */}

          <Link href="/">
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-4xl
                tracking-[0.35em]
                text-[#F5F1EB]
                transition
                duration-300
                hover:text-[#C99A63]
              "
            >
              MEVERLY
            </h2>
          </Link>

          {/* Icônes */}

          <div className="mt-1 flex items-center gap-6">

            <a
              href="https://www.instagram.com/meverlybooks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <FaInstagram
                size={24}
                className="
                  text-[#F5F1EB]
                  transition-all
                  duration-300
                  group-hover:text-[#C99A63]
                  group-hover:scale-110
                "
              />
            </a>

            <Link
              href="/contact"
              aria-label="Contact"
              className="group"
            >
              <Mail
                size={24}
                className="
                  text-[#F5F1EB]
                  transition-all
                  duration-300
                  group-hover:text-[#C99A63]
                  group-hover:scale-110
                "
              />
            </Link>

          </div>

        </div>

        {/* Signature */}

        <div className="mt-10 flex flex-col items-center">

          <div className="mb-6 h-px w-24 bg-[#C99A63]/25" />

          <p
            className="
              max-w-xs
              px-4

              text-center

              font-[family-name:var(--font-cormorant)]

              text-lg
              italic
              leading-relaxed

              text-[#CFC4B8]
            "
          >
            Some stories find us when we need them most.
          </p>

        </div>

      </div>

    </footer>
  );
}