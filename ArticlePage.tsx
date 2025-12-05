import { HeaderOption1 } from './components/HeaderOptions';
import { Footer } from './components/Footer';
import { Share2, Facebook, Twitter, Mail, MessageCircle, Bookmark } from 'lucide-react';

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderOption1 />
      
      <main className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main article content */}
          <article>
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-[var(--guardian-grey)]">
                <li><a href="#" className="hover:text-[var(--guardian-blue)]">Home</a></li>
                <li>/</li>
                <li><a href="#" className="hover:text-[var(--guardian-blue)]">World news</a></li>
                <li>/</li>
                <li><a href="#" className="hover:text-[var(--guardian-blue)]">Climate crisis</a></li>
              </ol>
            </nav>

            {/* Category badge */}
            <div className="mb-4">
              <a href="#" className="inline-block text-sm px-3 py-1 bg-white text-[var(--guardian-blue)] border border-[var(--guardian-blue)] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors">
                World news
              </a>
            </div>

            {/* Article headline */}
            <h1 className="mb-6" style={{ paddingBottom: '10px' }}>
              Global leaders convene for emergency summit on climate action
            </h1>

            {/* Standfirst / excerpt */}
            <p className="text-xl mb-6 border-l-4 border-[var(--guardian-yellow)] pl-4" style={{ lineHeight: 1.4, color: 'var(--guardian-text)', paddingBottom: '10px' }}>
              World leaders are gathering for an unprecedented emergency summit to address accelerating climate change impacts and coordinate international response efforts as scientists warn time is running out.
            </p>

            {/* Article meta */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-[var(--guardian-border)]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--guardian-blue)] flex items-center justify-center text-white">
                  JD
                </div>
                <div>
                  <p className="text-sm">
                    <a href="#" className="hover:text-[var(--guardian-blue)]" style={{ fontWeight: 700 }}>Jessica Davis</a>
                  </p>
                  <p className="text-sm text-[var(--guardian-grey)]">Wed 3 Dec 2025 14.30 GMT</p>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Share on Facebook">
                  <Facebook size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Share on Twitter">
                  <Twitter size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Share via email">
                  <Mail size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors" aria-label="Share">
                  <Share2 size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors ml-2" aria-label="Save article">
                  <Bookmark size={18} className="text-[var(--guardian-grey)]" />
                </button>
              </div>
            </div>

            {/* Main image */}
            <figure className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1762793194433-583052b4b07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjBwcmVzc3xlbnwxfHx8fDE3NjQ3NjE4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global climate summit"
                className="w-full"
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <figcaption className="mt-2 text-sm text-[var(--guardian-grey)] italic">
                Leaders gather at the emergency climate summit in Geneva. Photograph: Reuters
              </figcaption>
            </figure>

            {/* Article body */}
            <div className="article-content">
              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                World leaders from over 150 countries have arrived in Geneva for what has been described as the most critical climate summit in history. The emergency meeting comes as new scientific data reveals that global temperatures are rising faster than previously predicted, with devastating consequences for communities worldwide.
              </p>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                The summit, convened at short notice following a series of extreme weather events across multiple continents, aims to accelerate the implementation of existing climate agreements and establish new frameworks for international cooperation. Scientists have warned that without immediate and decisive action, the planet could reach irreversible tipping points within the next decade.
              </p>

              <h2 className="mt-8 mb-4" style={{ paddingBottom: '10px' }}>
                Unprecedented urgency
              </h2>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                "We are facing a climate emergency that requires an emergency response," said Dr. Maria Santos, lead climate scientist at the International Panel on Climate Change. "The data we're seeing is alarming. Ice sheets are melting at rates we didn't expect to see for another decade, and we're witnessing weather patterns that were not predicted by our models."
              </p>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                The summit agenda includes discussions on carbon emissions reduction targets, renewable energy investment, climate finance for developing nations, and adaptation strategies for communities already experiencing severe climate impacts. Key topics also include phasing out fossil fuel subsidies and establishing a global carbon pricing mechanism.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 py-6 px-8 bg-[#F6F6F6] border-l-4 border-[var(--guardian-yellow)]">
                <p className="text-2xl italic mb-4" style={{ lineHeight: 1.3, color: 'var(--guardian-text)' }}>
                  "This is our last chance to prevent catastrophic climate change. We cannot afford to fail."
                </p>
                <cite className="text-sm text-[var(--guardian-grey)] not-italic">
                  — UN Secretary-General António Guterres
                </cite>
              </blockquote>

              <h2 className="mt-8 mb-4" style={{ paddingBottom: '10px' }}>
                Growing divisions
              </h2>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                Despite the urgency, significant divisions remain between nations. Developing countries are calling for substantial financial support from wealthy nations to help them transition to clean energy and adapt to climate impacts they did not cause. Meanwhile, major industrialized nations face domestic political challenges in implementing aggressive climate policies.
              </p>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                The United States and European Union have pledged increased climate finance, but climate activists argue that commitments fall far short of what is needed. "We need trillions, not billions," said Greta Anderson, spokesperson for the Global Climate Action Network. "Rich countries built their economies on fossil fuels. They have a moral obligation to help the rest of the world transition."
              </p>

              <h2 className="mt-8 mb-4" style={{ paddingBottom: '10px' }}>
                Youth voices demand action
              </h2>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                Outside the summit venue, thousands of young climate activists have gathered to demand more ambitious action from world leaders. The protests, organized by youth climate movements from around the world, have been largely peaceful but increasingly vocal in their frustration with the pace of change.
              </p>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                "Our generation will inherit the consequences of decisions made today," said 19-year-old activist Maya Chen. "We're not asking for radical change anymore – we're demanding it. The science is clear, the solutions exist, and all that's missing is political will."
              </p>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                The summit is expected to conclude on Friday, with leaders aiming to produce a joint declaration outlining concrete steps to address the climate crisis. However, observers remain cautiously pessimistic about whether the gathering will result in the transformative action that scientists say is necessary.
              </p>

              {/* Key points box */}
              <div className="my-8 p-6 bg-[#F6F6F6] border-l-4 border-[var(--guardian-blue)]">
                <h3 className="mb-4" style={{ paddingBottom: '10px' }}>Key points</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Over 150 countries represented at emergency climate summit in Geneva</li>
                  <li>New data shows global temperatures rising faster than predicted</li>
                  <li>Summit aims to accelerate implementation of climate agreements</li>
                  <li>Developing nations demand increased climate finance from wealthy countries</li>
                  <li>Youth activists gather outside venue to demand urgent action</li>
                  <li>Final declaration expected Friday</li>
                </ul>
              </div>

              <p className="mb-8" style={{ paddingBottom: '10px' }}>
                As the summit continues, the eyes of the world remain focused on Geneva, with hopes that this gathering will mark a turning point in humanity's response to the greatest challenge of our time.
              </p>
            </div>

            {/* Topics */}
            <div className="mt-8 pt-6 border-t border-[var(--guardian-border)]">
              <h3 className="text-sm text-[var(--guardian-grey)] mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Climate crisis
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  World news
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Environment
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Global development
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  UN
                </a>
              </div>
            </div>

            {/* Share again at bottom */}
            <div className="mt-8 pt-6 border-t border-[var(--guardian-border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--guardian-grey)]">Share this article</span>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Facebook size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Twitter size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Mail size={18} className="text-[var(--guardian-grey)]" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <Share2 size={18} className="text-[var(--guardian-grey)]" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-[var(--guardian-blue)] text-[var(--guardian-blue)] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm">128 Comments</span>
              </button>
            </div>

            {/* Related articles */}
            <div className="mt-12">
              <h2 className="pb-3 border-b-2 border-[var(--guardian-yellow)]" style={{ paddingBottom: '10px', marginBottom: '34px' }}>
                More on this story
              </h2>
              <div className="space-y-6">
                <article className="pb-6 border-b border-[var(--guardian-border)]">
                  <a href="#" className="group">
                    <h3 className="mb-2 group-hover:text-[var(--guardian-blue)] transition-colors" style={{ fontSize: '1.25rem', paddingBottom: '10px' }}>
                      Scientists report alarming acceleration in polar ice melt
                    </h3>
                    <p className="text-[var(--guardian-grey)] mb-2">
                      New research shows ice sheets melting faster than worst-case predictions, raising concerns about sea level rise.
                    </p>
                    <p className="text-sm text-[var(--guardian-grey)]">6h ago</p>
                  </a>
                </article>
                <article className="pb-6 border-b border-[var(--guardian-border)]">
                  <a href="#" className="group">
                    <h3 className="mb-2 group-hover:text-[var(--guardian-blue)] transition-colors" style={{ fontSize: '1.25rem', paddingBottom: '10px' }}>
                      Climate activists block major highways in coordinated protests
                    </h3>
                    <p className="text-[var(--guardian-grey)] mb-2">
                      Demonstrations take place in 12 cities as campaigners demand stronger government action on emissions.
                    </p>
                    <p className="text-sm text-[var(--guardian-grey)]">8h ago</p>
                  </a>
                </article>
                <article className="pb-6 border-b border-[var(--guardian-border)]">
                  <a href="#" className="group">
                    <h3 className="mb-2 group-hover:text-[var(--guardian-blue)] transition-colors" style={{ fontSize: '1.25rem', paddingBottom: '10px' }}>
                      Renewable energy investment reaches record high
                    </h3>
                    <p className="text-[var(--guardian-grey)] mb-2">
                      Global spending on clean energy surpasses fossil fuel investment for first time in history.
                    </p>
                    <p className="text-sm text-[var(--guardian-grey)]">12h ago</p>
                  </a>
                </article>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            {/* Most viewed */}
            <div className="mb-8">
              <h2 className="pb-3 border-b-2 border-[var(--guardian-yellow)]" style={{ fontSize: '1.25rem', paddingBottom: '10px', marginBottom: '26px' }}>
                Most viewed
              </h2>
              <ol className="space-y-4">
                {[
                  { title: "Political scandal rocks government as minister resigns", category: "Politics" },
                  { title: "Breakthrough in cancer research offers new hope", category: "Science" },
                  { title: "Champions League: Dramatic comeback secures quarter-final spot", category: "Sport" },
                  { title: "Housing crisis deepens as prices reach record highs", category: "UK news" },
                  { title: "Oscar frontrunner sparks debate about representation", category: "Film" },
                  { title: "Tech giant announces major job cuts", category: "Business" },
                  { title: "New variant detected in multiple countries", category: "Health" },
                  { title: "Royal family announces surprise engagement", category: "UK news" },
                  { title: "Historic agreement reached on trade deal", category: "Business" },
                  { title: "Extreme weather warning issued for weekend", category: "Weather" }
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 group cursor-pointer">
                    <span className="text-2xl text-[var(--guardian-grey)] group-hover:text-[var(--guardian-blue)] transition-colors" style={{ fontWeight: 700, minWidth: '2rem' }}>
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="group-hover:text-[var(--guardian-blue)] transition-colors mb-1" style={{ fontSize: '0.9375rem', lineHeight: 1.3, paddingBottom: '10px' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--guardian-grey)]">{item.category}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Newsletter signup */}
            <div className="bg-[var(--guardian-blue)] text-white p-6 mb-8">
              <h3 className="mb-3" style={{ fontSize: '1.125rem', paddingBottom: '10px' }}>
                Sign up for our daily newsletter
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Get the day's top stories delivered to your inbox every morning
              </p>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-3 py-2 mb-3 text-black"
              />
              <button className="w-full bg-[var(--guardian-yellow)] text-[var(--guardian-blue)] py-2 px-4 hover:bg-opacity-90 transition-colors" style={{ fontWeight: 700 }}>
                Sign up
              </button>
              <p className="text-xs mt-3 opacity-75">
                We'll send you a daily email. You can unsubscribe at any time.
              </p>
            </div>

            {/* Related topics */}
            <div>
              <h3 className="mb-6 text-sm text-[var(--guardian-grey)]">Related topics</h3>
              <div className="flex flex-wrap gap-2">
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Climate emergency
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Paris Agreement
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Renewable energy
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Carbon emissions
                </a>
                <a href="#" className="px-3 py-1 bg-[#F6F6F6] hover:bg-[var(--guardian-blue)] hover:text-white transition-colors text-sm">
                  Fossil fuels
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
