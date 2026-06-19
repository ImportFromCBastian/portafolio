import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import ProjectList from '@/components/projects/project-list'
import SkillsList from '@/components/skills/skill-list'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectList />
      <SkillsList />
      <Contact />
    </main>
  )
}
