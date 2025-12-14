# Sprint Planning - Sprint 1

**Sprint:** Sprint 1 - Integracja Email i Aktualizacja Danych
**Data:** $(date)
**Czas trwania:** 1 tydzień
**Team:** Dev Team
**Facilitator:** BMAD SM Agent

## Sprint Goals

### Primary Goal
Zintegrować email service (Resend) z formularzem kontaktowym i zaktualizować dane kontaktowe, aby formularz rzeczywiście wysyłał emaile do firmy.

### Secondary Goals
- Skonfigurować Resend API
- Zaktualizować prawdziwe dane kontaktowe
- Upewnić się, że formularz działa end-to-end

## Sprint Backlog

### User Stories

#### Story 1: Konfiguracja Resend
- **Story ID:** CHOD-101
- **Priority:** 🔴 WYSOKI
- **Estimate:** 2 Story Points
- **Asignee:** Dev
- **Description:** Skonfigurować Resend API dla wysyłki emaili z formularza kontaktowego
- **Acceptance Criteria:**
  - [ ] Resend package zainstalowany (`npm install resend`)
  - [ ] Environment variable `RESEND_API_KEY` skonfigurowany
  - [ ] Resend client utworzony w `app/lib/resend.ts`
  - [ ] Test wysyłki email działa lokalnie
  - [ ] `.env.example` zaktualizowany z dokumentacją

#### Story 2: Integracja z API Route
- **Story ID:** CHOD-102
- **Priority:** 🔴 WYSOKI
- **Estimate:** 3 Story Points
- **Asignee:** Dev
- **Description:** Zintegrować Resend z istniejącym API route `/api/contact`
- **Acceptance Criteria:**
  - [ ] API route używa Resend do wysyłki emaili
  - [ ] Email zawiera wszystkie dane z formularza (imię, email, telefon, wiadomość)
  - [ ] Email przychodzi do kontakt@chod.pl
  - [ ] Użytkownik widzi potwierdzenie sukcesu
  - [ ] Błędy Resend API są obsługiwane gracefully
  - [ ] Email template jest czytelny i profesjonalny
  - [ ] Usunięty console.log z kodu produkcyjnego

#### Story 3: Aktualizacja Danych Kontaktowych
- **Story ID:** CHOD-201
- **Priority:** 🔴 WYSOKI
- **Estimate:** 1 Story Point
- **Asignee:** Dev (wymaga danych od Product Owner)
- **Description:** Zastąpić placeholder dane kontaktowe prawdziwymi danymi
- **Acceptance Criteria:**
  - [ ] Prawdziwy numer telefonu zamiast "+48 XXX XXX XXX"
  - [ ] Prawdziwe linki do Facebook i Instagram
  - [ ] Wszystkie linki działają i prowadzą do właściwych profili
  - [ ] Komentarze TODO usunięte
  - [ ] Dokumentacja zaktualizowana

## Capacity Planning

**Total Story Points:** 6 SP
**Team Velocity:** N/A (pierwszy sprint)
**Planned Velocity:** 6 SP (realistyczne dla 1 tygodnia)

## Dependencies

- **CHOD-101 → CHOD-102:** Story 2 wymaga ukończenia Story 1
- **CHOD-201:** Wymaga dostarczenia prawdziwych danych od Product Owner

## Risks and Blockers

### Risks
- **Resend API Key:** Wymaga rejestracji i uzyskania API key
  - **Mitigation:** Utworzyć konto Resend przed rozpoczęciem
- **Prawdziwe dane kontaktowe:** Może być opóźnienie w dostarczeniu
  - **Mitigation:** Zacząć od Stories 1-2, Story 3 może być zrobiona gdy dane będą dostępne

### Blockers
- Brak Resend API key (może zablokować Story 1-2)
- Brak prawdziwych danych kontaktowych (blokuje Story 3)

## Definition of Done

- [ ] Code reviewed and approved
- [ ] Wszystkie acceptance criteria spełnione
- [ ] Testy manualne wykonane
- [ ] Dokumentacja zaktualizowana
- [ ] Environment variables skonfigurowane
- [ ] Build przechodzi bez błędów
- [ ] Formularz działa end-to-end (test wysyłki email)

## Technical Notes

### Resend Setup
1. Utworzyć konto na https://resend.com
2. Wygenerować API key
3. Dodać do `.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Dodać do `.env.example`: `RESEND_API_KEY=`

### Email Template Structure
- Subject: "Nowa wiadomość od [Imię]"
- Body: HTML template z danymi formularza
- From: kontakt@chod.pl (lub zweryfikowany domain)
- To: kontakt@chod.pl

## Notes

- Story 3 może być wykonana równolegle z Stories 1-2, jeśli dane będą dostępne
- Priorytet: Stories 1-2 są krytyczne dla funkcjonalności
- Story 3 jest ważna, ale może być zrobiona później jeśli dane nie są dostępne

---

**Sprint Planning zakończony**
**Status:** ✅ Gotowy do rozpoczęcia implementacji

**Następny krok:** Rozpoczęcie implementacji Story CHOD-101

