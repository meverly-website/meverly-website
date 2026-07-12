import Image from "next/image";
import Container from "./Container";

export default function PlaylistSection() {
  return (
    <section
      id="playlists"
      className="bg-[#0E0B0B] py-24 md:py-40"
    >
      <Container>

        {/* Séparateur */}

        <div className="mx-auto mb-16 h-px w-24 bg-[#C99A63]/40" />

        {/* Titre */}

        <div className="text-center">

          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-7xl text-[#F5F1EB]">
            L&apos;UNIVERS MUSICAL
          </h2>

          <p className="mx-auto mt-6 max-w-3xl px-4 font-[family-name:var(--font-cormorant)] text-xl italic leading-relaxed text-[#CFC4B8] md:text-2xl">
            Les chansons qui ont accompagné l'écriture de
            <br />
            <span className="text-[#F5F1EB]">Before I Knew You.</span>
          </p>

        </div>

        {/* Carte */}

        <div className="mt-16 md:mt-24">

          <a
            href="https://open.spotify.com/playlist/1mFzKIixcOMPV1c6nObEuj?si=3f27dc9f9a20468b"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >

            <div className="relative h-[500px] sm:h-[620px] lg:h-[760px] overflow-hidden rounded-3xl">

              {/* Image */}

              <Image
                src="/playlist.jpg"
                alt="Playlist d'écriture"
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.04]
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Contenu */}

              <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-20">

                <div className="max-w-xl">

                  <p
                    className="
                      uppercase
                      tracking-[0.45em]
                      text-xs

                      text-[#C99A63]
                    "
                  >
                    Carnet d'écriture
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl text-[#F5F1EB]">
                    Before I Knew You
                  </h3>

                  <p className="mt-5 text-base sm:text-lg italic leading-relaxed text-[#CFC4B8]">
                    Chaque morceau a accompagné une émotion,
                    une scène ou un chapitre.
                    Cette playlist retrace le chemin parcouru
                    pendant l'écriture du roman.
                  </p>

                  {/* Signature */}

                  <div className="mt-12 flex flex-col">

                    <span
                      className="
                        mb-4
                        h-px
                        w-16

                        bg-[#C99A63]/50

                        transition-all
                        duration-500

                        group-hover:w-28
                        group-hover:bg-[#C99A63]
                      "
                    />

                    <span
                      className="
                        uppercase

                        tracking-[0.45em]

                        text-sm

                        text-[#C99A63]

                        transition-all
                        duration-500

                        group-hover:text-white
                        group-hover:tracking-[0.55em]
                      "
                    >
                      Listen on Spotify
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </a>

        </div>

      </Container>
    </section>
  );
}