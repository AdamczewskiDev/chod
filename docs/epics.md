---
stepsCompleted: [1, 2, 3, 4]
inputDocuments: 
  - 'docs/prd.md'
  - 'docs/architecture.md'
project_name: 'chod'
user_name: 'Damian'
date: '2025-12-14T02:16:03Z'
totalEpics: 7
totalStories: 26
status: 'complete'
validationStatus: 'passed'
---

# chod - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for chod, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Users can view the Hero Section with clear messaging about the company's event services and value proposition.

FR2: Users can view the "About Us" section with company description, experience, key values, and statistics.

FR3: Users can view the "Services" section with visual cards displaying Sound, Lighting, and Multimedia services with descriptions.

FR4: Users can view the Footer with contact information, quick links, and navigation options.

FR5: Users can navigate between different sections of the website using the main navigation menu.

FR6: Users can access the website on mobile devices with responsive design that adapts to different screen sizes.

FR7: Users can browse a high-quality portfolio gallery showcasing diverse event realizations (conferences, weddings, concerts, corporate events).

FR8: Users can view individual images in the gallery using a lightbox that displays images in full size.

FR9: Users can see portfolio images with proper aspect ratios and optimized loading (lazy loading for images outside viewport).

FR10: Users can view portfolio images organized in a masonry layout for optimal visual presentation.

FR11: Users can access a contact form from the Hero Section with the message "Get a quote in 2 minutes".

FR12: Users can fill out a simplified contact form with required fields (email, message) and optional fields (name, phone).

FR13: Users can submit the contact form and receive automatic confirmation that their inquiry was received.

FR14: Users can see a visible phone number as an alternative contact method.

FR15: Users can contact the company via email using the email address displayed in the contact section.

FR16: The system can send contact form submissions via EmailJS integration to the company's email address.

FR17: The system can provide automatic confirmation to users after form submission.

FR18: Users can view testimonials section with customer reviews and ratings (5/5 stars) displayed at the beginning of the page.

FR19: Users can see testimonials from different customer types (B2B corporate organizers, B2C private organizers, B2B2C event agencies).

FR20: Users can view social proof elements (customer logos, if available) to build trust.

FR21: Users can navigate the website using a responsive navigation menu that adapts to mobile devices (hamburger menu).

FR22: Users can access different sections of the website through multiple entry points (Hero, Services, Gallery, About, Contact).

FR23: Users can scroll through the website and access all sections in a logical flow.

FR24: Users can use keyboard navigation to access all interactive elements on the website.

FR25: The system can provide proper meta tags (title, description, keywords) for search engine optimization.

FR26: The system can provide structured data (JSON-LD) with LocalBusiness schema including company name, address, phone, and email.

FR27: The system can provide Open Graph metadata for social media sharing.

FR28: The system can provide Twitter Card metadata for Twitter sharing.

FR29: The system can generate SEO-friendly URLs for all pages.

FR30: The system can provide proper heading hierarchy (h1, h2, h3) for semantic HTML structure.

FR31: The system can provide alt text for all images in the gallery for accessibility and SEO.

FR32: Users with screen readers can access all content and interactive elements through proper ARIA labels and semantic HTML.

FR33: Users can navigate the website using only keyboard input without mouse interaction.

FR34: Users can see clear focus indicators for all interactive elements during keyboard navigation.

FR35: Users can access a "Skip to Content" link to bypass navigation and go directly to main content.

FR36: The system can provide proper language attribute (pl) for screen readers and search engines.

FR37: Users can see validation errors if required form fields are not filled correctly.

FR38: Users can see clear error messages if form submission fails.

FR39: Users can see success confirmation when form submission is successful.

FR40: The system can validate email format in the contact form before submission.

FR41: The system can optimize images automatically (WebP format, responsive srcset, lazy loading).

FR42: The system can provide fast page loading with code splitting for optimal performance.

FR43: The system can provide font optimization (Montserrat via next/font) to prevent layout shift.

FR44: Users can use an online quote calculator to estimate event costs based on event type, number of guests, location, date, and selected services. (Post-MVP Phase 2)

FR45: Users can view service packages (Basic, Standard, Premium) with pricing information. (Post-MVP Phase 2)

FR46: Users can view case studies with context (event type, challenges, solution, results). (Post-MVP Phase 2)

FR47: Users can view video testimonials in addition to text testimonials. (Post-MVP Phase 2)

FR48: Users can click "Ask about similar event" button on gallery images to open a pre-filled contact form with event type. (Post-MVP Phase 2)

FR49: Users can browse a blog with guides, case studies, and industry tips. (Post-MVP Phase 3)

FR50: Users can use a "Request Basket" feature to add multiple services to their inquiry before submitting. (Post-MVP Phase 3)

FR51: Users can initiate online chat for quick contact and support. (Post-MVP Phase 3)

FR52: Users can view interactive portfolio with filtering and categorization options. (Post-MVP Phase 3)

FR53: Users can view virtual tour (360° photos) of event realizations. (Post-MVP Phase 3)

### NonFunctional Requirements

NFR1: Page load performance must meet Core Web Vitals targets: LCP (Largest Contentful Paint) <2.5 seconds, FID (First Input Delay) <100 milliseconds, CLS (Cumulative Layout Shift) <0.1.

NFR2: First Contentful Paint (FCP) must complete within 1.8 seconds on 3G connection.

NFR3: Time to Interactive (TTI) must be <3.5 seconds on 3G connection.

NFR4: Total page load time must be <3 seconds on 3G connection.

NFR5: Image loading must use lazy loading for images outside viewport to prevent blocking initial page render.

NFR6: Form submission response time must be <2 seconds from user click to confirmation message display.

NFR7: All data transmission must use HTTPS encryption (TLS 1.2 or higher).

NFR8: Personal data collected through contact form must comply with GDPR/RODO regulations: user consent for data processing, right to access/rectify/delete personal data, data minimization, secure storage and transmission.

NFR9: Contact form submissions must be validated on both client-side and server-side (EmailJS) to prevent malicious input.

NFR10: All user input must be sanitized to prevent XSS (Cross-Site Scripting) attacks.

NFR11: Environment variables (EmailJS credentials) must be stored securely and not exposed in client-side code.

NFR12: Website must comply with WCAG 2.1 Level AA accessibility standards.

NFR13: All interactive elements must be accessible via keyboard navigation without requiring mouse interaction.

NFR14: All images must have descriptive alt text for screen reader users.

NFR15: Color contrast ratio must meet WCAG AA standards: normal text minimum 4.5:1, large text minimum 3:1, UI components minimum 3:1.

NFR16: Focus indicators must be visible for all interactive elements during keyboard navigation.

NFR17: Website must provide "Skip to Content" link for screen reader users to bypass navigation.

NFR18: All form fields must have associated labels for screen reader accessibility.

NFR19: Error messages in forms must be clearly announced to screen reader users.

NFR20: EmailJS integration must have 99% reliability for contact form submissions.

NFR21: EmailJS integration must handle errors gracefully with user-friendly error messages if submission fails.

NFR22: EmailJS integration must provide automatic confirmation to users within 2 seconds of form submission.

NFR23: System must have fallback mechanism (visible phone number, direct email) if EmailJS integration fails.

NFR24: Website uptime must be >99.5% (approximately 3.6 hours downtime per month maximum).

NFR25: Contact form must have 100% reliability - all valid form submissions must be successfully delivered to company email.

NFR26: System must have zero critical errors that prevent core functionality (contact form, navigation, content display).

NFR27: System must handle network failures gracefully with appropriate error messages and retry mechanisms.

NFR28: Website must function correctly on modern browsers: Chrome 120+, Firefox 121+, Safari 17+, Edge 120+, iOS Safari 17+, Chrome Mobile 120+, Samsung Internet 23+.

NFR29: Website must provide graceful degradation for unsupported browser features (e.g., CSS animations fallback if JavaScript disabled).

NFR30: Website must be responsive and functional on screen sizes from 320px (mobile) to 1920px+ (large desktop).

NFR31: Website must pass Google Mobile-Friendly Test for mobile search ranking.

NFR32: All pages must have unique, descriptive meta titles (50-60 characters) and meta descriptions (150-160 characters).

NFR33: Website must provide structured data (JSON-LD) with LocalBusiness schema including company name, address, phone, and email.

NFR34: Website must provide Open Graph metadata for social media sharing.

NFR35: Website must provide Twitter Card metadata for Twitter sharing.

NFR36: Website must have proper heading hierarchy (h1, h2, h3) for semantic HTML structure.

NFR37: Website must display privacy policy and cookie consent (if cookies are used) in compliance with GDPR/RODO.

NFR38: Personal data collected through contact form must be processed only for the purpose of responding to inquiries.

NFR39: Personal data must not be shared with third parties without explicit user consent.

NFR40: System must allow users to request deletion of their personal data.

### Additional Requirements

**From Architecture Document:**

- Next.js 16.0.1 App Router with Server Components (default) and Client Components (when needed for interactivity)
- React 19.2.0 for UI components
- TypeScript 5 with strict mode enabled
- Tailwind CSS 4.0.0 for utility-first styling
- EmailJS integration (client-side only) for contact form submissions
- Montserrat font via next/font for typography
- Vercel deployment (recommended) with automatic CDN distribution
- Project structure: app/ (App Router), components/layout/, components/sections/, components/ui/, lib/ (utilities), types/
- Component organization: Layout components in layout/, Page sections in sections/, Reusable UI in ui/
- Import paths: Use @/ alias (e.g., @/components/layout/Navigations)
- Naming conventions: PascalCase for components, camelCase for functions, handle prefix for event handlers
- Error handling: Error Boundaries for React errors, try-catch for async operations, user-friendly error messages
- Accessibility: WCAG 2.1 Level AA compliance, ARIA labels, keyboard navigation, semantic HTML
- SEO: Metadata API in layout.tsx, StructuredData component for JSON-LD, Open Graph and Twitter Card metadata
- Performance: Next.js Image component for all images, automatic code splitting, font optimization
- Privacy: Privacy policy page (app/privacy/page.tsx) for GDPR compliance

**Component Structure Requirements:**
- Missing components to create: Testimonials.tsx (sections/), StructuredData.tsx (ui/), ErrorBoundary.tsx (ui/)
- Missing utilities: validation.ts (lib/), constants.ts (lib/)
- Component reorganization: Move existing components to proper structure (layout/, sections/, ui/)

**Integration Requirements:**
- EmailJS: Client-side initialization in useEffect, environment variables (NEXT_PUBLIC_EMAILJS_*), error handling with fallback
- Animation: anime.js v4 with animate() function (not anime()), IntersectionObserver for scroll-triggered animations

**Infrastructure Requirements:**
- Vercel deployment with automatic git push → deploy
- Environment variables stored in Vercel dashboard
- Build output: .next/ directory

### FR Coverage Map

FR1: Epic 1 - Hero Section (part of Website Foundation)
FR2: Epic 2 - About Us section
FR3: Epic 2 - Services section
FR4: Epic 1 - Footer
FR5: Epic 1 - Main navigation menu
FR6: Epic 1 - Responsive design
FR7: Epic 3 - Portfolio gallery browsing
FR8: Epic 3 - Lightbox for individual images
FR9: Epic 3 - Optimized image loading (lazy loading, aspect ratios)
FR10: Epic 3 - Masonry layout
FR11: Epic 5 - Contact form in Hero Section
FR12: Epic 5 - Contact form fields (required/optional)
FR13: Epic 5 - Automatic confirmation after submission
FR14: Epic 5 - Visible phone number
FR15: Epic 5 - Email address display
FR16: Epic 5 - EmailJS integration
FR17: Epic 5 - Automatic confirmation system
FR18: Epic 4 - Testimonials section with ratings
FR19: Epic 4 - Testimonials from different customer types
FR20: Epic 4 - Social proof elements
FR21: Epic 1 - Responsive navigation menu
FR22: Epic 1 - Multiple entry points
FR23: Epic 1 - Scroll navigation
FR24: Epic 1 - Keyboard navigation
FR25: Epic 6 - Meta tags
FR26: Epic 6 - Structured data (JSON-LD)
FR27: Epic 6 - Open Graph metadata
FR28: Epic 6 - Twitter Card metadata
FR29: Epic 6 - SEO-friendly URLs
FR30: Epic 6 - Heading hierarchy
FR31: Epic 3 - Alt text for gallery images
FR32: Epic 1 - Screen reader accessibility
FR33: Epic 1 - Keyboard-only navigation
FR34: Epic 1 - Focus indicators
FR35: Epic 1 - Skip to content link
FR36: Epic 1 - Language attribute
FR37: Epic 5 - Form validation errors
FR38: Epic 5 - Error messages for failed submission
FR39: Epic 5 - Success confirmation
FR40: Epic 5 - Email format validation
FR41: Epic 7 - Image optimization
FR42: Epic 7 - Code splitting
FR43: Epic 7 - Font optimization
FR44-FR53: Post-MVP (Phase 2 & 3) - Out of scope for MVP

## Epic List

### Epic 1: Website Foundation & Navigation
Users can access and navigate a responsive, accessible website that works seamlessly across all devices and provides intuitive navigation to all sections.

**FRs covered:** FR1, FR4, FR5, FR6, FR21, FR22, FR23, FR24, FR32, FR33, FR34, FR35, FR36

**User Outcome:** Users can access the website on any device, navigate between sections easily, and use keyboard navigation to access all content.

**Implementation Notes:** 
- Responsive design (mobile-first approach)
- Navigation menu (desktop + mobile hamburger)
- Footer with contact info and quick links
- Keyboard navigation support
- Skip to content link
- Semantic HTML structure
- Language attribute (pl)

### Epic 2: Company Presentation & Content
Users can learn about the company, its services, and value proposition through clear, professional content presentation.

**FRs covered:** FR2, FR3

**User Outcome:** Users can understand what the company does, what services it offers, and why they should choose this company.

**Implementation Notes:**
- Hero Section with clear messaging and value proposition
- About Us section with company description, experience, values, statistics
- Services section with visual cards (Sound, Lighting, Multimedia)
- Server Components for static content (performance)

### Epic 3: Portfolio Gallery Showcase
Users can browse a high-quality portfolio gallery showcasing diverse event realizations to verify the company's quality and professionalism.

**FRs covered:** FR7, FR8, FR9, FR10, FR31

**User Outcome:** Users can view high-quality images of past events, browse them in a lightbox, and see the company's work quality.

**Implementation Notes:**
- Masonry layout for optimal visual presentation
- Lightbox for full-size image viewing
- Lazy loading for images outside viewport
- Optimized images (WebP format, responsive srcset)
- Alt text for all images (accessibility + SEO)
- Client Component for interactivity

### Epic 4: Trust Building & Social Proof
Users can see testimonials and social proof elements that build trust and demonstrate the company's reliability and quality.

**FRs covered:** FR18, FR19, FR20

**User Outcome:** Users can see customer reviews, ratings, and social proof that validate the company's professionalism and quality.

**Implementation Notes:**
- Testimonials section with customer reviews and 5/5 ratings
- Different customer types (B2B, B2C, B2B2C)
- Social proof elements (customer logos if available)
- Displayed at the beginning of the page (innovative approach)
- Server Component for static content

### Epic 5: Contact & Inquiry System
Users can easily contact the company through a simplified contact form with automatic confirmation and alternative contact methods.

**FRs covered:** FR11, FR12, FR13, FR14, FR15, FR16, FR17, FR37, FR38, FR39, FR40

**User Outcome:** Users can submit inquiries through a simple form, receive automatic confirmation, and have alternative contact methods available.

**Implementation Notes:**
- Contact form in Hero Section ("Get a quote in 2 minutes")
- Simplified form (required: email, message; optional: name, phone)
- EmailJS integration (client-side)
- Automatic confirmation after submission
- Alternative contact methods (phone, email visible)
- Form validation (client-side + EmailJS)
- Error handling with user-friendly messages
- Success confirmation
- Client Component for interactivity

### Epic 6: SEO & Discoverability
The website is optimized for search engines and social media sharing, enabling users to find the company online.

**FRs covered:** FR25, FR26, FR27, FR28, FR29, FR30

**User Outcome:** Users can find the website through search engines and share it on social media with proper previews.

**Implementation Notes:**
- Meta tags (title, description, keywords) via Next.js Metadata API
- Structured data (JSON-LD) with LocalBusiness schema
- Open Graph metadata for social media
- Twitter Card metadata
- SEO-friendly URLs
- Proper heading hierarchy (h1, h2, h3)
- Server-side generation for optimal SEO

### Epic 7: Performance & Optimization
The website loads quickly and performs optimally, providing a smooth user experience.

**FRs covered:** FR41, FR42, FR43

**User Outcome:** Users experience fast page loading, smooth interactions, and optimal performance across all devices.

**Implementation Notes:**
- Image optimization (WebP format, responsive srcset, lazy loading)
- Code splitting (automatic with Next.js)
- Font optimization (Montserrat via next/font)
- Core Web Vitals compliance (LCP <2.5s, FID <100ms, CLS <0.1)
- Static generation for all pages

## Epic 1: Website Foundation & Navigation

Users can access and navigate a responsive, accessible website that works seamlessly across all devices and provides intuitive navigation to all sections.

### Story 1.1: Responsive Layout & Mobile Navigation

As a website visitor,
I want to access the website on any device (mobile, tablet, desktop),
So that I can view and navigate the website regardless of my device.

**Acceptance Criteria:**

**Given** I am accessing the website on a mobile device (320px - 639px)
**When** I view the website
**Then** The layout adapts to mobile screen size with single column layout
**And** A hamburger menu is displayed for navigation
**And** All content is readable and accessible without horizontal scrolling

**Given** I am accessing the website on a tablet (640px - 1023px)
**When** I view the website
**Then** The layout adapts to tablet screen size with 2-column layout where appropriate
**And** Navigation menu is expanded or accessible
**And** Content is optimized for tablet viewing

**Given** I am accessing the website on a desktop (1024px+)
**When** I view the website
**Then** The layout uses multi-column layout for optimal spacing
**And** Full navigation bar is displayed
**And** Content is optimized for desktop viewing

**Given** I resize my browser window
**When** The window size changes
**Then** The layout adapts smoothly without breaking
**And** All interactive elements remain accessible

**References:** FR6, FR21, NFR30

### Story 1.2: Main Navigation Menu

As a website visitor,
I want to navigate between different sections of the website using a navigation menu,
So that I can quickly access the information I need.

**Acceptance Criteria:**

**Given** I am on any page of the website
**When** I view the navigation menu
**Then** I can see links to: Home, Services, Gallery, About, Contact
**And** The navigation menu is visible and accessible

**Given** I am on a mobile device
**When** I click/tap the hamburger menu icon
**Then** A mobile navigation menu opens
**And** I can see all navigation links
**And** I can close the menu by clicking/tapping again or outside the menu

**Given** I am on a desktop device
**When** I view the navigation menu
**Then** All navigation links are visible in a horizontal menu bar
**And** The menu is sticky (remains visible when scrolling)

**Given** I click on a navigation link
**When** The link is clicked
**Then** I am navigated to the corresponding section or page
**And** The navigation state reflects the current section

**References:** FR5, FR21, FR22

### Story 1.3: Footer with Contact Information

As a website visitor,
I want to see contact information and quick links in the footer,
So that I can easily find ways to contact the company or navigate to important sections.

**Acceptance Criteria:**

**Given** I am on any page of the website
**When** I scroll to the bottom
**Then** I can see a footer section
**And** The footer contains: contact email, phone number, quick links (Services, Gallery, About, Contact)

**Given** I click on a quick link in the footer
**When** The link is clicked
**Then** I am navigated to the corresponding section
**And** The page scrolls smoothly to the section

**Given** I view the footer on mobile
**When** The footer is displayed
**Then** All information is readable and links are touch-friendly (min 44x44px)
**And** The footer layout adapts to mobile screen size

**References:** FR4, FR14, FR15

### Story 1.4: Keyboard Navigation Support

As a keyboard user,
I want to navigate the website using only keyboard input,
So that I can access all content and interactive elements without using a mouse.

**Acceptance Criteria:**

**Given** I am using keyboard navigation (Tab key)
**When** I press Tab repeatedly
**Then** Focus moves through all interactive elements in logical order
**And** Each focused element has a visible focus indicator
**And** I can access: navigation links, buttons, form fields, gallery images

**Given** I am navigating with keyboard
**When** I press Enter or Space on a focused link or button
**Then** The link is activated or button is clicked
**And** The expected action occurs

**Given** I am using keyboard navigation
**When** I navigate through the website
**Then** I do not encounter keyboard traps (elements that prevent further navigation)
**And** I can navigate away from any element using Tab or Shift+Tab

**References:** FR24, FR33, NFR13, NFR16

### Story 1.5: Skip to Content Link

As a screen reader user or keyboard user,
I want to skip the navigation and go directly to main content,
So that I can access the main content more efficiently.

**Acceptance Criteria:**

**Given** I am using keyboard navigation or a screen reader
**When** I first load the page or press Tab
**Then** I see a "Skip to Content" link as the first focusable element
**And** The link is visible when focused

**Given** I activate the "Skip to Content" link
**When** The link is clicked or activated
**Then** Focus moves directly to the main content area
**And** I bypass the navigation menu
**And** I can start reading/interacting with main content immediately

**References:** FR35, NFR17

### Story 1.6: Semantic HTML & Language Attribute

As a screen reader user or search engine,
I want the website to use semantic HTML and proper language attributes,
So that content is properly understood and accessible.

**Acceptance Criteria:**

**Given** I am a screen reader or search engine
**When** I parse the HTML structure
**Then** The website uses semantic HTML5 elements (header, nav, main, section, article, footer)
**And** The html element has lang="pl" attribute
**And** Heading hierarchy is logical (h1 → h2 → h3, no skipping levels)

**Given** I view the page source
**When** I inspect the HTML
**Then** All sections use appropriate semantic elements
**And** Navigation uses <nav> element
**And** Main content uses <main> element
**And** Footer uses <footer> element

**References:** FR30, FR36, NFR12, NFR36

## Epic 2: Company Presentation & Content

Users can learn about the company, its services, and value proposition through clear, professional content presentation.

### Story 2.1: Hero Section with Value Proposition

As a website visitor,
I want to see a clear Hero Section with the company's value proposition and messaging,
So that I can quickly understand what the company does and why I should choose them.

**Acceptance Criteria:**

**Given** I visit the homepage
**When** I first load the page
**Then** I see a Hero Section at the top of the page
**And** The Hero Section displays: clear messaging about event services, value proposition ("Profesjonalna realizacja imprez - najszybsza i najbardziej przejrzysta w regionie")
**And** The Hero Section is visually prominent and engaging

**Given** I view the Hero Section
**When** I read the content
**Then** The messaging is clear and compelling
**And** I understand the company's main offering (event services: sound, lighting, multimedia)
**And** I see a call-to-action (CTA) to contact the company

**Given** I view the Hero Section on mobile
**When** The section is displayed
**Then** All text is readable and properly sized
**And** The layout adapts to mobile screen size
**And** Images or background elements are optimized for mobile

**References:** FR1, FR11

### Story 2.2: About Us Section

As a website visitor,
I want to learn about the company's background, experience, and values,
So that I can assess their professionalism and trustworthiness.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** I scroll to the About Us section
**Then** I can see: company description, years of experience, key values (3 values), statistics (if available - e.g., number of events, clients)

**Given** I read the About Us section
**When** I view the content
**Then** The description is clear and professional
**And** The experience and statistics build trust
**And** The key values are clearly presented

**Given** I view the About Us section on different devices
**When** The section is displayed
**Then** All content is readable and properly formatted
**And** The layout adapts to screen size
**And** Images (if any) are optimized and properly displayed

**References:** FR2

### Story 2.3: Services Section with Visual Cards

As a website visitor,
I want to see the services offered by the company in an organized, visual way,
So that I can understand what services are available and choose what I need.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** I scroll to the Services section
**Then** I can see visual cards displaying three main services: Sound (Dźwięk), Lighting (Światło), Multimedia
**And** Each service card has: service name, brief description, visual representation (icon or image)

**Given** I view the Services section on desktop
**When** The section is displayed
**Then** Service cards are arranged in a grid layout (3 columns)
**And** Each card is visually distinct and engaging

**Given** I view the Services section on mobile
**When** The section is displayed
**Then** Service cards are stacked vertically (single column)
**And** Each card is touch-friendly and readable

**Given** I interact with a service card
**When** I hover (desktop) or tap (mobile) on a card
**Then** The card provides visual feedback (hover effect, animation)
**And** The interaction is smooth and responsive

**References:** FR3

## Epic 3: Portfolio Gallery Showcase

Users can browse a high-quality portfolio gallery showcasing diverse event realizations to verify the company's quality and professionalism.

### Story 3.1: Portfolio Gallery with Masonry Layout

As a website visitor,
I want to browse a portfolio gallery showcasing diverse event realizations,
So that I can see the quality of the company's work and get inspiration for my event.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** I scroll to the Gallery section
**Then** I can see a portfolio gallery displaying high-quality images of event realizations
**And** Images showcase diverse events: conferences, weddings, concerts, corporate events
**And** Images are organized in a masonry layout for optimal visual presentation

**Given** I view the gallery on desktop
**When** The gallery is displayed
**Then** Images are arranged in a masonry grid (3-4 columns)
**And** Images maintain proper aspect ratios
**And** The layout is visually appealing

**Given** I view the gallery on mobile
**When** The gallery is displayed
**Then** Images are arranged in a single or two-column layout
**And** Images are properly sized for mobile viewing
**And** The layout adapts to screen size

**References:** FR7, FR10

### Story 3.2: Lightbox for Image Viewing

As a website visitor,
I want to view individual gallery images in full size using a lightbox,
So that I can see details of the company's work clearly.

**Acceptance Criteria:**

**Given** I am viewing the portfolio gallery
**When** I click/tap on an image
**Then** A lightbox opens displaying the image in full size
**And** The lightbox overlays the page with a dark background
**And** The image is centered and properly displayed

**Given** I am viewing an image in the lightbox
**When** I want to navigate to other images
**Then** I can see navigation arrows (previous/next) or swipe gestures (mobile)
**And** I can navigate through all gallery images
**And** The current image position is indicated (e.g., "Image 3 of 15")

**Given** I am viewing an image in the lightbox
**When** I want to close the lightbox
**Then** I can click/tap outside the image, press Escape key, or click a close button
**And** The lightbox closes and returns to the gallery view

**Given** I am using keyboard navigation
**When** I open the lightbox
**Then** Focus is trapped within the lightbox
**And** I can navigate with arrow keys
**And** I can close with Escape key

**References:** FR8

### Story 3.3: Optimized Image Loading

As a website visitor,
I want gallery images to load quickly and efficiently,
So that I can browse the gallery without long waiting times.

**Acceptance Criteria:**

**Given** I am viewing the portfolio gallery
**When** Images are loading
**Then** Images use lazy loading (images outside viewport load when scrolled into view)
**And** Images are optimized (WebP format with JPEG fallback)
**And** Images have responsive srcset for different screen sizes

**Given** I am viewing the gallery
**When** I scroll through the gallery
**Then** Images load progressively as they enter the viewport
**And** Placeholder or loading indicator is shown while images load
**And** The page performance remains optimal (no blocking of initial render)

**Given** I view an image
**When** The image is displayed
**Then** The image maintains proper aspect ratio
**And** The image quality is high and clear
**And** The image file size is optimized for web

**References:** FR9, FR41, NFR5

### Story 3.4: Image Alt Text for Accessibility & SEO

As a screen reader user or search engine,
I want gallery images to have descriptive alt text,
So that I can understand what each image shows and the content is discoverable.

**Acceptance Criteria:**

**Given** I am a screen reader user or search engine
**When** I encounter a gallery image
**Then** Each image has descriptive alt text describing the event type and key elements
**And** Alt text is meaningful (not "image" or "photo")
**And** Alt text includes relevant keywords when appropriate

**Given** I view the page source
**When** I inspect gallery images
**Then** All images have alt attributes
**And** Alt text is descriptive and contextually relevant
**And** Decorative images (if any) have empty alt="" attribute

**References:** FR31, NFR14

## Epic 4: Trust Building & Social Proof

Users can see testimonials and social proof elements that build trust and demonstrate the company's reliability and quality.

### Story 4.1: Testimonials Section with Ratings

As a website visitor,
I want to see customer testimonials with ratings displayed at the beginning of the page,
So that I can quickly verify the company's quality and trustworthiness before reading more.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** I first load the page or scroll down
**Then** I can see a Testimonials section displayed early on the page (after Hero, before Services)
**And** Testimonials display customer reviews with 5/5 star ratings
**And** Each testimonial shows: customer name (or company), review text, rating (5/5 stars), event type (if relevant)

**Given** I view the testimonials section
**When** I read the testimonials
**Then** I can see testimonials from different customer types: B2B (corporate organizers), B2C (private organizers), B2B2C (event agencies)
**And** Testimonials are authentic and build trust
**And** The section is visually appealing and easy to read

**Given** I view the testimonials section on mobile
**When** The section is displayed
**Then** Testimonials are stacked vertically or in a carousel
**And** All text is readable
**And** Star ratings are clearly visible

**References:** FR18, FR19

### Story 4.2: Social Proof Elements

As a website visitor,
I want to see social proof elements like customer logos,
So that I can see which companies trust this event company.

**Acceptance Criteria:**

**Given** I am viewing the testimonials or trust section
**When** Customer logos are available
**Then** I can see logos of companies/clients who have worked with the company
**And** Logos are displayed in a professional manner
**And** Logos are properly sized and optimized

**Given** Customer logos are not available
**When** The section is displayed
**Then** The section gracefully handles missing logos
**And** Other trust elements (testimonials, ratings) are still prominently displayed
**And** The section remains visually appealing

**References:** FR20

## Epic 5: Contact & Inquiry System

Users can easily contact the company through a simplified contact form with automatic confirmation and alternative contact methods.

### Story 5.1: Contact Form in Hero Section

As a website visitor,
I want to access a contact form directly from the Hero Section with the message "Get a quote in 2 minutes",
So that I can quickly submit an inquiry without scrolling through the entire page.

**Acceptance Criteria:**

**Given** I am on the homepage
**When** I view the Hero Section
**Then** I can see a contact form or prominent CTA to the contact form
**And** The form/CTA displays the message "Get a quote in 2 minutes" or "Otrzymaj wycenę w 2 minuty"
**And** The form is easily accessible and visible

**Given** I click on the CTA or form in Hero Section
**When** The form opens or scrolls to form
**Then** I can immediately start filling out the form
**And** The form is clearly visible and accessible

**References:** FR11

### Story 5.2: Simplified Contact Form Fields

As a website visitor,
I want to fill out a simplified contact form with minimal required fields,
So that I can quickly submit my inquiry without unnecessary friction.

**Acceptance Criteria:**

**Given** I am filling out the contact form
**When** I view the form
**Then** I can see required fields: email, message
**And** I can see optional fields: name, phone
**And** Required fields are clearly marked (e.g., asterisk or "required" label)

**Given** I am filling out the form
**When** I enter information
**Then** All form fields have proper labels
**And** Form fields are accessible via keyboard navigation
**And** Form fields have appropriate input types (email for email field, tel for phone)

**Given** I view the form on mobile
**When** The form is displayed
**Then** Form fields are touch-friendly (min 44x44px)
**And** Form layout adapts to mobile screen size
**And** Keyboard appears appropriately for each field type

**References:** FR12, NFR18

### Story 5.3: EmailJS Integration & Form Submission

As a website visitor,
I want to submit my contact form and have it sent to the company,
So that the company receives my inquiry and can respond.

**Acceptance Criteria:**

**Given** I have filled out the contact form with valid information
**When** I click the submit button
**Then** The form data is sent via EmailJS integration to the company's email
**And** Form submission happens within 2 seconds
**And** I receive automatic confirmation that my inquiry was received

**Given** EmailJS is properly configured
**When** I submit the form
**Then** The form submission is successful
**And** The company receives an email with: sender email, message, name (if provided), phone (if provided)
**And** EmailJS service has 99% reliability

**Given** I submit the form
**When** The submission is processing
**Then** I see a loading indicator
**And** The submit button is disabled during submission
**And** I cannot submit the form multiple times

**References:** FR13, FR16, FR17, NFR20, NFR22

### Story 5.4: Form Validation & Error Handling

As a website visitor,
I want to see clear validation errors and success messages,
So that I know if my form submission was successful or if I need to correct any errors.

**Acceptance Criteria:**

**Given** I am filling out the contact form
**When** I submit the form with invalid email format
**Then** I see a validation error message: "Please enter a valid email address"
**And** The error message is displayed near the email field
**And** The error message is accessible to screen readers

**Given** I am filling out the contact form
**When** I submit the form with empty required fields
**Then** I see validation error messages for each empty required field
**And** Error messages are clear and specific
**And** Focus moves to the first field with an error

**Given** I am filling out the form
**When** I start typing in a field that had an error
**Then** The error message is cleared
**And** I can continue filling out the form

**Given** I submit the form successfully
**When** The submission is complete
**Then** I see a success message: "Thank you! Your inquiry has been received. We'll respond within 4 hours."
**And** The form is cleared or reset
**And** The success message is clearly visible

**Given** Form submission fails (network error, EmailJS error)
**When** The error occurs
**Then** I see a user-friendly error message: "An error occurred. Please try again or contact us directly at [phone/email]"
**And** The error message includes fallback contact information
**And** I can retry the submission

**References:** FR37, FR38, FR39, FR40, NFR9, NFR21

### Story 5.5: Alternative Contact Methods

As a website visitor,
I want to see alternative contact methods (phone, email) displayed prominently,
So that I can contact the company even if I prefer not to use the form.

**Acceptance Criteria:**

**Given** I am on the website
**When** I view the contact section or footer
**Then** I can see a visible phone number: +48-796-608-988
**And** I can see an email address: chlopakioddzwieku@gmail.com
**And** Phone number and email are clickable (tel: and mailto: links)

**Given** I am on mobile
**When** I click on the phone number
**Then** My phone dialer opens with the number pre-filled
**And** I can call directly

**Given** I click on the email address
**When** The link is activated
**Then** My email client opens with the email address pre-filled
**And** I can compose an email directly

**Given** EmailJS integration fails
**When** I need to contact the company
**Then** Alternative contact methods (phone, email) are clearly visible
**And** I can use these methods as a fallback

**References:** FR14, FR15, NFR23

## Epic 6: SEO & Discoverability

The website is optimized for search engines and social media sharing, enabling users to find the company online.

### Story 6.1: Meta Tags & SEO Metadata

As a search engine or social media platform,
I want to see proper meta tags and SEO metadata,
So that the website can be properly indexed and displayed in search results and social media shares.

**Acceptance Criteria:**

**Given** I am a search engine crawler
**When** I crawl the website
**Then** Each page has unique meta title (50-60 characters) with relevant keywords
**And** Each page has unique meta description (150-160 characters) with CTA
**And** Meta keywords are included (if applicable)
**And** Meta tags are properly formatted

**Given** I view the page source
**When** I inspect the <head> section
**Then** I can see: <title>, <meta name="description">, <meta name="keywords">
**And** All meta tags are properly formatted
**And** Meta tags are generated via Next.js Metadata API

**Given** I share the website on social media
**When** The link is shared
**Then** Open Graph metadata is used for preview
**And** Twitter Card metadata is used for Twitter preview
**And** Preview shows: title, description, image (if available)

**References:** FR25, FR27, FR28, NFR32, NFR34, NFR35

### Story 6.2: Structured Data (JSON-LD)

As a search engine,
I want to see structured data (JSON-LD) with LocalBusiness schema,
So that I can display rich snippets in search results with business information.

**Acceptance Criteria:**

**Given** I am a search engine
**When** I crawl the website
**Then** I can find JSON-LD structured data in the <head> section
**And** The structured data uses LocalBusiness schema
**And** The structured data includes: company name, description, URL, telephone, email, address (country: PL), areaServed (Poland), serviceType (array of services)

**Given** I view the page source
**When** I inspect the structured data
**Then** JSON-LD is properly formatted and valid
**And** All required LocalBusiness fields are present
**And** The structured data is embedded in the page (via StructuredData component)

**Given** Search engines process the structured data
**When** The website appears in search results
**Then** Rich snippets may display business information (phone, address, services)
**And** The information helps users find and contact the company

**References:** FR26, NFR33

### Story 6.3: SEO-Friendly URLs & Heading Hierarchy

As a search engine or user,
I want to see SEO-friendly URLs and proper heading hierarchy,
So that the website is easily discoverable and content structure is clear.

**Acceptance Criteria:**

**Given** I am viewing the website
**When** I check the URL
**Then** URLs are SEO-friendly (readable, with keywords when appropriate)
**And** URLs are clean (no unnecessary parameters)
**And** URLs follow Next.js App Router conventions

**Given** I am viewing page content
**When** I inspect the heading structure
**Then** Each page has one h1 heading (main title)
**And** Heading hierarchy is logical (h1 → h2 → h3, no skipping levels)
**And** Headings are semantic and descriptive

**Given** I am a search engine
**When** I crawl the website
**Then** Heading hierarchy helps me understand content structure
**And** Headings contain relevant keywords
**And** Content is properly organized

**References:** FR29, FR30, NFR36

## Epic 7: Performance & Optimization

The website loads quickly and performs optimally, providing a smooth user experience.

### Story 7.1: Image Optimization

As a website visitor,
I want images to load quickly and be optimized,
So that the website loads fast and I don't wait long for images.

**Acceptance Criteria:**

**Given** I am viewing the website
**When** Images are loading
**Then** Images use WebP format with JPEG fallback for browser compatibility
**And** Images have responsive srcset for different screen sizes
**And** Images are lazy loaded (images outside viewport load when scrolled into view)

**Given** I am viewing the website on mobile
**When** Images are displayed
**Then** Images are served in appropriate sizes for mobile (smaller file sizes)
**And** Images maintain quality while being optimized
**And** Page load time is fast (<3s on 3G)

**Given** I am viewing the website
**When** I check page performance
**Then** Image optimization contributes to Core Web Vitals compliance (LCP <2.5s)
**And** Images don't block initial page render
**And** Lazy loading prevents unnecessary image loading

**References:** FR41, NFR1, NFR5

### Story 7.2: Code Splitting & Fast Loading

As a website visitor,
I want the website to load quickly with optimal code splitting,
So that I can access content without long waiting times.

**Acceptance Criteria:**

**Given** I am visiting the website
**When** The page loads
**Then** Code is automatically split by Next.js (route-based code splitting)
**And** Only necessary JavaScript is loaded for the current page
**And** Initial page load is fast (FCP <1.8s, TTI <3.5s)

**Given** I navigate to different sections
**When** I click navigation links
**Then** Code for new sections loads on demand
**And** Navigation is smooth without full page reloads
**And** Performance remains optimal

**Given** I check page performance metrics
**When** I measure Core Web Vitals
**Then** LCP (Largest Contentful Paint) is <2.5 seconds
**And** FID (First Input Delay) is <100 milliseconds
**And** CLS (Cumulative Layout Shift) is <0.1

**References:** FR42, NFR1, NFR2, NFR3, NFR4

### Story 7.3: Font Optimization

As a website visitor,
I want fonts to load quickly without causing layout shift,
So that the page renders smoothly and text is readable immediately.

**Acceptance Criteria:**

**Given** I am viewing the website
**When** The page loads
**Then** Montserrat font is loaded via next/font for optimization
**And** Font loading doesn't cause layout shift (CLS <0.1)
**And** Text is readable immediately (no FOUT - Flash of Unstyled Text)

**Given** I am viewing the website
**When** Fonts are loading
**Then** Font files are optimized and compressed
**And** Font loading doesn't block page render
**And** Fallback fonts are used until Montserrat loads

**Given** I check page performance
**When** I measure layout stability
**Then** Font optimization contributes to CLS <0.1
**And** No layout shift occurs when fonts load
**And** User experience is smooth

**References:** FR43, NFR1

