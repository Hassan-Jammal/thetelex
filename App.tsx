import { Header } from "./components/Header";
import {
  HeaderOption1,
  HeaderOption2,
  HeaderOption3,
  HeaderOption4,
  HeaderOption5,
} from "./components/HeaderOptions";
import { FeaturedArticle } from "./components/FeaturedArticle";
import { ArticleCard } from "./components/ArticleCard";
import { NewsSection } from "./components/NewsSection";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import ArticlePage from "./ArticlePage";

export default function App() {
  // Switch between 'homepage' and 'article' to see different pages
  const currentPage = "article"; // Change to 'homepage' to see the main page

  // If viewing article page, render that instead
  if (currentPage === "article") {
    return <ArticlePage />;
  }

  // Homepage rendering
  // Switch between options by uncommenting the one you want to use
  const selectedHeader = "option1"; // Change to: 'option1', 'option2', 'option3', 'option4', 'option5', or 'current'

  const renderHeader = () => {
    switch (selectedHeader) {
      case "option1":
        return <HeaderOption1 />;
      case "option2":
        return <HeaderOption2 />;
      case "option3":
        return <HeaderOption3 />;
      case "option4":
        return <HeaderOption4 />;
      case "option5":
        return <HeaderOption5 />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderHeader()}

      <main className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main content */}
          <div>
            {/* Breaking news banner */}
            <div className="bg-[var(--guardian-blue)] text-white px-6 py-3 mb-6 flex items-center gap-3 hover:bg-opacity-90 transition-all">
              <span className="text-[var(--guardian-yellow)] text-xl animate-pulse">
                ●
              </span>
              <span className="uppercase tracking-wider text-sm">
                Breaking news
              </span>
              <a
                href="#"
                className="ml-1 transition-all flex-1 hover:!text-[var(--guardian-yellow)]"
              >
                Major developments unfold in global climate
                summit
              </a>
              <span className="text-xs opacity-75">LIVE</span>
            </div>

            {/* Featured article */}
            <FeaturedArticle
              category="World news"
              title="Global leaders convene for emergency summit on climate action"
              excerpt="World leaders are gathering for an unprecedented emergency summit to address accelerating climate change impacts and coordinate international response efforts."
              image="https://images.unsplash.com/photo-1762793194433-583052b4b07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjBwcmVzc3xlbnwxfHx8fDE3NjQ3NjE4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              time="3h ago"
            />

            {/* Headlines grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <ArticleCard
                category="Politics"
                title="Protests erupt as government announces controversial new policy"
                excerpt="Thousands take to the streets in opposition to proposed legislative changes."
                image="https://images.unsplash.com/photo-1740118125318-7e07c97a13c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBwcm90ZXN0fGVufDF8fHx8MTc2NDc2MTgzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                time="5h ago"
              />
              <ArticleCard
                category="Environment"
                title="Scientists report alarming acceleration in polar ice melt"
                excerpt="New research shows ice sheets melting faster than worst-case predictions."
                image="https://images.unsplash.com/photo-1582033665011-60ccbb964168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzY0NzYxODMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                time="6h ago"
              />
            </div>

            {/* News section */}
            <NewsSection title="News">
              <div className="grid md:grid-cols-3 gap-6">
                <ArticleCard
                  category="Technology"
                  title="AI breakthrough promises revolution in medical diagnostics"
                  image="https://images.unsplash.com/photo-1611648694931-1aeda329f9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjQ3MjY2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  time="4h ago"
                  size="small"
                />
                <ArticleCard
                  category="International"
                  title="Diplomatic tensions ease as nations reach historic agreement"
                  image="https://images.unsplash.com/photo-1584573062942-d46bb3aee3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3MlMjBnbG9iYWx8ZW58MXx8fHwxNzY0NjkxMDk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  time="7h ago"
                  size="small"
                />
                <ArticleCard
                  category="Business"
                  title="Markets surge on positive economic indicators"
                  image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2V8ZW58MXx8fHwxNzY0NzI4NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  time="8h ago"
                  size="small"
                />
              </div>
            </NewsSection>

            {/* Sport section */}
            <NewsSection title="Sport">
              <div className="grid md:grid-cols-2 gap-6">
                <ArticleCard
                  category="Football"
                  title="Champions League: Dramatic comeback secures quarter-final spot"
                  excerpt="Last-minute goals produce stunning turnaround in European competition."
                  image="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbHxlbnwxfHx8fDE3NjQ3NTE5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  time="2h ago"
                />
                <div className="space-y-4">
                  <ArticleCard
                    category="Tennis"
                    title="Rising star defeats world number one in major upset"
                    time="5h ago"
                    size="small"
                    showImage={false}
                  />
                  <ArticleCard
                    category="Cricket"
                    title="England secure thrilling victory in final over"
                    time="6h ago"
                    size="small"
                    showImage={false}
                  />
                  <ArticleCard
                    category="Rugby"
                    title="Six Nations: Wales claim dramatic last-minute win"
                    time="9h ago"
                    size="small"
                    showImage={false}
                  />
                </div>
              </div>
            </NewsSection>

            {/* Culture section */}
            <NewsSection title="Culture">
              <div className="grid md:grid-cols-3 gap-6">
                <ArticleCard
                  category="Film"
                  title="Oscar frontrunner sparks debate about representation in cinema"
                  image="https://images.unsplash.com/photo-1705997337177-79f213d3f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJlJTIwYXJ0c3xlbnwxfHx8fDE3NjQ3NjE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  time="4h ago"
                  size="small"
                />
                <ArticleCard
                  category="Music"
                  title="Legendary artist announces surprise world tour"
                  image="https://images.unsplash.com/photo-1583778058166-7fcbaaca98b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjQ3NjMyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  time="6h ago"
                  size="small"
                />
                <ArticleCard
                  category="Books"
                  title="Debut novel wins prestigious literary prize"
                  image="https://images.unsplash.com/photo-1660092506466-6e433fb9cdbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpdGVyYXR1cmUlMjByZWFkaW5nfGVufDF8fHx8MTc2NDc2MzI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  time="10h ago"
                  size="small"
                />
              </div>
            </NewsSection>

            {/* Opinion section */}
            <NewsSection title="Opinion">
              <div className="grid md:grid-cols-2 gap-6">
                <ArticleCard
                  category="Editorial"
                  title="The urgent need for comprehensive climate policy reform"
                  excerpt="As extreme weather events become more frequent, governments must act decisively to address the climate crisis."
                  image="https://images.unsplash.com/photo-1636471758054-06c6e8c433f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGluaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2NDc2MTgzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  time="3h ago"
                />
                <div className="space-y-4">
                  <ArticleCard
                    category="Comment"
                    title="Why social media regulation is long overdue"
                    time="5h ago"
                    size="small"
                    showImage={false}
                  />
                  <ArticleCard
                    category="Letters"
                    title="Readers respond: the future of public transport"
                    time="7h ago"
                    size="small"
                    showImage={false}
                  />
                </div>
              </div>
            </NewsSection>

            {/* Lifestyle section */}
            <NewsSection title="Lifestyle">
              <div className="grid md:grid-cols-3 gap-6">
                <ArticleCard
                  category="Health"
                  title="New research reveals surprising benefits of mindfulness practice"
                  image="https://images.unsplash.com/photo-1610060616036-09bd2c69e8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjQ3NDEyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  time="4h ago"
                  size="small"
                />
                <ArticleCard
                  category="Food"
                  title="The best seasonal recipes for winter comfort"
                  image="https://images.unsplash.com/photo-1635661988046-306631057df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29va2luZyUyMHJlY2lwZXxlbnwxfHx8fDE3NjQ3NDYxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  time="6h ago"
                  size="small"
                />
                <ArticleCard
                  category="Travel"
                  title="Sustainable tourism: destinations leading the way"
                  image="https://images.unsplash.com/photo-1546661869-cf589fac7085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHRvdXJpc218ZW58MXx8fHwxNzY0NzYzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  time="8h ago"
                  size="small"
                />
              </div>
            </NewsSection>
          </div>

          {/* Sidebar */}
          <div className="lg:block">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}