import { AnimatedText } from '@/components/shared/animated-text'
import { TabsTrigger } from '@/components/ui/tabs'

type Props = {
  value: number
  animatedTextLabel: string
  icon: string
  language: string
}

export default function SkillCategories({
  value,
  animatedTextLabel,
  icon,
  language,
}: Props) {
  return (
    <TabsTrigger
      value={value.toString()}
      className="text-xs sm:text-sm whitespace-nowrap hover:cursor-pointer hover:bg-blue-600 hover:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white"
    >
      <span className="mr-1">{icon}</span>
      <span className="hidden sm:inline">
        <AnimatedText
          as="span"
          text={animatedTextLabel}
          animateKey={language}
        />
      </span>
    </TabsTrigger>
  )
}
