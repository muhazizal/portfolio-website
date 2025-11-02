# Portfolio Website

A modern, clean, and minimalist portfolio website built with Nuxt 4, featuring smooth animations and excellent performance.

## Features

- 🎨 Clean and minimalist design
- ✨ Smooth animations and transitions
- 📱 Fully responsive and mobile-friendly
- ⚡ Excellent performance with Nuxt 4
- 🎯 SEO optimized
- 📝 Markdown-based content management
- 🌙 Dark mode by default
- 🔍 Type-safe with TypeScript support

## Tech Stack

- **Framework**: Nuxt 4
- **UI Library**: Nuxt UI
- **Styling**: Tailwind CSS
- **Content**: Nuxt Content (Markdown)
- **Icons**: Nuxt Icon
- **Fonts**: Nuxt Fonts (Inter from Google Fonts)
- **Images**: Nuxt Image
- **SEO**: Nuxt SEO
- **Dev Tools**: Nuxt DevTools
- **Linting**: Nuxt ESLint
- **Testing**: Nuxt Test Utils

## Project Structure

```
portfolio-website/
├── assets/
│   └── css/
│       └── main.css          # Global styles and animations
├── components/
│   ├── AppHeader.vue         # Navigation header
│   └── AppFooter.vue         # Footer component
├── content/
│   ├── work/                 # Work experience markdown files
│   ├── projects/             # Project markdown files
│   └── blog/                 # Blog article markdown files
├── pages/
│   ├── index.vue             # Home page
│   ├── work.vue              # Work experience listing
│   ├── projects.vue          # Projects listing
│   ├── about.vue             # About page
│   └── blog/
│       ├── index.vue         # Blog listing
│       └── [...slug].vue     # Blog article detail
├── app.vue                   # Root component
└── nuxt.config.ts           # Nuxt configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Customization

### Personal Information

Update the following files with your information:

1. **nuxt.config.ts**: Update site metadata
2. **app.vue**: Update SEO meta tags
3. **components/AppHeader.vue**: Update logo/name
4. **components/AppFooter.vue**: Update social links and bio
5. All page components: Replace "Your Name" with your actual name

### Content

#### Work Experience

Add your work experience in `content/work/` as markdown files:

```markdown
---
title: Job Title
company: Company Name
location: Location
period: Start - End
order: 1
technologies:
  - Tech 1
  - Tech 2
description: Brief description
---

Detailed description of your work...
```

#### Projects

Add your projects in `content/projects/` as markdown files:

```markdown
---
title: Project Name
category: Category
tech:
  - Tech 1
  - Tech 2
github: https://github.com/username/repo
demo: https://demo-url.com
featured: true
order: 1
description: Project description
---

Detailed project information...
```

#### Blog Articles

Add blog posts in `content/blog/` as markdown files:

```markdown
---
title: Article Title
description: Article description
date: 2025-01-15
author: Your Name
tags:
  - Tag 1
  - Tag 2
featured: true
---

# Article content here...
```

### Styling

The project uses Tailwind CSS via Nuxt UI. Customize:

- **Colors**: Modify theme in `nuxt.config.ts`
- **Animations**: Edit `assets/css/main.css`
- **Components**: Nuxt UI components are fully customizable

### Fonts

The project uses Inter font from Google Fonts. To change:

1. Edit `nuxt.config.ts` fonts configuration
2. Update font family in your components

## Deployment

### Static Generation

```bash
npm run generate
```

Deploy the `.output/public` directory to any static hosting:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

### Server-Side Rendering

```bash
npm run build
```

Deploy to platforms supporting Node.js:

- Vercel
- Netlify
- Railway
- Render

## Performance

The website is optimized for performance:

- ✅ Code splitting and lazy loading
- ✅ Optimized images with Nuxt Image
- ✅ Web fonts optimization
- ✅ CSS minification
- ✅ Smooth animations with CSS
- ✅ SEO optimization

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
