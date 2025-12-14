# Project Context: chod

**Last Updated:** $(date)
**Project Version:** 0.1.0

## Project Overview

**Project Name:** chod (Chłopaki od dźwięku)
**Project Type:** Next.js Web Application
**Primary Language:** Polish
**Target Audience:** Event organizers, businesses, individuals planning events

## Business Context

Chłopaki od dźwięku is a professional event production company specializing in:
- Sound systems and audio engineering
- Stage lighting
- Multimedia services (LED screens, projectors, video production)

The website serves as a marketing and information platform to showcase services and enable potential clients to contact the company.

## Technology Stack

### Core Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom CSS** - Global styles in `app/globals.css`

### Typography
- **Montserrat** - Google Font (via next/font)

### Development Tools
- **ESLint 9** - Code linting
- **TypeScript** - Type checking
- **Node.js** - Runtime environment

## Application Architecture

### Directory Structure
```
chod/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero/landing section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services showcase
│   ├── Gallery.tsx       # Image gallery (not active)
│   ├── Contact.tsx       # Contact form/section
│   ├── Navigations.tsx   # Navigation bar
│   └── Footer.tsx        # Footer component
├── docs/                  # Documentation
│   ├── sprint-artifacts/ # Sprint documentation
│   └── workflows/        # Workflow management
└── public/               # Static assets
```

### Component Architecture

**Layout Components:**
- `Navigations.tsx` - Site navigation (appears in root layout)
- `Footer.tsx` - Site footer (appears in root layout)

**Page Sections:**
- `Hero.tsx` - Landing section with company name and CTA
- `About.tsx` - Company information
- `Services.tsx` - Three main services (Sound, Lighting, Multimedia)
- `Gallery.tsx` - Image gallery (currently commented out in page.tsx)
- `Contact.tsx` - Contact information/form

### Styling Approach

- Uses Tailwind CSS utility classes
- Custom CSS classes defined in `globals.css`:
  - `section-title` - Section heading styles
  - `service-card` - Service card component styles
  - `cta-button` - Call-to-action button styles
- Color scheme uses custom properties:
  - `primary`, `secondary` - Main brand colors
  - `accent`, `accent-light` - Accent colors
- Gradient backgrounds and animations

## Current Features

### Implemented
1. **Multi-section Landing Page**
   - Hero section with animated background
   - About section
   - Services section (3 services)
   - Contact section

2. **Navigation**
   - Site-wide navigation component
   - Footer component

3. **Responsive Design**
   - Mobile-first approach
   - Responsive grid layouts
   - Adaptive typography

### Planned/In Progress
- Gallery section (component exists but not displayed)
- Contact form functionality
- Additional content sections

## Development State

**Current Phase:** Early Development
- Basic structure and components in place
- Initial styling and layout complete
- Content sections implemented
- Gallery feature prepared but not active

**Next Steps:**
- Activate and populate gallery
- Implement contact form functionality
- Add additional content and features
- Optimize performance and SEO

## Key Design Decisions

1. **App Router:** Using Next.js 16 App Router for modern React patterns
2. **TypeScript:** Full type safety throughout the application
3. **Tailwind CSS:** Utility-first styling for rapid development
4. **Component-based:** Modular React components for maintainability
5. **Polish Language:** Primary language is Polish for target market

## Dependencies

### Production
- next: 16.0.1
- react: 19.2.0
- react-dom: 19.2.0
- tailwind: ^4.0.0

### Development
- @tailwindcss/postcss: ^4
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- eslint: ^9
- eslint-config-next: 16.0.1
- tailwindcss: ^4
- typescript: ^5

## Workflow Integration

This project uses the BMAD workflow system for:
- Development workflow management
- Sprint planning and tracking
- Story development
- Code reviews
- Documentation

Workflow artifacts are stored in `docs/workflows/`.

## Notes

- Gallery component is ready but commented out in the main page
- Contact section exists but may need form implementation
- All components are client-side ("use client") where needed
- Custom CSS classes suggest a design system in development

