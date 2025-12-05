import { ReactNode } from 'react';

interface NewsSectionProps {
  title: string;
  children: ReactNode;
  showBorder?: boolean;
}

export function NewsSection({ title, children, showBorder = true }: NewsSectionProps) {
  return (
    <section className={`py-8 ${showBorder ? 'border-t-2 border-[var(--guardian-border)]' : ''}`}>
      <h2 className="text-3xl pb-4 mb-6 group cursor-pointer">
        <a href="#" className="hover:text-[var(--guardian-blue)] transition-colors duration-200 inline-flex items-center gap-2 hover:gap-3">
          {title}
          <span className="text-xl">→</span>
        </a>
      </h2>
      {children}
    </section>
  );
}
