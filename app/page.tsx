import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
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
