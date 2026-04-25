import type { Metadata } from 'next'
import { Playfair_Display, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

/* ─────────────────────────────────────────────────────────────────
   POLICES
───────────────────────────────────────────────────────────────── */

/** Serif élégante — titres & display */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

/** Sans-Serif fine — corps, sous-titres, labels */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400'],
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
  title: 'Diabolica Jade',
  description: 'Domina Lifestyle & Teasing — Univers exclusif.',
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
        ${playfair.variable}
        ${inter.variable}
        ${geistMono.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f0e8]">
        {children}
      </body>
    </html>
  )
}