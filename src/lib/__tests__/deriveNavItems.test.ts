import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { deriveNavItems } from '../deriveNavItems'

/**
 * Property 3: Navigation conditional section inclusion
 *
 * For any site configuration, deriveNavItems(site) includes the 'projects'
 * entry if and only if site.showProjectsSection is true, and always includes
 * 'about', 'experience', and 'contact' regardless of configuration.
 *
 * **Validates: Requirements 10.1, 10.2, 10.3**
 */
describe('Property 3: Navigation conditional section inclusion', () => {
  it('includes "projects" iff showProjectsSection is true', () => {
    fc.assert(
      fc.property(fc.boolean(), (showProjects) => {
        const nav = deriveNavItems({ showProjectsSection: showProjects })
        const ids = nav.map((n) => n.id)
        expect(ids.includes('projects')).toBe(showProjects)
      }),
      { numRuns: 100 }
    )
  })

  it('always includes about, experience, and contact', () => {
    fc.assert(
      fc.property(fc.boolean(), (showProjects) => {
        const nav = deriveNavItems({ showProjectsSection: showProjects })
        const ids = nav.map((n) => n.id)
        expect(ids).toContain('about')
        expect(ids).toContain('experience')
        expect(ids).toContain('contact')
      }),
      { numRuns: 100 }
    )
  })
})
