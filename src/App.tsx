import { Toaster } from 'sonner'
import { site } from './content/site'
import { Sidebar } from './components/Sidebar'
import { MobileNav } from './components/MobileNav'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

function App() {
  return (
    <div className="min-h-svh">
      <Toaster theme="dark" position="top-center" richColors />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy-light focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-green focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green"
      >
        Skip to content
      </a>
      <MobileNav />
      <div className="mx-auto max-w-6xl px-6 lg:flex lg:gap-16 lg:px-12 xl:gap-24 xl:px-24">
        <div className="lg:w-[38%] lg:max-w-[320px] lg:shrink-0">
          <Sidebar />
        </div>
        <main className="min-w-0 flex-1 border-white/[0.06] pb-16 pt-8 lg:max-w-3xl lg:border-l lg:py-24 lg:pl-12 xl:max-w-4xl xl:pl-14">
          <AboutSection />
          <ExperienceSection />
          {site.showProjectsSection ? <ProjectsSection /> : null}
          <ContactSection />
        </main>
      </div>
    </div>
  )
}

export default App
