/**
 * Derive navigation items from site configuration instead of
 * maintaining a separate hardcoded NAV array.
 *
 * Sections with an explicit `condition: false` are excluded.
 * All other sections are always included.
 */

interface SiteConfigNav {
  showProjectsSection: boolean
}

export function deriveNavItems(site: SiteConfigNav): Array<{ id: string; label: string }> {
  const sections: Array<{ id: string; label: string; condition?: boolean }> = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects', condition: site.showProjectsSection },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]
  return sections.filter((s) => s.condition !== false).map(({ id, label }) => ({ id, label }))
}
