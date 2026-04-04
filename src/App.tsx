import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { LabBento } from './components/LabBento'
import { SignalStrip } from './components/SignalStrip'
import { WorkGrid } from './components/WorkGrid'
import { Contact } from './components/Contact'
import { SiteFooter } from './components/SiteFooter'

function App() {
  return (
    <div className="bg-radar scanlines min-h-svh">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-void"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <LabBento />
        <SignalStrip />
        <WorkGrid />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
