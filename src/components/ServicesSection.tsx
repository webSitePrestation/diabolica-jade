'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Crown, MessageCircle } from 'lucide-react'
import { SectionDivider } from '@/components/SectionDivider'

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
    label:     'La Cour au Quotidien',
    title:     'Présence Royale',
    description:
      'Aperçus de ma vie, mises en scène soignées et esthétique orientale. Une présence permanente pour ceux qui méritent de me voir exister.',
    details: [
      'Visuels quotidiens premium',
      'Mise en scène signature',
      'Ambiance Orient Luxury',
    ],
    cta:       'Entrer dans la Cour',
    highlight: false,
  },
  {
    icon:      <Crown size={18} strokeWidth={1} />,
    label:     'Domination',
    title:     'Pouvoir Ancestral',
    description:
      'Une seule audience. Une seule chance. Mon regard peut vous élever ou vous anéantir — à ma seule discrétion.',
    details: [
      'Dominance de lignée',
      'Rituel codifié',
      'Expérience totale',
    ],
    cta:       'Solliciter l\'accès',
    highlight: false,
  },
  {
    icon:      <MessageCircle size={18} strokeWidth={1} />,
    label:     'Audience Privée',
    title:     'Convocation Directe',
    description:
      'Pour les rares qui ont su se distinguer. Une audience en DM, accordée à ma seule discrétion.',
    details: [
      'DM Telegram direct',
      'Réservé aux méritants',
      'Échange confidentiel',
    ],
    cta:       'Demander une audience',
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
      whileHover={{
        background: 'var(--bg-elevated)',
        boxShadow: '0 0 40px var(--gold-glow)',
        transform: 'translateY(-4px)',
      }}
      className={`
        group relative flex flex-col gap-6 p-8 lg:p-10
        overflow-hidden
      `}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--gold-border)',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Ornement doré haut-droit */}
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 text-[8px] leading-none text-[var(--color-gold-primary)]"
      >
        ◆
      </span>

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
            border-[var(--color-border-gold)] text-[var(--color-text-secondary)]
            hover:border-[var(--color-gold-primary)] hover:text-[var(--color-gold-primary)]
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

        <SectionDivider />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 lg:mb-20">
          <motion.h2
            {...fadeUp(0.1)}
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] tracking-tight text-[#f5f0e8] italic font-normal"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            On ne se présente pas à une Reine.
            <br />
            <em style={{ color: 'var(--gold-primary)' }}>On est convoqué.</em>
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            className="text-[13px] leading-[1.8] text-[#f5f0e8]/42 font-light max-w-xs lg:text-right"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Mon canal Telegram est ouvert. Découvrez mon univers. Puis sollicitez une audience — si vous pensez en être digne.
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
