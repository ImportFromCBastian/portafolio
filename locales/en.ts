import type { LocaleDictionary } from '@/lib/locale-types'

export const en: LocaleDictionary = {
  navigation: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  language: {
    label: 'Language',
    toEnglish: 'English',
    toSpanish: 'Spanish',
  },
  hero: {
    title: 'Full Stack Developer\nComputer Science student (UNLP)',
    description:
      'Focused on building scalable and secure solutions, applying Clean Architecture and agile methods in high-performance environments.',
    primaryCta: 'View Projects',
    secondaryCta: 'Connect on LinkedIn',
    stats: {
      projects: 'Projects',
      years: 'Years XP',
      learning: 'Learning',
    },
  },
  sections: {
    projects: {
      title: 'Featured Projects',
      description:
        'A curated selection of projects that show my experience in full-stack development, clean architecture and complex problem solving.',
      challenges: 'Technical Challenges:',
      stack: 'Tech Stack',
      code: 'Code',
      live: 'Live',
    },
    skills: {
      title: 'Skills & Experience',
      description:
        'Organized by technical area, showing depth and experience in each discipline.',
      summary: {
        label: 'Summary:',
        firstPart: 'abilities in',
        secondPart: 'with a average of',
        lastPart: 'knowledge.',
      },
      tabTitles: ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Other'],
    },
    about: {
      title: 'About Me',
      description: [
        'I am a developer focused on building technical solutions that solve real problems. I am in the final year of a Computer Science degree at Universidad Nacional de La Plata (UNLP), with experience in full-stack development, clean architecture and agile methodologies.',
        'My approach combines technical precision with user orientation. I have worked on projects ranging from native Android mobile apps and e-commerce platforms with payment APIs to complex management systems with production CI/CD.',
        'I value clean code, clear documentation and teamwork. I keep optimizing, learning new technologies and improving every day.',
      ],
      quickFactsTitle: 'Key Facts:',
      quickFacts: [
        'Computer Science student (UNLP)',
        'Full-Stack and Android specialization',
        'Experience with Scrum and Agile methodologies',
        'Focus on Clean Architecture and best practices',
      ],
      disciplines: 'Disciplines',
      contact: 'Contact',
      downloadCv: 'Download CV',
      education: {
        title: 'Education',
        institution: 'Universidad Nacional de La Plata (UNLP)',
        degree: 'Computer Science Degree',
        period: {
          start: 2022,
          end: 'present',
        },
      },
      stats: {
        projects: 'Projects',
        years: 'Years XP',
        technologies: 'Technologies',
        dedication: 'Dedication',
      },
    },
    contact: {
      title: 'Get in Touch',
      description:
        'I am available for consultations, collaborations or technical conversations. Choose the channel you prefer.',
      videoCall: 'Prefer a video call?',
      scheduleMeeting: 'Schedule Meeting',
      footerNote:
        'Excited to show my skills and collaborate on meaningful projects.',
      channels: {
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        phoneLabel: 'Phone',
        email: 'I prefer email for technical inquiries',
        linkedin: 'Let us connect professionally',
        github: 'Review my code and projects',
        phone: 'For urgent conversations',
      },
    },
  },
  footer: {
    resume:
      ' Full Stack & Android Developer specialized in building quality technical solutions.',
    followMeLabel: 'Follow me on',
    copyright: 'All rights reserved.',
  },
  proeficiencyLabels: {
    expert: 'Expert',
    advanced: 'Advanced',
    intermediate: 'Intermediate',
    basic: 'Basic',
  },
}
