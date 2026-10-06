import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { About } from './components/sections/About'
import { CapabilityStrip } from './components/sections/CapabilityStrip'
import { CaseStudy } from './components/sections/CaseStudy'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Expertise } from './components/sections/Expertise'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { SelectedWork } from './components/sections/SelectedWork'
import { Services } from './components/sections/Services'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary-container focus:text-on-primary-container focus:font-label-ui focus:text-label-ui focus:font-semibold"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="w-full pt-16 bg-surface flex-1 focus:outline-none">
        <div className="flex flex-col w-full">
          <Hero />
          <CapabilityStrip />
          <SelectedWork />
          <CaseStudy />
          <About />
          <Expertise />
          <Experience />
          <Process />
          <Services />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
