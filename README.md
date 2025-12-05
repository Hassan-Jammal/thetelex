# The Telex

A Guardian-style news website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Guardian-inspired design with distinctive blue color scheme (#052962)
- Responsive layout with full navigation system
- Featured article section with hero images
- Multiple news sections (News, Sport, Culture, Opinion, Lifestyle)
- Article subpages with matching typography and styling
- "Most Viewed" sidebar
- Comprehensive footer

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## Deployment

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

This project can be deployed to any static hosting platform that supports Vite:
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

Simply build the project and upload the `dist` folder.

## Project Structure

```
/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── ArticleCard.tsx
│   ├── EnhancedTopBar.tsx
│   ├── FeaturedArticle.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ...
├── styles/             # Global styles
│   └── globals.css
├── App.tsx             # Main app component (homepage)
├── ArticlePage.tsx     # Article page component
├── src/
│   └── main.tsx        # Entry point
└── index.html          # HTML template
```

## License

MIT
