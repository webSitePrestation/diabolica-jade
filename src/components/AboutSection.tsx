'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function AboutSection() {
  const [aboutImageSrc, setAboutImageSrc] = useState('/image00001.jpeg')
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
      aria-label="À propos — Diabolica Jade"
      className="relative w-full bg-[#0a0a0a]"
    >

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP LAYOUT (lg+)
          Image positionnée en absolute à gauche — hauteur 100%
          garantie sans dépendre d'une hauteur calculée par flex.
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <div className="relative min-h-[780px] xl:min-h-[860px]">

          {/* Image — occupe tout le panneau gauche en absolute */}
          <div className="absolute inset-y-0 left-0 w-[46%] xl:w-[44%] overflow-hidden rounded-r-[2.5rem]">
            <Image
              src={aboutImageSrc}
              alt="Diabolica Jade"
              fill
              sizes="46vw"
              className="object-cover object-[50%_20%] brightness-[1.08] contrast-[1.02]"
              loading="eager"
              onError={() => setAboutImageSrc('/image00001.jpeg')}
            />
            <div className="absolute inset-0 border-r border-[#c9a84c]/25" />
            {/* Fondu latéral droite → noir pour raccorder avec le texte */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.1) 40%, rgba(10,10,10,0.92) 100%)',
              }}
            />
            {/* Fondu bas subtil */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 42%, rgba(10,10,10,0.58) 100%)',
              }}
            />
          </div>

          {/* Texte — décalé à droite, centré verticalement */}
          <div className="relative ml-[42%] xl:ml-[40%] flex items-center min-h-[780px] xl:min-h-[860px]">
            <div className="w-full max-w-[560px] xl:max-w-[620px] px-14 xl:px-20 py-24 flex flex-col gap-8 rounded-[2rem] bg-[#0d0d0d]/45 backdrop-blur-[1.5px] border border-[#c9a84c]/10 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">

              {/* Numéro décoratif */}
              <span
                aria-hidden="true"
                className="absolute top-12 right-8 text-[11rem] xl:text-[14rem] font-bold italic leading-none text-[#f5f0e8]/[0.028] pointer-events-none select-none"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                02
              </span>

              {/* Label */}
              <motion.div {...fadeUp(0)} className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#c9a84c] flex-shrink-0" />
                <span
                  className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  À propos
                </span>
              </motion.div>

              {/* Titre */}
              <motion.h2
                {...fadeUp(0.1)}
                className="text-[2.6rem] xl:text-[3.2rem] leading-[1.08] tracking-tight text-[#f5f0e8] italic font-normal"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                Je suis <span className="not-italic font-bold text-[#c9a84c]">LA tentation.</span>
              </motion.h2>

              {/* Corps */}
              <motion.div {...fadeUp(0.2)} className="flex flex-col gap-5">
                <p
                  className="text-[14px] leading-[1.95] text-[#f5f0e8]/55 font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  Belle comme une rose, douloureuse comme ses épines.
                  Je ne cours pas après vous — vous suppliez pour retenir
                  mon attention. Ce n&apos;est pas de l&apos;arrogance.
                  C&apos;est l&apos;ordre naturel des choses.
                </p>
                <p
                  className="text-[14px] leading-[1.95] text-[#f5f0e8]/55 font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  Rentrer dans mon univers est difficile.
                  <br />
                  En ressortir l&apos;est encore plus.
                </p>
              </motion.div>

              {/* Citation */}
              <motion.blockquote
                {...fadeUp(0.3)}
                className="border-l-2 border-[#c9a84c]/35 pl-6"
              >
                <p
                  className="text-[14px] italic leading-relaxed text-[#f5f0e8]/38"
                  style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                >
                  &ldquo; C&apos;est moi qui décide de tes limites. &rdquo;
                </p>
              </motion.blockquote>

              {/* Séparateur */}
              <motion.div {...fadeUp(0.35)} className="w-16 h-px bg-[#c9a84c]/25" />

              {/* Stats */}
              <motion.div {...fadeUp(0.4)} className="flex gap-12">
                {(
                  [
                    { value: '100%', label: 'Exclusif'  },
                    { value: 'FR',   label: 'Contenu'   },
                    { value: '∞',    label: 'Intensité' },
                  ] as const
                ).map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <span
                      className="text-[26px] font-bold leading-none text-[#c9a84c]"
                      style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-[9px] tracking-[0.4em] uppercase text-[#f5f0e8]/28 font-light"
                      style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Badge */}
              <motion.div {...fadeUp(0.48)}>
                <div className="inline-flex border border-[#c9a84c]/25 px-5 py-2.5">
                  <span
                    className="text-[9px] tracking-[0.42em] uppercase text-[#c9a84c]/70 font-light"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    Domina Lifestyle
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE LAYOUT (< lg)
          Empilement vertical : image → texte
      ══════════════════════════════════════════════════════════ */}
      <div className="lg:hidden">

        {/* Image mobile — hauteur fixe explicite */}
        <div className="relative w-full h-[460px] overflow-hidden rounded-b-[2rem]">
          <Image
            src={aboutImageSrc}
            alt="Diabolica Jade"
            fill
            sizes="100vw"
            className="object-cover object-[50%_16%] brightness-[1.08] contrast-[1.02]"
            onError={() => setAboutImageSrc('/image00001.jpeg')}
          />
          <div className="absolute inset-0 border-b border-[#c9a84c]/25" />
          {/* Fondu bas */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 45%, #0a0a0a 100%)',
            }}
          />
          {/* Badge mobile */}
          <div className="absolute bottom-5 left-5 bg-[#0a0a0a]/80 border border-[#c9a84c]/30 px-4 py-2 backdrop-blur-sm">
            <span
              className="text-[8px] tracking-[0.42em] uppercase text-[#c9a84c] font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Domina Lifestyle
            </span>
          </div>
        </div>

        {/* Texte mobile */}
        <div className="px-6 pb-20 pt-10 flex flex-col gap-6">

          <motion.div {...fadeUp(0)} className="flex items-center gap-4">
            <div className="w-7 h-px bg-[#c9a84c] flex-shrink-0" />
            <span
              className="text-[8.5px] tracking-[0.48em] uppercase text-[#c9a84c] font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              À propos
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.08)}
            className="text-[clamp(1.9rem,8vw,2.4rem)] leading-[1.1] tracking-tight text-[#f5f0e8] italic font-normal"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Je suis <span className="not-italic font-bold text-[#c9a84c]">LA tentation.</span>
          </motion.h2>

          <motion.div {...fadeUp(0.16)} className="flex flex-col gap-4">
            <p
              className="text-[13px] leading-[1.9] text-[#f5f0e8]/55 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Belle comme une rose, douloureuse comme ses épines.
              Je ne cours pas après vous — vous suppliez pour retenir
              mon attention. Ce n&apos;est pas de l&apos;arrogance.
              C&apos;est l&apos;ordre naturel des choses.
            </p>
            <p
              className="text-[13px] leading-[1.9] text-[#f5f0e8]/55 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Rentrer dans mon univers est difficile.
              <br />
              En ressortir l&apos;est encore plus.
            </p>
          </motion.div>

          <motion.blockquote {...fadeUp(0.24)} className="border-l border-[#c9a84c]/40 pl-5">
            <p
              className="text-[13px] italic leading-relaxed text-[#f5f0e8]/40"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              &ldquo; C&apos;est moi qui décide de tes limites. &rdquo;
            </p>
          </motion.blockquote>

          <motion.div {...fadeUp(0.3)} className="w-12 h-px bg-[#c9a84c]/25" />

          <motion.div {...fadeUp(0.36)} className="flex gap-10">
            {(
              [
                { value: '100%', label: 'Exclusif'  },
                { value: 'FR',   label: 'Contenu'   },
                { value: '∞',    label: 'Intensité' },
              ] as const
            ).map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span
                  className="text-[22px] font-bold leading-none text-[#c9a84c]"
                  style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                >
                  {value}
                </span>
                <span
                  className="text-[8px] tracking-[0.38em] uppercase text-[#f5f0e8]/30 font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  )
}