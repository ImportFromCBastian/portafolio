import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Project from '@/components/projects/ProjectList'
import Skills from '@/components/skills/SkillsList'

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
