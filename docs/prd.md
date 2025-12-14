---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments: 
  - 'docs/analysis/product-brief-chod-2025-12-14.md'
  - 'docs/analysis/research/market-event-website-research-2025-12-14.md'
  - 'docs/analysis/brainstorming-session-2025-12-13.md'
documentCounts:
  briefs: 1
  research: 1
  brainstorming: 1
  projectDocs: 0
workflowType: 'prd'
lastStep: 11
project_name: 'chod'
user_name: 'Damian'
date: '2025-12-14'
---

# Product Requirements Document - chod

**Author:** Damian
**Date:** 2025-12-14

---

## Executive Summary

Strona wizytówkowa/marketingowa dla firmy eventowej "Chłopaki od dźwięku" rozwiązuje problem barier w kontakcie i braku zaufania przed nawiązaniem kontaktu z firmą eventową. Projekt łączy profesjonalizm z nowoczesnym podejściem do kontaktu z klientem, oferując najszybszą i najbardziej przejrzystą obsługę w regionie.

**Pozycjonowanie:** "Profesjonalna firma eventowa z nowoczesnym podejściem do kontaktu — najszybsza i najbardziej przejrzysta w regionie"

**Unikalna propozycja wartości:** Profesjonalizm + Szybkość + Przejrzystość

**Target Audience:**
Projekt adresuje trzy główne segmenty użytkowników:
- **B2B (Organizatorzy korporacyjni):** Firmy organizujące wydarzenia biznesowe, konferencje, szkolenia (50-500+ osób). Priorytety: profesjonalizm, niezawodność, kompleksowa obsługa, szczegółowe wyceny.
- **B2C (Organizatorzy prywatni):** Osoby prywatne organizujące wesela, urodziny, imprezy okolicznościowe (20-150 osób). Priorytety: cena, jakość, atmosfera, elastyczność, szybka odpowiedź.
- **B2B2C (Agencje eventowe):** Agencje organizujące wydarzenia dla swoich klientów. Priorytety: partnerstwo, elastyczność, konkurencyjne ceny, długoterminowa współpraca.

**User Journey - Wielopunktowe wejścia:**
Projekt wspiera cztery główne scenariusze przepływu użytkownika:
1. **"Szybka wycena"** (2-3 min): Hero → Formularz → Wycena → Menu Usług → Galeria → Kontakt
2. **"Szukam inspiracji"** (5-7 min): Galeria → Filtrowanie → "Zapytaj o podobne" → Formularz → Testimonials → Menu → Kontakt
3. **"Chcę poznać firmę"** (7-10 min): Testimonials → O nas → Menu → Galeria → Kontakt
4. **"Chcę konkretną usługę"** (3-4 min): Menu Usług → Karta usługi → "Zapytaj o wycenę" → Formularz → Kontakt

**Kluczowe różnicowanie:**
- Nowoczesny design i UX (przewaga nad konkurencją z przestarzałymi stronami)
- Optymalizacja konwersji (uproszczony formularz, elementy zaufania)
- Przejrzystość cenowa (kalkulator wyceny, pakiety usług)
- Szybkość odpowiedzi (automatyczne potwierdzenia, odpowiedź <4h)

**MVP Scope - Priorytetyzacja:**
MVP obejmuje 9 core features (must-have):
1. **Nowoczesny, responsywny design** — wpływa na pierwsze wrażenie (15% wpływu na decyzję)
2. **Wysokiej jakości galeria portfolio** — kluczowy czynnik decyzyjny (45% wpływu)
3. **Uproszczony formularz kontaktowy** — bezpośrednio wpływa na konwersję
4. **Testimonials i social proof** — buduje zaufanie (30% wpływu)
5. **Sekcja "O nas"** — buduje zaufanie, pokazuje profesjonalizm
6. **Sekcja "Usługi"** — przejrzystość oferty, pokazuje zakres usług
7. **Hero Section** — pierwsze wrażenie, jasny komunikat
8. **Podstawowa optymalizacja SEO** — widoczność w wyszukiwarkach
9. **Integracja EmailJS** — automatyczne potwierdzenia, szybka odpowiedź

**Out of Scope dla MVP:**
- Kalkulator wyceny online (Faza 2: Optymalizacja)
- Blog i content marketing (Faza 3: Różnicowanie)
- Chat online (Faza 3: Różnicowanie)
- "Koszyk zapytań" (Faza 3: Różnicowanie)

### What Makes This Special

**Hybrydowy system** łączący najlepsze praktyki z trzech branż:
- **E-commerce:** "Koszyk zapytań", produkty powiązane, recenzje z ocenami
- **SaaS:** Case studies, social proof, pricing calculator, szybka odpowiedź
- **Portfolio artystów:** Storytelling, behind the scenes, process showcase

**Unikalna propozycja wartości:** Profesjonalizm + Szybkość + Przejrzystość — połączenie, którego brakuje u konkurentów w branży eventowej.

**Kluczowe innowacje:**
- Formularz w Hero Section ("Otrzymaj wycenę w 2 minuty") — odwrócenie tradycyjnej struktury
- Testimonials na początku ("show, don't tell") — budowanie zaufania przed opisem firmy
- "Koszyk zapytań" — adaptacja e-commerce do formularza kontaktowego
- Wielopunktowe wejścia — różne ścieżki użytkownika prowadzące do formularza

## Project Classification

**Technical Type:** web_app
**Domain:** general
**Complexity:** low
**Project Context:** Greenfield - new project

**Technology Stack:**
- **Framework:** Next.js 16.0.1 (App Router) — React framework z Server Components i Client Components
- **UI Library:** React 19.2.0 — najnowsza wersja React
- **Language:** TypeScript 5 — pełne typowanie statyczne
- **Styling:** Tailwind CSS 4.0.0 — utility-first CSS framework
- **CSS Processing:** PostCSS — przetwarzanie CSS
- **Typography:** Montserrat — Google Font (via next/font)
- **External Integrations:** EmailJS — client-side email sending service
- **Development Tools:** ESLint 9, TypeScript, Node.js

**Classification Signals:**
- "strona wizytówkowa", "website", "webapp", "browser", "SPA"
- "marketingowa", "landing page"
- "formularz kontaktowy", "galeria", "portfolio"

**Project Characteristics:**
- Single Page Application (SPA) lub Multi-Page Application (MPA)
- Browser support: Modern browsers (Chrome, Firefox, Safari, Edge)
- SEO required: Yes (widoczność w wyszukiwarkach jest kluczowa)
- Real-time: No (nie wymagane dla MVP)
- Accessibility: WCAG 2.1 Level AA (rekomendowane)

**Domain Considerations:**
- Standard requirements: Tak
- Basic security: Tak (formularz kontaktowy, dane osobowe)
- User experience: Kluczowe (konwersja, zaufanie)
- Performance: Kluczowe (szybkie ładowanie <3s)

## Success Criteria

### User Success

**Moment "aha!" dla użytkownika:**
- Użytkownik widzi wysokiej jakości galerię i uznaje firmę za profesjonalną (45% wpływu na decyzję)
- Użytkownik otrzymuje szybką odpowiedź (<4h) i czuje się doceniony
- Użytkownik znajduje potrzebne informacje w <5 minut i czuje, że strona jest przejrzysta

**Mierzalne metryki sukcesu użytkownika:**
1. **Czas do pierwszego kontaktu:** <5 minut (od wejścia na stronę do wysłania formularza)
2. **Form Completion Rate:** >80% (użytkownicy kończący formularz po rozpoczęciu)
3. **Gallery Engagement Rate:** >60% (użytkownicy przeglądający galerię)
4. **Przejrzystość informacji:** >30% użytkowników używa kalkulatora wyceny (gdy dostępny)
5. **Szybkość odpowiedzi:** <4h na 90% zapytań
6. **Satysfakcja użytkownika:** NPS >50 (po kontakcie)

### Business Success

**Cele 3 miesiące:**
- Wzrost konwersji formularza o 30-50% (z baseline)
- Zmniejszenie bounce rate do <50% (obecnie często >60%)
- Zwiększenie czasu na stronie do >3 minut (obecnie często <2 min)
- Top 3 ranking SEO dla 5 kluczowych fraz lokalnych

**Cele 12 miesięcy:**
- Wzrost liczby zapytań o 100%
- Wzrost konwersji z zapytań do współpracy o 25%
- Wzrost widoczności w wyszukiwarkach (organiczny ruch +50%)
- Budowanie marki jako "najszybszej i najbardziej przejrzystej" w regionie

**Kluczowe wskaźniki wydajności (KPI):**
- **Conversion Metrics:** Konwersja formularza, Form Completion Rate
- **Engagement Metrics:** Czas na stronie, Bounce rate, Gallery Engagement Rate
- **Response Metrics:** Czas odpowiedzi, Time to First Response
- **Quality Metrics:** Lead Quality Score, Mobile Conversion Rate
- **Growth Metrics:** Mobile traffic, SEO ranking, Organic Traffic Growth, Liczba zapytań, Konwersja zapytań do współpracy

### Technical Success

**Wydajność:**
- Szybkie ładowanie: <3s (First Contentful Paint)
- Mobile-first: Pełna responsywność na wszystkich urządzeniach
- Optymalizacja obrazów: Lazy loading, WebP format

**Dostępność:**
- WCAG 2.1 Level AA compliance
- Keyboard navigation dla wszystkich interaktywnych elementów
- Screen reader support (ARIA labels)

**SEO:**
- Podstawowa optymalizacja: Meta tagi, struktura URL, JSON-LD
- Mobile-friendly: Google Mobile-Friendly Test pass
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

**Niezawodność:**
- Uptime: >99.5% (dla strony marketingowej)
- Formularz: 100% reliability (wszystkie zapytania są dostarczane)
- Brak błędów technicznych: 0 critical errors

**Bezpieczeństwo:**
- HTTPS: Wymagane
- Ochrona danych osobowych: Zgodność z RODO (GDPR)
- Walidacja formularza: Po stronie klienta i serwera (EmailJS)

### Measurable Outcomes

**MVP Success Criteria:**
- **User Success:** Czas do pierwszego kontaktu <5 min, Form completion rate >80%, Gallery engagement rate >60%
- **Business Objectives:** Konwersja formularza +30-50%, Bounce rate <50%, Czas na stronie >3 min
- **Technical:** Szybkie ładowanie <3s, pełna responsywność mobile, brak błędów
- **Response:** Czas odpowiedzi <4h na 90% zapytań, automatyczne potwierdzenia działają

**Decision Point:** Jeśli MVP osiągnie te kryteria, przechodzimy do Fazy 2 (Optymalizacja)

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — dostarczenie kluczowego doświadczenia użytkownika z podstawową funkcjonalnością

**Filozofia MVP:**
Projekt wykorzystuje podejście "Experience MVP", które skupia się na dostarczeniu kluczowego doświadczenia użytkownika (szybkie znalezienie profesjonalnej firmy eventowej, weryfikacja jakości, łatwy kontakt) z podstawową funkcjonalnością, która działa niezawodnie.

**Kluczowe założenia MVP:**
- **Minimum, które rozwiązuje problem:** Umożliwienie klientom szybkiego znalezienia profesjonalnej firmy eventowej, weryfikacji jakości i łatwego kontaktu
- **Szybka walidacja:** MVP pozwala na szybką walidację założeń biznesowych (konwersja, zaufanie, szybkość odpowiedzi)
- **Foundation dla przyszłości:** MVP buduje fundament (design system, architektura) dla przyszłych faz rozwoju

**Resource Requirements:**
- **Team Size:** 1-2 deweloperów (full-stack)
- **Skills Required:** Next.js, React, TypeScript, Tailwind CSS, EmailJS integration
- **Timeline:** 4-6 tygodni dla MVP
- **Budget:** Niski (hosting, EmailJS, domena)

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- **Journey 1:** "Szybka wycena" (Anna - B2B) — pełne wsparcie
- **Journey 2:** "Szukam inspiracji" (Piotr - B2C) — pełne wsparcie (bez "Zapytaj o podobne" — to w Phase 2)
- **Journey 3:** "Chcę poznać firmę" (Tomasz - B2B2C) — pełne wsparcie

**Must-Have Capabilities (9 core features):**

1. **Nowoczesny, responsywny design**
   - Mobile-first approach
   - Szybkie ładowanie (<3s)
   - Intuicyjna nawigacja
   - **Rationale:** Wpływa na pierwsze wrażenie (15% wpływu na decyzję)

2. **Wysokiej jakości galeria portfolio**
   - Wysokiej jakości zdjęcia realizacji
   - Lightbox do przeglądania
   - Masonry layout
   - **Rationale:** Kluczowy czynnik decyzyjny (45% wpływu)

3. **Uproszczony formularz kontaktowy**
   - Minimalne wymagane pola (email, wiadomość)
   - Opcjonalne pola (imię, telefon)
   - Integracja EmailJS
   - Automatyczne potwierdzenia
   - **Rationale:** Bezpośrednio wpływa na konwersję

4. **Testimonials i social proof**
   - Sekcja testimonials z ocenami (5/5)
   - Testimonials na początku strony
   - **Rationale:** Buduje zaufanie (30% wpływu)

5. **Sekcja "O nas"**
   - Krótki opis firmy i doświadczenia
   - Kluczowe wartości (3 wartości)
   - Statystyki (jeśli dostępne)
   - **Rationale:** Buduje zaufanie, pokazuje profesjonalizm

6. **Sekcja "Usługi" (Menu Usług)**
   - Wizualne karty z usługami (Dźwięk, Światło, Multimedia)
   - Krótkie opisy usług
   - **Rationale:** Przejrzystość oferty, pokazuje zakres usług

7. **Hero Section**
   - Jasny komunikat o ofercie
   - CTA do formularza kontaktowego
   - Formularz w Hero Section ("Otrzymaj wycenę w 2 minuty")
   - **Rationale:** Pierwsze wrażenie, jasny komunikat

8. **Podstawowa optymalizacja SEO**
   - Meta tagi (title, description, keywords)
   - Struktura URL (SEO-friendly)
   - JSON-LD (LocalBusiness schema)
   - Open Graph i Twitter Card
   - **Rationale:** Widoczność w wyszukiwarkach, długoterminowa wartość

9. **Footer**
   - Kontakt (email, telefon)
   - Szybkie linki (Oferta, Galeria, O nas, Kontakt)
   - **Rationale:** Dodatkowe opcje kontaktu, nawigacja

**MVP Success Criteria:**
- **User Success:** Czas do pierwszego kontaktu <5 min, Form completion rate >80%, Gallery engagement rate >60%
- **Business Objectives:** Konwersja formularza +30-50%, Bounce rate <50%, Czas na stronie >3 min
- **Technical:** Szybkie ładowanie <3s, pełna responsywność mobile, brak błędów
- **Response:** Czas odpowiedzi <4h na 90% zapytań, automatyczne potwierdzenia działają

**Decision Point:** Jeśli MVP osiągnie te kryteria, przechodzimy do Phase 2 (Optymalizacja)

### Post-MVP Features

**Phase 2 (Post-MVP) - Optymalizacja (Miesiąc 3-4):**

**Przejrzystość cenowa:**
- Kalkulator wyceny online (typ wydarzenia, liczba gości, lokalizacja, data, wybrane usługi)
- Pakiety usług (Basic, Standard, Premium) z cenami
- **Rationale:** Zmniejsza bariery w kontakcie, buduje zaufanie

**Zaawansowana optymalizacja SEO:**
- Content marketing (blog z przewodnikami, case studies, porady branżowe)
- Rozbudowane meta tagi i structured data
- **Rationale:** Długoterminowa widoczność w wyszukiwarkach, budowanie pozycji eksperta

**Case studies z kontekstem:**
- Typ wydarzenia, wyzwania, rozwiązanie, rezultat
- Wizualne prezentacje realizacji
- **Rationale:** Buduje zaufanie, pokazuje doświadczenie

**Rozbudowane testimonials:**
- Wideo testimonials
- Więcej opinii z różnorodnych klientów
- Logo klientów (jeśli dostępne)
- **Rationale:** Wzmacnia social proof

**Funkcja "Zapytaj o podobne wydarzenie":**
- Przycisk przy zdjęciach w galerii
- Pre-wypełniony formularz z typem wydarzenia
- **Rationale:** Ułatwia kontakt, zwiększa konwersję

**Phase 3 (Expansion) - Różnicowanie (Miesiąc 5-6):**

**Content marketing:**
- Blog z przewodnikami (jak zorganizować wydarzenie, wybór sprzętu, etc.)
- Case studies z historiami sukcesu
- Porady branżowe i trendy
- **Rationale:** Budowanie pozycji eksperta, długoterminowa widoczność SEO

**"Koszyk zapytań" (advanced feature):**
- Dodawanie usług do zapytania (adaptacja e-commerce)
- Wizualne zarządzanie zapytaniem
- **Rationale:** Innowacyjne podejście, zwiększa zaangażowanie

**Chat online:**
- Szybka opcja kontaktu (np. Tawk.to, Intercom)
- Automatyczne odpowiedzi na częste pytania
- **Rationale:** Zmniejsza bariery w kontakcie, szybka odpowiedź

**Interaktywne elementy:**
- Wirtualne tour (360° zdjęcia realizacji)
- Interaktywne portfolio (filtrowanie, kategorie)
- **Rationale:** Zwiększa zaangażowanie, wyróżnia na rynku

**Długoterminowa wizja (12+ miesięcy):**

**Platforma partnerska dla agencji eventowych (B2B2C):**
- Dedykowana sekcja dla agencji
- Rabaty partnerskie
- Długoterminowe umowy
- **Rationale:** Rozwój segmentu B2B2C, zwiększenie przychodów

**System rezerwacji online:**
- Kalendarz dostępności
- Rezerwacja terminów online
- Integracja z kalendarzem
- **Rationale:** Automatyzacja procesu, zwiększenie efektywności

**Integracja z kalendarzem dostępności:**
- Sprawdzanie dostępności w czasie rzeczywistym
- Automatyczne aktualizacje
- **Rationale:** Przejrzystość, zmniejszenie konfliktów terminów

**Zaawansowane analytics i personalizacja:**
- Tracking zachowań użytkowników
- Personalizowane treści (rekomendacje, podobne realizacje)
- **Rationale:** Zwiększenie konwersji, lepsze doświadczenie użytkownika

**Rozszerzenie na inne rynki:**
- Inne miasta (lokalizacja treści, SEO)
- Inne kraje (tłumaczenia, lokalne preferencje)
- **Rationale:** Ekspansja geograficzna, zwiększenie zasięgu

### Risk Mitigation Strategy

**Technical Risks:**

**Ryzyko 1: Integracja EmailJS może nie działać niezawodnie**
- **Mitigacja:** 
  - Testowanie integracji przed launch
  - Fallback: Alternatywna opcja kontaktu (telefon, email bezpośredni)
  - Monitoring: Tracking failed submissions
- **Contingency:** Jeśli EmailJS nie działa, można szybko przełączyć na tradycyjny formularz z API route

**Ryzyko 2: Wydajność strony może nie spełniać celów (<3s)**
- **Mitigacja:**
  - Optymalizacja obrazów (WebP, lazy loading)
  - Code splitting (automatic z Next.js)
  - Performance monitoring (Lighthouse CI)
- **Contingency:** Jeśli wydajność jest problemem, można uprościć animacje lub zmniejszyć liczbę obrazów w galerii

**Ryzyko 3: Responsywność może nie działać poprawnie na wszystkich urządzeniach**
- **Mitigacja:**
  - Mobile-first approach
  - Testowanie na różnych urządzeniach
  - Użycie Tailwind CSS breakpoints
- **Contingency:** Jeśli są problemy, można uprościć layout dla mobile

**Market Risks:**

**Ryzyko 1: Konkurenci mogą skopiować innowacyjne rozwiązania**
- **Mitigacja:**
  - Ciągłe innowacje (Phase 2, 3)
  - Budowanie marki ("najszybsza i najbardziej przejrzysta")
  - Szybkość odpowiedzi jako przewaga konkurencyjna
- **Contingency:** Jeśli konkurenci kopiują, skupić się na jakości obsługi i szybkości odpowiedzi

**Ryzyko 2: Użytkownicy mogą nie zrozumieć innowacyjnych aspektów (np. "koszyk zapytań")**
- **Mitigacja:**
  - User testing przed wdrożeniem
  - Jasne instrukcje i wizualne wskazówki
  - Fallback: Tradycyjny formularz zawsze dostępny
- **Contingency:** Jeśli użycie jest niskie, można uprościć do tradycyjnego formularza

**Ryzyko 3: SEO może nie przynieść oczekiwanych rezultatów**
- **Mitigacja:**
  - Podstawowa optymalizacja SEO w MVP
  - Content marketing w Phase 2
  - Regularne audyty SEO
- **Contingency:** Jeśli SEO nie działa, można zwiększyć budżet na marketing płatny (Google Ads)

**Resource Risks:**

**Ryzyko 1: Zespół może być mniejszy niż planowano**
- **Mitigacja:**
  - MVP jest zaprojektowane dla 1-2 deweloperów
  - Priorytetyzacja: Focus na core features
  - Użycie gotowych rozwiązań (Next.js, Tailwind CSS, EmailJS)
- **Contingency:** Jeśli zespół jest mniejszy, można wydłużyć timeline lub zmniejszyć scope MVP (usunąć niektóre nice-to-have features)

**Ryzyko 2: Budżet może być mniejszy niż planowano**
- **Mitigacja:**
  - MVP ma niski budżet (hosting, EmailJS, domena)
  - Użycie darmowych narzędzi gdzie możliwe (Next.js, Tailwind CSS)
  - Vercel free tier dla hosting
- **Contingency:** Jeśli budżet jest mniejszy, można użyć darmowych alternatyw (np. Formspree zamiast EmailJS)

**Ryzyko 3: Timeline może być dłuższy niż planowano**
- **Mitigacja:**
  - Realistyczne szacunki (4-6 tygodni dla MVP)
  - Priorytetyzacja: Focus na must-have features
  - Iteracyjne wdrożenie (MVP → Phase 2 → Phase 3)
- **Contingency:** Jeśli timeline jest dłuższy, można zmniejszyć scope MVP lub wydłużyć deadline

**Ogólne strategie łagodzenia ryzyka:**

1. **Iteracyjne wdrożenie:** MVP → Phase 2 → Phase 3 pozwala na walidację na każdym etapie
2. **Fallback options:** Zawsze dostępne tradycyjne rozwiązania jako alternatywa
3. **Monitoring:** Regularne monitorowanie metryk sukcesu pozwala na szybkie wykrycie problemów
4. **User testing:** Regularne testy z użytkownikami na każdym etapie rozwoju
5. **Elastyczność:** Scope jest elastyczny i może być dostosowany w zależności od wyników MVP

## User Journeys

### Journey 1: Anna Kowalska — "Szybka wycena dla konferencji"

**Opening Scene:**
Anna siedzi w biurze, kończy spotkanie z zarządem. Dostała zadanie: zorganizować konferencję technologiczną dla 150 osób za 6 tygodni. Musi znaleźć firmę eventową z profesjonalnym sprzętem nagłośnieniowym i oświetleniem. Czasu ma mało, a zarząd oczekuje szczegółowej wyceny do końca tygodnia. W Google wpisuje "firma eventowa [miasto]" i trafia na stronę "Chłopaki od dźwięku".

**Rising Action:**
Anna przegląda Hero Section — widzi jasny komunikat o profesjonalnej realizacji imprez. Czas jest kluczowy, więc od razu przechodzi do galerii. Widzi zdjęcia z konferencji biznesowych, koncertów, eventów korporacyjnych. Jakość zdjęć jest wysoka, widać profesjonalny sprzęt i dopracowane realizacje. To buduje zaufanie — "wygląda na profesjonalistów".

Przegląda sekcję "Usługi" — widzi wizualne karty z Dźwiękiem, Oświetleniem i Multimediami. Opisy są konkretne, bez zbędnych frazesów. Sprawdza testimonials — widzi oceny 5/5 i pozytywne opinie od firm korporacyjnych. "To może być to" — myśli Anna.

**Climax:**
Anna wypełnia formularz kontaktowy w Hero Section. Formularz jest prosty — tylko email i wiadomość (opcjonalnie imię i telefon). Wpisuje: "Konferencja technologiczna, 150 osób, 6 tygodni, potrzebuję wyceny na dźwięk i światło". Wysyła formularz i otrzymuje natychmiastowe potwierdzenie — "Dziękujemy za zapytanie. Odpowiemy w ciągu 4 godzin."

3 godziny później Anna otrzymuje email z szczegółową wyceną, zakresem usług i propozycją spotkania. Odpowiedź jest profesjonalna, konkretna i szybka. Anna czuje ulgę — "wreszcie ktoś, kto rozumie, że czas ma znaczenie".

**Resolution:**
Anna przedstawia wycenę zarządowi. Wszystko jest jasne, przejrzyste i profesjonalne. Zarząd akceptuje ofertę. Konferencja się udaje — sprzęt działa bez zarzutu, obsługa jest na miejscu, wszystko jest dopracowane. Anna dodaje "Chłopaki od dźwięku" do swojej listy zaufanych partnerów i poleca ich innym firmom.

**Journey Requirements:**
- Hero Section z jasnym komunikatem i CTA do formularza
- Wysokiej jakości galeria portfolio z różnorodnymi realizacjami
- Sekcja "Usługi" z wizualnymi kartami i konkretnymi opisami
- Testimonials z ocenami i opiniami od firm korporacyjnych
- Uproszczony formularz kontaktowy w Hero Section
- Automatyczne potwierdzenia (EmailJS)
- Szybka odpowiedź na zapytania (<4h)

---

### Journey 2: Piotr Nowak — "Szukam inspiracji dla wesela"

**Opening Scene:**
Piotr planuje wesele dla 80 osób. To jego pierwsze większe wydarzenie — nie wie, czego się spodziewać, ile to kosztuje, jak to wszystko zorganizować. Jest zestresowany, bo chce, żeby było idealnie, ale budżet jest ograniczony. Szuka inspiracji i sprawdzonych firm. Trafia na stronę "Chłopaki od dźwięku" przez rekomendację znajomych.

**Rising Action:**
Piotr zaczyna od galerii — chce zobaczyć, jak wyglądają wesela zrealizowane przez firmę. Przewija zdjęcia: wesele w plenerze, wesele w sali, różne style i atmosfery. Każde zdjęcie pokazuje profesjonalizm i dbałość o szczegóły. Piotr czuje się bardziej pewny — "może to nie jest takie trudne, jak myślałem".

Czyta testimonials — widzi opinie od par, które organizowały wesela. Wszystkie są pozytywne, z ocenami 5/5. "Klienci są zadowoleni" — myśli Piotr. Sprawdza sekcję "O nas" — widzi, że firma ma doświadczenie, setki zrealizowanych wydarzeń. To buduje zaufanie.

**Climax:**
Piotr widzi przy jednym ze zdjęć z wesela przycisk "Zapytaj o podobne wydarzenie". Klika — formularz otwiera się z pre-wypełnionym typem wydarzenia "Wesele". To ułatwia mu kontakt — nie musi tłumaczyć, czego potrzebuje. Wypełnia formularz: "Wesele dla 80 osób, plener, potrzebuję wyceny na dźwięk i światło".

Otrzymuje szybką odpowiedź z przyjaznym tonem i szczegółową wyceną. Firma proponuje również spotkanie, żeby omówić szczegóły. Piotr czuje się wspierany — "nie jestem sam w tym procesie".

**Resolution:**
Piotr spotyka się z firmą, omawia szczegóły. Wesele się udaje — muzyka brzmi perfekcyjnie, oświetlenie tworzy magiczną atmosferę, goście są zachwyceni. Piotr i jego żona są szczęśliwi — "to było dokładnie to, czego potrzebowaliśmy". Piotr poleca firmę innym parom planującym wesela.

**Journey Requirements:**
- Galeria portfolio z różnorodnymi realizacjami (w tym wesela)
- Testimonials z opiniami od par organizujących wesela
- Sekcja "O nas" z doświadczeniem i statystykami
- Funkcja "Zapytaj o podobne wydarzenie" przy zdjęciach w galerii
- Pre-wypełniony formularz z typem wydarzenia
- Przyjazna komunikacja i wsparcie w procesie
- Szybka odpowiedź z szczegółową wyceną

---

### Journey 3: Tomasz Wiśniewski — "Chcę poznać firmę jako partnera"

**Opening Scene:**
Tomasz jest właścicielem małej agencji eventowej. Organizuje wydarzenia dla swoich klientów, ale często potrzebuje wsparcia technicznego — dźwięk, światło, multimedia. Szuka niezawodnego partnera do długoterminowej współpracy. Nie chce przypadkowych firm — potrzebuje kogoś, z kim może budować relację. Trafia na stronę "Chłopaki od dźwięku" przez wyszukiwarkę.

**Rising Action:**
Tomasz zaczyna od sekcji "O nas" — chce poznać firmę, jej historię, doświadczenie. Widzi, że firma ma wieloletnie doświadczenie, setki zrealizowanych wydarzeń, zróżnicowane portfolio. "Wygląda na profesjonalistów" — myśli Tomasz.

Sprawdza testimonials — widzi opinie od różnych klientów, w tym od firm i agencji. Wszystkie są pozytywne, z ocenami 5/5. "Klienci są zadowoleni" — myśli Tomasz. Przegląda galerię — widzi różnorodność realizacji: od małych eventów po duże koncerty. "Mogą obsłużyć różne projekty" — myśli Tomasz.

**Climax:**
Tomasz sprawdza sekcję "Usługi" — widzi wizualne karty z Dźwiękiem, Oświetleniem i Multimediami. Opisy są konkretne, bez zbędnych frazesów. Widzi, że firma oferuje kompleksową obsługę — dokładnie tego potrzebuje.

Tomasz wypełnia formularz kontaktowy z zapytaniem o współpracę partnerską: "Jestem właścicielem agencji eventowej, szukam niezawodnego partnera do długoterminowej współpracy. Potrzebuję wyceny na kilka projektów." Otrzymuje szybką odpowiedź z propozycją spotkania i omówienia warunków współpracy partnerskiej.

**Resolution:**
Tomasz spotyka się z firmą, omawia warunki współpracy. Firma oferuje elastyczne warunki, konkurencyjne ceny i wsparcie w różnych projektach. Tomasz decyduje się na długoterminową współpracę. Przez następne miesiące firma wspiera go w realizacji różnych projektów — od małych eventów po duże koncerty. Współpraca się układa — Tomasz poleca firmę innym agencjom.

**Journey Requirements:**
- Sekcja "O nas" z historią, doświadczeniem i statystykami
- Testimonials z opiniami od różnych klientów (w tym agencji)
- Galeria portfolio pokazująca różnorodność realizacji
- Sekcja "Usługi" z kompleksową ofertą
- Formularz kontaktowy umożliwiający zapytanie o współpracę partnerską
- Szybka odpowiedź z propozycją spotkania
- Elastyczne warunki współpracy partnerskiej

---

### Journey Requirements Summary

**Wymagania funkcjonalne ujawnione przez journeys:**

1. **Hero Section:**
   - Jasny komunikat o ofercie
   - CTA do formularza kontaktowego
   - Formularz w Hero Section ("Otrzymaj wycenę w 2 minuty")

2. **Galeria Portfolio:**
   - Wysokiej jakości zdjęcia z różnorodnymi realizacjami
   - Lightbox do przeglądania zdjęć
   - Funkcja "Zapytaj o podobne wydarzenie" przy zdjęciach
   - Pre-wypełniony formularz z typem wydarzenia

3. **Sekcja "Usługi":**
   - Wizualne karty z usługami (Dźwięk, Światło, Multimedia)
   - Konkretne opisy usług
   - Kompleksowa oferta

4. **Testimonials:**
   - Opinie z ocenami (5/5)
   - Opinie od różnych typów klientów (B2B, B2C, B2B2C)
   - Social proof

5. **Sekcja "O nas":**
   - Historia i doświadczenie firmy
   - Statystyki (setki zrealizowanych wydarzeń)
   - Budowanie zaufania

6. **Formularz kontaktowy:**
   - Uproszczony (minimalne wymagane pola)
   - Automatyczne potwierdzenia (EmailJS)
   - Możliwość zapytania o współpracę partnerską

7. **Szybka odpowiedź:**
   - <4h na 90% zapytań
   - Profesjonalna komunikacja
   - Szczegółowe wyceny

8. **Nawigacja i UX:**
   - Intuicyjna nawigacja
   - Wielopunktowe wejścia do formularza
   - Mobile-first design

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Hybrydowy system — łączenie najlepszych praktyk z trzech branż**

Projekt łączy sprawdzone rozwiązania z trzech różnych branż w nowy, spójny system:

- **E-commerce:** "Koszyk zapytań" (dodawanie usług do zapytania), produkty powiązane, recenzje z ocenami
- **SaaS:** Case studies, social proof, pricing calculator, szybka odpowiedź, automatyzacja
- **Portfolio artystów:** Storytelling, behind the scenes, process showcase, wizualne inspiracje

**Innowacyjność:** To podejście nie było wcześniej stosowane w branży eventowej. Konkurenci skupiają się na jednym wzorcu (zwykle prosty landing page), podczas gdy ten projekt integruje najlepsze praktyki z różnych branż w spójny system zwiększający konwersję.

**2. Formularz w Hero Section — odwrócenie tradycyjnej struktury**

Tradycyjnie formularz kontaktowy jest na końcu strony. Ten projekt umieszcza formularz w Hero Section z komunikatem "Otrzymaj wycenę w 2 minuty".

**Innowacyjność:** Odwrócenie tradycyjnej struktury strony eventowej. Zamiast prowadzić użytkownika przez całą stronę do formularza, projekt oferuje bezpośredni dostęp do kontaktu już na początku, co zmniejsza bariery i zwiększa konwersję.

**3. Testimonials na początku — "show, don't tell"**

Zamiast zaczynać od opisu firmy, projekt zaczyna od testimonials z ocenami, pokazując dowody jakości przed opowiadaniem o firmie.

**Innowacyjność:** "Show, don't tell" — zamiast mówić o profesjonalizmie, projekt pokazuje go przez opinie klientów. To buduje zaufanie przed opisem firmy, co jest kluczowe w branży eventowej, gdzie zaufanie jest głównym czynnikiem decyzyjnym.

**4. "Koszyk zapytań" — adaptacja e-commerce do formularza kontaktowego**

Adaptacja konceptu "koszyka zakupów" z e-commerce do formularza kontaktowego, umożliwiając użytkownikom dodawanie różnych usług do zapytania.

**Innowacyjność:** Przeniesienie sprawdzonego wzorca z e-commerce do branży eventowej. Użytkownicy mogą "dodać do zapytania" różne usługi (dźwięk, światło, multimedia), co zwiększa zaangażowanie i ułatwia proces wyceny.

**5. Wielopunktowe wejścia — różne ścieżki użytkownika**

Projekt wspiera cztery główne scenariusze przepływu użytkownika, każdy prowadzący do formularza kontaktowego, zamiast jednej sztywnej ścieżki.

**Innowacyjność:** Elastyczne podejście do user journey, które rozpoznaje, że różni użytkownicy mają różne potrzeby i preferencje. Zamiast narzucać jedną ścieżkę, projekt oferuje wielopunktowe wejścia, co zwiększa szanse na konwersję.

### Market Context & Competitive Landscape

**Kontekst rynkowy:**

Branża eventowa w Polsce charakteryzuje się:
- Przestarzałymi stronami internetowymi (słaby design, słaba responsywność)
- Słabą optymalizacją konwersji (skomplikowane formularze, brak elementów zaufania)
- Brakiem przejrzystości cenowej (brak informacji o cenach, brak kalkulatora wyceny)
- Niską jakością portfolio (słabe zdjęcia, brak kontekstu)
- Słabą strategią SEO (brak wartościowych treści, słaba widoczność)

**Pozycjonowanie innowacyjne:**

Projekt wyróżnia się na rynku przez:
- Nowoczesny design i UX (przewaga nad konkurencją z przestarzałymi stronami)
- Optymalizację konwersji (uproszczony formularz, elementy zaufania, wielopunktowe wejścia)
- Przejrzystość cenową (kalkulator wyceny, pakiety usług — w fazie Growth)
- Wysokiej jakości portfolio (galeria z różnorodnymi realizacjami)
- Hybrydowy system łączący najlepsze praktyki z trzech branż

**Konkurencyjna przewaga:**

- **Szybkość odpowiedzi:** <4h na 90% zapytań (konkurenci mają długi czas odpowiedzi)
- **Przejrzystość:** Kalkulator wyceny, pakiety usług (konkurenci unikają podawania cen)
- **Optymalizacja konwersji:** Formularz w Hero Section, testimonials na początku (konkurenci mają tradycyjną strukturę)
- **Hybrydowy system:** Integracja najlepszych praktyk z E-commerce, SaaS i Portfolio (konkurenci używają jednego wzorca)

### Validation Approach

**Walidacja innowacyjnych aspektów:**

**1. Formularz w Hero Section:**
- **Metryka:** Konwersja formularza z Hero Section vs tradycyjnego formularza na końcu strony
- **Cel:** Wzrost konwersji o 30-50% (z baseline)
- **Metoda:** A/B testing (jeśli możliwe) lub porównanie z benchmarkami branżowymi
- **Fallback:** Jeśli konwersja nie wzrośnie, można przenieść formularz do tradycyjnej lokalizacji

**2. Testimonials na początku:**
- **Metryka:** Czas na stronie, Bounce rate, Gallery Engagement Rate
- **Cel:** Bounce rate <50%, czas na stronie >3 minuty
- **Metoda:** Google Analytics, heatmaps, user testing
- **Fallback:** Jeśli metryki nie poprawią się, można przenieść testimonials do tradycyjnej lokalizacji

**3. "Koszyk zapytań" (Faza 3):**
- **Metryka:** % użytkowników używających "koszyka zapytań" vs tradycyjnego formularza
- **Cel:** >30% użytkowników używa "koszyka zapytań"
- **Metoda:** Event tracking, user testing, porównanie konwersji
- **Fallback:** Jeśli użycie jest niskie, można uprościć do tradycyjnego formularza

**4. Wielopunktowe wejścia:**
- **Metryka:** Analiza ścieżek użytkownika, konwersja z różnych punktów wejścia
- **Cel:** Równomierna konwersja z różnych ścieżek
- **Metoda:** Google Analytics, user flow analysis
- **Fallback:** Jeśli niektóre ścieżki mają niską konwersję, można je zoptymalizować lub usunąć

**5. Hybrydowy system:**
- **Metryka:** Ogólna konwersja formularza, czas na stronie, bounce rate
- **Cel:** Wzrost konwersji o 30-50%, bounce rate <50%, czas na stronie >3 minuty
- **Metoda:** Porównanie z benchmarkami branżowymi, user testing
- **Fallback:** Jeśli metryki nie poprawią się, można uprościć do jednego wzorca

### Risk Mitigation

**Ryzyka innowacyjnych aspektów i strategie łagodzenia:**

**1. Formularz w Hero Section — ryzyko:**
- **Ryzyko:** Użytkownicy mogą czuć się przytłoczeni formularzem na początku, co może zwiększyć bounce rate
- **Łagodzenie:** 
  - Formularz jest uproszczony (minimalne wymagane pola)
  - Komunikat "Otrzymaj wycenę w 2 minuty" zmniejsza obawy
  - Alternatywne opcje kontaktu (telefon) są widoczne
  - Fallback: Jeśli bounce rate wzrośnie, można przenieść formularz do tradycyjnej lokalizacji

**2. Testimonials na początku — ryzyko:**
- **Ryzyko:** Użytkownicy mogą nie zrozumieć kontekstu testimonials bez opisu firmy
- **Łagodzenie:**
  - Testimonials zawierają kontekst (typ wydarzenia, nazwa klienta)
  - Sekcja "O nas" jest dostępna w nawigacji
  - Fallback: Jeśli metryki nie poprawią się, można przenieść testimonials do tradycyjnej lokalizacji

**3. "Koszyk zapytań" (Faza 3) — ryzyko:**
- **Ryzyko:** Użytkownicy mogą nie zrozumieć konceptu "koszyka zapytań", co może zwiększyć cognitive load
- **Łagodzenie:**
  - Prosty UX z jasnymi instrukcjami
  - Wizualne wskazówki (ikony, animacje)
  - Fallback: Tradycyjny formularz jest zawsze dostępny jako alternatywa
  - User testing przed wdrożeniem

**4. Wielopunktowe wejścia — ryzyko:**
- **Ryzyko:** Zbyt wiele opcji może prowadzić do "paradoksu wyboru" i zmniejszyć konwersję
- **Łagodzenie:**
  - Jasne CTA w każdym punkcie wejścia
  - Intuicyjna nawigacja
  - Fallback: Jeśli niektóre ścieżki mają niską konwersję, można je zoptymalizować lub usunąć

**5. Hybrydowy system — ryzyko:**
- **Ryzyko:** Integracja różnych wzorców może prowadzić do niespójnego UX
- **Łagodzenie:**
  - Spójny design system (kolory, typografia, ikony)
  - User testing na każdym etapie
  - Fallback: Jeśli UX jest niespójny, można uprościć do jednego wzorca

**Ogólne strategie łagodzenia ryzyka:**

1. **Iteracyjne wdrożenie:** Innowacyjne aspekty są wdrażane stopniowo (MVP → Growth → Vision), co pozwala na walidację na każdym etapie
2. **User testing:** Regularne testy z użytkownikami na każdym etapie rozwoju
3. **A/B testing:** Gdzie możliwe, testowanie innowacyjnych aspektów przeciwko tradycyjnym rozwiązaniom
4. **Fallback options:** Zawsze dostępne tradycyjne rozwiązania jako alternatywa
5. **Metryki sukcesu:** Jasne metryki sukcesu dla każdego innowacyjnego aspektu, pozwalające na szybkie wykrycie problemów

## Web App Specific Requirements

### Project-Type Overview

Projekt jest **Multi-Page Application (MPA)** zbudowany na Next.js 16.0.1 z App Router, wykorzystujący Server Components i Client Components dla optymalnej wydajności i SEO. Aplikacja jest stroną wizytówkową/marketingową z focusem na konwersję, zaufanie i profesjonalną prezentację usług eventowych.

**Kluczowe decyzje techniczne:**
- **Architektura:** MPA (Multi-Page Application) z Next.js App Router
- **Rendering:** Hybrid (Server Components dla statycznych sekcji, Client Components dla interaktywnych elementów)
- **Styling:** Tailwind CSS 4.0.0 (utility-first approach)
- **Integracje:** EmailJS (client-side email sending)

### Technical Architecture Considerations

**Next.js App Router Architecture:**
- **Server Components:** Dla statycznych sekcji (Hero, About, Services) — lepsza wydajność i SEO
- **Client Components:** Dla interaktywnych elementów (Contact form, Gallery lightbox, Navigation) — wymagana interaktywność
- **API Routes:** Nie wymagane dla MVP (EmailJS działa po stronie klienta)
- **Static Generation:** Wszystkie strony są statycznie generowane dla optymalnej wydajności

**Data Flow:**
- **Formularz kontaktowy:** Client-side (EmailJS) → bezpośrednio do emaila
- **SEO Data:** Server-side (meta tagi, structured data) → generowane podczas build
- **Images:** Next.js Image Optimization → automatyczna optymalizacja

### Browser Matrix

**Supported Browsers (Modern Browsers):**

| Browser | Minimum Version | Priority | Notes |
|---------|----------------|----------|-------|
| Chrome | 120+ | High | Główny target, pełne wsparcie |
| Firefox | 121+ | High | Pełne wsparcie, testowane |
| Safari | 17+ | High | Pełne wsparcie, testowane (macOS/iOS) |
| Edge | 120+ | Medium | Pełne wsparcie, kompatybilność z Chrome |
| Opera | 106+ | Low | Kompatybilność z Chrome |
| Samsung Internet | 23+ | Low | Testowane na urządzeniach Samsung |

**Mobile Browsers:**
- **iOS Safari:** 17+ (iPhone, iPad)
- **Chrome Mobile:** 120+ (Android)
- **Samsung Internet:** 23+ (Android Samsung)

**Browser Features Required:**
- ES6+ JavaScript support
- CSS Grid i Flexbox
- Intersection Observer API (dla scroll animations)
- Fetch API (dla EmailJS)
- Local Storage (opcjonalnie, dla analytics)

**Graceful Degradation:**
- Animacje: Fallback do CSS animations jeśli JavaScript jest wyłączony
- Formularz: Podstawowa walidacja HTML5 jeśli JavaScript nie działa
- Images: Lazy loading z fallback do standardowego ładowania

### Responsive Design

**Mobile-First Approach:**
- Projektowanie zaczyna się od mobile (320px+)
- Progressive enhancement dla większych ekranów
- Touch-friendly interakcje (minimalne rozmiary przycisków 44x44px)

**Breakpoints (Tailwind CSS):**
- **sm:** 640px (małe tablety)
- **md:** 768px (tablety)
- **lg:** 1024px (desktop)
- **xl:** 1280px (duży desktop)
- **2xl:** 1536px (bardzo duży desktop)

**Responsive Requirements:**
- **Mobile (320px - 639px):**
  - Single column layout
  - Hamburger menu
  - Stacked cards (Services, Gallery)
  - Full-width formularz
  - Touch-optimized buttons (min 44x44px)

- **Tablet (640px - 1023px):**
  - 2-column layout dla Services
  - Expanded navigation
  - Gallery grid (2-3 kolumny)
  - Formularz w 2 kolumnach (jeśli szeroki)

- **Desktop (1024px+):**
  - Multi-column layout
  - Full navigation bar
  - Gallery grid (3-4 kolumny)
  - Optimal spacing i typography

**Responsive Images:**
- Next.js Image component z responsive srcset
- WebP format z fallback do JPEG
- Lazy loading dla obrazów poza viewport
- Proper aspect ratios dla wszystkich obrazów

### Performance Targets

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

**Loading Performance:**
- **First Contentful Paint (FCP):** <1.8s
- **Time to Interactive (TTI):** <3.5s
- **Total Page Load:** <3s (na 3G connection)

**Performance Optimizations:**
- **Code Splitting:** Automatic z Next.js (route-based)
- **Image Optimization:** Next.js Image component (WebP, lazy loading)
- **Font Optimization:** next/font (Montserrat) — zero layout shift
- **CSS Optimization:** Tailwind CSS purging (usuwanie nieużywanych klas)
- **JavaScript Bundle:** Minification i compression (gzip/brotli)

**Performance Monitoring:**
- Google Analytics Core Web Vitals tracking
- Lighthouse CI dla continuous monitoring
- Real User Monitoring (RUM) dla production metrics

### SEO Strategy

**Technical SEO:**
- **Meta Tags:** Title, description, keywords dla każdej strony
- **Open Graph:** Dla social media sharing
- **Twitter Card:** Dla Twitter sharing
- **Structured Data (JSON-LD):** LocalBusiness schema
- **Sitemap.xml:** Automatycznie generowany przez Next.js
- **Robots.txt:** Kontrola crawlerów

**Content SEO:**
- **Semantic HTML:** Proper heading hierarchy (h1, h2, h3)
- **Alt Text:** Dla wszystkich obrazów w galerii
- **Internal Linking:** Linki między sekcjami
- **URL Structure:** SEO-friendly URLs (czytelne, z keywords)

**Local SEO (dla firmy eventowej):**
- **LocalBusiness Schema:** Nazwa, adres, telefon, email
- **Google Business Profile:** Integracja (jeśli dostępna)
- **Location-based Keywords:** "firma eventowa [miasto]"
- **Local Citations:** Wzmianki o lokalizacji w treści

**SEO Requirements:**
- **Title Tags:** Unikalne, 50-60 znaków, z keywords
- **Meta Descriptions:** Unikalne, 150-160 znaków, z CTA
- **Heading Tags:** H1 na każdej stronie, proper hierarchy
- **Image Alt Text:** Opisowe, z keywords (gdy relevant)
- **Internal Linking:** Linki do ważnych sekcji (Services, Gallery, Contact)

**SEO Monitoring:**
- Google Search Console dla tracking pozycji
- Google Analytics dla organic traffic
- Regularne audyty SEO (co 3 miesiące)

### Accessibility Level

**WCAG 2.1 Level AA Compliance:**

**Perceivable:**
- **Alt Text:** Wszystkie obrazy mają alt text
- **Color Contrast:** Minimum 4.5:1 dla tekstu, 3:1 dla UI elements
- **Text Alternatives:** Dla wszystkich non-text content

**Operable:**
- **Keyboard Navigation:** Wszystkie interaktywne elementy dostępne z klawiatury
- **Focus Indicators:** Widoczne focus states dla wszystkich elementów
- **Skip Links:** Skip to main content link
- **No Keyboard Traps:** Użytkownik może nawigować bez "trapów"

**Understandable:**
- **Language:** Proper lang attribute (pl)
- **Error Messages:** Jasne komunikaty błędów w formularzu
- **Form Labels:** Wszystkie pola formularza mają labels
- **Instructions:** Jasne instrukcje dla użytkownika

**Robust:**
- **Semantic HTML:** Proper HTML5 semantic elements
- **ARIA Labels:** Gdzie potrzebne (dla screen readers)
- **Form Validation:** Accessible error messages

**Accessibility Testing:**
- **Automated Testing:** axe-core, Lighthouse accessibility audit
- **Manual Testing:** Keyboard navigation, screen reader testing
- **User Testing:** Testy z użytkownikami z niepełnosprawnościami (opcjonalnie)

**Accessibility Features:**
- **Skip to Content:** Link do pominięcia nawigacji
- **Focus Management:** Proper focus handling w modals/lightbox
- **Screen Reader Support:** ARIA labels, roles, live regions
- **Color Independence:** Informacje nie są przekazywane tylko przez kolor

### Implementation Considerations

**Next.js Specific:**
- **App Router:** Wykorzystanie Server Components gdzie możliwe
- **Image Optimization:** Next.js Image component dla wszystkich obrazów
- **Font Optimization:** next/font dla Montserrat (zero layout shift)
- **Metadata API:** Dla dynamicznych meta tagów

**Client Components:**
- **Contact Form:** Client Component (EmailJS integration)
- **Gallery Lightbox:** Client Component (interaktywność)
- **Navigation:** Client Component (mobile menu toggle)
- **Animations:** Client Component (anime.js, Intersection Observer)

**Server Components:**
- **Hero Section:** Server Component (statyczna treść)
- **About Section:** Server Component (statyczna treść)
- **Services Section:** Server Component (statyczna treść)
- **Footer:** Server Component (statyczna treść)

**Performance Optimizations:**
- **Static Generation:** Wszystkie strony są statycznie generowane
- **Code Splitting:** Automatic route-based code splitting
- **Image Optimization:** WebP format, lazy loading, responsive images
- **CSS Optimization:** Tailwind CSS purging, minimal CSS bundle

**Security Considerations:**
- **HTTPS:** Wymagane dla production
- **Form Validation:** Po stronie klienta i serwera (EmailJS)
- **Data Protection:** RODO compliance dla danych osobowych
- **XSS Protection:** Sanityzacja danych wejściowych

**Deployment Considerations:**
- **Hosting:** Vercel (zalecane dla Next.js) lub inny hosting z Next.js support
- **CDN:** Automatyczna dystrybucja przez Vercel CDN
- **Environment Variables:** Secure storage dla EmailJS credentials
- **Monitoring:** Error tracking (Sentry opcjonalnie), analytics (Google Analytics)

## Functional Requirements

### Content Presentation

**FR1:** Users can view the Hero Section with clear messaging about the company's event services and value proposition.

**FR2:** Users can view the "About Us" section with company description, experience, key values, and statistics.

**FR3:** Users can view the "Services" section with visual cards displaying Sound, Lighting, and Multimedia services with descriptions.

**FR4:** Users can view the Footer with contact information, quick links, and navigation options.

**FR5:** Users can navigate between different sections of the website using the main navigation menu.

**FR6:** Users can access the website on mobile devices with responsive design that adapts to different screen sizes.

### Portfolio Gallery

**FR7:** Users can browse a high-quality portfolio gallery showcasing diverse event realizations (conferences, weddings, concerts, corporate events).

**FR8:** Users can view individual images in the gallery using a lightbox that displays images in full size.

**FR9:** Users can see portfolio images with proper aspect ratios and optimized loading (lazy loading for images outside viewport).

**FR10:** Users can view portfolio images organized in a masonry layout for optimal visual presentation.

### Contact & Communication

**FR11:** Users can access a contact form from the Hero Section with the message "Get a quote in 2 minutes".

**FR12:** Users can fill out a simplified contact form with required fields (email, message) and optional fields (name, phone).

**FR13:** Users can submit the contact form and receive automatic confirmation that their inquiry was received.

**FR14:** Users can see a visible phone number as an alternative contact method.

**FR15:** Users can contact the company via email using the email address displayed in the contact section.

**FR16:** The system can send contact form submissions via EmailJS integration to the company's email address.

**FR17:** The system can provide automatic confirmation to users after form submission.

### Trust Building

**FR18:** Users can view testimonials section with customer reviews and ratings (5/5 stars) displayed at the beginning of the page.

**FR19:** Users can see testimonials from different customer types (B2B corporate organizers, B2C private organizers, B2B2C event agencies).

**FR20:** Users can view social proof elements (customer logos, if available) to build trust.

### Navigation & Discovery

**FR21:** Users can navigate the website using a responsive navigation menu that adapts to mobile devices (hamburger menu).

**FR22:** Users can access different sections of the website through multiple entry points (Hero, Services, Gallery, About, Contact).

**FR23:** Users can scroll through the website and access all sections in a logical flow.

**FR24:** Users can use keyboard navigation to access all interactive elements on the website.

### SEO & Discoverability

**FR25:** The system can provide proper meta tags (title, description, keywords) for search engine optimization.

**FR26:** The system can provide structured data (JSON-LD) with LocalBusiness schema including company name, address, phone, and email.

**FR27:** The system can provide Open Graph metadata for social media sharing.

**FR28:** The system can provide Twitter Card metadata for Twitter sharing.

**FR29:** The system can generate SEO-friendly URLs for all pages.

**FR30:** The system can provide proper heading hierarchy (h1, h2, h3) for semantic HTML structure.

**FR31:** The system can provide alt text for all images in the gallery for accessibility and SEO.

### Accessibility

**FR32:** Users with screen readers can access all content and interactive elements through proper ARIA labels and semantic HTML.

**FR33:** Users can navigate the website using only keyboard input without mouse interaction.

**FR34:** Users can see clear focus indicators for all interactive elements during keyboard navigation.

**FR35:** Users can access a "Skip to Content" link to bypass navigation and go directly to main content.

**FR36:** The system can provide proper language attribute (pl) for screen readers and search engines.

### Form Validation & Error Handling

**FR37:** Users can see validation errors if required form fields are not filled correctly.

**FR38:** Users can see clear error messages if form submission fails.

**FR39:** Users can see success confirmation when form submission is successful.

**FR40:** The system can validate email format in the contact form before submission.

### Performance & Optimization

**FR41:** The system can optimize images automatically (WebP format, responsive srcset, lazy loading).

**FR42:** The system can provide fast page loading with code splitting for optimal performance.

**FR43:** The system can provide font optimization (Montserrat via next/font) to prevent layout shift.

### Post-MVP Features (Phase 2)

**FR44:** Users can use an online quote calculator to estimate event costs based on event type, number of guests, location, date, and selected services.

**FR45:** Users can view service packages (Basic, Standard, Premium) with pricing information.

**FR46:** Users can view case studies with context (event type, challenges, solution, results).

**FR47:** Users can view video testimonials in addition to text testimonials.

**FR48:** Users can click "Ask about similar event" button on gallery images to open a pre-filled contact form with event type.

### Post-MVP Features (Phase 3)

**FR49:** Users can browse a blog with guides, case studies, and industry tips.

**FR50:** Users can use a "Request Basket" feature to add multiple services to their inquiry before submitting.

**FR51:** Users can initiate online chat for quick contact and support.

**FR52:** Users can view interactive portfolio with filtering and categorization options.

**FR53:** Users can view virtual tour (360° photos) of event realizations.

## Non-Functional Requirements

### Performance

**NFR1:** Page load performance must meet Core Web Vitals targets:
- **LCP (Largest Contentful Paint):** <2.5 seconds
- **FID (First Input Delay):** <100 milliseconds
- **CLS (Cumulative Layout Shift):** <0.1

**NFR2:** First Contentful Paint (FCP) must complete within 1.8 seconds on 3G connection.

**NFR3:** Time to Interactive (TTI) must be <3.5 seconds on 3G connection.

**NFR4:** Total page load time must be <3 seconds on 3G connection.

**NFR5:** Image loading must use lazy loading for images outside viewport to prevent blocking initial page render.

**NFR6:** Form submission response time must be <2 seconds from user click to confirmation message display.

**Rationale:** Performance directly impacts user experience and conversion rates. Slow loading increases bounce rate and reduces trust. Core Web Vitals are critical for SEO ranking and user satisfaction.

### Security

**NFR7:** All data transmission must use HTTPS encryption (TLS 1.2 or higher).

**NFR8:** Personal data collected through contact form must comply with GDPR/RODO regulations:
- User consent for data processing
- Right to access, rectify, and delete personal data
- Data minimization (collect only necessary information)
- Secure storage and transmission

**NFR9:** Contact form submissions must be validated on both client-side and server-side (EmailJS) to prevent malicious input.

**NFR10:** All user input must be sanitized to prevent XSS (Cross-Site Scripting) attacks.

**NFR11:** Environment variables (EmailJS credentials) must be stored securely and not exposed in client-side code.

**Rationale:** Security is critical for handling personal data (names, emails, phone numbers) and building user trust. GDPR compliance is legally required in EU/Poland.

### Accessibility

**NFR12:** Website must comply with WCAG 2.1 Level AA accessibility standards.

**NFR13:** All interactive elements must be accessible via keyboard navigation without requiring mouse interaction.

**NFR14:** All images must have descriptive alt text for screen reader users.

**NFR15:** Color contrast ratio must meet WCAG AA standards:
- Normal text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio
- UI components: minimum 3:1 contrast ratio

**NFR16:** Focus indicators must be visible for all interactive elements during keyboard navigation.

**NFR17:** Website must provide "Skip to Content" link for screen reader users to bypass navigation.

**NFR18:** All form fields must have associated labels for screen reader accessibility.

**NFR19:** Error messages in forms must be clearly announced to screen reader users.

**Rationale:** Accessibility ensures the website is usable by all users, including those with disabilities. WCAG compliance is a best practice and may be legally required in some jurisdictions.

### Integration

**NFR20:** EmailJS integration must have 99% reliability for contact form submissions.

**NFR21:** EmailJS integration must handle errors gracefully with user-friendly error messages if submission fails.

**NFR22:** EmailJS integration must provide automatic confirmation to users within 2 seconds of form submission.

**NFR23:** System must have fallback mechanism (visible phone number, direct email) if EmailJS integration fails.

**Rationale:** EmailJS integration is critical for contact form functionality. High reliability ensures all user inquiries are received, and fallback options maintain user trust.

### Reliability

**NFR24:** Website uptime must be >99.5% (approximately 3.6 hours downtime per month maximum).

**NFR25:** Contact form must have 100% reliability - all valid form submissions must be successfully delivered to company email.

**NFR26:** System must have zero critical errors that prevent core functionality (contact form, navigation, content display).

**NFR27:** System must handle network failures gracefully with appropriate error messages and retry mechanisms.

**Rationale:** Reliability is critical for a marketing website. Downtime or failed contact form submissions result in lost business opportunities and damage to company reputation.

### Browser Compatibility

**NFR28:** Website must function correctly on modern browsers:
- Chrome 120+, Firefox 121+, Safari 17+, Edge 120+
- Mobile browsers: iOS Safari 17+, Chrome Mobile 120+, Samsung Internet 23+

**NFR29:** Website must provide graceful degradation for unsupported browser features (e.g., CSS animations fallback if JavaScript disabled).

**NFR30:** Website must be responsive and functional on screen sizes from 320px (mobile) to 1920px+ (large desktop).

**Rationale:** Browser compatibility ensures the website works for the majority of users. Responsive design is critical as >60% of traffic is expected from mobile devices.

### SEO & Discoverability

**NFR31:** Website must pass Google Mobile-Friendly Test for mobile search ranking.

**NFR32:** All pages must have unique, descriptive meta titles (50-60 characters) and meta descriptions (150-160 characters).

**NFR33:** Website must provide structured data (JSON-LD) with LocalBusiness schema including company name, address, phone, and email.

**NFR34:** Website must provide Open Graph metadata for social media sharing.

**NFR35:** Website must provide Twitter Card metadata for Twitter sharing.

**NFR36:** Website must have proper heading hierarchy (h1, h2, h3) for semantic HTML structure.

**Rationale:** SEO is critical for visibility in search engines. Local SEO is particularly important for event companies as users search for "firma eventowa [miasto]".

### Data Privacy

**NFR37:** Website must display privacy policy and cookie consent (if cookies are used) in compliance with GDPR/RODO.

**NFR38:** Personal data collected through contact form must be processed only for the purpose of responding to inquiries.

**NFR39:** Personal data must not be shared with third parties without explicit user consent.

**NFR40:** System must allow users to request deletion of their personal data.

**Rationale:** Data privacy compliance is legally required (GDPR/RODO) and builds user trust. Clear privacy practices reduce barriers to contact.

