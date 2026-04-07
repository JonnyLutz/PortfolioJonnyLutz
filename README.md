<div align="center">

# jonny-dev

**Jonathan Lutz · Front-End Engineer · Portfolio**

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

*Dark navy layout · sticky sidebar · single-page story*

[GitHub](https://github.com/JonnyLutz) · [LinkedIn](https://www.linkedin.com/in/jonathan-tyler-lutz/)

</div>

---

This repo is the **current** portfolio: a React + Vite single-page site with a sticky sidebar, main column, and responsive mobile nav. **Ship from here** (`dist/` after `npm run build`) to update the live site.

## What’s inside

| Area | Notes |
|------|--------|
| **Layout** | Sticky sidebar + scrollable main column; `FloatingChrome` accents |
| **Content** | About, optional projects grid, experience timeline, contact — copy in one place |
| **Theme** | Light / dark via `ThemeContext` |
| **Polish** | Badge color schemes, toasts (`sonner`), skip-to-content link, idle easter egg |
| **Contact** | Form wired for Formspree or a Lambda + SES URL (env-driven) |

All narrative copy (about, experience, projects, contact) lives in **`src/content/site.ts`**.

## Quick start

```bash
git clone <this-repo-url>
cd jonny-dev
npm install
npm run dev
```

Open the URL Vite prints (usually **http://localhost:5173**). The tab title should read **“Jonathan Lutz · Portfolio”**.

| Script | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |

## Environment

Contact form needs **one** of these in `.env` (see **`.env.example`**):

- `VITE_FORMSPREE_URL` — Formspree form endpoint  
- `VITE_CONTACT_FORM_URL` — AWS Lambda function URL (e.g. SES)

## Deploy

Build **`dist/`** from this project and point your host (Firebase Hosting, Amplify, Pages, etc.) at it. CI should run `npm run build` **here**, not from the legacy portfolio folders.

---

<div align="center">

Built with Caffeine and Love.

</div>
