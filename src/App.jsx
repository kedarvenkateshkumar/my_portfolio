import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact']

export default function App() {
  const active = useActiveSection(SECTION_IDS)
  const { theme, toggle } = useTheme()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07080d] text-ink light:bg-[#f3f5fa] light:text-[#12141c]">
      <div className="grain" />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
