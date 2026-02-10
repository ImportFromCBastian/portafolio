# 🚀 Portafolio Personal

Portafolio web moderno y responsivo construido con Next.js 16, que muestra mis proyectos, habilidades técnicas y experiencia como desarrollador full-stack.

## 📋 Descripción

Este proyecto es un portafolio personal diseñado para presentar mi trabajo y habilidades de manera profesional. La aplicación incluye secciones dedicadas a proyectos destacados, habilidades técnicas con niveles de competencia, información personal y un formulario de contacto.

## ✨ Características

- **Diseño Moderno y Responsivo**: Interfaz adaptable a cualquier dispositivo
- **Modo Oscuro/Claro**: Soporte completo para tema oscuro y claro
- **Proyectos Destacados**: Showcase de 4 proyectos principales con tecnologías utilizadas
- **Skills con Niveles**: Visualización de habilidades técnicas con barras de progreso
- **Tipado Fuerte**: TypeScript + Zod para validación de datos
- **Componentes Reutilizables**: Arquitectura basada en componentes con shadcn/ui
- **Optimización de Rendimiento**: Next.js 16 con App Router y React 19
- **Animaciones Fluidas**: Transiciones suaves con Tailwind CSS

## 🛠️ Tecnologías Utilizadas

### Core

- **[Next.js 16](https://nextjs.org/)** - Framework React de última generación
- **[React 19](https://react.dev/)** - Biblioteca de UI con React Compiler
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático

### Estilos

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI accesibles y personalizables
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animaciones CSS

### Utilidades

- **[Zod](https://zod.dev/)** - Validación de schemas y tipos
- **[clsx](https://github.com/lukeed/clsx)** - Gestión de clases CSS
- **[class-variance-authority](https://cva.style/)** - Variantes de componentes

### Desarrollo

- **[Biome](https://biomejs.dev/)** - Linter y formateador ultra-rápido
- **[Bun](https://bun.sh/)** - Runtime JavaScript rápido

## 📁 Estructura del Proyecto

```txt
portafolio/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal con Header/Footer
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globales
│   ├── lib/
│   │   ├── actions/         # Server actions
│   │   │   ├── get-projects.ts
│   │   │   └── get-skills.tsx
│   │   └── schema/          # Schemas de validación Zod
│   │       ├── project.ts
│   │       └── skill.ts
├── components/              # Componentes React
│   ├── Hero.tsx            # Sección hero/introducción
│   ├── About.tsx           # Sección sobre mí
│   ├── Contact.tsx         # Formulario de contacto
│   ├── layout/
│   │   ├── Header.tsx      # Navegación principal
│   │   └── Footer.tsx      # Pie de página
│   ├── projects/
│   │   ├── ProjectList.tsx # Lista de proyectos
│   │   └── ProjectCard.tsx # Tarjeta individual de proyecto
│   ├── skills/
│   │   ├── SkillsList.tsx  # Lista de habilidades
│   │   └── SkillRow.tsx    # Barra de habilidad individual
│   └── ui/                 # Componentes shadcn/ui
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── progress.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts            # Funciones utilitarias
├── public/
│   ├── projects.json       # Datos de proyectos
│   └── skills.json         # Datos de habilidades
├── biome.json              # Configuración de Biome
├── components.json         # Configuración de shadcn/ui
├── next.config.ts          # Configuración de Next.js
├── tailwind.config.ts      # Configuración de Tailwind CSS
└── package.json
```

## 🚀 Instalación y Configuración

### Prerequisitos

- Node.js 20+ o Bun 1.0+
- Git

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone <tu-repositorio>
cd portafolio
```

1. **Instalar dependencias**

```bash
bun install
# o con npm/yarn/pnpm
npm install
```

1. **Ejecutar en modo desarrollo**

```bash
bun dev
# o
npm run dev
```

1. **Abrir en el navegador**

```url
http://localhost:3000
```

## 📜 Scripts Disponibles

```bash
bun dev          # Inicia el servidor de desarrollo
bun build        # Crea el build de producción
bun start        # Inicia el servidor de producción
bun lint         # Ejecuta Biome para validar código
bun format       # Formatea el código con Biome
```

### Modificar Proyectos

Edita el archivo `public/projects.json`:

```json
{
  "data": [
    {
      "id": 1,
      "name": "Nombre del Proyecto",
      "description": "Descripción detallada",
      "technologies": ["React", "Node.js"],
      "link": "https://github.com/tu-usuario/proyecto"
    }
  ]
}
```

### Modificar Habilidades

Edita el archivo `public/skills.json`:

```json
{
  "data": [
    {
      "name": "Tecnología",
      "level": 90,
      "icon": "https://img.shields.io/badge/..."
    }
  ]
}
```

### Modificar Estilos

- Los estilos globales están en `app/globals.css`
- Los colores y tema se configuran en `tailwind.config.ts`
- Las variables CSS en `app/globals.css` con soporte para modo oscuro

## 📦 Dependencias Principales

| Paquete | Versión | Propósito |
| --------- | --------- | ----------- |
| next | 16.1.6 | Framework React |
| react | 19.2.3 | Biblioteca UI |
| typescript | ^5 | Tipado estático |
| tailwindcss | ^4 | Estilos CSS |
| zod | ^4.3.6 | Validación de datos |
| lucide-react | ^0.563.0 | Iconos |

## 🤝 Proyectos Incluidos

1. **Fedeteria** - E-commerce de hardware con integración de Mercado Pago
2. **Cedica** - Sistema de gestión para terapia equina con CI/CD
3. **Tenis App** - Gestión de club de tenis con reservas
4. **Job Application Tracker** - Aplicación Kanban para búsqueda de empleo

## 📝 Notas Técnicas

- El proyecto usa **App Router** de Next.js (no Pages Router)
- Configurado con **React Compiler** para optimización automática
- Usa **Biome** en lugar de ESLint/Prettier para mejor rendimiento
- Componentes UI basados en **Radix UI** a través de shadcn/ui
- Soporte para **Inter** como fuente principal
- Esquemas de validación con **Zod** para type-safety completo

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como inspiración para tu propio portafolio.

---

Desarrollado con ❤️ usando Next.js y Tailwind CSS
