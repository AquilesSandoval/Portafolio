# Design Guidelines for Paulo Aquiles Sandoval Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (Linear, Vercel, GitHub profiles) with a focus on technical professionalism and dark mode aesthetics.

## Core Design Principles
- **Dark Mode First**: Deep, rich dark backgrounds with high-contrast text
- **Minimalist Professional**: Clean layouts prioritizing content over decoration
- **Mobile First**: All layouts must work flawlessly on mobile before scaling up

## Typography System
- **Font Family**: Modern sans-serif (Inter or similar via Google Fonts)
- **Hierarchy**:
  - Hero Title: text-5xl to text-7xl, font-bold
  - Section Headers: text-3xl to text-4xl, font-semibold
  - Subsection/Role: text-xl to text-2xl, font-medium
  - Body Text: text-base to text-lg
  - Captions/Meta: text-sm

## Layout & Spacing
- **Container**: max-w-6xl, centered with px-6 to px-8
- **Section Spacing**: py-16 to py-24 between major sections
- **Component Spacing**: Use tailwind units of 4, 6, 8, and 12 consistently
- **Grid System**: Single column mobile, 2-3 columns desktop where appropriate

## Component Library

### Hero Section
- Full viewport height consideration (min-h-screen)
- Centered layout with name, professional title, location
- Placeholder for professional photo (circular, medium size)
- CTA buttons (LinkedIn, GitHub) with icons from Lucide React
- Subtle background gradient or pattern

### Experience Section
- **Timeline Layout**: Vertical cards with left border accent
- Each card: Company name, location/remote indicator, date range, role, description bullets, key achievements
- **Critical**: AIYM role described as "Miembro Clave del Equipo" with explicit mention of three deliverables (App Móvil, Landing Page, Panel Administrativo)

### Projects Section
- Card grid (1 column mobile, 2-3 columns desktop)
- Each card: Project title, brief description, technologies used (badges/pills), notable achievements
- Highlight: AVOTEX (Finalista Nacional InnovaTec 2025), Deli T (5to lugar)

### Skills Section
- Categorized into 4 groups: Lenguajes, Web/Mobile, IA/Data, Herramientas
- Badge/pill design for each skill
- Visual grouping with subtle containers

### Contact/Footer
- Email, phone, LinkedIn, GitHub links with Lucide icons
- Language proficiency: Español (Nativo), Inglés (B2+), Portugués (Básico)
- Clean, organized layout

## Animations (Framer Motion)
- **Entry animations only**: Fade-in with slight Y-axis translation on scroll
- Stagger children for lists/grids
- Keep animations subtle and fast (0.3-0.5s duration)
- No distracting hover effects or continuous animations

## Color Strategy
- **Note**: Specific dark mode color palette to be defined in implementation
- High contrast text for accessibility
- Accent color for CTAs and highlights
- Subtle borders and dividers

## Icons
- **Lucide React** for all icons (social links, section markers, skill indicators)
- Consistent sizing: w-5 h-5 for inline, w-6 h-6 for standalone

## Images
- **Hero Section**: Professional headshot (circular, centered above name)
- **Projects**: Optional placeholder images for project cards if beneficial
- All images should have proper alt text

## Critical Requirements
- **Mobile responsiveness**: Test all breakpoints (sm, md, lg, xl)
- **Accessibility**: Proper heading hierarchy, semantic HTML, ARIA labels where needed
- **Performance**: Lazy loading for images, optimized animations
- **Content accuracy**: Use provided text verbatim, especially for AIYM role description