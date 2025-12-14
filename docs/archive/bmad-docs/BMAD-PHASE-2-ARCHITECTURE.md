# BMAD Method - Phase 2: Solutioning - Architecture

**Data:** $(date)
**Projekt:** chod (Chłopaki od dźwięku)
**Agent:** BMAD Architect Agent
**Typ:** Brownfield - Architecture Decision Document

---

## 1. Przegląd Architektury

### 1.1 Obecna Architektura

**Stack:**
- Next.js 16.0.1 (App Router)
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4.0.0

**Struktura:**
- App Router architecture
- Server/Client Components separation
- API Routes dla backend

### 1.2 Decyzje Architektoniczne

#### AD-1: Integracja Email Service

**Decyzja:** Użycie Resend API

**Uzasadnienie:**
- Prosty, nowoczesny API
- Dobre ceny (darmowy tier)
- Łatwa integracja z Next.js
- TypeScript support

**Implementacja:**
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'kontakt@chod.pl',
  to: 'kontakt@chod.pl',
  subject: `Nowa wiadomość od ${name}`,
  html: emailTemplate
});
```

**Alternatywy rozważone:**
- SendGrid (droższy)
- Nodemailer (wymaga własnego SMTP)

#### AD-2: Analytics Solution

**Decyzja:** Google Analytics 4

**Uzasadnienie:**
- Darmowe
- Standard w branży
- Łatwa integracja
- Dobra dokumentacja

**Implementacja:**
- Next.js Script component
- gtag.js
- Event tracking dla formularza

#### AD-3: Image Management

**Decyzja:** Next.js Image Optimization + Local Storage

**Uzasadnienie:**
- Wbudowane w Next.js
- Automatyczna optymalizacja
- Responsive images
- Lazy loading

**Implementacja:**
- Obrazy w `/public/gallery/`
- Next.js Image component
- WebP format

#### AD-4: Testing Framework

**Decyzja:** Jest + React Testing Library + Playwright

**Uzasadnienie:**
- Standard w ekosystemie React
- Dobra dokumentacja
- E2E testing support

**Implementacja:**
- Jest dla unit testów
- React Testing Library dla komponentów
- Playwright dla E2E

---

## 2. Architektura Integracji

### 2.1 Email Service Integration

```
User → Contact Form → API Route → Resend API → Email Delivery
                              ↓
                         Error Handling
                              ↓
                         User Feedback
```

**Flow:**
1. Użytkownik wypełnia formularz
2. Frontend wysyła POST do `/api/contact`
3. API waliduje i sanityzuje dane
4. API wywołuje Resend API
5. Resend wysyła email
6. API zwraca odpowiedź do frontendu
7. Frontend pokazuje potwierdzenie/błąd

### 2.2 Analytics Integration

```
Page Load → gtag.js → Google Analytics
Form Submit → Event → Google Analytics
```

**Events:**
- `page_view` - automatycznie
- `form_submit` - przy wysłaniu formularza
- `form_error` - przy błędzie

---

## 3. Struktura Plików

### 3.1 Nowe Pliki

```
app/
├── api/
│   └── contact/
│       └── route.ts (zaktualizowany z Resend)
├── lib/
│   ├── resend.ts (Resend client)
│   └── analytics.ts (Analytics helpers)
└── components/
    └── Analytics.tsx (GA component)

public/
└── gallery/
    ├── image1.jpg
    ├── image2.jpg
    └── ...

__tests__/
├── components/
├── api/
└── e2e/
```

### 3.2 Environment Variables

```env
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_GA_ID=G-XXXXX
CONTACT_EMAIL=kontakt@chod.pl
```

---

## 4. Wzorce i Best Practices

### 4.1 Error Handling

**Pattern:**
- Try-catch w API routes
- User-friendly error messages
- Logging błędów
- Error boundaries w React

### 4.2 Security

**Measures:**
- Rate limiting (już zaimplementowane)
- Input sanitization (już zaimplementowane)
- Environment variables dla secrets
- HTTPS required

### 4.3 Performance

**Optimizations:**
- Image optimization (Next.js)
- Lazy loading (już zaimplementowane)
- Code splitting
- Cache headers

---

## 5. Deployment Architecture

### 5.1 Hosting

**Decyzja:** Vercel

**Uzasadnienie:**
- Optymalne dla Next.js
- Automatyczny CI/CD
- Environment variables management
- Dobre performance

### 5.2 CI/CD

**Flow:**
1. Push do main branch
2. Vercel automatycznie buduje
3. Deploy do production
4. Health checks

---

## 6. Monitoring i Logging

### 6.1 Monitoring

- Vercel Analytics (built-in)
- Google Analytics
- Error tracking (opcjonalnie Sentry)

### 6.2 Logging

- Console logs w development
- Structured logging w production
- Error logging do external service

---

**Architecture Decision Document zakończony**
**Następny krok:** Phase 3 - Implementation (Epics i Stories)

