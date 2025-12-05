import { Search, User, Gift, Newspaper, Globe, ChevronDown } from 'lucide-react';
import { EnhancedTopBar } from './EnhancedTopBar';

// OPTION 1: Clean & Minimal - Logo on right, clean layout
export function HeaderOption1() {
  const mainNav = [
    'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
  ];

  const subNav = [
    'US', 'World', 'Environment', 'Soccer', 'Business', 
    'Tech', 'Science', 'Global development', 'Football', 
    'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
  ];

  return (
    <header className="border-b border-[var(--guardian-border)]">
      <EnhancedTopBar />

      {/* Logo - Simple left aligned */}
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex justify-start">
        <h1>
          <a href="#" className="group block text-left">
            <div className="text-[var(--guardian-blue)] transition-opacity duration-300 group-hover:opacity-70" 
                 style={{ 
                   fontSize: '4.5rem',
                   fontWeight: 900, 
                   letterSpacing: '-0.04em',
                   lineHeight: 0.85,
                   fontFamily: 'Georgia, serif'
                 }}>
              <div>The</div>
              <div>Telex</div>
            </div>
          </a>
        </h1>
      </div>

      {/* Main navigation */}
      <div className="border-t-2 border-b-2 border-[var(--guardian-border)]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-8 py-2">
            {mainNav.map((item) => (
              <li key={item}>
                <a href="#" className="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 border-b-4 border-transparent hover:border-[var(--guardian-yellow)] py-2 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sub navigation */}
      <div className="bg-[#F6F6F6]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-6 py-3 text-sm overflow-x-auto whitespace-nowrap">
            {subNav.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[var(--guardian-blue)] transition-colors duration-200 text-[var(--guardian-grey)] inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// OPTION 2: Centered Logo - Bold and centered masthead
export function HeaderOption2() {
  const mainNav = [
    'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
  ];

  const subNav = [
    'US', 'World', 'Environment', 'Soccer', 'Business', 
    'Tech', 'Science', 'Global development', 'Football', 
    'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
  ];

  return (
    <header className="border-b border-[var(--guardian-border)]">
      <EnhancedTopBar />

      {/* Logo - Left aligned and large */}
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex justify-start">
        <h1>
          <a href="#" className="group block text-left">
            <div className="text-[var(--guardian-blue)] transition-opacity duration-300 group-hover:opacity-70" 
                 style={{ 
                   fontSize: '6rem',
                   fontWeight: 900, 
                   letterSpacing: '-0.05em',
                   lineHeight: 0.82,
                   fontFamily: 'Georgia, serif'
                 }}>
              <div>The</div>
              <div>Telex</div>
            </div>
          </a>
        </h1>
      </div>

      {/* Main navigation */}
      <div className="border-t-2 border-b-2 border-[var(--guardian-border)]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-8 py-2">
            {mainNav.map((item) => (
              <li key={item}>
                <a href="#" className="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 border-b-4 border-transparent hover:border-[var(--guardian-yellow)] py-2 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sub navigation */}
      <div className="bg-[#F6F6F6]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-6 py-3 text-sm overflow-x-auto whitespace-nowrap">
            {subNav.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[var(--guardian-blue)] transition-colors duration-200 text-[var(--guardian-grey)] inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// OPTION 3: Logo with tagline - Editorial style
export function HeaderOption3() {
  const mainNav = [
    'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
  ];

  const subNav = [
    'US', 'World', 'Environment', 'Soccer', 'Business', 
    'Tech', 'Science', 'Global development', 'Football', 
    'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
  ];

  return (
    <header className="border-b border-[var(--guardian-border)]">
      <EnhancedTopBar />

      {/* Logo with tagline */}
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex justify-start">
        <div className="text-left">
          <h1>
            <a href="#" className="group block">
              <div className="text-[var(--guardian-blue)] transition-opacity duration-300 group-hover:opacity-70" 
                   style={{ 
                     fontSize: '4.5rem',
                     fontWeight: 900, 
                     letterSpacing: '-0.04em',
                     lineHeight: 0.85,
                     fontFamily: 'Georgia, serif'
                   }}>
                <div>The</div>
                <div>Telex</div>
              </div>
            </a>
          </h1>
          <p className="text-sm text-[var(--guardian-grey)] mt-1 italic" style={{ fontFamily: 'Georgia, serif' }}>
            Independent. Trusted. Essential.
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-t-2 border-b-2 border-[var(--guardian-border)]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-8 py-2">
            {mainNav.map((item) => (
              <li key={item}>
                <a href="#" className="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 border-b-4 border-transparent hover:border-[var(--guardian-yellow)] py-2 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sub navigation */}
      <div className="bg-[#F6F6F6]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-6 py-3 text-sm overflow-x-auto whitespace-nowrap">
            {subNav.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[var(--guardian-blue)] transition-colors duration-200 text-[var(--guardian-grey)] inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// OPTION 4: Compact logo - Smaller, cleaner
export function HeaderOption4() {
  const mainNav = [
    'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
  ];

  const subNav = [
    'US', 'World', 'Environment', 'Soccer', 'Business', 
    'Tech', 'Science', 'Global development', 'Football', 
    'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
  ];

  return (
    <header className="border-b border-[var(--guardian-border)]">
      <EnhancedTopBar />

      {/* Compact logo */}
      <div className="max-w-[1300px] mx-auto px-4 py-2 flex justify-start">
        <h1>
          <a href="#" className="group block text-left">
            <div className="text-[var(--guardian-blue)] transition-opacity duration-300 group-hover:opacity-70" 
                 style={{ 
                   fontSize: '3.5rem',
                   fontWeight: 900, 
                   letterSpacing: '-0.04em',
                   lineHeight: 0.85,
                   fontFamily: 'Georgia, serif'
                 }}>
              <div>The</div>
              <div>Telex</div>
            </div>
          </a>
        </h1>
      </div>

      {/* Main navigation */}
      <div className="border-t-2 border-b-2 border-[var(--guardian-border)]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-8 py-2">
            {mainNav.map((item) => (
              <li key={item}>
                <a href="#" className="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 border-b-4 border-transparent hover:border-[var(--guardian-yellow)] py-2 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sub navigation */}
      <div className="bg-[#F6F6F6]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-6 py-3 text-sm overflow-x-auto whitespace-nowrap">
            {subNav.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[var(--guardian-blue)] transition-colors duration-200 text-[var(--guardian-grey)] inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// OPTION 5: Logo with border accent - Bold divider
export function HeaderOption5() {
  const mainNav = [
    'News', 'Opinion', 'Sport', 'Culture', 'Lifestyle'
  ];

  const subNav = [
    'US', 'World', 'Environment', 'Soccer', 'Business', 
    'Tech', 'Science', 'Global development', 'Football', 
    'Climate crisis', 'Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness'
  ];

  return (
    <header className="border-b border-[var(--guardian-border)]">
      <EnhancedTopBar />

      {/* Logo with border accent */}
      <div className="border-b-4 border-[var(--guardian-yellow)]">
        <div className="max-w-[1300px] mx-auto px-4 py-3 flex justify-start">
          <h1>
            <a href="#" className="group block text-left">
              <div className="text-[var(--guardian-blue)] transition-opacity duration-300 group-hover:opacity-70" 
                   style={{ 
                     fontSize: '4.5rem',
                     fontWeight: 900, 
                     letterSpacing: '-0.04em',
                     lineHeight: 0.85,
                     fontFamily: 'Georgia, serif'
                   }}>
                <div>The</div>
                <div>Telex</div>
              </div>
            </a>
          </h1>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-t-2 border-b-2 border-[var(--guardian-border)]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-8 py-2">
            {mainNav.map((item) => (
              <li key={item}>
                <a href="#" className="text-lg hover:text-[var(--guardian-blue)] transition-colors duration-200 border-b-4 border-transparent hover:border-[var(--guardian-yellow)] py-2 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sub navigation */}
      <div className="bg-[#F6F6F6]">
        <nav className="max-w-[1300px] mx-auto px-4">
          <ul className="flex gap-6 py-3 text-sm overflow-x-auto whitespace-nowrap">
            {subNav.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[var(--guardian-blue)] transition-colors duration-200 text-[var(--guardian-grey)] inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
