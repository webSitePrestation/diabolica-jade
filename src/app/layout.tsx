import type { Metadata } from 'next'
import { Cormorant_Garamond, Cinzel, Jost, Geist_Mono } from 'next/font/google'
import './globals.css'

/* ─────────────────────────────────────────────────────────────────
   POLICES
───────────────────────────────────────────────────────────────── */

/** Serif élégante — titres & display */
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

/** Sans-Serif fine — corps, sous-titres, labels */
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500'],
  display: 'swap',
})

/** Serif display complémentaire */
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700'],
  display: 'swap',
})

/** Mono — conservé pour usage code éventuel */
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

/* ─────────────────────────────────────────────────────────────────
   METADATA
───────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Rbatia — Domina · Reine de lignée 🇲🇦',
  description: "Rbatia. Née à Rabat, règne sur Lyon et Paris. Domina de lignée royale. Findom, séances IRL, contenu exclusif. L'audience s'obtient — elle ne se demande pas.",
  openGraph: {
    title: 'Rbatia — Reine Domina 🇲🇦',
    description: 'Née de lignée royale. Inaccessible par nature. Audience sur convocation uniquement.',
    url: '[URL_FINALE_DU_SITE]',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DomRabatia',
    creator: '@DomRabatia',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: { index: false, follow: false }, // ← passe à true quand tu veux indexer
}

/* ─────────────────────────────────────────────────────────────────
   LAYOUT
───────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`
        ${cormorantGaramond.variable}
        ${jost.variable}
        ${cinzel.variable}
        ${geistMono.variable}
        h-full antialiased
      `}
    >
      <head>
        <title>Rbatia — Domina · Queen 🇲🇦</title>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}