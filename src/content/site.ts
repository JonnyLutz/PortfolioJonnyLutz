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
    'I build front-end features for the AWS IoT Console, owning the development from design through deployment. I support production workloads that scale to billions of devices across the globe.',
    "As an AI Champion, I am constantly evolving my development technique. I'm now using agentic automation with tools such as Kiro, Cursor, and Claude for extreme productivity and improved code quality.",
  ],

  experience: [
    {
      period: '2022 — Present',
      title: 'Front-End Engineer II',
      company: 'Amazon Web Services',
      summary:
        'Ship customer-facing UI for the AWS IoT Console across sub-consoles, owning features from discovery through launch—React/TypeScript, AWS APIs, observability, and automated coverage (integration tests, synthetics, canaries).',
      bullets: [
        'Partner with UX, PM, and peer engineering teams on accessibility, localization, and long-running deprecations with minimal customer impact.',
        'Champion pragmatic AI-assisted workflows—templates, repo-level guidance, and knowledge sharing—that took team adoption from partial to consistent use.',
        'Reduce operational noise by tightening tests and monitoring; dig into cross-region incidents when signals misfire.',
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
      stack: ['React', 'JavaScript', 'A/B testing', 'Adobe Analytics'],
    },
    {
      period: '2015 — 2020',
      title: 'Science Educator',
      company: 'Southeast Asia',
      summary:
        'Designed and delivered science instruction for diverse ESL learners—large groups, limited time, and the need for clarity under pressure. Strengthened skills in facilitation, written explanation, and adapting material to different audiences.',
      bullets: [],
      stack: ['Curriculum design', 'Communication'],
    },
    {
      period: '2012 — 2015',
      title: 'Design Engineer',
      company: 'The Ohio State University — Aerospace Research Center',
      summary:
        'Electro-mechanical assemblies and instrumentation for gas turbine research programs. Built and documented hardware setups; installed and calibrated a large set of precision sensors for experimental campaigns.',
      bullets: [],
      stack: ['Instrumentation', 'Technical documentation'],
    },
    {
      period: '2009 — 2012',
      title: 'Manufacturing Engineer',
      company: 'Honda of America',
      summary:
        'Precision tooling and continuous improvement in high-volume automotive manufacturing. Managed a substantial annual tooling budget, led cost initiatives with meaningful savings, and upheld strict quality standards through a major model change.',
      bullets: [],
      stack: ['Manufacturing', 'Quality', 'Cost improvement'],
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
