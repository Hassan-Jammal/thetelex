interface ArticleCardProps {
  title: string;
  image?: string;
  category?: string;
  time?: string;
  excerpt?: string;
  size?: 'small' | 'medium' | 'large';
  showImage?: boolean;
}

export function ArticleCard({ 
  title, 
  image, 
  category, 
  time, 
  excerpt,
  size = 'medium',
  showImage = true 
}: ArticleCardProps) {
  return (
    <article className="group cursor-pointer">
      {showImage && image && (
        <div className="mb-3 overflow-hidden relative">
          <img 
            src={image} 
            alt={title}
            className="w-full aspect-[5/3] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      <div className="space-y-2">
        {category && (
          <div className="flex items-center gap-3">
            <span className="text-sm uppercase tracking-widest text-[var(--guardian-blue)] border-l-2 border-[var(--guardian-yellow)] pl-3">
              {category}
            </span>
            {time && (
              <span className="text-xs text-[var(--guardian-grey)]">
                {time}
              </span>
            )}
          </div>
        )}
        
        <h3 className={`
          pb-[10px]
          ${size === 'large' ? 'text-2xl' : size === 'medium' ? 'text-xl' : 'text-base'}
        `}>
          <a href="#">{title}</a>
        </h3>
        
        {excerpt && (
          <p className="text-[var(--guardian-grey)] line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        )}
        
        {excerpt && (
          <div className="pt-1">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-[var(--guardian-blue)]">
              <span>Read more</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
