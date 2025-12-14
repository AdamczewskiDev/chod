# BMAD Method - Phase 3: Implementation - Epics i Stories

**Data:** $(date)
**Projekt:** chod (Chłopaki od dźwięku)
**Agent:** BMAD SM Agent
**Typ:** Brownfield - Epics and User Stories

---

## 1. Epics Overview

### Epic 1: Integracja Email Service
**Priorytet:** 🔴 WYSOKI
**Estymata:** 5 story points

### Epic 2: Aktualizacja Danych i Treści
**Priorytet:** 🔴 WYSOKI
**Estymata:** 3 story points

### Epic 3: Analytics i Tracking
**Priorytet:** 🟡 ŚREDNI
**Estymata:** 5 story points

### Epic 4: Testy i Jakość
**Priorytet:** 🟢 NISKI
**Estymata:** 8 story points

---

## 2. Epic 1: Integracja Email Service

### Story 1.1: Konfiguracja Resend
**ID:** CHOD-101
**Priorytet:** 🔴 WYSOKI
**Estymata:** 2 SP
**Asignee:** Dev

**Opis:**
Jako developer, chcę skonfigurować Resend API, aby móc wysyłać emaile z formularza kontaktowego.

**Akceptacja:**
- [ ] Resend package zainstalowany
- [ ] Environment variable skonfigurowany
- [ ] Resend client utworzony w `lib/resend.ts`
- [ ] Test wysyłki email działa

**Techniczne:**
- Zainstalować `resend` package
- Utworzyć `app/lib/resend.ts`
- Dodać `RESEND_API_KEY` do `.env.local`

### Story 1.2: Integracja z API Route
**ID:** CHOD-102
**Priorytet:** 🔴 WYSOKI
**Estymata:** 3 SP
**Asignee:** Dev

**Opis:**
Jako użytkownik, chcę wysłać wiadomość przez formularz i otrzymać potwierdzenie, że email został wysłany do firmy.

**Akceptacja:**
- [ ] API route używa Resend do wysyłki
- [ ] Email zawiera wszystkie dane z formularza
- [ ] Użytkownik widzi potwierdzenie sukcesu
- [ ] Błędy są obsługiwane gracefully
- [ ] Email przychodzi do kontakt@chod.pl

**Techniczne:**
- Zaktualizować `app/api/contact/route.ts`
- Dodać email template
- Obsługa błędów Resend API

---

## 3. Epic 2: Aktualizacja Danych i Treści

### Story 2.1: Aktualizacja Danych Kontaktowych
**ID:** CHOD-201
**Priorytet:** 🔴 WYSOKI
**Estymata:** 1 SP
**Asignee:** Dev

**Opis:**
Jako użytkownik, chcę zobaczyć prawdziwe dane kontaktowe firmy (telefon, social media).

**Akceptacja:**
- [ ] Prawdziwy numer telefonu zamiast placeholder
- [ ] Prawdziwe linki do Facebook i Instagram
- [ ] Wszystkie linki działają

**Techniczne:**
- Zaktualizować `components/Contact.tsx`
- Usunąć komentarze TODO

### Story 2.2: Prawdziwe Zdjęcia w Galerii
**ID:** CHOD-202
**Priorytet:** 🟡 ŚREDNI
**Estymata:** 2 SP
**Asignee:** Dev

**Opis:**
Jako użytkownik, chcę zobaczyć prawdziwe zdjęcia realizacji firmy w galerii.

**Akceptacja:**
- [ ] Minimum 6 prawdziwych zdjęć
- [ ] Zdjęcia są zoptymalizowane
- [ ] Szybkie ładowanie
- [ ] Dobrej jakości

**Techniczne:**
- Dodać zdjęcia do `/public/gallery/`
- Zaktualizować `components/Gallery.tsx`
- Użyć Next.js Image optimization

---

## 4. Epic 3: Analytics i Tracking

### Story 3.1: Konfiguracja Google Analytics
**ID:** CHOD-301
**Priorytet:** 🟡 ŚREDNI
**Estymata:** 2 SP
**Asignee:** Dev

**Opis:**
Jako właściciel strony, chcę mieć Google Analytics, aby móc analizować ruch na stronie.

**Akceptacja:**
- [ ] Google Analytics 4 skonfigurowany
- [ ] Tracking ID w environment variables
- [ ] Page views są trackowane
- [ ] Dashboard dostępny

**Techniczne:**
- Utworzyć `components/Analytics.tsx`
- Dodać do `app/layout.tsx`
- Dodać `NEXT_PUBLIC_GA_ID` do `.env.local`

### Story 3.2: Event Tracking dla Formularza
**ID:** CHOD-302
**Priorytet:** 🟡 ŚREDNI
**Estymata:** 2 SP
**Asignee:** Dev

**Opis:**
Jako właściciel strony, chcę trackować konwersje formularza w Google Analytics.

**Akceptacja:**
- [ ] Event `form_submit` wysyłany przy sukcesie
- [ ] Event `form_error` wysyłany przy błędzie
- [ ] Events widoczne w GA dashboard

**Techniczne:**
- Dodać `gtag` calls w `components/Contact.tsx`
- Utworzyć helper function w `lib/analytics.ts`

### Story 3.3: Konfiguracja URL i SEO
**ID:** CHOD-303
**Priorytet:** 🟡 ŚREDNI
**Estymata:** 1 SP
**Asignee:** Dev

**Opis:**
Jako właściciel strony, chcę mieć prawidłowy URL strony w metadata.

**Akceptacja:**
- [ ] URL zaktualizowany w `app/layout.tsx`
- [ ] Structured data ma prawidłowy URL
- [ ] Open Graph ma prawidłowy URL

**Techniczne:**
- Zaktualizować `metadataBase` w `app/layout.tsx`
- Zaktualizować wszystkie URL placeholdery

---

## 5. Epic 4: Testy i Jakość

### Story 4.1: Unit Testy dla Komponentów
**ID:** CHOD-401
**Priorytet:** 🟢 NISKI
**Estymata:** 3 SP
**Asignee:** Dev

**Opis:**
Jako developer, chcę mieć unit testy dla komponentów, aby zapewnić jakość kodu.

**Akceptacja:**
- [ ] Jest skonfigurowany
- [ ] Testy dla głównych komponentów
- [ ] Pokrycie > 70%

**Techniczne:**
- Zainstalować Jest i React Testing Library
- Utworzyć testy dla: Hero, About, Services, Contact

### Story 4.2: Integration Testy dla API
**ID:** CHOD-402
**Priorytet:** 🟢 NISKI
**Estymata:** 2 SP
**Asignee:** Dev

**Opis:**
Jako developer, chcę mieć integration testy dla API routes, aby zapewnić poprawność działania.

**Akceptacja:**
- [ ] Testy dla `/api/contact`
- [ ] Testy walidacji
- [ ] Testy rate limiting

**Techniczne:**
- Utworzyć testy dla API route
- Mock Resend API

### Story 4.3: E2E Testy
**ID:** CHOD-403
**Priorytet:** 🟢 NISKI
**Estymata:** 3 SP
**Asignee:** Dev

**Opis:**
Jako developer, chcę mieć E2E testy dla głównych ścieżek użytkownika.

**Akceptacja:**
- [ ] Playwright skonfigurowany
- [ ] Test: przejście przez wszystkie sekcje
- [ ] Test: wypełnienie formularza

**Techniczne:**
- Zainstalować Playwright
- Utworzyć E2E testy

---

## 6. Backlog Priority

### Sprint 1 (Tydzień 1)
1. CHOD-101: Konfiguracja Resend
2. CHOD-102: Integracja z API Route
3. CHOD-201: Aktualizacja Danych Kontaktowych

### Sprint 2 (Tydzień 2)
4. CHOD-202: Prawdziwe Zdjęcia
5. CHOD-301: Konfiguracja Google Analytics
6. CHOD-302: Event Tracking
7. CHOD-303: Konfiguracja URL

### Sprint 3 (Tydzień 3)
8. CHOD-401: Unit Testy
9. CHOD-402: Integration Testy
10. CHOD-403: E2E Testy

---

**Epics i Stories zakończone**
**Następny krok:** Retrospective

