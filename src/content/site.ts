/** Public-facing copy — tune anytime. */
export const site = {
  name: 'Jonathan Lutz',
  handle: 'JonnyLutz',
  role: 'Front-end engineer',
  tagline:
    'Product UIs at enterprise scale — and the AI workflows that help teams ship them without losing the bar on quality.',
  employer: 'AWS · IoT console experiences',
  links: {
    github: 'https://github.com/JonnyLutz',
    linkedin: 'https://www.linkedin.com/in/jonathan-tyler-lutz/',
    email: 'mailto:JLutz.110@gmail.com',
  },
  lab: [
    {
      title: 'AI-assisted delivery',
      body: 'Championed agent-style tooling, shared context, and review prep so engineers spend less time on boilerplate and more on customer impact.',
      tag: 'agents · prompts · team enablement',
    },
    {
      title: 'Console-grade front ends',
      body: 'React, TypeScript, micro-frontends, and design-system-driven UX for complex device and connectivity workflows millions of developers rely on.',
      tag: 'React · TS · accessibility',
    },
    {
      title: 'Reliability by design',
      body: 'Synthetic checks, integration tests, and pragmatic automation aimed at fewer alarms, clearer signals, and calmer on-call.',
      tag: 'testing · observability',
    },
  ],
  signals: [
    { label: 'Code reviews shipped', value: '320+', hint: '15 mo window' },
    { label: 'Packages touched', value: '60+', hint: 'multi-repo' },
    { label: 'Console areas', value: '12+', hint: 'breadth' },
    { label: 'Team AI adoption', value: '100%', hint: 'from a 25% start' },
  ],
  projects: [
    {
      title: 'Connectivity & device UX',
      body: 'End-to-end UI for large-scale IoT connectivity surfaces — search, detail, metrics hooks, and hardened test coverage across packages.',
      stack: 'React · TypeScript · AWS',
    },
    {
      title: 'Developer velocity systems',
      body: 'Reusable agent context, automation for multi-repo edits, and guardrails informed by real incident learnings.',
      stack: 'AI tooling · DX · internal platforms',
    },
    {
      title: 'Open experiments',
      body: 'Shipping a public lab for prompts, small agents, and front-end prototypes — watch this space.',
      stack: 'Next up',
    },
  ],
} as const
