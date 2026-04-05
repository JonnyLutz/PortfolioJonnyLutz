export type BadgeSchemeIndex = 0 | 1 | 2 | 3

export type BadgeScheme = {
  tagPill: string
  headingBorder: string
  headingIcon: string
  subtleIcon: string
  sectionLabel: string
  submitButton: string
  dotIdle: string
  dotActive: string
}

export const BADGE_SCHEMES: readonly BadgeScheme[] = [
  {
    tagPill: 'bg-orange/10 text-orange',
    headingBorder: 'border-orange/60',
    headingIcon: 'text-orange',
    subtleIcon: 'text-orange/50',
    sectionLabel: 'text-orange',
    submitButton:
      'bg-orange text-navy hover:bg-orange-dim focus-visible:outline-orange',
    dotIdle:
      'border-orange/50 bg-orange/30 hover:border-orange/75 hover:bg-orange/45',
    dotActive:
      'scale-125 border-orange-bright bg-orange ring-2 ring-orange/50',
  },
  {
    tagPill: 'bg-blue/10 text-blue',
    headingBorder: 'border-blue/60',
    headingIcon: 'text-blue',
    subtleIcon: 'text-blue/50',
    sectionLabel: 'text-blue',
    submitButton:
      'bg-blue text-navy hover:bg-blue-dim focus-visible:outline-blue',
    dotIdle:
      'border-blue/50 bg-blue/30 hover:border-blue/75 hover:bg-blue/45',
    dotActive: 'scale-125 border-blue-bright bg-blue ring-2 ring-blue/50',
  },
  {
    tagPill: 'bg-green/10 text-green',
    headingBorder: 'border-green/60',
    headingIcon: 'text-green',
    subtleIcon: 'text-green/50',
    sectionLabel: 'text-green',
    submitButton:
      'bg-green text-navy hover:bg-green-dim focus-visible:outline-green',
    dotIdle:
      'border-green/50 bg-green/30 hover:border-green/75 hover:bg-green/45',
    dotActive:
      'scale-125 border-green-bright bg-green ring-2 ring-green/50',
  },
  {
    tagPill: 'bg-violet/10 text-violet',
    headingBorder: 'border-violet/60',
    headingIcon: 'text-violet',
    subtleIcon: 'text-violet/50',
    sectionLabel: 'text-violet',
    submitButton:
      'bg-violet text-navy hover:bg-violet-dim focus-visible:outline-violet',
    dotIdle:
      'border-violet/50 bg-violet/30 hover:border-violet/75 hover:bg-violet/45',
    dotActive:
      'scale-125 border-violet-bright bg-violet ring-2 ring-violet/50',
  },
] as const
