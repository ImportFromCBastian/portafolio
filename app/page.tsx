import { About } from '@/components/features/about'
import { Contact } from '@/components/features/contact'
import { Hero } from '@/components/features/hero'
import { Projects } from '@/components/features/projects/projects'
import { Skills } from '@/components/features/skills/skills'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
