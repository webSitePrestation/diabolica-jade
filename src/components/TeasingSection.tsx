'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Send } from 'lucide-react'
import { SectionDivider } from '@/components/SectionDivider'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const TELEGRAM_URL = 'https://t.me/DiabolicaJade'

/*
  Remplace les `src` par tes vraies photos dans /public/
  quand tu les auras. Pour l'instant elles utilisent l'image existante.

  `size` contrôle la place dans la grille :
    'tall'  → hauteur double (portrait)
    'wide'  → largeur double (paysage)
    'small' → case normale
*/
interface GalleryItem {
  src:  string
  alt:  string
  size: 'tall' | 'wide' | 'small'
}

const ITEMS: GalleryItem[] = [
  { src: '/image00002.jpeg', alt: 'Diabolica Jade', size: 'tall'  },
  { src: '/image00002.jpeg', alt: 'Diabolica Jade', size: 'small' },
  { src: '/image00002.jpeg', alt: 'Diabolica Jade', size: 'small' },
  { src: '/image00002.jpeg', alt: 'Diabolica Jade', size: 'wide'  },
  { src: '/image00002.jpeg', alt: 'Diabolica Jade', size: 'small' },
  { src: '/image00002.jpeg', alt: 'Diabolica Jade', size: 'small' },
]

export default function TeasingSection() {
  const titleRef  = useRef<HTMLDivElement>(null)
  const gridRef   = useRef<HTMLDivElement>(null)
  const isInView  = useInView(titleRef, { once: true, amount: 0.2 })
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 })

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { delay, duration: 0.85, ease: EASE },
  })

  return (
    <section
      id="gallery"
      aria-label="Galerie — Diabolica Jade"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-28 lg:py-40 px-6 md:px-12 lg:px-20"
    >
      {/* Numéro décoratif */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-16 left-6 lg:left-20 text-[clamp(6rem,18vw,14rem)] font-bold italic leading-none text-[#f5f0e8]/[0.025]"
        style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
      >
        04
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── En-tête ─────────────────────────────────────────── */}
        <div ref={titleRef}>
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c9a84c] flex-shrink-0" />
            <span
              className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Aperçu
            </span>
          </motion.div>

          <SectionDivider />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 lg:mb-20">
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] tracking-tight text-[#f5f0e8] italic font-normal"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Un avant-goût
              <br />
              <span className="not-italic font-bold text-[#c9a84c]">
                de mon univers.
              </span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.18)}
              className="text-[13px] leading-[1.8] text-[#f5f0e8]/42 font-light max-w-xs lg:text-right"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Rejoignez mon Telegram pour accéder
              <br className="hidden lg:block" />
              à l&apos;intégralité du contenu en continu.
            </motion.p>
          </div>
        </div>

        {/* ── Grille photos ────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="
            grid gap-2 lg:gap-3
            grid-cols-2 lg:grid-cols-3
            auto-rows-[180px] lg:auto-rows-[220px]
          "
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: EASE }}
              className={`
                group relative overflow-hidden bg-[#111]
                ${item.size === 'tall'  ? 'row-span-2' : ''}
                ${item.size === 'wide'  ? 'col-span-2' : ''}
              `}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="
                  object-cover object-top
                  scale-[1.03] group-hover:scale-[1.07]
                  transition-transform duration-700 ease-out
                  brightness-[0.88] group-hover:brightness-[0.96]
                  transition-[transform,filter] duration-700
                "
              />

              {/* Overlay dégradé permanent bas */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 45%, rgba(10,10,10,0.6) 100%)',
                }}
              />

              {/* Cadre doré au hover */}
              <div
                className="
                  absolute inset-0 border border-[#c9a84c]/0
                  group-hover:border-[#c9a84c]/40
                  transition-colors duration-500 pointer-events-none
                "
              />

              {/* Label Telegram au hover — slide depuis le bas */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  flex items-center justify-center gap-2
                  py-3
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-400 ease-out
                  bg-gradient-to-t from-[#0a0a0a]/90 to-transparent
                "
              >
                <Send size={10} strokeWidth={1.5} className="text-[#c9a84c]" />
                <span
                  className="text-[7.5px] tracking-[0.35em] uppercase text-[#f5f0e8]/80 font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  Voir sur Telegram
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA bas de section ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.65, duration: 0.85, ease: EASE }}
          className="mt-16 lg:mt-20 flex flex-col items-center gap-6"
        >
          {/* Ligne déco */}
          <div
            className="w-full h-px"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)',
            }}
          />

          <p
            className="text-[13px] text-[#f5f0e8]/40 font-light text-center max-w-sm"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Suivez mon contenu.
            Rejoignez gratuitement pour ne rien manquer.
          </p>

          {/* Bouton Telegram */}
          <motion.a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.97 }}
            className="
              group relative
              flex items-center gap-4
              px-10 py-4 lg:px-14 lg:py-5
              border border-[#c9a84c]/40 hover:border-[#c9a84c]/80
              overflow-hidden transition-colors duration-500
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]/60
            "
            style={{ animation: 'luxePulse 4s ease-in-out 1s infinite' }}
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
              size={12}
              strokeWidth={1.5}
              className="relative z-10 text-[#c9a84c]"
              aria-hidden="true"
            />
            <span
              className="relative z-10 text-[9px] tracking-[0.38em] uppercase font-light text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Rejoindre mon Telegram
            </span>
          </motion.a>

          <div className="flex items-center gap-3" aria-hidden="true">
            <div className="w-8 h-px bg-[#f5f0e8]/10" />
            <span
              className="text-[7.5px] tracking-[0.3em] uppercase text-[#f5f0e8]/20"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Accès gratuit · Contenu quotidien
            </span>
            <div className="w-8 h-px bg-[#f5f0e8]/10" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}