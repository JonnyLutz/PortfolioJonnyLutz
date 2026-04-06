import { Toaster } from 'sonner'
import { site } from './content/site'
import { Sidebar } from './components/Sidebar'
import { MobileNav } from './components/MobileNav'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { SiteFooter } from './components/SiteFooter'
import { FloatingChrome } from './components/FloatingChrome'
import { useIdleEasterEgg } from './hooks/useIdleEasterEgg'
import { BadgeColorProvider } from './context/BadgeColorContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppContent() {
  const { theme } = useTheme()
  const idleEpisodeId = useIdleEasterEgg()

  return (
    <BadgeColorProvider>
      <>
        <FloatingChrome />
        <div className="flex min-h-svh flex-col pb-20 sm:pb-16">
          <Toaster
            theme={theme === 'dark' ? 'dark' : 'light'}
            position="top-center"
            richColors
          />
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:fixed focus:left-16 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy-light focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-blue focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue"
          >
            Skip to content
          </a>
          <MobileNav />
          <div className="mx-auto w-full max-w-6xl px-6 lg:flex lg:gap-16 lg:px-12 xl:gap-24 xl:px-24">
            <div className="lg:w-[38%] lg:max-w-[320px] lg:shrink-0">
              <Sidebar />
            </div>
            <main className="min-w-0 flex-1 border-slate/20 pb-16 pt-8 lg:max-w-3xl lg:border-l lg:py-24 lg:pl-12 xl:max-w-4xl xl:pl-14">
              <AboutSection />
              {site.showProjectsSection ? <ProjectsSection /> : null}
              <ExperienceSection />
              <ContactSection />
            </main>
          </div>
          <SiteFooter idleEpisodeId={idleEpisodeId} />
        </div>
      </>
    </BadgeColorProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
