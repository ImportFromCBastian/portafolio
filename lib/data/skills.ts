import type { LocalizedString } from '@/lib/utils'

export interface SkillCategory {
  name: LocalizedString | string
  icon: string
  description: LocalizedString
  skills: Skill[]
}

export interface Skill {
  name: string
  proficiency: number
  icon?: string
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: '🎨',
    description: {
      es: 'Desarrollo de interfaces modernas y responsivas',
      en: 'Development of modern and responsive interfaces',
    },
    skills: [
      { name: 'React', proficiency: 90 },
      { name: 'Next.js', proficiency: 90 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Tailwind CSS', proficiency: 90 },
      { name: 'Vue.js', proficiency: 80 },
      { name: 'HTML5', proficiency: 95 },
      { name: 'CSS3', proficiency: 90 },
    ],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    description: {
      es: 'Desarrollo de APIs y servicios escalables',
      en: 'Development of scalable APIs and services',
    },
    skills: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express.js', proficiency: 80 },
      { name: 'NestJS', proficiency: 75 },
      { name: 'Python', proficiency: 75 },
      { name: 'Flask', proficiency: 75 },
      { name: 'PHP', proficiency: 70 },
      { name: 'Symfony', proficiency: 75 },
    ],
  },
  {
    name: {
      es: 'Móvil',
      en: 'Mobile',
    },
    icon: '📱',
    description: {
      es: 'Desarrollo de aplicaciones Android nativas',
      en: 'Development of native Android applications',
    },
    skills: [
      { name: 'Android (Kotlin)', proficiency: 75 },
      { name: 'MVVM Architecture', proficiency: 85 },
      { name: 'Room Database', proficiency: 80 },
      { name: 'Clean Architecture', proficiency: 85 },
    ],
  },
  {
    name: {
      es: 'Bases de Datos',
      en: 'Databases',
    },
    icon: '🗄️',
    description: {
      es: 'Diseño y optimización de bases de datos',
      en: 'Design and optimization of databases',
    },
    skills: [
      { name: 'PostgreSQL', proficiency: 90 },
      { name: 'MySQL', proficiency: 90 },
      { name: 'SQLite', proficiency: 80 },
      { name: 'MongoDB', proficiency: 70 },
      { name: 'Prisma ORM', proficiency: 85 },
    ],
  },
  {
    name: {
      es: 'DevOps & Herramientas',
      en: 'DevOps & Tools',
    },
    icon: '🔧',
    description: {
      es: 'Despliegue, automatización y herramientas de desarrollo',
      en: 'Deployment, automation and development tools',
    },
    skills: [
      { name: 'Git', proficiency: 90 },
      { name: 'Docker', proficiency: 80 },
      { name: 'CI/CD', proficiency: 50 },
      { name: 'Vercel', proficiency: 90 },
      { name: 'Linux', proficiency: 80 },
      { name: 'Figma', proficiency: 75 },
    ],
  },
  {
    name: {
      es: 'Arquitectura & Principios',
      en: 'Architecture & Principles',
    },
    icon: '🏗️',
    description: {
      es: 'Patrones de diseño y buenas prácticas',
      en: 'Design patterns and best practices',
    },
    skills: [
      { name: 'Clean Architecture', proficiency: 85 },
      { name: 'SOLID Principles', proficiency: 80 },
      { name: 'Design Patterns', proficiency: 90 },
      { name: 'Scrum/Agile', proficiency: 85 },
      { name: 'RESTful APIs', proficiency: 90 },
    ],
  },
]
