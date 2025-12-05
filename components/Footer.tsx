export function Footer() {
  const sections = [
    {
      title: 'News',
      links: ['World news', 'UK news', 'Climate crisis', 'Environment', 'Science', 'Global development', 'Football', 'Tech', 'Business', 'Obituaries']
    },
    {
      title: 'Opinion',
      links: ['The Guardian view', 'Columnists', 'Cartoons', 'Opinion videos', 'Letters']
    },
    {
      title: 'Sport',
      links: ['Football', 'Cricket', 'Rugby union', 'Tennis', 'Cycling', 'F1', 'Golf', 'US sports']
    },
    {
      title: 'Culture',
      links: ['Books', 'Music', 'TV & radio', 'Art & design', 'Film', 'Games', 'Classical', 'Stage']
    },
    {
      title: 'Lifestyle',
      links: ['Fashion', 'Food', 'Recipes', 'Travel', 'Health & fitness', 'Women', 'Men', 'Love & sex', 'Family', 'Home & garden']
    }
  ];

  return (
    <footer className="bg-[var(--guardian-blue)] text-white mt-16 border-t-2 border-[var(--guardian-yellow)]">
      <div className="max-w-[1300px] mx-auto px-4 py-16">
        {/* Main footer sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="pl-4">
              <h4 className="mb-6 pb-[20px] text-xl uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t-2 border-white/30 pt-10">
          <div className="flex flex-wrap gap-6 text-sm mb-6">
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">About us</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Contact us</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Complaints & corrections</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">SecureDrop</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Work for us</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Privacy policy</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Cookie policy</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Terms & conditions</a>
            <a href="#" className="text-white/80 hover:!text-[var(--guardian-yellow)] transition-colors duration-200">Help</a>
          </div>
          
          <p className="text-sm text-white/60">
            © 2025 The Telex News & Media Limited or its affiliated companies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
