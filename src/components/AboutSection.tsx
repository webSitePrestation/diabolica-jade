'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from '@/components/SectionDivider'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 24 },
    animate:    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { delay, duration: 0.85, ease: EASE },
  })

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="À propos — Dom Rabatia"
      className="relative w-full overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche — Ivoire */}
        <div className="relative bg-[#F5EDD8] text-[#1A1010]">
          <div className="relative min-h-[640px] lg:min-h-[780px] xl:min-h-[860px] px-6 lg:px-14 xl:px-20 py-12 lg:py-24 flex flex-col">
            {/* Numéro décoratif */}
            <span
              aria-hidden="true"
              className="absolute top-10 right-4 sm:right-8 text-[9.5rem] xl:text-[12.2rem] font-bold italic leading-none text-[#c9a84c]/25 pointer-events-none select-none"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              02
            </span>

            {/* Label */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#C9A84C] flex-shrink-0" />
              <span
                className="text-[9px] tracking-[0.5em] uppercase text-[#1A1010]/85 font-light"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                La Reine
              </span>
            </motion.div>

            <SectionDivider />

            {/* Titre */}
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[2.2rem] sm:text-[2.6rem] xl:text-[3.2rem] leading-[1.08] tracking-tight text-[#1A1010] italic font-normal"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Je suis <em style={{ color: 'var(--gold-primary)' }}>l&apos;origine.</em>
            </motion.h2>

            {/* Corps */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-5">
              <p
                className="text-[14px] leading-[1.95] text-[#1A1010]/65 font-light"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                Mon nom vient de Rabat, la capitale royale du Maroc. Ce n&apos;est pas un hasard — c&apos;est une naissance.
                Je ne séduis pas. Je règne. Vous ne m&apos;approchez pas. Vous êtes convoqué.
              </p>
              <p
                className="text-[14px] leading-[1.95] text-[#1A1010]/65 font-light"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                Ce que vous ressentez en me découvrant n&apos;est pas du désir.
                <br />
                C&apos;est la reconnaissance instinctive d&apos;une hiérarchie naturelle.
              </p>
            </motion.div>

            {/* Citation */}
            <motion.blockquote
              {...fadeUp(0.3)}
              style={{
                borderLeft: '1px solid var(--gold-primary)',
                paddingLeft: '2rem',
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: '#1A1010',
              }}
            >
              <p
                className="text-[14px] italic leading-relaxed text-[#1A1010]"
                style={{ fontFamily: 'var(--font-cormorant-garamond, Georgia, serif)' }}
              >
                &laquo; Je n&apos;ai pas à me justifier. Les reines ne s&apos;expliquent pas. &raquo;
              </p>
            </motion.blockquote>

            {/* Séparateur */}
            <motion.div {...fadeUp(0.35)} className="w-16 h-px bg-[#C9A84C]/20 mt-2" />

            {/* Stats en bas */}
            <div className="mt-auto pt-8">
              <motion.div {...fadeUp(0.4)} className="flex items-end justify-between gap-6">
                {(
                  [
                    { value: 'Lignée', label: 'Royale' },
                    { value: 'Rabat', label: 'Origines' },
                    { value: '∞', label: 'Dévotion' },
                  ] as const
                ).map(({ value, label }, idx) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ delay: 0.05 + idx * 0.05, duration: 0.7, ease: EASE }}
                    className="flex-1 flex flex-col gap-2"
                  >
                    <div className="flex items-end justify-between gap-6">
                      {idx !== 0 ? (
                        <div className="w-px h-14 bg-[#C9A84C]/35" aria-hidden="true" />
                      ) : null}
                      <div className="flex-1 flex flex-col gap-2">
                        <span
                          className="text-[26px] sm:text-[28px] font-bold leading-none text-[#C9A84C]"
                          style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                        >
                          {value}
                        </span>
                        <span
                          className="text-[9px] tracking-[0.4em] uppercase text-[#1A1010]/35 font-light"
                          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                        >
                          {label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Colonne droite — Bordeaux */}
        <div className="relative bg-[#2D0810] text-[#F5EDD8]">
          <div className="relative min-h-[520px] lg:min-h-[780px] xl:min-h-[860px] px-6 lg:px-14 xl:px-20 py-12 lg:py-24">
            {/* Ornement SVG doré à faible opacité */}
            <svg
              aria-hidden="true"
              viewBox="0 0 900 650"
              className="absolute inset-0 w-full h-full"
              style={{ opacity: 0.06 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#C9A84C" strokeWidth="2">
                <path d="M140 120 L260 70 L390 120 L260 170 Z" />
                <path d="M510 90 L640 60 L740 120 L610 155 Z" />
                <path d="M95 315 L230 250 L340 315 L210 380 Z" />
                <path d="M430 270 L590 215 L720 290 L560 345 Z" />
                <path d="M170 520 L320 455 L450 520 L305 585 Z" />
                <path d="M515 470 L670 420 L800 495 L645 545 Z" />
                <path d="M260 170 L390 120 L510 90" />
                <path d="M95 315 L210 380 L170 520" />
                <path d="M430 270 L560 345 L515 470" />
              </g>
              <g fill="#C9A84C" opacity="0.35">
                <circle cx="260" cy="70" r="3" />
                <circle cx="640" cy="60" r="3" />
                <circle cx="230" cy="250" r="3" />
                <circle cx="590" cy="215" r="3" />
                <circle cx="320" cy="455" r="3" />
                <circle cx="670" cy="420" r="3" />
              </g>
            </svg>

            {/* Carte info flottante en bas */}
            <div className="absolute left-6 right-6 lg:left-14 lg:right-14 bottom-10 lg:bottom-12">
              <motion.div
                {...fadeUp(0.25)}
                className="rounded-[1.8rem] border border-[#C9A84C]/70 bg-black/45 backdrop-blur-[10px] shadow-[0_30px_120px_rgba(0,0,0,0.45)] px-7 py-7 lg:px-10 lg:py-9"
              >
                <div className="flex flex-col gap-4">
                  <div className="inline-flex border border-[#C9A84C]/30 px-5 py-2.5 w-fit">
                    <span
                      className="text-[9px] tracking-[0.42em] uppercase text-[#C9A84C]/90 font-light"
                      style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                    >
                      Domina Lifestyle
                    </span>
                  </div>

                  <div>
                    <div className="text-[12px] tracking-[0.34em] uppercase text-[#F5EDD8]/70 font-light">
                      À propos
                    </div>
                    <div
                      className="mt-2 text-[22px] leading-[1.1] italic text-[#F5EDD8]"
                      style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                    >
                      Dom Rabatia
                    </div>
                  </div>

                  <p
                    className="text-[13px] leading-[1.85] text-[#F5EDD8]/70"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    Une présence royale, née de Rabat. Hiérarchie naturelle, désir interdit, règne assumé.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}