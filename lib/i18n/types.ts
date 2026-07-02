type Period = {
  start: number
  end: number | 'present'
}

export type LocaleDictionary = {
  navigation: {
    about: string
    projects: string
    skills: string
    contact: string
  }
  language: {
    label: string
    toEnglish: string
    toSpanish: string
  }
  hero: {
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    stats: {
      projects: string
      years: string
      learning: string
    }
  }
  sections: {
    projects: {
      title: string
      description: string
      challenges: string
      stack: string
      code: string
      live: string
    }
    skills: {
      title: string
      description: string
      summary: {
        label: string
        firstPart: string
        secondPart: string
        lastPart: string
      }
      tabTitles: Array<string>
    }
    about: {
      title: string
      description: string[]
      quickFactsTitle: string
      quickFacts: string[]
      disciplines: string
      contact: string
      downloadCv: string
      education: {
        title: string
        institution: string
        degree: string
        period: Period
      }
      stats: {
        projects: string
        years: string
        technologies: string
        dedication: string
      }
    }
    contact: {
      title: string
      description: string
      videoCall: string
      scheduleMeeting: string
      footerNote: string
      channels: {
        emailLabel: string
        linkedinLabel: string
        githubLabel: string
        phoneLabel: string
        email: string
        linkedin: string
        github: string
        phone: string
      }
    }
  }
  footer: {
    resume: string
    followMeLabel: string
    copyright: string
  }
  proeficiencyLabels: {
    expert: string
    advanced: string
    intermediate: string
    basic: string
  }
}
