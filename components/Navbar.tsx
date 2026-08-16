"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#0E0B0B]/70
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="
            font-[family-name:var(--font-cormorant)]
            text-2xl
            tracking-[0.25em]
            text-[#F5F1EB]
            transition
            hover:text-[#C99A63]
            md:text-3xl
          "
        >
          MEVERLY
        </Link>

        {/* ================= DESKTOP ================= */}

        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href="/before-i-knew-you"
            className="
              font-[family-name:var(--font-cormorant)]
              text-3xl
              text-[#F5F1EB]
              transition
              hover:text-[#C99A63]
            "
          >
            Before I Knew You
          </Link>

          <Link
            href="/#playlists"
            className="
              text-sm
              uppercase
              tracking-[0.30em]
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >
            Playlists
          </Link>

          <Link
            href="/#about"
            className="
              text-sm
              uppercase
              tracking-[0.30em]
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >
            À propos
          </Link>

          <Link
            href="/contact"
            className="
              text-sm
              uppercase
              tracking-[0.30em]
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >
            Contact
          </Link>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/meverlybooks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Meverly"
            className="
              text-[#E5DDD3]
              transition-all
              duration-300
              hover:scale-110
              hover:text-[#C99A63]
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>

        </nav>

        {/* ================= MOBILE ================= */}

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="
            text-[#F5F1EB]
            transition
            hover:text-[#C99A63]
            lg:hidden
          "
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ================= MENU MOBILE ================= */}

      <div
        className={`
          overflow-hidden
          bg-[#111111]/95
          backdrop-blur-xl
          transition-all
          duration-300
          ${
            open
              ? "max-h-[500px] border-t border-white/10"
              : "max-h-0"
          }
        `}
      >

        <nav className="flex flex-col px-6 py-6">

          <Link
            href="/before-i-knew-you"
            onClick={() => setOpen(false)}
            className="
              py-4
              font-[family-name:var(--font-cormorant)]
              text-3xl
              text-[#F5F1EB]
              transition
              hover:text-[#C99A63]
            "
          >
            Before I Knew You
          </Link>

          <Link
            href="/#playlists"
            onClick={() => setOpen(false)}
            className="
              py-3
              uppercase
              tracking-[0.25em]
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >
            Playlists
          </Link>

          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="
              py-3
              uppercase
              tracking-[0.25em]
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >
            À propos
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              py-3
              uppercase
              tracking-[0.25em]
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >
            Contact
          </Link>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/meverlybooks/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            aria-label="Instagram de Meverly"
            className="
              flex
              items-center
              gap-3
              py-4
              text-[#E5DDD3]
              transition
              hover:text-[#C99A63]
            "
          >

            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>

            <span
              className="
                text-sm
                uppercase
                tracking-[0.25em]
              "
            >
              Instagram
            </span>

          </a>

        </nav>

      </div>

    </header>
  );
}