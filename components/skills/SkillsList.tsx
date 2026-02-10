import { getSkills } from '@/app/lib/actions/get-skills'
import SkillRow from './SkillRow'

const SkillsList = async () => {
  const { data } = await getSkills()
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          My Skills
        </h2>
        <div className="max-w-2xl mx-auto">
          {data.map((skill) => (
            <SkillRow
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsList
