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
      location: 'Seattle, WA',
      summary:
        'Ship customer-facing features for the AWS IoT Console across 10+ sub-consoles. Stack: React, TypeScript, AWS APIs, CI/CD, and test automation.',
      bullets: [
        'Partner with UX, PM, and peer engineering teams on feature development, testing, deployment, and production support.',
        'Champion AI-assisted workflows, development processes, and early adoption of state-of-the-art productivity tools.',
        'Invest in tools and processes that move the team toward agentic development and production support.',
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
      location: 'Columbus, OH',
      summary:
        'Developed customer-facing web applications for account origination and related journeys. Collaborated with business and analytics partners on experiments and instrumentation so we could measure conversion and iterate with evidence.',
      bullets: [],
      stack: ['Angular', 'JavaScript', 'A/B testing', 'Adobe Analytics'],
    },
    {
      period: '2015 — 2020',
      title: 'Science Educator',
      company: 'Southeast Asia',
      location: 'Multiple countries',
      summary:
        'Designed and delivered science instruction for diverse ESL learners. Strengthened skills in facilitation, written explanation, and adapting material to different audiences.',
      bullets: [],
      stack: ['Curriculum design', 'Communication', 'Teaching', 'Science education'],
    },
    {
      period: '2012 — 2015',
      title: 'Design Engineer',
      company: 'The Ohio State University — Aerospace Research Center',
      location: 'Columbus, OH',
      summary:
        'Designed, assembled, and tested components for gas turbine research programs. Built and documented hardware setups; installed and calibrated a large set of precision sensors for experiments. Performed high-stakes experiments under tight deadlines.',
      bullets: [],
      stack: ['Design & Manufacturing', 'Instrumentation', 'Technical documentation', 'Mechanical engineering'],
    },
    {
      period: '2009 — 2012',
      title: 'Manufacturing Engineer',
      company: 'Honda of America',
      location: 'Marysville, OH',
      summary:
        'Focused on precision tooling and continuous improvement projects in high-volume automotive manufacturing. Managed a substantial annual tooling budget, led cost initiatives with meaningful savings, and upheld strict quality standards through a major model change.',
      bullets: [],
      stack: ['Manufacturing', 'Quality', 'Cost reduction', 'Lean manufacturing', 'Continuous improvement', 'Kaizen'],
    },
    {
      period: '2007 — 2008',
      title: 'Production Engineering Intern',
      company: 'Toyota Motor Manufacturing',
      location: 'Georgetown, KY',
      summary:
        'Completed a multi-plant rotational internship across Toyota manufacturing operations, with exposure to production engineering, line processes, and how quality and throughput are balanced at scale.',
      bullets: [],
      stack: ['Manufacturing', 'Internship'],
    },
  ],

  /** Add `href` + `hrefLabel` for live demos; optional `image` + `imageAlt` (file in /public). */
  projects: [
    {
      title: 'CyberPugs',
      description:
        'Cyberpunk SPA with nine unique CyberPug hacker-dog personas: browse the roster, start a Bedrock-backed AI chat. Players earn techno pug prizes for a toy box and unlock a surprise after collecting the full set.',
      stackBullets: [
        'React 18, TypeScript, Vite, and React Router.',
        'Front end on AWS Amplify; API and chat backend on AWS App Runner.',
        'Conversational AI through the Amazon Bedrock API for the in-app chat experience.',
        'Progression: collectible techno pug prizes for the toy box, with a hidden unlock when the collection is complete.',
        'Imagery generated with SuperGrok.',
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
