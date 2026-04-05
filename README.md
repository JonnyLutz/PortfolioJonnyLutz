# jonny-dev

**This repo is the new portfolio** (dark navy, sticky sidebar + main column).  
If you see the **old** purple/light or Semantic UI site, you’re in **`Semantic-Portfolio`** / **`jonnylutz-portfolio`** or a **live deploy** that still builds from that folder.

```bash
cd ~/Projects/jonny-dev   # or your clone path
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The browser tab title should read **“Jonathan Lutz · Portfolio”** for this project.

To ship this design to your domain, build and deploy **this** repo’s `dist/` (e.g. update Firebase / CI to run `npm run build` from `jonny-dev`, not the old project).

Copy lives in `src/content/site.ts` (about, experience, projects, contact).

**Contact form:** set `VITE_FORMSPREE_URL` or `VITE_CONTACT_FORM_URL` in `.env` (see `.env.example`) — same options as the previous portfolio (Formspree or Lambda + SES).

<!-- Test comment for jlutz
