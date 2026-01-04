# Paulo Aquiles Sandoval Portfolio

## Overview

A personal portfolio website for Paulo Aquiles Sandoval, a Software Engineer and Cybersecurity Specialist based in Morelia, Michoacán, Mexico. The site showcases professional experience, projects, and technical skills with a modern dark-mode first design inspired by developer portfolios like Linear, Vercel, and GitHub.

The portfolio highlights key achievements including work at AIYM (international sports tech company), AVOTEX (AgTech startup - National Finalist InnovaTec 2025), and Deli T (IoT traceability solution).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode first)
- **Animations**: Framer Motion for smooth entrance animations
- **Icons**: Lucide React for consistent iconography
- **UI Components**: shadcn/ui (New York style) built on Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript throughout (client, server, shared)
- **Build Tool**: esbuild for server bundling, Vite for client
- **API Structure**: RESTful endpoints under `/api` prefix

### Project Structure
```
client/           # React frontend application
  src/
    components/ui/  # shadcn/ui component library
    pages/          # Route components (home, not-found)
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface (in-memory)
shared/           # Shared types and schemas
  schema.ts       # Drizzle ORM schema definitions
```

### Design System
- Dark mode as default theme
- Typography: DM Sans, Geist Mono, Fira Code fonts
- Color system using HSL CSS variables
- Responsive mobile-first layouts
- Component spacing using Tailwind's 4, 6, 8, 12 unit system

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas integrated via drizzle-zod
- **Storage**: Abstracted IStorage interface allowing swap between in-memory and database implementations

## External Dependencies

### Database
- PostgreSQL (configured via DATABASE_URL environment variable)
- Drizzle Kit for migrations (`npm run db:push`)

### Third-Party Services
- Google Fonts (DM Sans, Geist Mono, Fira Code, Architects Daughter)

### Key NPM Packages
- **UI**: @radix-ui/* primitives, class-variance-authority, cmdk
- **Forms**: react-hook-form with @hookform/resolvers
- **Data**: @tanstack/react-query, drizzle-orm, zod
- **Animation**: framer-motion, embla-carousel-react
- **Utilities**: date-fns, clsx, tailwind-merge

### Development Tools
- Replit-specific plugins for development (error overlay, cartographer, dev banner)
- TypeScript with strict mode enabled
- Path aliases: `@/*` for client, `@shared/*` for shared code