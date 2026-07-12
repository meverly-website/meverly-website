import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0E0B0B] px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* Desktop */}

        <div className="hidden items-center justify-between md:flex">

          {/* Logo */}

          <Link href="/">
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-5xl
                tracking-[0.35em]
                text-[#F5F1EB]
                transition-colors
                duration-300
                hover:text-[#C99A63]
              "
            >
              MEVERLY
            </h2>
          </Link>

          {/* Citation */}

          <div className="flex flex-col items-center">

            <div className="mb-6 h-px w-24 bg-[#C99A63]/25" />

            <p
              className="
                max-w-sm

                text-center

                font-[family-name:var(--font-cormorant)]

                text-xl
                italic
                leading-relaxed

                text-[#CFC4B8]
              "
            >
              Some stories find us when we need them most.
            </p>

          </div>

          {/* Réseaux */}

          <div className="flex items-center gap-6">

            <a
              href="https://www.instagram.com/meverlybooks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <FaInstagram
                size={26}
                className="
                  text-[#F5F1EB]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:text-[#C99A63]
                "
              />
            </a>

            <Link
              href="/contact"
              aria-label="Contact"
              className="group"
            >
              <Mail
                size={26}
                className="
                  text-[#F5F1EB]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:text-[#C99A63]
                "
              />
            </Link>

          </div>

        </div>

        {/* Mobile */}

        <div className="flex flex-col items-center md:hidden">

          <Link href="/">
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-4xl
                tracking-[0.35em]
                text-[#F5F1EB]
                transition-colors
                duration-300
                hover:text-[#C99A63]
              "
            >
              MEVERLY
            </h2>
          </Link>

          <div className="mt-6 flex items-center gap-5">

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
                  group-hover:scale-110
                  group-hover:text-[#C99A63]
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
                  group-hover:scale-110
                  group-hover:text-[#C99A63]
                "
              />
            </Link>

          </div>

          <div className="mt-8 h-px w-20 bg-[#C99A63]/25" />

          <p
            className="
              mt-6

              max-w-xs

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

        {/* Copyright */}

        <div className="mt-14 border-t border-white/5 pt-8">

          <p
            className="
              text-center

              text-sm
              tracking-[0.15em]

              text-[#8B8178]
            "
          >
© {new Date().getFullYear()} Meverly — Tous droits réservés.          </p>

        </div>

      </div>

    </footer>
  );
}