---
project_name: 'chod'
user_name: 'Damian'
date: '2025-12-14T02:16:03Z'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'naming_conventions', 'code_organization', 'error_handling', 'accessibility', 'seo']
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

**CRITICAL: Use exact versions as specified - do not upgrade without explicit approval**

### Core Framework
- **Next.js:** 16.0.1 (App Router) - Server Components by default
- **React:** 19.2.0 - Latest stable with Server Components support
- **TypeScript:** 5.x (strict mode enabled)
- **Tailwind CSS:** 4.0.0 - Utility-first styling

### Key Dependencies
- **@emailjs/browser:** ^4.4.1 - Client-side email sending
- **resend:** ^6.6.0 - Server-side email (future use)

### Build & Development
- **ESLint:** ^9 with eslint-config-next 16.0.1
- **PostCSS:** @tailwindcss/postcss ^4
- **Node Types:** @types/node ^20, @types/react ^19

**⚠️ IMPORTANT:** All versions are locked. Do not suggest upgrades without user approval.

---

## Critical Implementation Rules

### TypeScript Configuration

**Strict Mode Requirements:**
- `strict: true` is enabled - all code must be properly typed
- No `any` types without explicit justification
- Use proper type inference where possible
- Path aliases: `@/*` maps to `./*` (use `@/components`, not `../components`)

**Module Resolution:**
- `moduleResolution: "bundler"` - Next.js specific
- `jsx: "react-jsx"` - Use new JSX transform (no React import needed for JSX)
- ES2017 target - ensure compatibility

**Import Patterns:**
```typescript
// ✅ CORRECT
import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/layout/Navigations";

// ❌ WRONG
import React from "react"; // Not needed with react-jsx
import Navigation from "../components/Navigations"; // Use @ alias
```

### Next.js App Router Rules

**Server vs Client Components:**
- **Default:** Server Components (no "use client" directive)
- **Client Components:** Only when needed for:
  - useState, useEffect, event handlers
  - Browser APIs (window, document)
  - Third-party libraries requiring client-side (EmailJS)
  - Interactive features (forms, animations)

**Component Structure:**
```typescript
// ✅ Server Component (default)
export default function About() {
  return <section>...</section>;
}

// ✅ Client Component (when needed)
"use client";
export default function Contact() {
  const [state, setState] = useState();
  // ...
}
```

**Metadata API:**
- Use `export const metadata: Metadata` in layout.tsx and page.tsx
- Do NOT use `<head>` tags manually (except for structured data JSON-LD)
- Metadata is automatically handled by Next.js

**File Structure:**
- `app/layout.tsx` - Root layout (Server Component)
- `app/page.tsx` - Home page (Server Component by default)
- `app/privacy/page.tsx` - Route pages
- `components/` - Reusable components (specify "use client" when needed)

### React 19 Patterns

**Hooks Usage:**
- Use functional components only
- Hooks only in Client Components
- Proper dependency arrays in useEffect
- Cleanup functions for subscriptions/timeouts

**State Management:**
- `useState` for local component state
- Object state for complex forms: `useState<FormData>({ name: '', email: '' })`
- Boolean state with `is`/`has` prefix: `isLoading`, `hasError`
- State setters with `set` prefix: `setFormData`, `setIsLoading`

**Event Handlers:**
- Always use `handle` prefix: `handleSubmit`, `handleChange`, `handleClick`
- Proper TypeScript typing: `(e: React.FormEvent) => void`
- Prevent default in form handlers: `e.preventDefault()`

### Tailwind CSS 4.0 Rules

**Utility Classes:**
- Use Tailwind utilities for all styling
- Custom classes only in `globals.css` for reusable patterns
- Responsive: `md:`, `lg:`, `xl:` prefixes
- Dark mode: Not implemented (do not add)

**Custom CSS:**
- Only in `app/globals.css`
- Use for: section-title, service-card, cta-button patterns
- Do NOT create component-specific CSS files

**Color Palette:**
- Primary: Blue shades (blue-900, blue-800, blue-700)
- Accent: Orange shades (orange-500, orange-400)
- Use gradient: `bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900`

### EmailJS Integration Rules

**Client-Side Only:**
- EmailJS runs ONLY in Client Components
- Initialize in `useEffect`: `emailjs.init(publicKey)`
- Environment variables: `NEXT_PUBLIC_EMAILJS_*` (must have NEXT_PUBLIC prefix)

**Error Handling:**
```typescript
// ✅ CORRECT Pattern
try {
  const result = await emailjs.send(serviceId, templateId, templateParams);
  if (result.status === 200 || result.text === "OK") {
    // Success
  } else {
    throw new Error(`EmailJS returned status: ${result.status}`);
  }
} catch (err: any) {
  // Handle different error formats
  const errorMessage = err?.text || err?.message || "Default error";
}
```

**Template Parameters:**
- Match template variable names exactly (name, email, message, phone)
- Use optional chaining for optional fields: `phone: formData.phone || ""`

### Animation Rules (CSS Transitions Only)

**Pattern:**
- Use CSS transitions for all animations
- No JavaScript animation libraries
- Hardware-accelerated CSS transforms for smooth performance

**Usage Pattern:**
```typescript
// ✅ CORRECT - CSS transitions
<div className="transition-all duration-300 hover:scale-105 hover:-translate-y-2">
  Content
</div>

// ❌ WRONG - JavaScript animations
// animate(element, { ... })
```

**Important:**
- Use Tailwind transition utilities
- Keep animations subtle and performant
- Prefer `hover:` and `focus:` states for interactions

---

## Naming Conventions

**CRITICAL: Follow these exactly to maintain consistency**

### Component Naming
- **Files:** PascalCase (`Hero.tsx`, `ContactForm.tsx`)
- **Exports:** Match filename exactly (`export default function Hero()`)
- **❌ NEVER:** `hero.tsx` or `export default function hero()`

### Function & Variable Naming
- **Functions:** camelCase (`handleSubmit`, `validateEmail`)
- **Event Handlers:** `handle` prefix (`handleSubmit`, `handleChange`)
- **Boolean Variables:** `is`/`has` prefix (`isLoading`, `hasError`)
- **State Setters:** `set` prefix (`setFormData`, `setIsLoading`)

### File Organization
- **Components:** `components/layout/`, `components/sections/`, `components/ui/`
- **Utilities:** `lib/` directory (`lib/emailjs.ts`, `lib/validation.ts`)
- **Types:** `types/index.ts` or `types/Contact.ts`
- **Constants:** `lib/constants.ts` with UPPER_SNAKE_CASE

### Type Naming
- **Interfaces:**** PascalCase (`ContactFormData`, `GalleryImage`)
- **Types:** PascalCase (`FormState`, `ImageSize`)

---

## Code Organization

### Project Structure (MANDATORY)
```
chod/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Server Component)
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles + custom Tailwind classes
│   └── privacy/
│       └── page.tsx       # Privacy policy (GDPR)
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navigations.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Testimonials.tsx (to be created)
│   └── ui/                # Reusable UI components
│       ├── ErrorBoundary.tsx
│       └── StructuredData.tsx (to be created)
├── lib/                   # Utilities
│   ├── emailjs.ts
│   ├── validation.ts
│   └── constants.ts
├── types/                 # TypeScript types
│   └── index.ts
└── public/               # Static assets
```

**Component Placement Rules:**
- Layout components → `components/layout/`
- Page sections → `components/sections/`
- Reusable UI → `components/ui/`
- Utilities → `lib/`
- Types → `types/`

**Import Path Rules:**
- Always use `@/` alias: `import Navigation from "@/components/layout/Navigations"`
- Never use relative paths: `../components/Navigations` ❌

---

## Error Handling Patterns

### React Error Boundaries
- Use `ErrorBoundary.tsx` component for React error catching
- Wrap major sections, not individual components
- Provide fallback UI with user-friendly messages

### Async Error Handling
```typescript
// ✅ CORRECT Pattern
try {
  setIsLoading(true);
  const result = await asyncOperation();
  // Handle success
} catch (err: any) {
  // Handle different error formats
  const errorMessage = err?.text || err?.message || "Default error message";
  setError(errorMessage);
} finally {
  setIsLoading(false);
}
```

### User-Friendly Messages
- Polish language: "Wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie."
- Never expose technical error details to users
- Log technical details to console for debugging

### Form Validation Errors
- Field-specific errors: `{ message: string, field?: string }`
- Clear validation messages in Polish
- Clear errors when user starts typing: `if (error) setError(null)`

---

## Accessibility Requirements (WCAG 2.1 Level AA)

**CRITICAL: All components must be accessible**

### ARIA Labels
- All interactive elements must have ARIA labels
- Form inputs: `aria-label` or `aria-labelledby`
- Buttons: Descriptive text or `aria-label`
- Navigation: `aria-label="Main navigation"`

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Focus indicators visible (Tailwind `focus:` utilities)
- Tab order logical
- Skip to content link required

### Semantic HTML
- Use proper HTML5 semantic elements: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Headings hierarchy: h1 → h2 → h3 (no skipping levels)
- Form labels: Always use `<label>` with `htmlFor` attribute

### Color Contrast
- Text contrast: Minimum 4.5:1 for normal text, 3:1 for large text
- Interactive elements: Clear focus states
- Do not rely on color alone to convey information

### Screen Reader Support
- Alt text for all images: Descriptive, not "image" or "photo"
- Decorative images: `alt=""` (empty)
- Form errors: `aria-live="polite"` for dynamic content

---

## SEO Requirements

### Metadata API
- Use `export const metadata: Metadata` in layout.tsx
- Include: title, description, keywords, authors, openGraph, twitter
- Language: Polish (`locale: "pl_PL"`)

### Structured Data (JSON-LD)
- Use `StructuredData.tsx` component for schema.org markup
- LocalBusiness schema for business information
- Include: name, description, url, telephone, email, address, serviceType

### Open Graph & Twitter Cards
- Complete OG tags: title, description, url, siteName, locale, type
- Twitter card: summary_large_image
- Image URLs: Use absolute URLs (https://chod.pl/...)

### Robots & Sitemap
- `robots: { index: true, follow: true }`
- GoogleBot specific settings: max-video-preview, max-image-preview, max-snippet
- Canonical URLs: Use `alternates.canonical`

---

## Performance Rules

### Image Optimization
- Always use `next/image` component, never `<img>` tag
- Provide width and height or use `fill` with container
- Use appropriate `priority` for above-fold images
- Lazy load below-fold images (default)

### Code Splitting
- Next.js handles automatic route-based code splitting
- Use dynamic imports for heavy components: `const HeavyComponent = dynamic(() => import('./HeavyComponent'))`
- Client Components are automatically code-split

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Font Optimization
- Use `next/font/google` for Google Fonts
- Montserrat font: `const montserrat = Montserrat({ subsets: ["latin"] })`
- Apply via className: `className={montserrat.className}`

---

## GDPR/RODO Compliance

### Privacy Policy
- Required page: `app/privacy/page.tsx`
- Must include: Data collection, processing, user rights, contact information

### Form Data Handling
- EmailJS: Client-side only, no server storage
- User consent: Implicit by form submission
- Data retention: As per EmailJS service terms

### Cookie Policy
- Currently no cookies implemented
- If adding cookies: Must implement consent banner

---

## Development Workflow

### Environment Variables
- Client-side: Must have `NEXT_PUBLIC_` prefix
- Server-side: No prefix (not implemented yet)
- File: `.env.local` (gitignored)

### Git Workflow
- Branch naming: Not specified (use standard conventions)
- Commit messages: Descriptive, in Polish or English
- PR requirements: Not specified

### Testing
- Test infrastructure: Not yet implemented (Phase 2)
- Manual testing required for now
- Focus on: Functionality, accessibility, responsive design

---

## Anti-Patterns to Avoid

**❌ NEVER:**
1. Use `<img>` instead of `next/image`
2. Create component-specific CSS files (use Tailwind + globals.css)
3. Use relative imports (`../components`) - use `@/` alias
4. Add "use client" to Server Components unnecessarily
5. Use `any` type without justification
6. Skip TypeScript types for props/state
7. Forget ARIA labels on interactive elements
8. Use inline styles (use Tailwind classes)
9. Hardcode URLs - use environment variables or constants
10. Expose technical error messages to users

**✅ ALWAYS:**
1. Use Server Components by default
2. Add "use client" only when needed
3. Use TypeScript strict typing
4. Follow naming conventions exactly
5. Implement accessibility features
6. Use Tailwind utilities for styling
7. Handle errors gracefully with user-friendly messages
8. Use `@/` alias for imports
9. Follow project structure (layout/, sections/, ui/)
10. Test on multiple screen sizes

---

## Quick Reference Checklist

Before submitting code, verify:

- [ ] Component is in correct directory (layout/, sections/, ui/)
- [ ] "use client" only if needed (useState, useEffect, event handlers)
- [ ] All imports use `@/` alias
- [ ] TypeScript types defined (no `any` without reason)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Error handling implemented (try-catch for async)
- [ ] User-friendly error messages (Polish)
- [ ] Images use `next/image` component
- [ ] Tailwind classes used (no inline styles)
- [ ] Naming conventions followed (PascalCase components, camelCase functions)
- [ ] Event handlers use `handle` prefix
- [ ] Boolean state uses `is`/`has` prefix

---

**Last Updated:** 2025-12-14T02:16:03Z
**Maintained By:** AI Agents implementing code for chod project
**Reference Documents:** `docs/architecture.md`, `docs/prd.md`

