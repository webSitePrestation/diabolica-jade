'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Menu, X, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AboutSection    from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import TeasingSection  from '@/components/TeasingSection'
import Footer          from '@/components/Footer'
import { SectionDivider } from '@/components/SectionDivider'

/* ─────────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────────── */
const TELEGRAM_URL = 'https://t.me/DiabolicaJade'
const RBATIA_TELEGRAM_URL = 'https://t.me/rbatia'
const X_URL = 'https://x.com/diabolicaisback?s=21'

interface NavLink { label: string; href: string }

const NAV_LINKS: NavLink[] = [
  { label: 'Sanctuaire', href: '#top'      },
  { label: 'La Reine',   href: '#about'    },
  { label: 'La Cour',    href: '#services' },
  { label: 'Portraits',  href: '#gallery'  },
  { label: 'Audience',   href: '#contact'  },
]

/* ─────────────────────────────────────────────────────────────────
   VARIANTS
───────────────────────────────────────────────────────────────── */
const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
}

const lineExpand: Variants = {
  hidden:  { scaleX: 0, opacity: 0, originX: '0%' },
  visible: { scaleX: 1, opacity: 1, originX: '0%', transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
}

const menuOverlay: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
  exit:    { opacity: 0, transition: { duration: 0.3 } },
}

const menuLinkVariants: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

/* ─────────────────────────────────────────────────────────────────
   COMPOSANT
───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const mounted = true
  const [showStickyNav, setShowStickyNav] = useState<boolean>(false)
  const [introVisible, setIntroVisible] = useState<boolean>(true)
  const [isNavScrolled, setIsNavScrolled] = useState<boolean>(false)

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setIntroVisible(false)
    }, 1800)

    return () => window.clearTimeout(introTimer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen || introVisible ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, introVisible])

  useEffect(() => {
    const toggleStickyNav = () => {
      const heroHeight = window.innerHeight
      setShowStickyNav(window.scrollY > heroHeight - 140)
    }

    toggleStickyNav()
    window.addEventListener('scroll', toggleStickyNav, { passive: true })
    window.addEventListener('resize', toggleStickyNav)

    return () => {
      window.removeEventListener('scroll', toggleStickyNav)
      window.removeEventListener('resize', toggleStickyNav)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {introVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }}
            className="fixed inset-0 z-[70] bg-[#050505] flex items-center justify-center"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5"
            >
              <motion.span
                initial={{ letterSpacing: '0.32em', opacity: 0 }}
                animate={{ letterSpacing: '0.2em', opacity: 1 }}
                transition={{ delay: 0.15, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.6rem,11vw,5.6rem)] leading-none text-[#f5f0e8]"
                style={{ fontFamily: 'var(--font-cinzel, Georgia, serif)' }}
              >
                R <span className="text-[var(--color-gold-primary)]">◆</span> B
              </motion.span>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-14 h-px bg-[#c9a84c]/65"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        aria-label="Navigation sections"
        initial={false}
        animate={showStickyNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={`
          fixed top-3 left-1/2 -translate-x-1/2 z-50
          hidden md:flex items-center gap-7
          px-7 py-3 border-b border-[var(--color-border-gold)]
          bg-[rgba(7,5,10,0.95)] backdrop-blur-md
          shadow-[0_10px_40px_rgba(0,0,0,0.38)]
          ${showStickyNav ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={`sticky-${label}`}
            href={href}
            className="text-[9px] uppercase tracking-[0.34em] text-[var(--ivory)]/58 hover:text-[var(--gold-bright)] transition-colors duration-300 border-b border-transparent hover:border-[var(--gold-primary)]"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            {label}
          </a>
        ))}

        <div className="relative group">
          <Link
            href="/blog"
            className="text-[9px] uppercase tracking-[0.3em] text-[#c9a84c]/85 hover:text-[#c9a84c] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Ressources
          </Link>

          <div
            className="
              absolute left-1/2 top-full -translate-x-1/2
              pt-2 min-w-[170px]
              opacity-0 pointer-events-none translate-y-1
              transition-all duration-200
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0
            "
          >
            <div
              className="
                border border-[#c9a84c]/20 bg-[#0a0a0a]/95 backdrop-blur-md
                px-4 py-3 flex flex-col gap-2 shadow-[0_14px_38px_rgba(0,0,0,0.38)]
              "
            >
              <Link
                href="/pratiques"
                className="text-[9px] uppercase tracking-[0.24em] text-[#f5f0e8]/65 hover:text-[#c9a84c] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                Pratiques
              </Link>
              <Link
                href="/protocole"
                className="text-[9px] uppercase tracking-[0.24em] text-[#f5f0e8]/65 hover:text-[#c9a84c] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                Protocole
              </Link>
              <Link
                href="/blog"
                className="text-[9px] uppercase tracking-[0.24em] text-[#f5f0e8]/65 hover:text-[#c9a84c] transition-colors duration-300"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                Journal
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 pl-2 ml-2 border-l border-[#f5f0e8]/10">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
          >
            <Send size={14} strokeWidth={1} aria-hidden="true" />
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
          >
            <X size={14} strokeWidth={1} aria-hidden="true" />
          </a>
          <a
            href={RBATIA_TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solliciter sur Telegram"
            className="uppercase"
            style={{
              fontFamily: 'Jost',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              border: '1px solid var(--gold-border)',
              padding: '0.55rem 1.4rem',
              background: 'transparent',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-primary)'
              e.currentTarget.style.color = 'var(--bg-primary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--gold-primary)'
            }}
          >
            Solliciter
          </a>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════════════════
          HERO — plein écran
      ════════════════════════════════════════════════════════ */}
      <main
        id="top"
        className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex flex-col bg-[#0a0a0a]"
        aria-label="Hero — Diabolica Jade"
      >
        {/* Fond image */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/[IMAGE_RBATIA].jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 40%, rgba(6,4,12,0.35) 0%, rgba(6,4,12,0.95) 100%)',
            }}
          />
        </div>

        {/* Navigation */}
        <nav
          className="relative z-30 flex items-center justify-between px-6 pt-10 md:px-12"
          aria-label="Navigation principale"
          style={
            isNavScrolled
              ? { background: 'rgba(6,4,12,0.97)', borderBottom: '1px solid var(--gold-border)' }
              : { background: 'transparent', borderBottom: '1px solid transparent' }
          }
        >
          {mounted && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-[10px] tracking-[0.5em] font-light text-[#c9a84c] select-none"
              style={{ fontFamily: 'var(--font-cinzel, Georgia, serif)' }}
            >
              <span style={{fontFamily:'Cinzel,serif', letterSpacing:'0.3em', color:'var(--ivory)'}}>
                R <span style={{color:'var(--gold-primary)', fontSize:'0.5em', margin:'0 4px'}}>◆</span> B
              </span>
            </motion.span>
          )}

          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="p-2 -mr-2 text-[var(--color-gold-primary)] hover:text-[var(--color-gold-bright)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-gold-primary)]/60"
          >
            {menuOpen
              ? <X    size={20} strokeWidth={1} aria-hidden="true" />
              : <Menu size={20} strokeWidth={1} aria-hidden="true" />
            }
          </button>
        </nav>

        {/* Menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              variants={menuOverlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 z-20 bg-[#0a0a0a]/96 backdrop-blur-sm flex flex-col items-center justify-center gap-10"
            >
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
                className="absolute top-10 right-6 p-2 text-[#f5f0e8]/40 hover:text-[#c9a84c] transition-colors"
              >
                <X size={20} strokeWidth={1} />
              </button>

              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  custom={i}
                  variants={menuLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl tracking-[0.2em] uppercase italic text-[#f5f0e8]/75 hover:text-[var(--gold-bright)] transition-colors duration-300 border-b border-transparent hover:border-[var(--gold-primary)]"
                  style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                >
                  {label}
                </motion.a>
              ))}

              <motion.div
                custom={NAV_LINKS.length}
                variants={menuLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-2 flex flex-col items-center gap-3"
              >
                <span
                  className="text-[8px] tracking-[0.35em] uppercase text-[#f5f0e8]/28"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  Ressources
                </span>
                <div className="flex flex-col items-center gap-2">
                  <Link
                    href="/pratiques"
                    onClick={() => setMenuOpen(false)}
                    className="text-[11px] tracking-[0.22em] uppercase text-[#f5f0e8]/62 hover:text-[#c9a84c] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    Pratiques
                  </Link>
                  <Link
                    href="/protocole"
                    onClick={() => setMenuOpen(false)}
                    className="text-[11px] tracking-[0.22em] uppercase text-[#f5f0e8]/62 hover:text-[#c9a84c] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    Protocole
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className="text-[11px] tracking-[0.22em] uppercase text-[#f5f0e8]/62 hover:text-[#c9a84c] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    Journal
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 mt-1"
              >
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
                >
                  <Send size={14} strokeWidth={1} aria-hidden="true" />
                </a>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
                >
                  <X size={14} strokeWidth={1} aria-hidden="true" />
                </a>
                <a
                  href={RBATIA_TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solliciter sur Telegram"
                  className="uppercase"
                  style={{
                    fontFamily: 'Jost',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    border: '1px solid var(--gold-border)',
                    padding: '0.55rem 1.4rem',
                    background: 'transparent',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold-primary)'
                    e.currentTarget.style.color = 'var(--bg-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'var(--gold-primary)'
                  }}
                >
                  Solliciter
                </a>
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-8 h-px bg-[#c9a84c]/50 mt-4"
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{textAlign:'center', position:'relative', zIndex:2, padding:'0 2rem'}}>

          <p style={{fontFamily:'Jost', fontSize:'0.62rem', letterSpacing:'0.55em', textTransform:'uppercase',
                     color:'var(--gold-primary)', marginBottom:'2rem'}}>
            🇲🇦 &nbsp; Rabat · Lyon · Paris &nbsp; 🇲🇦
          </p>

          <h1 style={{fontFamily:'Cormorant Garamond, serif', fontSize:'clamp(5rem,14vw,10rem)',
                      fontWeight:300, lineHeight:0.9, color:'var(--ivory)'}}>
            Rbatia
            <em style={{display:'block', fontStyle:'italic', fontWeight:300, fontSize:'0.55em',
                        color:'var(--text-secondary)', letterSpacing:'0.08em', marginTop:'0.5rem'}}>
              La Reine
            </em>
          </h1>

          {/* Séparateur doré */}
          <div style={{display:'flex', alignItems:'center', gap:'1.2rem', justifyContent:'center', margin:'2rem 0'}}>
            <div style={{width:'100px', height:'1px', background:'linear-gradient(90deg,transparent,var(--gold-primary),transparent)'}}/>
            <span style={{color:'var(--gold-primary)', fontSize:'0.6rem', letterSpacing:'0.5em'}}>◆ ◆ ◆</span>
            <div style={{width:'100px', height:'1px', background:'linear-gradient(90deg,transparent,var(--gold-primary),transparent)'}}/>
          </div>

          <p style={{fontFamily:'Jost', fontSize:'0.68rem', letterSpacing:'0.3em', textTransform:'uppercase',
                     color:'var(--text-muted)', marginBottom:'3.5rem'}}>
            Née de lignée royale &nbsp;·&nbsp; Vouée à être adorée &nbsp;·&nbsp; Inaccessible par nature
          </p>

          <a href="https://t.me/domrabatia" style={{display:'inline-flex', flexDirection:'column', alignItems:'center', gap:'0.6rem', textDecoration:'none'}}>
            <span style={{fontFamily:'Jost', fontSize:'0.65rem', fontWeight:500, letterSpacing:'0.3em',
                          textTransform:'uppercase', color:'var(--bg-primary)',
                          background:'linear-gradient(135deg,var(--gold-primary),var(--gold-bright),var(--gold-primary))',
                          padding:'1rem 2.8rem'}}>
              Solliciter une audience
            </span>
            <span style={{fontSize:'0.58rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)'}}>
              Canal privé &amp; exclusif
            </span>
          </a>
        </div>

        <a
          href="#about"
          aria-label="Défiler vers la section suivante"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-[var(--color-gold-primary)] text-xl leading-none"
        >
          ↓
        </a>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTIONS
      ════════════════════════════════════════════════════════ */}
      <AboutSection    />
      <ServicesSection />
      <TeasingSection  />
      <Footer          />
    </>
  )
}