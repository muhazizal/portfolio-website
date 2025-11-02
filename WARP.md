# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A modern, minimalist portfolio website built with Nuxt 4, showcasing work experience, projects, and blog articles. The site uses markdown-based content management through Nuxt Content and features smooth animations with Tailwind CSS.

## Development Commands

### Core Commands
```bash
npm install              # Install dependencies
npm run dev             # Start dev server at http://localhost:3000
npm run build           # Build for production (SSR)
npm run preview         # Preview production build locally
npm run generate        # Generate static site (output to .output/public)
```

### Note on Testing & Linting
This project currently has no test suite or lint scripts configured. When making changes, verify by running the dev server and manually testing in the browser.

## Architecture

### Content Management System
Content is managed through **Nuxt Content** (markdown-based):

- **Work Experience** (`content/work/*.md`): Job history sorted by `order` field (ascending)
  - Required frontmatter: `title`, `company`, `location`, `period`, `order`, `technologies`, `description`
  - Body supports full markdown for detailed descriptions

- **Projects** (`content/projects/*.md`): Portfolio projects sorted by `order` field (ascending)
  - Required frontmatter: `title`, `category`, `tech`, `order`, `description`
  - Optional: `github`, `demo`, `featured` (boolean for homepage display)

- **Blog Articles** (`content/blog/*.md`): Articles sorted by `date` field (descending)
  - Required frontmatter: `title`, `description`, `date`, `author`, `tags`
  - Optional: `featured` (boolean), `image`

**Key Pattern**: Content queries use `queryContent()` with specific sorting:
- Work/Projects: `.sort({ order: 1 })` - ascending numeric order
- Blog: `.sort({ date: -1 })` - newest first

### Page Structure & Data Fetching

All pages use **`useAsyncData`** for content fetching to enable SSR/SSG:

```javascript
const { data } = await useAsyncData('unique-key', () =>
  queryContent('folder')
    .where({ featured: true })  // Optional filtering
    .sort({ order: 1 })
    .limit(2)
    .find()
)
```

**Important**: Always use unique keys for `useAsyncData` to prevent data collisions.

### Component Architecture

- **Layout**: `app.vue` wraps all pages with `<AppHeader>`, `<NuxtPage>`, and `<AppFooter>`
- **Navigation**: `AppHeader.vue` contains site navigation (Home, Work, Projects, Blog, About)
  - Mobile-responsive with hamburger menu state management
  - Uses `active-class="text-primary"` for active link styling
- **Pages**: Auto-routed from `pages/` directory
  - `index.vue`: Homepage aggregates featured content from all sections
  - `work.vue`, `projects.vue`: List pages display all items from respective content folders
  - `blog/index.vue`: Blog listing page
  - `blog/[...slug].vue`: Dynamic blog post detail page

### Styling System

**Tailwind CSS via Nuxt UI**:
- Dark mode enabled by default (`colorMode.preference: 'dark'`)
- Custom animations defined in `assets/css/main.css`:
  - `.animate-fade-in`: Fade in with upward movement
  - `.animate-slide-in-left/right`: Horizontal slide animations
  - `.stagger-1` through `.stagger-5`: Staggered animation delays (0.1s increments)

**Pattern**: Use `opacity-0 animate-fade-in stagger-X` classes for entrance animations on page load.

### Nuxt UI Components

Uses **Nuxt UI** component library extensively:
- `<UContainer>`: Max-width content wrapper
- `<UCard>`: Card component for content blocks
- `<UButton>`: Styled button with icon support
- `<UBadge>`: Tags/labels for technologies
- `<UAccordion>`: FAQ sections
- `<UIcon>`: Icon component (uses Iconify sets like `i-heroicons-*`, `i-simple-icons-*`)

**Icon naming**: Use format `i-{collection}-{icon-name}` (e.g., `i-heroicons-envelope`, `i-simple-icons-github`)

### Configuration

**`nuxt.config.ts`** contains:
- **Modules**: Content, UI, SEO, Image, Icon, Fonts, ESLint, DevTools, Test Utils
- **Site metadata**: Update `site.url`, `site.name`, and `site.description` for deployment
- **Content config**: Code highlighting theme `github-dark`, TOC depth 3
- **Image optimization**: WebP format, quality 80
- **Fonts**: Inter from Google Fonts

### SEO Pattern

Every page includes SEO meta tags using `useSeoMeta()`:
```javascript
useSeoMeta({
  title: 'Page Title - Your Name Portfolio',
  description: 'Page description'
})
```

## Personalization Checklist

When customizing this portfolio for a new user:

1. **Site Config** (`nuxt.config.ts`):
   - Update `site.url`, `site.name`, `site.description`

2. **Global SEO** (`app.vue`):
   - Update `useSeoMeta` title, description, and OG tags

3. **Components**:
   - `AppHeader.vue`: Change "YourName" to actual name/logo
   - `AppFooter.vue`: Update social links and bio

4. **Pages**: Replace "Your Name" placeholder text:
   - `index.vue`: Hero section, about section, CTA email
   - `work.vue`, `projects.vue`, `blog/index.vue`: Update page titles
   - `about.vue`: Complete personal information

5. **Content**: Add markdown files in `content/` folders with proper frontmatter

## Tech Stack Summary

- **Framework**: Nuxt 4 (Vue 3)
- **UI**: Nuxt UI (Tailwind CSS-based)
- **Content**: Nuxt Content (Markdown)
- **Node**: Requires 18+
- **Package Manager**: npm (package-lock.json present)
