"use client";

import Link from "next/link";

export default function BookNavbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full

        border-b
        border-white/5

        bg-[#0E0B0B]/65
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto

          flex
          h-20
          max-w-7xl

          items-center
          justify-between

          px-6
          lg:px-8
        "
      >
        {/* Logo */}

        <Link href="/">
          <h1
            className="
              font-[family-name:var(--font-cormorant)]

              text-2xl
              sm:text-3xl

              tracking-[0.30em]

              text-[#F5F1EB]

              transition
              duration-300

              hover:text-[#C99A63]
            "
          >
            MEVERLY
          </h1>
        </Link>

        {/* Titre du roman */}

        <h2
          className="
            hidden
            lg:block

            font-[family-name:var(--font-cormorant)]

            text-4xl

            tracking-[0.05em]

            text-[#F5F1EB]
          "
        >
          BEFORE I KNEW YOU
        </h2>

        {/* Navigation */}

        <nav
          className="
            flex
            items-center

            gap-6
            lg:gap-8
          "
        >
          <a
            href="#synopsis"
            className="
              relative

              text-xs
              sm:text-sm

              uppercase
              tracking-[0.30em]

              text-[#E5DDD3]

              transition
              hover:text-[#C99A63]

              after:absolute
              after:-bottom-2
              after:left-0
              after:h-px
              after:w-0
              after:bg-[#C99A63]
              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            Synopsis
          </a>

          <a
            href="#characters"
            className="
              relative

              text-xs
              sm:text-sm

              uppercase
              tracking-[0.30em]

              text-[#E5DDD3]

              transition
              hover:text-[#C99A63]

              after:absolute
              after:-bottom-2
              after:left-0
              after:h-px
              after:w-0
              after:bg-[#C99A63]
              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            Personnages
          </a>

          <Link
            href="/"
            className="
              relative

              text-xs
              sm:text-sm

              uppercase
              tracking-[0.30em]

              text-[#E5DDD3]

              transition
              hover:text-[#C99A63]

              after:absolute
              after:-bottom-2
              after:left-0
              after:h-px
              after:w-0
              after:bg-[#C99A63]
              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            Accueil
          </Link>
        </nav>
      </div>
    </header>
  );
}