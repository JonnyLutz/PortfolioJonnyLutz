/** Portfolio copy — factual, public-safe. */

export const site = {
  name: 'Jonathan Lutz',
  handle: 'JonnyLutz',
  title: 'Front-End Engineer II',
  company: 'Amazon Web Services',
  tagline: 'Agentic development and production support for the AWS IoT Console.',

  /** Set `true` to show [ProjectsSection](src/components/ProjectsSection.tsx) and nav link. */
  showProjectsSection: true,

  links: {
    github: 'https://github.com/JonnyLutz',
    linkedin: 'https://www.linkedin.com/in/jonathan-tyler-lutz/',
    email: 'mailto:JLutz.110@gmail.com',
  },

  about: [
    "I build front-end features for the AWS IoT Console, supporting production workloads that scale to billions of global devices. Currently, I'm reimagining the software development process for the agentic era.",
  ],

  experience: [
    {
      period: '2022 — Present',
      title: 'Front-End Engineer II',
      company: 'Amazon Web Services',
      summary:
        'Ship customer-facing features for the AWS IoT Console across 10+ sub-consoles. Stack: React/TypeScript, AWS APIs, observability, CI/CD, and test automation.',
      bullets: [
        'Partnering with UX, PM, and peer engineering teams on feature development, testing, deployment and production support.',
        'Championing AI-assisted workflows, development processes, and early adoption of state of the art productivity tools.',
        'Investing in tools and processes to move towards agentic development and production support.',
      ],
      stack: [
        'React',
        'TypeScript',
        'Vite',
        'Jest',
        'Cypress',
        'AWS SDK',
        'Cloudscape',
        'CI/CD',
        'Cursor',
        'Kiro',
        'VS Code',
        'Claude',
        'OpenClaw',
        'MCP',
        'Agentic AI',
        'AI-assisted workflows',
      ],
    },
    {
      period: '2020 — 2022',
      title: 'Programmer & Analyst',
      company: 'Huntington National Bank',
      summary:
        'Developed customer-facing web applications for account origination and related journeys. Collaborated with business and analytics partners on experiments and instrumentation so we could measure conversion and iterate with evidence.',
      bullets: [],
      stack: ['Angular', 'JavaScript', 'A/B testing', 'Adobe Analytics'],
    },
    {
      period: '2015 — 2020',
      title: 'Science Educator',
      company: 'Southeast Asia',
      summary:
        'Designed and delivered science instruction for diverse ESL learners. Strengthened skills in facilitation, written explanation, and adapting material to different audiences.',
      bullets: [],
      stack: ['Curriculum design', 'Communication', 'Teaching', 'Science education'],
    },
    {
      period: '2012 — 2015',
      title: 'Design Engineer',
      company: 'The Ohio State University — Aerospace Research Center',
      summary:
        'Designed, assembled and tested components for gas turbine research programs. Built and documented hardware setups; installed and calibrated a large set of precision sensors for experiments.  Performed high stakes experiments under tight deadlines.',
      bullets: [],
      stack: ['Design & Manufacturing', 'Instrumentation', 'Technical documentation', 'Mechanical engineering'],
    },
    {
      period: '2009 — 2012',
      title: 'Manufacturing Engineer',
      company: 'Honda of America',
      summary:
        'Precision tooling and continuous improvement projects in high-volume automotive manufacturing. Managed a substantial annual tooling budget, led cost initiatives with meaningful savings, and upheld strict quality standards through a major model change.',
      bullets: [],
      stack: ['Manufacturing', 'Quality', 'Cost reduction', 'Lean manufacturing', 'Continuous improvement', 'Kaizen'],
    },
    {
      period: '2007 — 2008',
      title: 'Production Engineering Intern',
      company: 'Toyota Motor Manufacturing',
      summary:
        'Multi-plant rotational internship across Toyota manufacturing operations — exposure to production engineering, line processes, and how quality and throughput are balanced at scale.',
      bullets: [],
      stack: ['Manufacturing', 'Internship'],
    },
  ],

  /** Add `href` + `hrefLabel` for live demos; optional `image` + `imageAlt` (file in /public). */
  projects: [
    {
      title: 'Data4Life',
      description:
        'A personal health dashboard backed by live WHOOP data: recovery, strain, sleep, body metrics, workouts, and sleep history — dark UI, card layout, deployed to Amplify.',
      highlights: [
        'Real wearable integration: users connect WHOOP, trigger sync, and see timestamped updates instead of static mock data.',
        'Product-shaped scope — Dashboard, Sleep calendar, and Insights — so the same account spans daily metrics, history, and deeper views.',
        'Honest production story: one codebase ships to a public Amplify URL with auth, logout, and dev-oriented controls where they help debugging.',
      ],
      stackBullets: [
        'React 18 + TypeScript — typed UI and domain shapes for recovery, strain, sleep, workouts, and body readings.',
        'Vite — fast local dev, optimized client bundles for the hosted SPA.',
        'WHOOP Cloud API — OAuth-style connect flow, token handling, and REST pulls for cycles, sleep, activities, and profile/body metrics.',
        'Client data layer — async fetch, loading/error UX, and “last updated” surfacing in the shell.',
        'AWS Amplify Hosting — HTTPS SPA hosting and continuous deploys from the connected Git branch.',
        'Session + auth UX — sign-in/sign-out and environment-aware helpers (e.g. dev auth visibility) aligned with how the app is tested and shipped.',
        'Layout & visualization — responsive card grid, metric tiles, strain bars, and tab navigation for multiple surfaces.',
      ],
      image: '/project-data4life.png',
      imageAlt:
        'Data4Life health dashboard: WHOOP sync, recovery and strain cards, body metrics, workouts, and recent sleep.',
      href: 'https://main.d124ldfr70a9je.amplifyapp.com',
      hrefLabel: 'Visit live site',
    },
  ],

  contact: {
    headline: "What's next?",
    body: "I'm not actively job searching. Open to the right conversation.",
    cta: 'Email me',
  },
}
