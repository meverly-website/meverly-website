import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

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
        width: 1200,
        height: 630,
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

  icons: {
    icon: "/favicon.ico",
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
      <body>{children}</body>
    </html>
  );
}