# Project Rules for Trae AI in This Project

_(These rules apply specifically to this project and override the user rules where in conflict.)_

## 1. Project Overview & Stack

- Stack: **Nuxt 4 (Vue 3.5)** with **Vite** and **Nitro** (SSR/static).
- Front-end: **Vue 3 + Nuxt UI** and **Tailwind CSS** (configured in `assets/css/main.css`).
- Content: **@nuxt/content** (Markdown-driven blog/projects/work; no database).
- Modules in use: `@nuxt/devtools`, `@nuxt/eslint`, `@nuxt/test-utils/module`, `@nuxt/image`, `@nuxt/icon`, `@nuxt/fonts`, `@nuxt/ui`, `@nuxtjs/seo`, `@nuxt/content`.
- Build tooling: **npm scripts** (`nuxt build`, `nuxt generate`, `nuxt preview`); ESLint via Nuxt (`eslint.config.mjs`). Prettier optional; Husky not configured.

## 2. Coding Style & Conventions

- Indentation: 2 spaces.
- Variables/functions: `camelCase`.
- TypeScript usage: primarily in configs (`nuxt.config.ts`) and types when needed; interfaces/types use `PascalCase`.
- File naming:
  - Vue components: `ComponentName.vue` (PascalCase SFC in `app/components`).
  - Pages: `routeName.vue` (in `app/pages`, mapped by filename).
  - Utility modules: `something.util.ts` or `something.helper.ts` (in `app/utils`).
  - Config: `nuxt.config.ts`, `app.config.ts`.
- For Vue/Nuxt components: use Composition API with `<script setup>`; avoid class components and prefer composables.
- Server/API: if adding endpoints, use **Nitro** server routes under `server/api/*` with `async/await`, centralized error handling via Nuxt error middleware.
- ESLint config: use Nuxt’s generated config via `withNuxt` (`eslint.config.mjs`).
- Prettier: single quotes, trailing commas (ES5), semicolons; optional unless added to the repo.

## 3. Code Architecture & Project Structure

- Nuxt structure (single app):
  - `app/` (Nuxt app code)
    - `pages/` (route-driven pages)
    - `components/` (shared UI components)
    - `utils/` (helpers/composables)
    - `assets/` (global styles, images; Tailwind setup)
  - `content/` (Markdown content: `blog/`, `project/`, `work/`)
  - `public/` (static assets: `favicon*.ico`, `og-image*.jpg`)
  - Root configs: `nuxt.config.ts`, `content.config.ts`, `tsconfig.json`, `eslint.config.mjs`
- Use domain-driven names for content and components (e.g., `AppHeader.vue`, `AppFooter.vue`, `projects.vue`).
- APIs: if introduced, use Nitro server routes (`server/api/*`) with RESTful naming; otherwise, prefer `@nuxt/content` for data.
- Each significant feature/page should include a brief README in its folder describing responsibility (optional, recommended).

## 4. Testing & Quality Assurance

- Unit tests: Use **Nuxt Test Utils** (Vitest-based) with coverage goal: **> 80%**.
- Component/integration tests: Test pages and components using Nuxt Test Utils (mount, routing, async data).
- API tests (if server routes exist): Use Nitro/HTTP tests against `server/api/*`.
- End-to-end tests: If applicable, use **Playwright** or **Cypress** for major flows (navigation, content rendering, UI interaction).
- Code reviews: Every PR must include at least one reviewer; automated lint/tests must pass.
- CI/CD: On push to `main`, run lint → tests → build (`nuxt build`) → deploy or generate (`nuxt generate`) for static hosting. Maintain green status.

## 5. Security, Performance & Best Practices

- Do not expose sensitive environment variables; use Nuxt runtime config and `.env`.
- Data layer: prefer `@nuxt/content` (no direct SQL); if adding APIs, validate inputs and use parameterized queries in any DB code.
- Frontend: avoid exposing secrets; ensure CSP where needed; use `@nuxtjs/seo` to manage meta tags.
- Performance: lazy-load components/composables when useful; optimize images with `@nuxt/image`; leverage Vite and Nitro for SSR/static performance.
- Logging: For server routes, use structured logs; otherwise prefer Nuxt DevTools for inspection.
- Avoid memory leaks: clean up timers/subscriptions in components (e.g., `onBeforeUnmount`), dispose resources in server handlers.

## 6. Documentation & Comments

- Public utilities/composables should have doc-comments (JSDoc/TSdoc) summarizing input, output, side-effects.
- README should outline: project purpose, Nuxt stack/modules, architecture, setup, scripts (`dev`, `build`, `generate`, `preview`), and testing approach.
- Code comments should explain _why_ when non-obvious (e.g., theme tweaks, SEO defaults).
- Commit messages: follow Conventional Commits (e.g., `feat: add blog listing`, `chore: update nuxt config`).
- Versioning: semantic versioning (`MAJOR.MINOR.PATCH`); tag releases accordingly.

## 7. AI-Assistant Specific Rules

- Generated code must follow Nuxt conventions: pages in `app/pages`, components in `app/components`, global styles in `assets/css/main.css`, and configs in `nuxt.config.ts`/`app.config.ts`.
- When proposing modules/dependencies, justify choices and ensure compatibility with Nuxt 4 and Vue 3; include `npm install` commands and update `package.json`.
- Prefer Composition API and `<script setup>`; add error handling and tests (Nuxt Test Utils) unless minimal example requested.
- When modifying theme/SEO/assets, keep changes consistent with existing royal blue/light-gray aesthetic and the site-wide defaults.

## 8. Override & Precedence

- These **Project Rules** override any conflicting **User Rules** for this specific project.
- If neither specification covers a situation, default to the User Rules.

---

_End of project rules._
