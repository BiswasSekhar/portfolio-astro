import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/BiswasSekhar',
  linkedin: 'https://www.linkedin.com/in/biswas-sekhar',
  mail: 'mailto:biswas.siv@gmail.com',
  instagram: 'https://www.instagram.com/_biswas_sekhar_/',
  // medium: 'https://ladvace.medium.com/',
  // discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Government Engineering College, Idukki',
    // link: 'https://www.ucentral.edu.co/',
    date: '2021 - 2025',
  },
  {
    title: '...',
    institution: 'Talent Deals',
    // link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'IEEE CSKS',
    // link: 'https://www.udemy.com/',
    date: '2023 - Present',
  },
  // {
  //   title: '...',
  //   institution: 'Youtube',
  //   link: 'https://www.youtube.com/@midulive',
  //   date: '2018 - 2022',
  // },
  // {
  //   title: 'Tattoo Artist',
  //   institution: 'Tattoo Academy',
  //   link: 'https://www.instagram.com/tattoodcacademy/',
  //   date: '2024 - 2025',
  // },
]

export const EXPERIENCE = [
  {
    company: 'Talent Deals',
    location: 'Ernakulam, Kerala',
    position: 'Software Engineer',
    start: '2024',
    end: 'Current',
    tasks: [
      'Complete redesign of the company website',
      'Structuring the company database',
    ],
  },
  
]
