import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import StarField from "@/components/StarField";
import "./globals.css";

/*
 * L'italique de Cormorant est chargée pour de vrai : sans elle, le
 * navigateur penche simplement les lettres droites, alors que la vraie est
 * calligraphique — c'est elle qui porte les citations, l'accroche et la
 * signature. Pas celle d'Inter : préchargée sur chaque page (51 Ko) pour
 * quelques lignes de la page du roman, où elle se distingue à peine d'un
 * romain penché.
 */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* Seules les graisses 300 et 400 sont employées sur le site. */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

/* Barre du navigateur mobile dans la couleur du fond, plutôt que blanche. */

export const viewport: Viewport = {
  themeColor: "#0D0C0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://meverly.fr"),

  title: {
    default: "Meverly — Autrice de Before I Knew You",
    template: "%s — Meverly",
  },

  description:
    "Découvrez l'univers de Meverly, autrice de Before I Knew You, une romance M/M contemporaine autour de l'amour, de la musique et de la reconstruction.",

  authors: [
    {
      name: "Meverly",
    },
  ],

  creator: "Meverly",
  publisher: "Meverly",

  alternates: {
    canonical: "https://meverly.fr",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://meverly.fr",
    siteName: "Meverly",
    title: "Meverly — Autrice de Before I Knew You",
    description:
      "Découvrez l'univers de Meverly et Before I Knew You, une romance M/M contemporaine autour de l'amour, de la musique et de la reconstruction.",

    images: [
      {
        url: "/og-image.png",
        width: 1734,
        height: 907,
        alt: "Meverly — Before I Knew You",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Meverly — Autrice de Before I Knew You",
    description:
      "Découvrez l'univers de Meverly et Before I Knew You, une romance M/M contemporaine autour de l'amour, de la musique et de la reconstruction.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>

        {/*
          Fond commun à toutes les pages : du noir et un léger grain. Les
          étoiles ne sont plus un ciel, seulement quelques points que l'on
          devine. Couche fixe, derrière tout.
        */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            fixed
            inset-0
            -z-10
            bg-[radial-gradient(140%_100%_at_50%_0%,#0D0C0A_0%,#000000_78%)]
          "
        >
          <StarField count={26} sparkles={0} className="opacity-45" />

          <div className="grain absolute inset-0" />
        </div>

        {children}

      </body>
    </html>
  );
}