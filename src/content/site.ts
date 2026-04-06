/** Portfolio copy — factual, public-safe. */

export const site = {
  name: 'Jonathan Lutz',
  handle: 'JonnyLutz',
  title: 'Front-End Engineer',
  company: 'Amazon Web Services',
  tagline: 'Agentic software development and production support for the AWS IoT Console.',

  /** Footer line (city / region). */
  location: 'Seattle, WA',

  /** Set `true` to show [ProjectsSection](src/components/ProjectsSection.tsx) and nav link. */
  showProjectsSection: true,

  links: {
    github: 'https://github.com/JonnyLutz',
    linkedin: 'https://www.linkedin.com/in/jonathan-tyler-lutz/',
    email: 'mailto:JLutz.110@gmail.com',
  },

  about: [
    "I build front-end features for the AWS IoT Console, supporting production workloads that scale to billions of global devices. Currently, I'm reimagining how software is built in the era of agentic AI.",
  ],

  experience: [
    {
      period: '2022 — Present',
      title: 'Front-End Engineer II',
      company: 'Amazon Web Services',
      summary:
        'Ship customer-facing features for the AWS IoT Console across 10+ sub-consoles. Stack: React/TypeScript, AWS APIs, CI/CD, and test automation.',
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
      title: 'CyberPugs',
      description:
        'Interactive AI chatbot experience with a cyberpunk twist: browse an active roster of augmented companions, run a neural-link handshake, then open a live comms session with terminal-style UI, persona copy, and neon glass panels.',
      stackBullets: [
        'React 18, TypeScript, Vite, and React Router — separate routes for catalog browsing, device linking, and per-agent chat.',
        'Hosted on AWS Amplify; model access via AWS Bedrock, OpenRouter, and GrokAI.',
      ],
      image: '/project-cyberpugs.png',
      imageAlt: 'CyberPugs chat session with Turbo Snort: cockpit backdrop, pug avatar, and terminal-style message panel.',
      href: 'https://main.d3nroar5u5ajhq.amplifyapp.com/',
      hrefLabel: 'Visit live site',
      repoHref: 'https://github.com/JonnyLutz/CyberPugs',
    },
    {
      title: 'Data4Life',
      description:
        'Personal dashboard that syncs WHOOP data on demand: recovery, strain, sleep, workouts, and body metrics across dashboard, sleep calendar, and AI insights. Dark UI; hosted on Amplify with AWS Cognito.',
      stackBullets: [
        'React 18, TypeScript, Vite.',
        'WHOOP Cloud API — OAuth, tokens, REST for cycles, sleep, activities, body/profile.',
        'Data layer: loads client data asynchronously with clear loading and error states, and shows when the dataset was last refreshed.',
        'Platform: hosted on AWS Amplify with branch-based deploys; authentication with AWS Cognito.',
        'Features: dashboard, sleep calendar, and AI insights.',
      ],
      image: '/project-data4life.png',
      imageAlt: 'Screenshot of the Data4Life dashboard.',
      href: 'https://main.d124ldfr70a9je.amplifyapp.com',
      hrefLabel: 'Visit live site',
      repoHref: 'https://github.com/JonnyLutz/Data4Life',
    },
  ],

  contact: {
    headline: "What's next?",
    body: "I'm not actively job searching. Open to the right conversation.",
    cta: 'Email me',
  },
}
