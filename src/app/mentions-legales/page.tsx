import Link from 'next/link'

const TELEGRAM_URL = 'https://t.me/DiabolicaJade'
const X_URL = 'https://x.com/diabolicaisback'
const VTC_URL = 'https://www.vends-ta-culotte.com/user/117113/Diabolica+Jade'

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5f0e8] px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col gap-8 mb-14">
          <Link
            href="/"
            className="inline-flex w-fit items-center text-[10px] tracking-[0.5em] uppercase text-[#c9a84c]/85 hover:text-[#c9a84c] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            aria-label="Retour à l'accueil"
          >
            D · J
          </Link>

          <div className="flex flex-col gap-4">
            <h1
              className="text-[clamp(2rem,5vw,3rem)] italic font-normal leading-tight text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Mentions Légales
            </h1>
            <div className="w-16 h-px bg-[#c9a84c]/60" />
          </div>
        </header>

        <div className="space-y-10">
          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Éditeur du site
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Cette plateforme est éditée sous l&apos;identité Diabolica Jade.
            </p>
            <div className="w-full h-px bg-[#c9a84c]/25" />
          </section>

          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Hébergement
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Le site est hébergé par Vercel Inc.
            </p>
            <div className="w-full h-px bg-[#c9a84c]/25" />
          </section>

          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Propriété intellectuelle
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Les textes, visuels et éléments présents sur cette plateforme sont protégés. Toute reproduction,
              diffusion ou utilisation non autorisée est interdite sans accord préalable.
            </p>
            <div className="w-full h-px bg-[#c9a84c]/25" />
          </section>

          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Contenu réservé aux majeurs (+18)
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Le contenu proposé est strictement réservé aux personnes majeures, âgées de 18 ans et plus.
            </p>
            <div className="w-full h-px bg-[#c9a84c]/25" />
          </section>

          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Données personnelles (pas de collecte)
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Aucune donnée personnelle n&apos;est collectée via ce site. Aucun formulaire ni compte utilisateur
              n&apos;est proposé.
            </p>
            <div className="w-full h-px bg-[#c9a84c]/25" />
          </section>

          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Liens externes
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Cette plateforme peut rediriger vers des services externes :
              {' '}
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-300">
                Telegram
              </a>
              ,{' '}
              <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-300">
                X
              </a>
              {' '}et{' '}
              <a href={VTC_URL} target="_blank" rel="noopener noreferrer" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-300">
                Vends-ta-culotte
              </a>
              . Leur consultation implique leurs propres conditions d&apos;utilisation.
            </p>
            <div className="w-full h-px bg-[#c9a84c]/25" />
          </section>

          <section className="space-y-4">
            <h2
              className="text-[1.2rem] italic text-[#f5f0e8]"
              style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
            >
              Contact
            </h2>
            <p
              className="text-[14px] leading-[1.9] text-[#f5f0e8]/75 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              Pour toute demande, le contact s&apos;effectue via
              {' '}
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-300">
                Telegram
              </a>
              {' '}ou{' '}
              <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-[#f5f0e8]/80 hover:text-[#c9a84c] transition-colors duration-300">
                X
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-[#f5f0e8]/8">
          <Link
            href="/"
            className="inline-flex items-center text-[10px] tracking-[0.35em] uppercase text-[#f5f0e8]/40 hover:text-[#c9a84c]/70 transition-colors duration-300"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
