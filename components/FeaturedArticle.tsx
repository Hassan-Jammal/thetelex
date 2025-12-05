interface FeaturedArticleProps {
  title: string;
  image: string;
  category: string;
  excerpt: string;
  time: string;
}

export function FeaturedArticle({ title, image, category, excerpt, time }: FeaturedArticleProps) {
  return (
    <article className="group cursor-pointer mb-8 border-b-2 border-[var(--guardian-yellow)] pb-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="overflow-hidden h-[500px] relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="flex flex-col justify-center space-y-5">
          <div className="flex items-center gap-3">
            <span className="text-sm uppercase tracking-widest text-[var(--guardian-blue)] border-l-2 border-[var(--guardian-yellow)] pl-3">
              {category}
            </span>
            <span className="text-xs text-[var(--guardian-grey)]">{time}</span>
          </div>
          
          <h2 className="text-5xl leading-tight group-hover:text-[var(--guardian-blue)] transition-colors duration-200 pb-[10px]">
            <a href="#">{title}</a>
          </h2>
          
          <p className="text-xl text-[var(--guardian-grey)] leading-relaxed">
            {excerpt}
          </p>
          
          <div className="pt-2">
            <a href="#" className="inline-flex items-center gap-2 text-[var(--guardian-blue)] hover:gap-3 transition-all duration-200">
              <span>Read more</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
