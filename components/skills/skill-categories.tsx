import { AnimatedText } from '@/components/animated-text'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { SkillCategory } from '@/lib/data/skills'

type Props = {
  skillCategories: Array<SkillCategory>
  language: 'es' | 'en'
}

export default function SkillCategories({ skillCategories, language }: Props) {
  return (
    <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-neutral-800/50 p-2 mb-8">
      {skillCategories.map((category, idx) => {
        const categoryName =
          typeof category.name !== 'string'
            ? category.name[language]
            : category.name

        return (
          <TabsTrigger
            key={`${categoryName}`}
            value={idx.toString()}
            className="text-xs sm:text-sm whitespace-nowrap hover:cursor-pointer hover:bg-blue-600 hover:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            <span className="mr-1">{category.icon}</span>
            <span className="hidden sm:inline">
              <AnimatedText
                as="span"
                text={categoryName}
                animateKey={language}
              />
            </span>
          </TabsTrigger>
        )
      })}
    </TabsList>
  )
}
