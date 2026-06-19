import Image from 'next/image'
import type { Skill } from '@/app/schema/skill'
import { Progress } from '@/components/ui/progress'

const SkillRow = ({ name, level, icon }: Skill) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base flex font-medium text-gray-700 dark:text-gray-300 gap-2 items-center">
          {name}
          <Image
            className="rounded-full"
            src={icon}
            alt={name}
            loading={'eager'}
            width={50}
            height={20}
          />
        </span>
        {level === 0 ? (
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Not Experienced
          </span>
        ) : (
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {level}%
          </span>
        )}
      </div>
      <Progress value={level} className="w-full" />
    </div>
  )
}

export default SkillRow
