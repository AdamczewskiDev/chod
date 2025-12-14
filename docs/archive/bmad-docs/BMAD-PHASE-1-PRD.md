# BMAD Method - Phase 1: Planning - PRD

**Data:** $(date)
**Projekt:** chod (Chłopaki od dźwięku)
**Agent:** BMAD PM Agent
**Typ:** Brownfield - Product Requirements Document

---

## 1. Executive Summary

### 1.1 Cel Dokumentu

Ten PRD definiuje wymagania produktowe dla projektu **chod** - strony wizytówkowej firmy Chłopaki od dźwięku. Dokument koncentruje się na ulepszeniach i rozszerzeniach istniejącej funkcjonalności.

### 1.2 Zakres

**W zakresie:**
- Ulepszenia istniejących funkcji
- Integracja email service
- Rozszerzenie treści
- Testy i jakość
- Analytics

**Poza zakresem:**
- Przebudowa architektury
- Zmiana stacku technologicznego
- System rezerwacji (faza 2)

---

## 2. Kontekst Biznesowy

### 2.1 Problem

**Obecny stan:**
- Formularz kontaktowy nie wysyła emaili
- Brak danych o ruchu i konwersjach
- Placeholder dane kontaktowe
- Brak testów

**Wpływ:**
- Utrata potencjalnych klientów
- Brak możliwości analizy skuteczności
- Niski poziom profesjonalizmu

### 2.2 Cele Biznesowe

1. **Generowanie Leadów**
   - Działający formularz kontaktowy
   - Wysoka konwersja

2. **Profesjonalny Wizerunek**
   - Prawdziwe dane kontaktowe
   - Prawdziwe zdjęcia portfolio

3. **Pomiar Skuteczności**
   - Analytics
   - Tracking konwersji

---

## 3. Wymagania Funkcjonalne (FR)

### FR-1: Integracja Email Service

**Priorytet:** 🔴 WYSOKI

**Opis:**
Formularz kontaktowy musi wysyłać emaile do firmy.

**Wymagania:**
- Integracja z Resend API
- Email zawiera: imię, email, telefon, wiadomość
- Potwierdzenie wysłania dla użytkownika
- Obsługa błędów

**Akceptacja:**
- Email przychodzi do kontakt@chod.pl
- Użytkownik widzi potwierdzenie
- Błędy są obsługiwane gracefully

### FR-2: Aktualizacja Danych Kontaktowych

**Priorytet:** 🔴 WYSOKI

**Opis:**
Zastąpienie placeholder danych prawdziwymi.

**Wymagania:**
- Prawdziwy numer telefonu
- Prawdziwe linki do social media
- Aktualny URL strony (jeśli wdrożona)

**Akceptacja:**
- Wszystkie dane są prawdziwe i działające

### FR-3: Prawdziwe Zdjęcia w Galerii

**Priorytet:** 🟡 ŚREDNI

**Opis:**
Zastąpienie placeholder images prawdziwymi zdjęciami realizacji.

**Wymagania:**
- Minimum 6 zdjęć
- Optymalizacja obrazów
- Responsive images

**Akceptacja:**
- Wszystkie zdjęcia są prawdziwe
- Szybkie ładowanie
- Dobrej jakości

### FR-4: Analytics i Tracking

**Priorytet:** 🟡 ŚREDNI

**Opis:**
Dodanie Google Analytics dla pomiaru ruchu i konwersji.

**Wymagania:**
- Google Analytics 4
- Event tracking dla formularza
- Page view tracking

**Akceptacja:**
- Analytics działa
- Events są trackowane
- Dashboard dostępny

### FR-5: Testy Automatyczne

**Priorytet:** 🟢 NISKI

**Opis:**
Dodanie podstawowych testów dla zapewnienia jakości.

**Wymagania:**
- Unit testy dla komponentów
- Integration testy dla API
- E2E testy dla głównych ścieżek

**Akceptacja:**
- Pokrycie testami > 70%
- Wszystkie testy przechodzą

---

## 4. Wymagania Niefunkcjonalne (NFR)

### NFR-1: Wydajność

**Wymagania:**
- Lighthouse Performance Score > 90
- Time to First Byte < 200ms
- Largest Contentful Paint < 2.5s

### NFR-2: Bezpieczeństwo

**Wymagania:**
- HTTPS required
- Rate limiting na API
- Sanityzacja danych
- GDPR compliance

### NFR-3: Dostępność

**Wymagania:**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support

### NFR-4: Responsywność

**Wymagania:**
- Działanie na mobile, tablet, desktop
- Touch-friendly interface
- Responsive images

### NFR-5: SEO

**Wymagania:**
- Meta tags
- Structured data
- Sitemap
- Robots.txt

---

## 5. Ograniczenia i Zależności

### 5.1 Ograniczenia

- Budżet: ograniczony (darmowe/tańsze rozwiązania)
- Czas: szybka implementacja
- Zasoby: mały zespół

### 5.2 Zależności

- Resend API key
- Google Analytics account
- Prawdziwe zdjęcia od klienta
- Prawdziwe dane kontaktowe

---

## 6. Metryki Sukcesu

### 6.1 KPI

1. **Konwersja Formularza**
   - Cel: > 5% odwiedzających wypełnia formularz

2. **Czas Ładowania**
   - Cel: < 2s na 3G

3. **Bounce Rate**
   - Cel: < 50%

4. **Mobile Traffic**
   - Cel: > 60% ruchu

### 6.2 Tracking

- Google Analytics events
- Form submission tracking
- Page view tracking
- User flow analysis

---

## 7. Timeline i Milestones

### Milestone 1: Integracja Email (Tydzień 1)
- ✅ Integracja Resend
- ✅ Testy wysyłki
- ✅ Obsługa błędów

### Milestone 2: Aktualizacja Danych (Tydzień 1)
- ✅ Prawdziwe dane kontaktowe
- ✅ Linki social media

### Milestone 3: Galeria (Tydzień 2)
- ✅ Prawdziwe zdjęcia
- ✅ Optymalizacja

### Milestone 4: Analytics (Tydzień 2)
- ✅ Google Analytics
- ✅ Event tracking

### Milestone 5: Testy (Tydzień 3)
- ✅ Unit testy
- ✅ Integration testy
- ✅ E2E testy

---

**PRD zatwierdzony**
**Następny krok:** Phase 2 - Solutioning (Architecture)

