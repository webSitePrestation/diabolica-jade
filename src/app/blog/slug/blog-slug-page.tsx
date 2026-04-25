import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ARTICLES, type Article } from '../page'

/* ─────────────────────────────────────────────────────────────────
   CONTENU COMPLET DES ARTICLES
   Ajoute ici le texte de chaque article en correspondance avec son slug.
───────────────────────────────────────────────────────────────── */
const CONTENUS: Record<string, string[]> = {
  'ce-que-j-attends-d-un-soumis': [
    'On me pose souvent la question : « Qu\'est-ce que vous cherchez chez un soumis ? » Comme si la réponse était une liste de cases à cocher. Ce n\'est pas comme ça que ça fonctionne.',
    'La première chose que j\'observe, c\'est le rapport au silence. Un soumis qui écrit dix messages d\'affilée sans réponse n\'a pas compris que l\'attente fait partie du jeu. Pire — il n\'a pas compris que son impatience lui retire le contrôle qu\'il pense encore avoir.',
    'Ce que j\'attends, c\'est de la conscience. Savoir pourquoi on cherche la soumission. Pas « parce que c\'est excitant » — ça, tout le monde le sait. Mais comprendre ce que ça révèle de soi. Ce besoin de poser la charge. Ce plaisir à obéir à quelqu\'un qui le mérite vraiment.',
    'J\'attends aussi de la discrétion. Ceux qui parlent de leur vie D/s à tout le monde n\'ont pas compris que le secret est une forme de respect. Ce qui se passe entre nous appartient à nous.',
    'Enfin, j\'attends de la constance. Pas de la perfection — personne n\'est parfait. Mais la régularité prouve l\'engagement. Un soumis qui disparaît deux semaines puis revient comme si de rien n\'était ne mérite pas qu\'on l\'attende.',
    'La soumission bien vécue est l\'une des postures les plus nobles qui soit. Elle demande une confiance absolue, une honnêteté totale, et un courage que beaucoup sous-estiment. Ceux qui la pratiquent vraiment le savent.',
  ],
  'art-du-teasing': [
    'Le teasing est mal compris. On le réduit souvent à une forme de jeu érotique, comme si son seul but était l\'excitation physique. C\'est passer à côté de ce qu\'il est vraiment.',
    'Le teasing est un outil de pouvoir. Quand je vous fais attendre, je ne joue pas à un jeu — je pose les fondations d\'une dynamique. Celui qui attend prouve qu\'il accepte de ne pas contrôler le tempo. C\'est déjà une forme de soumission.',
    'L\'attente crée un espace mental. Dans cet espace, je suis présente même quand je suis absente. Vous pensez à moi, vous anticipez, vous espérez. Ce travail psychologique est infiniment plus puissant que n\'importe quelle interaction directe.',
    'Il y a une technique dans le teasing. Trop peu, et l\'intérêt s\'évapore. Trop, et la frustration devient stérile. Le bon teasing entretient une tension — il donne juste assez pour que vous restiez, pas assez pour que vous soyez satisfaits.',
    'Le teasing bien exécuté finit par remodeler les attentes. Vous commencez à trouver de la satisfaction dans l\'attente elle-même. C\'est là que le vrai contrôle s\'installe. Plus besoin d\'agir — j\'ai déjà gagné.',
    'C\'est pourquoi je ne me précipite jamais. L\'urgence appartient à ceux qui n\'ont pas le contrôle.',
  ],
  'domination-lifestyle-ce-que-c-est': [
    'La domination lifestyle est souvent confondue avec du BDSM de chambre — une scène qui commence, une scène qui finit, chacun rentre chez soi. C\'est une vision réductrice.',
    'Le lifestyle, c\'est quand la dynamique de pouvoir dépasse le cadre de la scène pour infuser les interactions quotidiennes. Pas forcément de façon spectaculaire — souvent dans les détails. Un message envoyé au moment que je choisis. Une tâche accomplie sans que j\'aie besoin de la demander deux fois. Une présence attentive, constante.',
    'Ça ne signifie pas être disponible 24h/24 ou vivre dans un état permanent de soumission active. Ça signifie que la dynamique est intégrée. Elle fait partie de l\'identité, pas d\'un rôle qu\'on joue.',
    'La confusion naît souvent de la pornographie et des représentations faussées du BDSM. On imagine latex, fouets, ordres criés. La réalité du lifestyle est beaucoup plus subtile — et beaucoup plus puissante précisément parce qu\'elle est subtile.',
    'Ce qui caractérise la domination lifestyle, c\'est la continuité. La relation ne s\'éteint pas entre les interactions. Elle existe dans l\'espace entre elles. Dans l\'anticipation, dans le respect des règles établies, dans la conscience permanente de la dynamique.',
    'Ce n\'est pas fait pour tout le monde. Ça demande une maturité émotionnelle, une communication sans ego, et une confiance qui se construit lentement. Ceux qui cherchent du frisson ponctuel trouveront ça ailleurs.',
  ],
  'comment-ecrire-un-premier-message': [
    'Je vais être directe : la majorité des premiers messages que je reçois ne méritent pas de réponse. Pas parce que les gens sont mauvais — mais parce qu\'ils n\'ont pas réfléchi à ce qu\'ils écrivaient.',
    'Le premier message dit tout. Il révèle si vous avez lu ma page ou si vous avez simplement cliqué. Il révèle votre rapport au respect. Il révèle si vous cherchez quelque chose de réel ou si vous envoyez le même message à vingt Dominas en espérant que l\'une réponde.',
    'Ce que je veux lire : qui vous êtes, brièvement. Pas votre CV — deux phrases. Votre expérience ou votre inexpérience en soumission — l\'honnêteté vaut mieux que le bluff. Ce que vous cherchez — pas ce que vous imaginez que je veux entendre.',
    'Ce que je ne veux pas lire : une demande de photos ou de vidéos en premier message. Des compliments excessifs qui sonnent faux. Une familiarité que rien ne justifie. Des questions auxquelles j\'ai déjà répondu sur mon site.',
    'La longueur idéale ? Trois à cinq phrases. Pas plus. Quelqu\'un qui écrit dix paragraphes au premier contact cherche à impressionner — ce n\'est pas ce que je demande. Quelqu\'un qui écrit « bonjour » et s\'arrête là ne mérite pas qu\'on dépense de l\'énergie pour lui.',
    'Et surtout : envoyez ce message une seule fois. Si je ne réponds pas, c\'est une réponse. Relancer après 48h est acceptable une fois. Au-delà, c\'est un blocage.',
  ],
}

/* ─────────────────────────────────────────────────────────────────
   METADATA DYNAMIQUE
───────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return { title: 'Article introuvable' }
  return {
    title:       `${article.titre} — Diabolica Jade`,
    description: article.extrait,
    robots:      { index: true, follow: true },
  }
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

/* ─────────────────────────────────────────────────────────────────
   COMPOSANT
───────────────────────────────────────────────────────────────── */
export default function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = ARTICLES.find((a: Article) => a.slug === params.slug)
  if (!article) notFound()

  const contenu = CONTENUS[article.slug] ?? []
  const index   = ARTICLES.findIndex((a) => a.slug === params.slug)
  const suivant = ARTICLES[index + 1] ?? null
  const precedent = ARTICLES[index - 1] ?? null

  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-[#f5f0e8]">

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="w-full border-b border-[#f5f0e8]/6 px-6 py-8 md:px-12 flex items-center justify-between">
        <Link
          href="/blog"
          className="text-[10px] tracking-[0.5em] uppercase text-[#c9a84c] hover:text-[#c9a84c]/70 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          ← Journal
        </Link>
        <span
          className="text-[9px] tracking-[0.4em] uppercase text-[#f5f0e8]/25 font-light"
          style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
        >
          {article.readTime} min de lecture
        </span>
      </header>

      <article className="max-w-2xl mx-auto px-6 md:px-12 py-20 md:py-28">

        {/* ── Meta ────────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="text-[8px] tracking-[0.4em] uppercase text-[#c9a84c] font-light border border-[#c9a84c]/30 px-2.5 py-1"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            {article.tag}
          </span>
          <span
            className="text-[9px] text-[#f5f0e8]/25 font-light"
            style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
          >
            {article.date}
          </span>
        </div>

        {/* ── Titre ───────────────────────────────────────────────── */}
        <h1
          className="text-[clamp(1.8rem,5vw,3rem)] leading-[1.1] italic font-normal text-[#f5f0e8] mb-6"
          style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
        >
          {article.titre}
        </h1>

        {/* Ligne déco */}
        <div className="w-12 h-px bg-[#c9a84c] mb-12" />

        {/* ── Corps ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {contenu.map((paragraphe, i) => (
            <p
              key={i}
              className="text-[14px] leading-[2] text-[#f5f0e8]/60 font-light"
              style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
            >
              {paragraphe}
            </p>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-16 flex items-center gap-4">
          <div className="w-8 h-px bg-[#c9a84c]/40" />
          <span
            className="text-[11px] tracking-[0.35em] italic text-[#c9a84c]/50"
            style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
          >
            Diabolica Jade
          </span>
        </div>

        {/* ── Navigation entre articles ────────────────────────────── */}
        <div className="mt-20 pt-10 border-t border-[#f5f0e8]/6 flex flex-col sm:flex-row justify-between gap-6">
          {precedent ? (
            <Link
              href={`/blog/${precedent.slug}`}
              className="group flex flex-col gap-2 max-w-[220px]"
            >
              <span
                className="text-[8px] tracking-[0.3em] uppercase text-[#f5f0e8]/25 group-hover:text-[#c9a84c]/50 transition-colors"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                ← Précédent
              </span>
              <span
                className="text-[13px] italic text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/80 transition-colors leading-snug"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                {precedent.titre}
              </span>
            </Link>
          ) : <div />}

          {suivant && (
            <Link
              href={`/blog/${suivant.slug}`}
              className="group flex flex-col gap-2 max-w-[220px] sm:text-right"
            >
              <span
                className="text-[8px] tracking-[0.3em] uppercase text-[#f5f0e8]/25 group-hover:text-[#c9a84c]/50 transition-colors"
                style={{ fontFamily: 'var(--font-inter, "Helvetica Neue", Helvetica, Arial, sans-serif)' }}
              >
                Suivant →
              </span>
              <span
                className="text-[13px] italic text-[#f5f0e8]/50 group-hover:text-[#f5f0e8]/80 transition-colors leading-snug"
                style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}
              >
                {suivant.titre}
              </span>
            </Link>
          )}
        </div>

      </article>
    </main>
  )
}
