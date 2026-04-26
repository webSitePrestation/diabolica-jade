'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Crown, MessageCircle } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]
const TELEGRAM_URL = 'https://t.me/DiabolicaJade'

interface Service {
  icon:        React.ReactNode
  label:       string
  title:       string
  description: string
  details:     string[]
  cta:         string
  highlight:   boolean
}

const SERVICES: Service[] = [
  {
    icon:      <Sparkles size={18} strokeWidth={1} />,
    label:     'Lifestyle',
    title:     'Lifestyle & Teasing',
    description:
      'Photos quotidiennes, mises en scène soignées et esthétique raffinée. Un teasing permanent dans une ambiance sombre, élégante et séduisante.',
    details: [
      'Visuels quotidiens premium',
      'Mises en scène signature',
      'Atmosphère dark luxury',
    ],
    cta:       'Découvrir',
    highlight: false,
  },
  {
    icon:      <Crown size={18} strokeWidth={1} />,
    label:     'Univers Domina',
    title:     'Domination & Pouvoir',
    description:
      'Une seule chance. Ne la gâchez pas. Je ne donne pas de secondes opportunités à ceux qui n\'ont pas su saisir la première.',
    details: [
      'Dominance affirmée',
      'Énergie intense et codifiée',
      'Expérience immersive',
    ],
    cta:       'Découvrir',
    highlight: true,
  },
  {
    icon:      <MessageCircle size={18} strokeWidth={1} />,
    label:     'Direct',
    title:     'Contact Privé',
    description:
      'Pour celles et ceux qui veulent aller plus loin, je suis joignable en DM direct sur Telegram pour un échange personnel et confidentiel.',
    details: [
      'DM Telegram direct',
      'Contact personnel',
      'Échange confidentiel',
    ],
    cta:       'Me contacter',
    highlight: false,
  },
]

/* ── Sous-composant card ────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
  isInView,
}: {
  service:  Service
  index:    number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ delay: 0.28 + index * 0.13, duration: 0.9, ease: EASE }}
      className={`
        group relative flex flex-col gap-6 p-8 lg:p-10
        border transition-all duration-500 overflow-hidden
        ${service.highlight
          ? 'border-[#c9a84c]/55 bg-[#0e0e0e]/90 shadow-[0_0_80px_rgba(201,168,76,0.09)]'
          : 'border-[#f5f0e8]/8 bg-[#0c0c0c]/60 hover:border-[#c9a84c]/28'
        }
      `}
    >
      {/* Shimmer au hover */}
      <span
        aria-hidden="true"
        className="
          absolute top-0 -left-full h-full w-1/2 pointer-events-none
          bg-gradient-to-r from-transparent via-[#c9a84c]/6 to-transparent
          group-hover:left-[160%] transition-[left] duration-700 ease-out
        "
      />

      {/* Badge highlight */}
      {service.highlight && (
        <div className="absolute top-0 right-0 bg-[#c9a84c] px-4 py-1.5">
          <span
            className="text-[7.5px] tracking-[0.35em] uppercase text-[#0a0a0a] font-medium"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            {service.label}
          </span>
        </div>
      )}

      {/* Icône */}
      <div
        className={`
          w-10 h-10 flex items-center justify-center border flex-shrink-0
          transition-colors duration-300
          ${service.highlight
            ? 'border-[#c9a84c]/50 text-[#c9a84c]'
            : 'border-[#f5f0e8]/10 text-[#f5f0e8]/45 group-hover:border-[#c9a84c]/40 group-hover:text-[#c9a84c]'
          }
        `}
      >
        {service.icon}
      </div>

      {/* Label (non-highlight seulement) */}
      {!service.highlight && (
        <span
          className="text-[8px] tracking-[0.4em] uppercase text-[#f5f0e8]/28 font-light -mb-3"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          {service.label}
        </span>
      )}

      {/* Titre */}
      <h3
        className={`
          text-[1.35rem] lg:text-[1.55rem] leading-tight tracking-tight italic font-normal
          ${service.highlight ? 'text-[#c9a84c]' : 'text-[#f5f0e8]'}
        `}
        style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-[13px] leading-[1.85] text-[#f5f0e8]/48 font-light"
        style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
      >
        {service.description}
      </p>

      {/* Séparateur */}
      <div className="w-full h-px bg-[#f5f0e8]/6" />

      {/* Liste détails */}
      <ul className="flex flex-col gap-3">
        {service.details.map((d) => (
          <li key={d} className="flex items-start gap-3">
            <span className="text-[#c9a84c] flex-shrink-0 text-[10px] mt-[3px]">—</span>
            <span
              className="text-[12px] text-[#f5f0e8]/52 font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              {d}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-2">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            block w-full py-4 text-center
            text-[9px] tracking-[0.35em] uppercase font-light
            border transition-all duration-400
            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]/60
            ${service.highlight
              ? 'bg-[#c9a84c] border-[#c9a84c] text-[#0a0a0a] hover:bg-[#c9a84c]/85'
              : 'border-[#f5f0e8]/12 text-[#f5f0e8]/60 hover:border-[#c9a84c]/55 hover:text-[#c9a84c]'
            }
          `}
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          {service.cta}
        </a>
      </div>
    </motion.div>
  )
}

/* ── Composant principal ────────────────────────────────────────── */
export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.15 })

  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 28 },
    animate:    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { delay, duration: 0.85, ease: EASE },
  })

  return (
    <section
      id="services"
      aria-label="Services — Diabolica Jade"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-28 lg:py-40 px-6 md:px-12 lg:px-20"
    >
      {/* Numéro décoratif */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-16 right-6 lg:right-20 text-[clamp(6rem,18vw,14rem)] font-bold italic leading-none text-[#f5f0e8]/[0.025]"
        style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
      >
        03
      </span>

      <div ref={titleRef} className="relative z-10 max-w-6xl mx-auto">

        {/* ── En-tête ─────────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#c9a84c] flex-shrink-0" />
          <span
            className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-light"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Mon univers
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 lg:mb-20">
          <motion.h2
            {...fadeUp(0.1)}
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] tracking-tight text-[#f5f0e8] italic font-normal"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Vous n&apos;accédez pas à mon monde.
            <br />
            <span className="not-italic font-bold text-[#c9a84c]">Vous y êtes admis.</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            className="text-[13px] leading-[1.8] text-[#f5f0e8]/42 font-light max-w-xs lg:text-right"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Telegram est gratuit et ouvert.
            <br className="hidden lg:block" />
            Découvrez mon univers, puis contactez-moi en direct.
          </motion.p>
        </div>

        {/* ── Cards ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  )
}
