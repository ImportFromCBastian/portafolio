import type { Project } from '@/lib/types/project'

export const projects: Project[] = [
  {
    id: 'bearpal',
    title: 'BearPal',
    description: {
      es: 'Aplicación móvil Android para gamificación de reciclaje con escaneo QR.',
      en: 'Android mobile app for recycling gamification with QR scanning.',
    },
    technicalDescription: {
      es: 'Sistema de gamificación con escaneo QR integrado...',
      en: 'Gamification system with integrated QR scanning...',
    },
    technologies: ['Android', 'Kotlin', 'MVVM', 'Room Database', 'QR Scanner'],
    challenges: [
      {
        es: 'Gamificación con sistema de puntos y customizacion de personaje',
        en: 'Gamification with points system and character customization',
      },
      {
        es: 'Escaneo eficiente de códigos QR con baja latencia',
        en: 'Efficient QR code scanning with low latency',
      },
      {
        es: 'Implementar arquitectura escalable (MVVM + Clean Architecture)',
        en: 'Implement scalable architecture (MVVM + Clean Architecture)',
      },
    ],
    impact: {
      es: 'Sistema completo de reciclaje que incentiva participación mediante mecánicas de juego y recompensas.',
      en: 'Complete recycling system that incentivizes participation through game mechanics and rewards.',
    },
    repository: 'https://github.com/ImportFromCBastian/bearpal',
    emoji: '🌱',
    star: true,
  },
  {
    id: 'fedeteria',
    title: 'Fedeteria',
    description: {
      es: 'E-commerce de ferreteria con integración de Mercado Pago para transacciones seguras.',
      en: 'Hardware store e-commerce with Mercado Pago integration for secure transactions.',
    },
    technicalDescription: {
      es: 'Arquitectura full-stack con React en frontend, Node.js/Express en backend, integración de API de Mercado Pago, validación de pagos asincrónica y gestión de carrito persistente.',
      en: 'Full-stack architecture with React on the frontend, Node.js/Express on the backend, Mercado Pago API integration, asynchronous payment validation, and persistent shopping cart management.',
    },
    technologies: ['React', 'Node.js', 'Express', 'Mercado Pago API', 'MySQL'],
    challenges: [
      {
        es: 'Integración segura de pasarela de pago',
        en: 'Secure payment gateway integration',
      },
      {
        es: 'Sincronización de estado de intercambios entre clientes y servidor',
        en: 'Synchronization of exchange states between clients and server',
      },
      {
        es: 'Manejo de errores en transacciones monetarias',
        en: 'Error handling in monetary transactions',
      },
    ],
    impact: {
      es: 'Plataforma de comercio electrónico con intercambios funcional con soporte para múltiples formas de pago.',
      en: 'E-commerce platform with functional exchanges and support for multiple payment methods.',
    },
    repository: 'https://github.com/ImportFromCBastian/fedeteria-front',
    emoji: '🛠️',
    star: true,
  },
  {
    id: 'cedica',
    title: 'Cedica',
    description: {
      es: 'Sistema de gestión para organización sin fines de lucro especializada en equinoterapia.',
      en: 'Management system for non-profit organization specialized in equine therapy.',
    },
    technicalDescription: {
      es: 'Stack moderno con Vue.js en frontend, Python/Flask en backend, PostgreSQL para persistencia, object storage, autenticación OAuth, CAPTCHA, y pipeline CI/CD automático para despliegue en producción.',
      en: 'Modern stack with Vue.js on the frontend, Python/Flask on the backend, PostgreSQL for persistence, object storage, OAuth authentication, CAPTCHA, and automated CI/CD pipeline for production deployment.',
    },
    technologies: [
      'Vue.js',
      'Python',
      'Flask',
      'PostgreSQL',
      'OAuth',
      'Captcha',
    ],
    challenges: [
      {
        es: 'Diseño de base de datos relacional optimizada con permisos complejos',
        en: 'Design of optimized relational database with complex permissions',
      },
      {
        es: 'Integración de autenticación OAuth para usuarios',
        en: 'Integration of OAuth authentication for users',
      },
      {
        es: 'Cumplimiento de regulaciones de seguridad',
        en: 'Compliance with security regulations',
      },
      {
        es: 'Mejorar la experiencia de usuario en un sistema complejo',
        en: 'Improve user experience in a complex system',
      },
    ],
    impact: {
      es: 'Sistema integral de gestión que optimizó operaciones administrativas de la organización.',
      en: 'Integrated management system that optimized administrative operations of the organization.',
    },
    repository: 'https://github.com/ImportFromCBastian/pds',
    emoji: '🏇',
    star: true,
  },
  {
    id: 'tenis-app',
    title: 'Tenis App',
    description: {
      es: 'Aplicación de gestión para club de tenis con manejo de reservas y transacciones financieras.',
      en: 'Management application for a tennis club with booking and financial transaction handling.',
    },
    technicalDescription: {
      es: 'Aplicación desarrollada bajo metodologías ágiles (Scrum) con React en frontend, PHP/Symfony en backend, sistema de reservas con conflicto de horarios, cálculo de tarifas dinámicas y reportes financieros.',
      en: 'Application developed under agile methodologies (Scrum) with React on the frontend, PHP/Symfony on the backend, booking system with schedule conflicts, dynamic rate calculation, and financial reports.',
    },
    technologies: ['React', 'PHP', 'Symfony', 'MySQL', 'Scrum'],
    challenges: [
      {
        es: 'Coordinación en equipo con metodología Scrum',
        en: 'Team coordination with Scrum methodology',
      },
      {
        es: 'Generación de gráficas financieras',
        en: 'Generation of financial charts',
      },
      {
        es: 'Gestion de proveedores de productos y servicios',
        en: 'Management of product and service providers',
      },
    ],
    impact: {
      es: 'Mejora en la gestion y organizacion del club.',
      en: 'Improvement in the management and organization of the club.',
    },
    repository: 'https://github.com/MAPAW-UNLP/tenis-2024-frontend',
    emoji: '🎾',
  },
  {
    id: 'jd-tracker',
    title: 'JD-Tracker App',
    description: {
      es: 'Aplicación full-stack para centralizar y rastrear búsqueda de empleo.',
      en: 'Full-stack application to centralize and track job search.',
    },
    technicalDescription: {
      es: 'Stack moderno con Next.js, TypeScript, Prisma para ORM, PostgreSQL como base de datos, Next-Auth para autenticación segura, y persistencia de estado.',
      en: 'Modern stack with Next.js, TypeScript, Prisma for ORM, PostgreSQL as the database, Next-Auth for secure authentication, and state persistence.',
    },
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Auth0',
      'Tailwind CSS',
    ],
    challenges: [
      {
        es: 'Diseñar modelo de datos flexible para diferentes tipos de aplicaciones',
        en: 'Design a flexible data model for different types of applications',
      },
      {
        es: 'Persistencia de archivos mediante S3',
        en: 'File persistence using S3',
      },
      {
        es: 'Implementar autenticación segura con Auth0',
        en: 'Implement secure authentication with Auth0',
      },
    ],
    impact: {
      es: 'Herramienta centralizada que organiza el proceso de búsqueda de empleo, mejorando productividad y seguimiento.',
      en: 'Centralized tool that organizes the job search process, improving productivity and tracking.',
    },
    repository: 'https://github.com/ImportFromCBastian/jd-tracker-app',
    emoji: '🚀',
  },
]
