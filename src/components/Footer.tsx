'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, X } from 'lucide-react'

/* ─────────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────────── */
const TELEGRAM_URL  = 'https://t.me/DiabolicaJade'
const X_URL         = 'https://x.com/diabolicaisback?s=21'
const VTC_URL       = 'https://www.vends-ta-culotte.com/user/117113/Diabolica+Jade'
const CURRENT_YEAR  = new Date().getFullYear()

interface FooterLink {
  label: string
  href:  string
}

const LEGAL_LINKS: FooterLink[] = [
  { label: 'Mentions légales',       href: '/mentions-legales' },
  { label: 'Politique de conf.',     href: '/confidentialite' },
  { label: 'CGU',                    href: '/cgu' },
]

const RESOURCE_LINKS: FooterLink[] = [
  { label: 'Pratiques', href: '/pratiques' },
  { label: 'Protocole', href: '/protocole' },
  { label: 'Journal', href: '/blog' },
]

const SOCIAL_LINKS = [
  {
    label: 'Telegram',
    href: TELEGRAM_URL,
    icon: <Send size={12} strokeWidth={1} aria-hidden="true" />,
  },
  {
    label: 'X',
    href: X_URL,
    icon: <X size={12} strokeWidth={1} aria-hidden="true" />,
  },
  {
    label: 'V·T·C',
    href: VTC_URL,
    icon: null,
  },
] as const

/* ─────────────────────────────────────────────────────────────────
   COMPOSANT
───────────────────────────────────────────────────────────────── */
export default function Footer() {
  const ref     = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer
      ref={ref}
      id="contact"
      role="contentinfo"
      aria-label="Pied de page — Diabolica Jade"
      className="relative w-full bg-[#0a0a0a] overflow-hidden"
    >

      {/* Séparateur haut — ligne fine dorée */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />

      {/* ── Bloc CTA central ──────────────────────────────────── */}
      <div className="px-6 pt-20 pb-14 md:px-12 flex flex-col items-center gap-8 text-center">

        {/* Monogramme animé */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <span
            className="
              text-[clamp(2.8rem,10vw,5rem)]
              font-bold italic text-[#c9a84c]/15
              leading-none select-none
            "
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            D · J
          </span>
        </motion.div>

        {/* Accroche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          <h2
            className="text-[clamp(1.4rem,5vw,2rem)] italic font-normal text-[#f5f0e8]"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Vous n&apos;avez qu&apos;une seule chance. Ne la gâchez pas.
          </h2>
          <p
            className="text-[11px] tracking-[0.3em] uppercase text-[#f5f0e8]/40 font-light"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Contenu exclusif · Telegram
          </p>
        </motion.div>

        {/* Bouton Telegram */}
        <motion.a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.38, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Rejoindre sur Telegram"
          className="
            group relative
            flex items-center gap-3
            px-8 py-4
            border border-[#c9a84c]/40 hover:border-[#c9a84c]/80
            transition-colors duration-500 overflow-hidden
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]/60
          "
        >
          {/* Fond hover */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/8 transition-colors duration-500"
          />
          {/* Shimmer */}
          <span
            aria-hidden="true"
            className="
              absolute top-0 -left-full h-full w-1/2
              bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent
              group-hover:left-[160%] transition-[left] duration-700 ease-out
            "
          />
          <Send
            size={13}
            strokeWidth={1.5}
            className="relative z-10 text-[#c9a84c]"
            aria-hidden="true"
          />
          <span
            className="relative z-10 text-[9px] tracking-[0.35em] uppercase font-light text-[#f5f0e8]"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Rejoindre mon Telegram
          </span>
        </motion.a>

        <motion.nav
          aria-label="Réseaux sociaux"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.47, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIAL_LINKS.map(({ label, href, icon }, i) => (
            <span key={label} className="flex items-center gap-4">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-light text-[#f5f0e8]/30 hover:text-[#c9a84c]/70 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                {icon}
                <span>{label}</span>
              </a>
              {i < SOCIAL_LINKS.length - 1 && (
                <span aria-hidden="true" className="text-[#c9a84c]/55 text-[10px]">·</span>
              )}
            </span>
          ))}
        </motion.nav>

      </div>

      {/* Séparateur bas */}
      <div className="w-full h-px bg-[#f5f0e8]/5 mx-auto" />

      {/* ── Bas de page — légal + copyright ──────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="
          px-6 py-6 md:px-12
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
        "
      >
        {/* Copyright */}
        <p
          className="text-[9px] tracking-[0.25em] uppercase text-[#f5f0e8]/22 font-light order-2 md:order-1"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          &copy; {CURRENT_YEAR} Diabolica Jade — Tous droits réservés
        </p>

        {/* Liens légaux */}
        <nav
          aria-label="Liens légaux"
          className="flex items-center gap-6 order-1 md:order-2"
        >
          {LEGAL_LINKS.map(({ label, href }, i) => (
            <span key={label} className="flex items-center gap-6">
              <a
                href={href}
                className="
                  text-[9px] tracking-[0.2em] uppercase font-light
                  text-[#f5f0e8]/25 hover:text-[#c9a84c]/70
                  transition-colors duration-300
                "
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                {label}
              </a>
              {i < LEGAL_LINKS.length - 1 && (
                <span aria-hidden="true" className="w-px h-2 bg-[#f5f0e8]/10" />
              )}
            </span>
          ))}
        </nav>
      </motion.div>

      <div className="px-6 pb-8 md:px-12">
        <nav
          aria-label="Ressources"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {RESOURCE_LINKS.map(({ label, href }, i) => (
            <span key={label} className="flex items-center gap-4">
              <a
                href={href}
                className="text-[9px] tracking-[0.22em] uppercase font-light text-[#f5f0e8]/22 hover:text-[#c9a84c]/70 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                {label}
              </a>
              {i < RESOURCE_LINKS.length - 1 && (
                <span aria-hidden="true" className="w-px h-2 bg-[#f5f0e8]/10" />
              )}
            </span>
          ))}
        </nav>
      </div>

    </footer>
  )
}
