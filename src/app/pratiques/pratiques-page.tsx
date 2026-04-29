import Link from 'next/link'
import { Check, X } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pratiques & Limites — Rbatia',
  description: 'Ce que je pratique, ce que je ne pratique pas. Mon style de domination, mes règles, mon cadre.',
  robots: { index: false, follow: false },
}

/* ─────────────────────────────────────────────────────────────────
   DONNÉES
───────────────────────────────────────────────────────────────── */
interface PratiqueItem {
  label: string
  note?: string
}

const OUI: PratiqueItem[] = [
  { label: 'Domination psychologique' },
  { label: 'Humiliation verbale et publique' },
  { label: 'Domination hard — destruction totale' },
  { label: 'Dressage et éducation sissy' },
  { label: 'Pegging et anal' },
  { label: 'Urolagnie (uro)' },
  { label: 'Ballbusting' },
  { label: 'Facesitting (habillée — privation de respiration)' },
  { label: 'Mise en cage' },
  { label: 'Électrostimulation' },
  { label: 'Contrôle de sextoys à distance (plugs connectés)' },
  { label: 'Domination en duo avec une autre Domina' },
  { label: 'Tâches et protocoles à distance' },
  { label: 'Findom' },
  { label: 'Contenu vidéo payant (Vends-ta-culotte)' },
]

const NON: PratiqueItem[] = [
  { label: 'Relations sexuelles avec pénétration' },
  { label: 'Relations romantiques' },
  { label: 'Rencontres sans présentation préalable' },
  { label: 'Soumis non éduqués ou irrespectueux' },
  { label: 'Partage de données personnelles' },
  { label: 'Contenu gratuit sur demande' },
]

const STYLE: string[] = [
  'Je suis dans la destruction totale — physique, mentale, ego. Rien n\'est laissé intact.',
  'J\'ai une affection particulière pour les sissies. Les transformer, les dresser, les posséder.',
  'En public ou en privé, l\'humiliation reste un outil. Je l\'utilise avec précision.',
  'Vous pensez avoir des limites ? C\'est moi qui décide où elles se trouvent.',
]

/* ─────────────────────────────────────────────────────────────────
   COMPOSANT
───────────────────────────────────────────────────────────────── */
export default function PratiquesPage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-[#f5f0e8]">

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="w-full border-b border-[#f5f0e8]/6 px-6 py-8 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] hover:text-[#c9a84c]/70 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          ← R · B
        </Link>
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-[#f5f0e8]/25 font-light"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          Cadre & limites
        </span>
      </header>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col gap-20">

        {/* ── Titre ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span
              className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Mon cadre
            </span>
          </div>
          <h1
            className="text-[clamp(2.2rem,6vw,3.8rem)] leading-[1.05] italic font-normal text-[#f5f0e8]"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Pratiques
            <br />
            <span className="not-italic font-bold text-[#c9a84c]">&amp; Limites.</span>
          </h1>
          <p
            className="text-[13px] leading-[1.9] text-[#f5f0e8]/50 font-light max-w-lg mt-2"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Avant de me contacter, lisez cette page attentivement. 
            Mon univers est clairement défini — et mes limites ne sont pas négociables.
          </p>
        </div>

        {/* ── Mon style ───────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-[1.4rem] italic font-normal text-[#f5f0e8]/80"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Mon style de domination
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STYLE.map((s, i) => (
              <div
                key={i}
                className="border border-[#f5f0e8]/6 p-6 bg-[#0d0d0d]/60"
              >
                <p
                  className="text-[13px] leading-[1.85] text-[#f5f0e8]/55 font-light italic"
                  style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                >
                  &ldquo;{s}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Séparateur */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)' }}
        />

        {/* ── Grille Oui / Non ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* OUI */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <h2
                className="text-[1.1rem] italic font-normal text-[#c9a84c]"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                Ce que je pratique
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {OUI.map(({ label, note }) => (
                <li key={label} className="flex items-start gap-3 group">
                  <Check
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#c9a84c] mt-[3px] flex-shrink-0"
                  />
                  <span
                    className="text-[13px] text-[#f5f0e8]/65 font-light leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    {label}
                    {note && (
                      <span className="text-[#f5f0e8]/30 ml-2 text-[11px] italic">
                        — {note}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NON */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#f5f0e8]/20" />
              <h2
                className="text-[1.1rem] italic font-normal text-[#f5f0e8]/50"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                Mes limites
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {NON.map(({ label }) => (
                <li key={label} className="flex items-start gap-3">
                  <X
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#f5f0e8]/25 mt-[3px] flex-shrink-0"
                  />
                  <span
                    className="text-[13px] text-[#f5f0e8]/35 font-light leading-relaxed line-through decoration-[#f5f0e8]/15"
                    style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Note bas */}
            <div className="border-l border-[#c9a84c]/30 pl-4 mt-4">
              <p
                className="text-[12px] italic text-[#f5f0e8]/35 leading-relaxed"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                Ces limites sont définitives. Toute tentative de les
                dépasser entraîne un blocage immédiat.
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)' }}
        />

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p
            className="text-[13px] text-[#f5f0e8]/40 font-light max-w-sm"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Mon cadre vous convient ? Lisez ensuite mon protocole de contact
            avant de m&apos;écrire.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/protocole"
              className="px-8 py-4 border border-[#c9a84c]/45 hover:border-[#c9a84c]/80 text-[9px] tracking-[0.35em] uppercase font-light text-[#f5f0e8] hover:text-[#c9a84c] transition-colors duration-400"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Protocole de contact
            </Link>
            <Link
              href="/"
              className="text-[9px] tracking-[0.3em] uppercase font-light text-[#f5f0e8]/25 hover:text-[#f5f0e8]/50 transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
