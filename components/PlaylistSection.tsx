import Container from "./Container";

export default function PlaylistSection() {
  return (
    <section
      id="playlists"
      className="bg-[#0E0B0B] py-24 md:py-36"
    >
      <Container>

        {/* Ligne */}

        <div className="mx-auto mb-16 h-px w-20 bg-[#C99A63]/35" />

        {/* Titre */}

        <div className="text-center">

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB] sm:text-5xl md:text-7xl">
            L&apos;UNIVERS MUSICAL
          </h2>

          <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-cormorant)] text-xl italic leading-relaxed text-[#CFC4B8] sm:text-2xl">
            Les morceaux qui ont accompagné l'écriture de cette histoire,
            inspiré certaines scènes et façonné son atmosphère.
          </p>

        </div>

        {/* Image */}

        <div className="mt-20 md:mt-24">

          <a
            href="https://open.spotify.com/playlist/1mFzKIixcOMPV1c6nObEuj?si=5a944628db514b1d"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl"
          >

            {/* Image */}

            <img
              src="/playlist.jpg"
              alt="Playlist Before I Knew You"
              className="
                h-[420px]
                sm:h-[520px]
                md:h-[600px]

                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-[1.04]
              "
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-transparent" />

            {/* Contenu */}

            <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16">

              <h3 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F1EB] sm:text-5xl md:text-6xl">
                Before I Knew You
              </h3>

              <p className="mt-5 max-w-xl text-base italic leading-relaxed text-[#D9C8B7] sm:text-lg">
                Une sélection de morceaux qui ont accompagné l'écriture du roman
                et inspiré son univers.
              </p>

              <div
                className="
                  mt-10

                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  border
                  border-[#C99A63]

                  px-8
                  py-4

                  text-xs
                  uppercase
                  tracking-[0.30em]

                  text-[#F5F1EB]

                  transition-all
                  duration-500

                  group-hover:bg-[#C99A63]
                  group-hover:text-[#171312]
                "
              >
                Écouter la playlist

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </a>

        </div>

      </Container>
    </section>
  );
}