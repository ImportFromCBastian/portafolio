import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Project from '@/components/projects/project-list'
import Skills from '@/components/skills/skill-list'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  )
}
