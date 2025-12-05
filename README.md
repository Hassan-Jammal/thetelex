# The Telex

A Guardian-style news website built with Nuxt 4 (Vue.js), TypeScript, and Tailwind CSS.

## Features

- Guardian-inspired design with distinctive blue color scheme (#052962)
- Responsive layout with full navigation system
- Featured article section with hero images
- Multiple news sections (News, Sport, Culture, Opinion, Lifestyle)
- Article subpages with matching typography and styling
- "Most Viewed" sidebar
- Comprehensive footer

## Tech Stack

- **Nuxt 4** - The Vue.js framework
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide Vue** - Icon library

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

4. Open your browser to `http://localhost:3000`

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `.output` directory.

### Generate Static Site

To generate a static version of the site:

```bash
npm run generate
# or
yarn generate
# or
pnpm generate
```

This will create a static site in the `.output/public` directory.

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

### Netlify

1. Build the project:
```bash
npm run generate
```

2. Deploy the `.output/public` folder to Netlify

### Other Platforms

This Nuxt 4 project can be deployed to various platforms:
- Cloudflare Pages
- GitHub Pages (static generation)
- AWS Amplify
- Firebase Hosting
- Any Node.js hosting platform

Refer to the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific instructions.

## Project Structure

```
/
├── assets/
│   └── css/
│       └── globals.css     # Global styles
├── components/             # Vue components
│   ├── ArticleCard.vue
│   ├── EnhancedTopBar.vue
│   ├── FeaturedArticle.vue
│   ├── Footer.vue
│   ├── Header.vue
│   ├── HeaderOption1.vue
│   ├── NewsSection.vue
│   └── Sidebar.vue
├── pages/                  # Page routes
│   ├── index.vue          # Homepage
│   └── article.vue        # Article page
├── app.vue                # Main app wrapper
├── nuxt.config.ts         # Nuxt configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## Pages

- `/` - Homepage with breaking news, featured articles, and multiple news sections
- `/article` - Sample article page with full article layout

## Development

The project uses Nuxt 4's file-based routing. Add new pages by creating Vue files in the `pages/` directory.

Components in the `components/` directory are auto-imported, so no manual imports are needed.

## Customization

### Colors

The Guardian color scheme is defined in `/assets/css/globals.css`:
- `--guardian-blue: #052962`
- `--guardian-yellow: #ffe500`
- Other color variables available in the CSS file

### Typography

Font families and sizes are configured in the global CSS file. The project uses Georgia serif fonts to match The Guardian's typography.

## License

MIT
