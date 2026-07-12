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
            md:text-3xl

            tracking-[0.25em]

            text-[#F5F1EB]

            transition
            hover:text-[#C99A63]
          "
        >
          MEVERLY
        </Link>

        {/* Desktop */}

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
            className="text-sm uppercase tracking-[0.30em] text-[#E5DDD3] transition hover:text-[#C99A63]"
          >
            Playlists
          </Link>

          <Link
            href="/#about"
            className="text-sm uppercase tracking-[0.30em] text-[#E5DDD3] transition hover:text-[#C99A63]"
          >
            À propos
          </Link>

          <Link
            href="/contact"
            className="text-sm uppercase tracking-[0.30em] text-[#E5DDD3] transition hover:text-[#C99A63]"
          >
            Contact
          </Link>

        </nav>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-[#F5F1EB] lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Menu mobile */}

      <div
        className={`
          overflow-hidden
          bg-[#111111]/95
          backdrop-blur-xl
          transition-all
          duration-300

          ${open ? "max-h-96 border-t border-white/10" : "max-h-0"}
        `}
      >

        <nav className="flex flex-col px-6 py-6">

          <Link
            href="/before-i-knew-you"
            onClick={() => setOpen(false)}
            className="py-4 font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F1EB]"
          >
            Before I Knew You
          </Link>

          <Link
            href="/#playlists"
            onClick={() => setOpen(false)}
            className="py-3 uppercase tracking-[0.25em] text-[#E5DDD3]"
          >
            Playlists
          </Link>

          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="py-3 uppercase tracking-[0.25em] text-[#E5DDD3]"
          >
            À propos
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-3 uppercase tracking-[0.25em] text-[#E5DDD3]"
          >
            Contact
          </Link>

        </nav>

      </div>

    </header>
  );
}