# Requirements Document

## Introduction

This document defines the requirements for migrating the jonnylutz.com portfolio from a Vite-powered React SPA to a Next.js App Router application with static export. The migration addresses SEO deficiencies (empty `<div id="root">` seen by crawlers), broken OG/meta tags, and introduces image optimization, auto-generated sitemap/robots files, expanded content, inline form validation, and code cleanup. All work is performed on a dedicated feature branch.

## Glossary

- **Portfolio_App**: The jonnylutz.com portfolio web application
- **Static_Export**: The Next.js `output: 'export'` build mode that produces pre-rendered HTML in an `out/` directory
- **Build_System**: The Next.js build pipeline that compiles, pre-renders, and bundles the application
- **Metadata_API**: The Next.js Metadata export used to define `<meta>`, Open Graph, and Twitter Card tags
- **Contact_Form**: The inline contact form component that submits to Formspree or AWS Lambda
- **Validator**: The pure functions (`validateField`, `validateForm`) that check contact form input
- **Nav_Deriver**: The `deriveNavItems` function that computes navigation items from the site configuration
- **Image_Optimizer**: The `next/image` component used to render optimized images with proper dimensions
- **Error_Boundary**: A React error boundary component that catches unhandled runtime errors and renders fallback UI
- **Site_Config**: The `content/site.ts` data object containing all portfolio content and configuration
- **Feature_Branch**: A Git branch created specifically for this migration work, separate from the main branch

## Requirements

### Requirement 1: Feature Branch Workflow

**User Story:** As a developer, I want all migration work done on a dedicated feature branch, so that the main branch remains stable until the migration is verified.

#### Acceptance Criteria

1. THE Portfolio_App migration SHALL be implemented on a Feature_Branch separate from the main branch
2. WHEN the Feature_Branch is created, THE Portfolio_App SHALL name it with a descriptive prefix indicating the migration purpose

### Requirement 2: Next.js Framework Migration

**User Story:** As a developer, I want to migrate from Vite SPA to Next.js App Router with static export, so that the site produces pre-rendered HTML for SEO and social sharing.

#### Acceptance Criteria

1. THE Build_System SHALL produce a Static_Export in an `out/` directory containing pre-rendered HTML
2. WHEN the Static_Export is built, THE Build_System SHALL generate an `index.html` file that contains visible text content rather than an empty container element
3. THE Portfolio_App SHALL use the Next.js App Router with `app/layout.tsx` as the root layout and `app/page.tsx` as the home page
4. WHEN the Static_Export is built, THE Build_System SHALL bundle client JavaScript for hydration of interactive components
5. THE Portfolio_App SHALL wrap interactive components (hooks, context, browser APIs) in a `'use client'` boundary

### Requirement 3: OG and Meta Tag Correction

**User Story:** As a site owner, I want all Open Graph and meta tags to reference www.jonnylutz.com, so that social sharing previews display the correct site information.

#### Acceptance Criteria

1. THE Metadata_API SHALL set `metadataBase` to `https://www.jonnylutz.com`
2. THE Metadata_API SHALL set `og:url` to `https://www.jonnylutz.com`
3. THE Metadata_API SHALL set `og:image` to a self-hosted image path at `/og-image.png`
4. THE Metadata_API SHALL set the canonical URL to `https://www.jonnylutz.com`
5. WHEN the Static_Export is built, THE Build_System SHALL produce HTML where all `og:*` meta tags reference the `www.jonnylutz.com` domain

### Requirement 4: Image Optimization

**User Story:** As a site visitor, I want images to load efficiently with proper dimensions, so that the page renders without layout shifts.

#### Acceptance Criteria

1. THE Image_Optimizer SHALL replace all `<img>` tags in project cards with `next/image` components
2. THE Image_Optimizer SHALL include explicit `width` and `height` attributes on every image to prevent cumulative layout shift
3. WHEN the Static_Export mode is active, THE Image_Optimizer SHALL operate with `images.unoptimized: true` in the Next.js configuration

### Requirement 5: Sitemap and Robots Generation

**User Story:** As a site owner, I want auto-generated sitemap.xml and robots.txt files, so that search engines can discover and index the site.

#### Acceptance Criteria

1. WHEN the Static_Export is built, THE Build_System SHALL generate a `robots.txt` file that allows all user agents to crawl the site
2. WHEN the Static_Export is built, THE Build_System SHALL generate a `robots.txt` file that references the sitemap URL at `https://www.jonnylutz.com/sitemap.xml`
3. WHEN the Static_Export is built, THE Build_System SHALL generate a `sitemap.xml` file containing the site URL `https://www.jonnylutz.com`

### Requirement 6: Expanded About Section

**User Story:** As a site visitor, I want to read a richer career narrative in the About section, so that I can better understand the developer's background and interests.

#### Acceptance Criteria

1. THE Site_Config SHALL contain multiple paragraphs in the `about` array to provide an expanded career narrative
2. THE Portfolio_App SHALL render all paragraphs from the `about` array in the About section

### Requirement 7: Buckeye Bets Project Addition

**User Story:** As a site visitor, I want to see the Buckeye Bets project in the portfolio, so that I can learn about additional work the developer has done.

#### Acceptance Criteria

1. THE Site_Config SHALL include a Buckeye Bets entry in the `projects` array with title, description, and stack information
2. WHEN a project entry includes an `image` field, THE Site_Config SHALL also include a non-empty `imageAlt` field for that entry

### Requirement 8: Resume PDF Download

**User Story:** As a recruiter or hiring manager, I want to download a PDF resume from the portfolio, so that I can review the developer's qualifications offline.

#### Acceptance Criteria

1. THE Site_Config SHALL include a `resumePdfPath` field pointing to a PDF file in the `public/` directory
2. THE Portfolio_App SHALL render a download link in the sidebar that references the `resumePdfPath`

### Requirement 9: Inline Contact Form Validation

**User Story:** As a site visitor, I want to see inline validation errors on the contact form before submission, so that I can correct mistakes without waiting for a server response.

#### Acceptance Criteria

1. WHEN a user blurs a contact form field with an invalid value, THE Validator SHALL display an inline error message below that field
2. THE Validator SHALL require the name field to contain at least 2 non-whitespace characters
3. THE Validator SHALL require the email field to match a standard email format pattern
4. THE Validator SHALL require the message field to contain at least 10 non-whitespace characters
5. WHEN the user submits the Contact_Form with validation errors, THE Contact_Form SHALL prevent submission and display all inline errors
6. WHEN all fields pass validation and the form is submitted, THE Contact_Form SHALL send the data to the configured backend endpoint

### Requirement 10: Navigation Derivation from Site Config

**User Story:** As a developer, I want navigation items derived from site.ts instead of a hardcoded array, so that adding or removing sections automatically updates the navigation.

#### Acceptance Criteria

1. THE Nav_Deriver SHALL compute navigation items from the Site_Config sections
2. WHEN `site.showProjectsSection` is `false`, THE Nav_Deriver SHALL exclude the projects item from the navigation array
3. WHEN `site.showProjectsSection` is `true`, THE Nav_Deriver SHALL include the projects item in the navigation array

### Requirement 11: Code Cleanup

**User Story:** As a developer, I want unnecessary code patterns removed and an error boundary added, so that the codebase is cleaner and more resilient.

#### Acceptance Criteria

1. THE Portfolio_App SHALL remove the `useMemo` wrapping the navigation filter in the Sidebar component
2. THE Error_Boundary SHALL catch unhandled runtime errors in the component tree and render a fallback UI
3. IF an unhandled error occurs in a component, THEN THE Error_Boundary SHALL display a user-friendly error message instead of a blank screen

### Requirement 12: Environment Variable Migration

**User Story:** As a developer, I want all Vite environment variables migrated to Next.js conventions, so that the application reads configuration correctly in the new framework.

#### Acceptance Criteria

1. THE Portfolio_App SHALL replace all `VITE_*` environment variable prefixes with `NEXT_PUBLIC_*` prefixes
2. THE Portfolio_App SHALL replace all `import.meta.env` references with `process.env` references
3. WHEN neither `NEXT_PUBLIC_FORMSPREE_URL` nor `NEXT_PUBLIC_CONTACT_FORM_URL` is configured, THE Contact_Form SHALL display a configuration error message via toast

### Requirement 13: Font Optimization

**User Story:** As a site visitor, I want fonts to load without render-blocking external requests, so that the page renders quickly.

#### Acceptance Criteria

1. THE Portfolio_App SHALL use `next/font/google` to self-host the Plus Jakarta Sans font
2. THE Portfolio_App SHALL apply the font via a CSS variable on the `<html>` element with `display: 'swap'`

### Requirement 14: Client Provider Architecture

**User Story:** As a developer, I want a single client boundary component wrapping all context providers, so that the server/client boundary is clean and maintainable.

#### Acceptance Criteria

1. THE Portfolio_App SHALL provide a `ClientProviders` component with a `'use client'` directive that wraps BadgeColorProvider, Toaster, and idle easter egg logic
2. WHEN the page hydrates, THE Portfolio_App SHALL initialize ThemeProvider and read the stored theme from localStorage

### Requirement 15: Property-Based Testing

**User Story:** As a developer, I want property-based tests using fast-check for validation and navigation logic, so that correctness is verified across a wide range of inputs.

#### Acceptance Criteria

1. THE Portfolio_App SHALL include property-based tests using the fast-check library
2. THE Portfolio_App SHALL include property-based tests for the `validateField` function covering all field types
3. THE Portfolio_App SHALL include property-based tests for the `validateForm` function verifying error aggregation
4. THE Portfolio_App SHALL include property-based tests for the `deriveNavItems` function verifying conditional section inclusion
5. THE Portfolio_App SHALL configure property-based tests to run a minimum of 100 iterations per property
