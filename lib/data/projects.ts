export interface Project {
  id: string
  title: string
  description: string
  technicalDescription: string
  technologies: string[]
  challenges: string[]
  impact: string
  repository: string
  emoji: string
  star?: boolean
}

export const projects: Project[] = [
  {
    id: 'bearpal',
    title: 'BearPal',
    description:
      'Aplicación móvil Android para gamificación de reciclaje con escaneo QR.',
    technicalDescription:
      'Sistema de gamificación con escaneo QR integrado, lógica de ViewModel en arquitectura MVVM, persistencia local con Room Database, y sincronización de datos en tiempo real.',
    technologies: ['Android', 'Kotlin', 'MVVM', 'Room Database', 'QR Scanner'],
    challenges: [
      'Gamificación con sistema de puntos y customizacion de personaje',
      'Escaneo eficiente de códigos QR con baja latencia',
      'Implementar arquitectura escalable (MVVM + Clean Architecture)',
    ],
    impact:
      'Sistema completo de reciclaje que incentiva participación mediante mecánicas de juego y recompensas.',
    repository: 'https://github.com/ImportFromCBastian/bearpal',
    emoji: '🌱',
    star: true,
  },
  {
    id: 'fedeteria',
    title: 'Fedeteria',
    description:
      'E-commerce de ferreteria con integración de Mercado Pago para transacciones seguras.',
    technicalDescription:
      'Arquitectura full-stack con React en frontend, Node.js/Express en backend, integración de API de Mercado Pago, validación de pagos asincrónica y gestión de carrito persistente.',
    technologies: ['React', 'Node.js', 'Express', 'Mercado Pago API', 'MySQL'],
    challenges: [
      'Integración segura de pasarela de pago',
      'Sincronización de estado de intercambios entre clientes y servidor',
      'Manejo de errores en transacciones monetarias',
    ],
    impact:
      'Plataforma de comercio electrónico con intercambios funcional con soporte para múltiples formas de pago.',
    repository: 'https://github.com/ImportFromCBastian/fedeteria-front',
    emoji: '🛠️',
    star: true,
  },
  {
    id: 'cedica',
    title: 'Cedica',
    description:
      'Sistema de gestión para organización sin fines de lucro especializada en equinoterapia.',
    technicalDescription:
      'Stack moderno con Vue.js en frontend, Python/Flask en backend, PostgreSQL para persistencia, object storage, autenticación OAuth, CAPTCHA, y pipeline CI/CD automático para despliegue en producción.',
    technologies: [
      'Vue.js',
      'Python',
      'Flask',
      'PostgreSQL',
      'OAuth',
      'Captcha',
    ],
    challenges: [
      'Diseño de base de datos relacional optimizada con permisos complejos',
      'Integración de autenticación OAuth para usuarios',
      'Cumplimiento de regulaciones de seguridad',
      'Mejorar la experiencia de usuario en un sistema complejo',
    ],
    impact:
      'Sistema integral de gestión que optimizó operaciones administrativas de la organización.',
    repository: 'https://github.com/ImportFromCBastian/pds',
    emoji: '🏇',
    star: true,
  },
  {
    id: 'tenis-app',
    title: 'Tenis App',
    description:
      'Aplicación de gestión para club de tenis con manejo de reservas y transacciones financieras.',
    technicalDescription:
      'Aplicación desarrollada bajo metodologías ágiles (Scrum) con React en frontend, PHP/Symfony en backend, sistema de reservas con conflicto de horarios, cálculo de tarifas dinámicas y reportes financieros.',
    technologies: ['React', 'PHP', 'Symfony', 'MySQL', 'Scrum'],
    challenges: [
      'Coordinación en equipo con metodología Scrum',
      'Generación de gráficas financieras',
      'Gestion de proveedores de productos y servicios',
    ],
    impact: 'Mejora en la gestion y organizacion del club.',
    repository: 'https://github.com/MAPAW-UNLP/tenis-2024-frontend',
    emoji: '🎾',
  },
  {
    id: 'jd-tracker',
    title: 'JD-Tracker App',
    description:
      'Aplicación full-stack para centralizar y rastrear búsqueda de empleo.',
    technicalDescription:
      'Stack moderno con Next.js, TypeScript, Prisma para ORM, PostgreSQL como base de datos, Next-Auth para autenticación segura, y persistencia de estado.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Auth0',
      'Tailwind CSS',
    ],
    challenges: [
      'Diseñar modelo de datos flexible para diferentes tipos de aplicaciones',
      'Persistencia de archivos mediante S3',
      'Implementar autenticación segura con Auth0',
    ],
    impact:
      'Herramienta centralizada que organiza el proceso de búsqueda de empleo, mejorando productividad y seguimiento.',
    repository: 'https://github.com/ImportFromCBastian/jd-tracker-app',
    emoji: '🚀',
  },
]
