# Implementation Plan: Next.js Portfolio Migration

## Overview

Migrate the jonnylutz.com portfolio from Vite SPA to Next.js App Router with static export. Work is performed on a dedicated feature branch. The migration replaces the build system, fixes SEO/meta tags, adds image optimization, sitemap/robots generation, expanded content, inline form validation, navigation derivation, and code cleanup.

## Tasks

- [x] 1. Create feature branch and initialize Next.js project
  - [x] 1.1 Create a feature branch (e.g. `feat/nextjs-migration`) from the current main branch
    - Run `git checkout -b feat/nextjs-migration`
    - _Requirements: 1.1, 1.2_

  - [x] 1.2 Replace Vite with Next.js and update dependencies
    - Remove `vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`, `eslint-plugin-react-refresh` from package.json
    - Add `next`, `@tailwindcss/postcss`, `postcss`, `eslint-config-next` as dependencies
    - Update scripts: `dev` → `next dev`, `build` → `next build`, `start` → `next start`, `lint` → `next lint`
    - Remove `vite.config.ts`, `tsconfig.node.json`, `index.html`
    - _Requirements: 2.1, 2.4_

  - [x] 1.3 Create Next.js configuration and TypeScript config
    - Create `next.config.ts` with `output: 'export'` and `images: { unoptimized: true }`
    - Update `tsconfig.json` for Next.js (add `next-env.d.ts` reference, set paths alias `@/*`)
    - Create `postcss.config.mjs` with `@tailwindcss/postcss` plugin
    - _Requirements: 2.1, 4.3_

  - [x] 1.4 Create root layout with font optimization and metadata
    - Create `app/layout.tsx` with `Plus_Jakarta_Sans` via `next/font/google` (variable `--font-sans`, display `swap`)
    - Export `metadata` object with `metadataBase: new URL('https://www.jonnylutz.com')`, correct OG tags, Twitter card, canonical URL
    - Apply font variable to `<html>` element with `suppressHydrationWarning`
    - Move `src/index.css` to `app/globals.css` and import it in layout
    - _Requirements: 2.3, 3.1, 3.2, 3.3, 3.4, 13.1, 13.2_

  - [x] 1.5 Create home page (`app/page.tsx`)
    - Create `app/page.tsx` as a Server Component composing Sidebar, MobileNav, sections, SiteFooter, FloatingChrome
    - Wrap interactive content in `ClientProviders`
    - Conditionally render ProjectsSection based on `site.showProjectsSection`
    - _Requirements: 2.3, 2.5, 14.1_

- [x] 2. Migrate context providers and client architecture
  - [x] 2.1 Create ClientProviders component
    - Create `components/ClientProviders.tsx` with `'use client'` directive
    - Wrap BadgeColorProvider, Sonner Toaster, and idle easter egg logic
    - Pass `idleEpisodeId` to SiteFooter
    - _Requirements: 14.1, 14.2_

  - [x] 2.2 Migrate ThemeProvider for Next.js
    - Add `'use client'` directive to ThemeContext
    - Ensure `localStorage` read happens only after mount (guard `typeof window === 'undefined'`)
    - Wrap in layout with `suppressHydrationWarning` on `<html>`
    - _Requirements: 14.2, 2.5_

  - [x] 2.3 Migrate BadgeColorContext and hooks
    - Add `'use client'` directive to BadgeColorContext
    - Add `'use client'` to `useIdleEasterEgg` hook
    - Ensure all browser API usage is guarded for SSR
    - _Requirements: 2.5_

- [x] 3. Migrate components to Next.js conventions
  - [x] 3.1 Migrate Sidebar with derived navigation and resume download
    - Add `'use client'` directive
    - Replace hardcoded `NAV` array with `deriveNavItems(site)` function
    - Remove the `useMemo` wrapping the navigation filter
    - Add resume PDF download link using `site.resumePdfPath`
    - Update imports to use `@/` path alias
    - _Requirements: 10.1, 10.2, 10.3, 11.1, 8.2_

  - [x] 3.2 Create `deriveNavItems` utility function
    - Create `lib/deriveNavItems.ts` with the navigation derivation algorithm from the design
    - Export `deriveNavItems(site)` that filters sections based on `site.showProjectsSection`
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 3.3 Migrate MobileNav to use derived navigation
    - Add `'use client'` directive
    - Replace hardcoded `LINKS_ALL` with `deriveNavItems(site)`
    - Update imports to use `@/` path alias
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 3.4 Migrate ProjectsSection with next/image
    - Add `'use client'` directive
    - Replace all `<img>` tags with `next/image` `<Image>` component
    - Include explicit `width={1200}` and `height={675}` on all images
    - Update imports to use `@/` path alias
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 3.5 Migrate remaining components (AboutSection, ExperienceSection, FloatingChrome, SiteFooter, AgentIdleGhost)
    - Add `'use client'` directives where needed (components using hooks, context, or browser APIs)
    - Update all imports to use `@/` path alias
    - _Requirements: 2.5, 6.2_

- [x] 4. Implement contact form validation and environment variable migration
  - [x] 4.1 Create validation utility functions
    - Create `lib/validation.ts` with `validateField` and `validateForm` functions
    - Implement name validation (trim().length >= 2)
    - Implement email validation (regex pattern)
    - Implement message validation (trim().length >= 10)
    - _Requirements: 9.2, 9.3, 9.4, 9.5_

  - [x] 4.2 Enhance ContactSection with inline validation
    - Add `'use client'` directive
    - Add `onBlur` handlers calling `validateField` for each field
    - Display inline error messages below fields
    - Prevent submission when `validateForm` returns errors
    - Maintain existing Sonner toast behavior for submission results
    - _Requirements: 9.1, 9.5, 9.6_

  - [x] 4.3 Migrate environment variables
    - Replace `VITE_FORMSPREE_URL` → `NEXT_PUBLIC_FORMSPREE_URL` in `submitContactForm.ts`
    - Replace `VITE_CONTACT_FORM_URL` → `NEXT_PUBLIC_CONTACT_FORM_URL`
    - Replace all `import.meta.env` references with `process.env`
    - Update `.env.example` with new variable names
    - Update error message to reference new env var names
    - _Requirements: 12.1, 12.2, 12.3_

  - [x] 4.4 Write property tests for validateField
    - **Property 1: Field validation correctness**
    - Test that for any string, `validateField('name', v)` returns undefined iff `v.trim().length >= 2`
    - Test that for any string, `validateField('email', v)` returns undefined iff v matches email regex
    - Test that for any string, `validateField('message', v)` returns undefined iff `v.trim().length >= 10`
    - Use fast-check with minimum 100 iterations
    - **Validates: Requirements 9.2, 9.3, 9.4**

  - [x] 4.5 Write property tests for validateForm
    - **Property 2: Form validation aggregation**
    - Test that `validateForm(data).hasErrors` is true iff at least one field fails `validateField`
    - Use fast-check with minimum 100 iterations
    - **Validates: Requirement 9.5**

- [x] 5. Checkpoint - Ensure core migration compiles
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Content expansion and SEO files
  - [x] 6.1 Expand site.ts content
    - Add multiple paragraphs to the `about` array for expanded career narrative
    - Add Buckeye Bets project entry with title, description, stackBullets, and image/imageAlt
    - Add `resumePdfPath: '/resume-jonathan-lutz.pdf'` to site config
    - _Requirements: 6.1, 7.1, 7.2, 8.1_

  - [x] 6.2 Create robots.ts and sitemap.ts
    - Create `app/robots.ts` returning rules allowing all user agents and referencing sitemap at `https://www.jonnylutz.com/sitemap.xml`
    - Create `app/sitemap.ts` returning entry for `https://www.jonnylutz.com`
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 6.3 Add Error Boundary component
    - Create `components/ErrorBoundary.tsx` as a class component catching unhandled errors
    - Render user-friendly fallback UI on error
    - Wrap the main content area in the error boundary
    - _Requirements: 11.2, 11.3_

  - [x] 6.4 Write property tests for deriveNavItems
    - **Property 3: Navigation conditional section inclusion**
    - Test that `deriveNavItems(site)` includes 'projects' iff `site.showProjectsSection` is true
    - Test that 'about', 'experience', 'contact' are always present
    - Use fast-check with minimum 100 iterations
    - **Validates: Requirements 10.1, 10.2, 10.3**

- [x] 7. Final integration and cleanup
  - [x] 7.1 Wire OG image and static assets
    - Ensure `public/og-image.png` exists (copy/rename existing `image.png` or create proper 1200×630 OG image)
    - Verify all static assets in `public/` are accessible
    - _Requirements: 3.3, 3.5_

  - [x] 7.2 Update ESLint configuration for Next.js
    - Replace Vite-specific ESLint config with `eslint-config-next`
    - Remove `eslint-plugin-react-refresh` references
    - _Requirements: 2.1_

  - [x] 7.3 Clean up old Vite files and verify build
    - Remove `src/main.tsx`, `src/vite-env.d.ts`
    - Ensure `next build` produces `out/` directory with `index.html` containing pre-rendered content
    - Verify `out/robots.txt` and `out/sitemap.xml` exist
    - Verify all `og:*` meta tags in built HTML reference `www.jonnylutz.com`
    - _Requirements: 2.1, 2.2, 3.5, 5.1, 5.2, 5.3_

- [x] 8. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- The feature branch (task 1.1) ensures main remains stable throughout the migration
- All code uses TypeScript with Next.js App Router conventions
