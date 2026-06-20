'use client'

import { useState } from 'react'
import { AnimatedText } from '@/components/animated-text'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { skillCategories } from '@/lib/data/skills'
import { useTranslation } from '@/lib/useTranslation'
import { getProficiencyColor } from '@/lib/utils'
import { en } from '@/locales/en'
import { es } from '@/locales/es'
import { useLanguageStore } from '@/store/useLanguageStore'
import SkillCategories from './skill-categories'
import SkillsGridContent from './skill-grid-content'
import SkillCardInfo from './skill-info'
import SkillFooterResume from './skill-resume'

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const { locale } = useTranslation({ es, en })

  const { language } = useLanguageStore()

  const getProficiencyLabels = (proficiency: number) => {
    if (proficiency >= 85) return locale.proeficiencyLabels.expert
    if (proficiency >= 70) return locale.proeficiencyLabels.advanced
    if (proficiency >= 50) return locale.proeficiencyLabels.intermediate
    return locale.proeficiencyLabels.basic
  }

  return (
    <section id="skills" className="py-20 sm:py-32 bg-neutral-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <AnimatedText
              text={locale.sections.skills.title}
              animateKey={locale.sections.skills.title}
              as="span"
              className="text-neutral-50"
              lineClassName="block"
            />
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400">
            {locale.sections.skills.description}
          </p>
        </div>

        {/* Skills by Category using Tabs */}
        <Tabs
          value={selectedCategory.toString()}
          onValueChange={(val) => setSelectedCategory(parseInt(val, 10))}
          className="w-full"
        >
          <SkillCategories skillCategories={skillCategories} />

          {/* Tab Content */}
          {skillCategories.map((category, categoryIdx) => {
            const name =
              typeof category.name === 'string'
                ? category.name
                : category.name[language]
            return (
              <TabsContent
                key={`${category.name}-${categoryIdx}`}
                value={categoryIdx.toString()}
                className="space-y-6"
              >
                {/* Category Info Card */}
                <SkillCardInfo
                  icon={category.icon}
                  name={name}
                  description={category.description[language]}
                />

                {/* Skills Grid */}
                <div className="grid gap-4 md:grid-cols-2">
                  {category.skills.map((skill) => {
                    const colorClass = getProficiencyColor(skill.proficiency)
                    return (
                      <SkillsGridContent
                        key={skill.icon}
                        colorClass={colorClass}
                        skillName={skill.name}
                        skillProficiency={skill.proficiency}
                        skillProficiencyLabel={getProficiencyLabels(
                          skill.proficiency
                        )}
                      />
                    )
                  })}
                </div>
                <SkillFooterResume
                  summary={locale.sections.skills.summary}
                  skills={category.skills}
                  category={name}
                />
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
