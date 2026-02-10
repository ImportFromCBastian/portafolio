import { getProjects } from '@/app/lib/actions/get-projects'
import ProjectCarousel from './ProjectCarousel' // El componente nuevo

const ProjectList = async () => {
  const { data } = await getProjects()

  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 overflow-hidden">
        {' '}
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
          My Projects
        </h2>
        <p className="text-center text-zinc-500 dark:text-zinc-300 mb-12">
          These are my projects that I worked on throughout my journey as a web
          developer.
        </p>
        <ProjectCarousel projects={data} />
      </div>
    </section>
  )
}

export default ProjectList
