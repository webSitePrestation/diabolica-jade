import Link from 'next/link'
import { Send } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Protocole de contact — Diabolica Jade',
  description: 'Comment m\'approcher correctement. Ce que j\'attends d\'un premier message.',
  robots: { index: false, follow: false },
}

const TELEGRAM_URL = 'https://t.me/DiabolicaJade'

interface Etape {
  numero: string
  titre:  string
  texte:  string
  note?:  string
}

const ETAPES: Etape[] = [
  {
    numero: '01',
    titre:  'Lisez d\'abord',
    texte:  'Avant d\'écrire quoi que ce soit, lisez entièrement la page Pratiques & Limites. Un message qui pose une question déjà répondue ici sera ignoré.',
  },
  {
    numero: '02',
    titre:  'Rejoignez le Telegram',
    texte:  'Abonnez-vous à mon canal Telegram gratuit. Prenez le temps de découvrir mon univers, mon contenu, mon style. Ce n\'est qu\'ensuite que vous me contactez.',
  },
  {
    numero: '03',
    titre:  'Le premier message',
    texte:  'Présentez-vous brièvement : qui vous êtes, votre expérience en soumission, ce que vous cherchez. Soyez honnête et direct. Pas de familiarité excessive, pas de "bonjour Maîtresse" sans y être invité.',
    note:   'Un message respectueux et bien construit a infiniment plus de chances d\'obtenir une réponse.',
  },
  {
    numero: '04',
    titre:  'Patience',
    texte:  'Je réponds quand je le décide. Je ne suis pas disponible en permanence. Relancer plusieurs fois avant d\'avoir une réponse est rédhibitoire.',
  },
  {
    numero: '05',
    titre:  'Acceptez le refus',
    texte:  'Je me réserve le droit de refuser tout contact sans justification. Un refus n\'est pas une invitation à insister.',
  },
]

const ERREURS: string[] = [
  'Envoyer un premier message sexuellement explicite',
  'Demander des photos ou vidéos sans avoir établi de contact',
  'Ignorer les limites listées sur la page Pratiques',
  'Vouvoyer puis tutoyer sans autorisation',
  'Proposer de l\'argent sans contexte établi',
  'Relancer après un silence ou un refus',
]

export default function ProtocolePage() {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-[#f5f0e8]">

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="w-full border-b border-[#f5f0e8]/6 px-6 py-8 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] hover:text-[#c9a84c]/70 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          ← D · J
        </Link>
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-[#f5f0e8]/25 font-light"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          Protocole
        </span>
      </header>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col gap-20">

        {/* ── Titre ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span
              className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Comment m&apos;approcher
            </span>
          </div>
          <h1
            className="text-[clamp(2.2rem,6vw,3.8rem)] leading-[1.05] italic font-normal text-[#f5f0e8]"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Protocole
            <br />
            <span className="not-italic font-bold text-[#c9a84c]">de contact.</span>
          </h1>
          <p
            className="text-[13px] leading-[1.9] text-[#f5f0e8]/50 font-light max-w-lg mt-2"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Mon temps est précieux. Si vous souhaitez entrer dans mon univers,
            voici les règles à respecter. Elles ne sont pas optionnelles.
          </p>
        </div>

        {/* ── Étapes ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-0">
          {ETAPES.map(({ numero, titre, texte, note }, i) => (
            <div key={numero} className="relative flex gap-8 pb-12 last:pb-0">

              {/* Ligne verticale entre étapes */}
              {i < ETAPES.length - 1 && (
                <div className="absolute left-[22px] top-10 bottom-0 w-px bg-[#f5f0e8]/6" />
              )}

              {/* Numéro */}
              <div className="flex-shrink-0 w-11 h-11 border border-[#c9a84c]/30 flex items-center justify-center bg-[#0a0a0a] relative z-10">
                <span
                  className="text-[10px] tracking-[0.2em] text-[#c9a84c] font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  {numero}
                </span>
              </div>

              {/* Contenu */}
              <div className="flex flex-col gap-3 pt-2 flex-1">
                <h2
                  className="text-[1.2rem] italic font-normal text-[#f5f0e8]/90"
                  style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                >
                  {titre}
                </h2>
                <p
                  className="text-[13px] leading-[1.9] text-[#f5f0e8]/50 font-light"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  {texte}
                </p>
                {note && (
                  <div className="border-l border-[#c9a84c]/30 pl-4 mt-1">
                    <p
                      className="text-[12px] italic text-[#c9a84c]/60 leading-relaxed"
                      style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
                    >
                      {note}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Séparateur */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)' }}
        />

        {/* ── Erreurs à éviter ────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-[1.3rem] italic font-normal text-[#f5f0e8]/70"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Ce qui mène à un blocage immédiat
          </h2>
          <ul className="flex flex-col gap-3">
            {ERREURS.map((e) => (
              <li key={e} className="flex items-start gap-3">
                <span className="text-[#f5f0e8]/20 flex-shrink-0 text-[10px] mt-[3px]">✕</span>
                <span
                  className="text-[13px] text-[#f5f0e8]/40 font-light leading-relaxed"
                  style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
                >
                  {e}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Séparateur */}
        <div
          className="w-full h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)' }}
        />

        {/* ── CTA final ───────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p
            className="text-[1.1rem] italic text-[#f5f0e8]/60 leading-relaxed"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            &ldquo; Ceux qui respectent ces règles savent déjà
            ce qu&apos;ils cherchent. &rdquo;
          </p>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative flex items-center gap-3
              px-10 py-4 border border-[#c9a84c]/40 hover:border-[#c9a84c]/80
              overflow-hidden transition-colors duration-500
              focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a84c]/60
            "
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/8 transition-colors duration-500"
            />
            <Send size={12} strokeWidth={1.5} className="relative z-10 text-[#c9a84c]" />
            <span
              className="relative z-10 text-[9px] tracking-[0.38em] uppercase font-light text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Me rejoindre sur Telegram
            </span>
          </a>

          <Link
            href="/"
            className="text-[9px] tracking-[0.3em] uppercase font-light text-[#f5f0e8]/25 hover:text-[#f5f0e8]/50 transition-colors duration-300"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </main>
  )
}
