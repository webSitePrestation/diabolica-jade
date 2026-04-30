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

/* ─────────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────────── */
const TELEGRAM_URL = 'https://t.me/DiabolicaJade'
const X_URL = 'https://x.com/diabolicaisback?s=21'
const VTC_URL = 'https://www.vends-ta-culotte.com/user/117113/Diabolica+Jade'

interface NavLink { label: string; href: string }

const NAV_LINKS: NavLink[] = [
  { label: 'Accueil',  href: '#top'      },
  { label: 'À propos', href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Galerie',  href: '#gallery'  },
  { label: 'Contact',  href: '#contact'  },
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
                className="text-[clamp(2.6rem,11vw,5.6rem)] italic leading-none text-[#f5f0e8]"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                D·J
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
          px-7 py-3 border border-[#c9a84c]/20
          bg-[#0a0a0a]/82 backdrop-blur-md
          shadow-[0_10px_40px_rgba(0,0,0,0.38)]
          ${showStickyNav ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={`sticky-${label}`}
            href={href}
            className="text-[9px] uppercase tracking-[0.34em] text-[#f5f0e8]/58 hover:text-[#c9a84c] transition-colors duration-300"
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
            href={VTC_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="VTC"
            className="text-[9px] tracking-[0.3em] uppercase font-light text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            V·T·C
          </a>
        </div>
      </motion.nav>

      <button
        onClick={() => setMenuOpen((p) => !p)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        className="fixed top-5 right-5 z-[60] p-2 rounded-sm border border-[#c9a84c]/28 bg-[#0a0a0a]/78 backdrop-blur-sm text-[#f5f0e8] hover:text-[#c9a84c] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]/60 md:hidden"
      >
        {menuOpen
          ? <X size={20} strokeWidth={1} aria-hidden="true" />
          : <Menu size={20} strokeWidth={1} aria-hidden="true" />
        }
      </button>

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
            src="/image00002.jpeg"
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
                'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(10,10,10,0) 30%, rgba(10,10,10,0.65) 65%, #0a0a0a 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </div>

        {/* Navigation */}
        <nav
          className="relative z-30 flex items-center justify-between px-6 pt-10 md:px-12"
          aria-label="Navigation principale"
        >
          {mounted && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-[10px] tracking-[0.5em] font-light text-[#c9a84c] select-none"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              D · J
            </motion.span>
          )}

          <div aria-hidden="true" className="w-8 md:w-0" />
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
              className="fixed inset-0 z-[55] bg-[#0a0a0a]/96 backdrop-blur-sm flex flex-col items-center justify-center gap-10"
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
                  className="text-2xl tracking-[0.2em] uppercase italic text-[#f5f0e8]/75 hover:text-[#c9a84c] transition-colors duration-300"
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
                  href={VTC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VTC"
                  className="text-[9px] tracking-[0.3em] uppercase font-light text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  V·T·C
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

        {/* Contenu hero centré */}
        {mounted && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex-1 flex flex-col items-center justify-end px-6 pb-6"
          >
            <motion.div
              variants={lineExpand}
              className="w-10 h-px bg-[#c9a84c] mb-7 self-center"
              aria-hidden="true"
            />

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3rem,14vw,7rem)] leading-[0.9] tracking-tight text-[#f5f0e8] italic font-normal text-center"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Diabolica
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="block text-[clamp(3rem,14vw,7rem)] leading-[1.05] tracking-[0.08em] text-[#c9a84c] font-bold text-center mb-5"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Jade
            </motion.span>

            <motion.p
              variants={fadeUp}
              className="text-[9px] md:text-[10px] tracking-[0.45em] uppercase font-light text-[#f5f0e8]/45 mb-10"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Ego Slayer · Lifestyle Domina · Born to be spoiled
            </motion.p>
          </motion.div>
        )}

        {/* CTA zone pouce */}
        <div className="relative z-10 pb-12 px-8 flex flex-col items-center gap-3">
          {mounted && (
            <>
              <motion.a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className="group relative w-full max-w-[280px] py-[18px] px-6 text-center border border-[#c9a84c]/38 hover:border-[#c9a84c]/80 transition-colors duration-500 overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]/60"
                style={{ animation: 'luxePulse 3.8s ease-in-out 2.8s infinite' }}
                aria-label="Rejoindre Diabolica Jade sur Telegram"
              >
                <span aria-hidden="true" className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/8 transition-colors duration-500" />
                <span aria-hidden="true" className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-[#c9a84c]/22 to-transparent group-hover:left-[160%] transition-[left] duration-700 ease-out" />
                <span
                  className="relative z-10 text-[9px] tracking-[0.35em] uppercase font-light text-[#f5f0e8]"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  Supplié pour une réponse
                </span>
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="flex items-center gap-3"
                aria-hidden="true"
              >
                <div className="w-px h-2 bg-[#f5f0e8]/15" />
                <span
                  className="text-[7.5px] tracking-[0.3em] uppercase text-[#f5f0e8]/22"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  Telegram exclusif
                </span>
                <div className="w-px h-2 bg-[#f5f0e8]/15" />
              </motion.div>
            </>
          )}
        </div>
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