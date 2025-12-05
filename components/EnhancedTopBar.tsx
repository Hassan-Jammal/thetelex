import { Search, User, Newspaper, Globe, ChevronDown } from 'lucide-react';

export function EnhancedTopBar() {
  return (
    <div className="bg-[var(--guardian-blue)] text-white">
      <div className="max-w-[1300px] mx-auto px-4 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 hover:!text-[#ffe500] transition-all duration-200 group" style={{ fontSize: '0.8125rem' }}>
            <Newspaper size={16} className="group-hover:scale-110 transition-transform" />
            <span>Print subscriptions</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:!text-[#ffe500] transition-all duration-200 group" style={{ fontSize: '0.8125rem' }}>
            <Globe size={16} className="group-hover:rotate-12 transition-transform" />
            <span>International edition</span>
            <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:!text-[#ffe500] transition-all duration-200 flex items-center gap-2 group" style={{ fontSize: '0.8125rem' }}>
            <Search size={17} className="group-hover:scale-110 transition-transform" />
            <span>Search</span>
          </a>
          <a href="#" className="hover:!text-[#ffe500] transition-all duration-200 flex items-center gap-2 border-l border-white/30 pl-6 group" style={{ fontSize: '0.8125rem' }}>
            <User size={17} className="group-hover:scale-110 transition-transform" />
            <span>Sign in</span>
          </a>
        </div>
      </div>
    </div>
  );
}
