/** Portfolio copy — factual, public-safe. */

export const site = {
  name: 'Jonathan Lutz',
  handle: 'JonnyLutz',
  title: 'Front-End Engineer II',
  company: 'Amazon Web Services',
  tagline: 'Agentic development and production support for the AWS IoT Console.',

  /** Set `true` to show [ProjectsSection](src/components/ProjectsSection.tsx) and nav link. */
  showProjectsSection: false,

  links: {
    github: 'https://github.com/JonnyLutz',
    linkedin: 'https://www.linkedin.com/in/jonathan-tyler-lutz/',
    email: 'mailto:JLutz.110@gmail.com',
  },

  about: [
    "I build front-end features for the AWS IoT Console, owning development from design through deployment—supporting production workloads that scale to billions of global devices. Currently, I'm reimagining the software development process for the agentic era.",
  ],

  experience: [
    {
      period: '2022 — Present',
      title: 'Front-End Engineer II',
      company: 'Amazon Web Services',
      summary:
        'Ship customer-facing features for the AWS IoT Console across 10+ sub-consoles, owning features from discovery through launch.  Stack: React/TypeScript, AWS APIs, observability, CI/CD, and test automation.',
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
      bullets: [
        'Ran A/B tests and supported Adobe Analytics / Adobe Target workflows for stakeholder reporting.',
      ],
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
      stack: ['Instrumentation', 'Technical documentation', 'Mechanical engineering'],
    },
    {
      period: '2009 — 2012',
      title: 'Manufacturing Engineer',
      company: 'Honda of America',
      summary:
        'Precision tooling and continuous improvement projects in high-volume automotive manufacturing. Managed a substantial annual tooling budget, led cost initiatives with meaningful savings, and upheld strict quality standards through a major model change.',
      bullets: [],
      stack: ['Manufacturing', 'Quality', 'Cost reduction', 'Lean manufacturing', 'Continuous improvement', 'kaizen'],
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

  /** Placeholder slots — add href + hrefLabel when a project is ready to link. */
  projects: [
    {
      title: 'Project one',
      description:
        'Placeholder for an upcoming case study: problem statement, your role, stack, and a link to a demo or repo will go here.',
      stack: ['React', 'TypeScript', 'TBD'],
      image: '/project-agent-1.png',
      imageAlt: 'Robot on a marble desk at sunset with a city skyline—workshop vibe.',
    },
    {
      title: 'Project two',
      description:
        'Second showcase slot—e.g. an open-source tool, a product experiment, or a write-up on AI-assisted UI delivery.',
      stack: ['TBD'],
      image: '/project-agent-2.png',
      imageAlt: 'Robot standing in a bright field of wildflowers.',
    },
    {
      title: 'Project three',
      description:
        'Third slot reserved for something visual—a dashboard, design-system contribution, or interactive demo worth a screenshot.',
      stack: ['TBD'],
    },
  ],

  contact: {
    headline: "What's next?",
    body: "I'm not actively job searching. Open to the right conversation.",
    cta: 'Email me',
  },
}
