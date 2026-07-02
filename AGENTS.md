# AGENTS.md

## Project Overview

Next.js 16 portfolio site using App Router, TypeScript, Tailwind CSS 4, and shadcn/ui components. Uses Biome instead of ESLint/Prettier.

## Essential Commands

```bash
bun install       # Install dependencies (use bun, not npm)
bun dev           # Start dev server (http://localhost:3000)
bun lint          # Check code with Biome
bun format        # Format code with Biome
bun build         # Production build
```

## Code Style

- **Formatter**: Biome with single quotes, no semicolons, trailing commas in ES5 positions
- **Indentation**: 2 spaces
- **Imports**: Use path aliases (`@/*`, `@/app/*`, `@/components/*`, `@/lib/*`)

## Project Structure

- `app/` - Next.js App Router (layout, pages, server actions)
- `components/` - React components (shadcn/ui in `components/ui/`)
- `lib/` - Utilities (`utils.ts`)
- `public/` - Static assets and data files (`projects.json`, `skills.json`)

## Key Technologies

- **State**: Zustand (not React context)
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Validation**: Zod schemas in `lib/schema/`
- **Server Actions**: `app/lib/actions/`

## Data Files

Edit `public/projects.json` and `public/skills.json` to modify portfolio content. Schemas in `lib/schema/`.

## Important Notes

- Uses React Compiler (configured in next.config.ts)
- No ESLint - Biome handles all linting
- Strict TypeScript mode enabled
