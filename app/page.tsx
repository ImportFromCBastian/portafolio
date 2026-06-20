import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects/projects'
import { Skills } from '@/components/skills/skills'

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
