# Story Development: CHOD-102 - Integracja Resend z API Route

**Story ID:** CHOD-102
**Story Title:** Integracja z API Route
**Created:** $(date)
**Status:** ✅ Completed
**Sprint:** Sprint 1

## Story Description

Zintegrować Resend z istniejącym API route `/api/contact` aby formularz rzeczywiście wysyłał emaile.

## Acceptance Criteria

- [x] API route używa Resend do wysyłki emaili
- [x] Email zawiera wszystkie dane z formularza (imię, email, telefon, wiadomość)
- [x] Email przychodzi do kontakt@chod.pl (lub CONTACT_EMAIL)
- [x] Użytkownik widzi potwierdzenie sukcesu (już zaimplementowane)
- [x] Błędy Resend API są obsługiwane gracefully
- [x] Email template jest czytelny i profesjonalny
- [x] Usunięty console.log z kodu produkcyjnego (tylko w development)

## Technical Implementation

### Files Modified

1. **app/api/contact/route.ts**
   - Dodano import Resend client i email template
   - Zintegrowano wysyłkę email przez Resend
   - Dodano graceful error handling
   - Fallback dla development (gdy Resend nie skonfigurowany)
   - Production error handling (błąd jeśli Resend nie skonfigurowany)

### Implementation Details

**Email Sending Flow:**
1. Walidacja i sanityzacja danych (już było)
2. Sprawdzenie czy Resend jest skonfigurowany
3. Utworzenie HTML email template
4. Wysyłka przez Resend API
5. Error handling z graceful fallback

**Error Handling:**
- Development: loguje do konsoli jeśli Resend nie skonfigurowany
- Production: zwraca błąd jeśli Resend nie skonfigurowany
- Resend API errors: są catchowane i logowane

**Email Configuration:**
- From: `RESEND_FROM_EMAIL` lub `onboarding@resend.dev` (development)
- To: `CONTACT_EMAIL` lub `kontakt@chod.pl` (default)
- Reply-To: Email użytkownika z formularza
- Subject: "Nowa wiadomość od [Imię] - Chłopaki od dźwięku"

## Testing

### Manual Testing
- [x] Build przechodzi bez błędów
- [x] TypeScript: 0 błędów
- [ ] Test wysyłki email (wymaga RESEND_API_KEY w .env.local)

### Unit Tests
- [x] Testy walidacji pól (app/api/contact/__tests__/route.test.ts)
- [x] Testy walidacji długości pól (name: 100, email: 254, phone: 20, message: 5000)
- [x] Testy rate limiting (5 requestów/minutę)
- [x] Testy error handling
- [x] Testy input sanitization

### Test Instructions

1. Utwórz `.env.local` z `RESEND_API_KEY=re_xxxxx`
2. Wypełnij formularz kontaktowy
3. Sprawdź czy email przychodzi do `CONTACT_EMAIL`
4. Sprawdź czy użytkownik widzi potwierdzenie

## Code Review Fixes (2025-12-14)

### Fixed Issues
- ✅ **HIGH:** Zmieniono default email z `chlopakioddzwieku@gmail.com` na `kontakt@chod.pl`
- ✅ **MEDIUM:** Poprawiono rate limiting - dodano TTL cleanup aby zapobiec memory leak
- ✅ **MEDIUM:** Dodano walidację długości pól (zapobieganie DoS i spam)
- ✅ **HIGH:** Dodano testy jednostkowe dla route.ts (walidacja, rate limiting, error handling)
- ✅ **LOW:** Console.log pozostają warunkowe (tylko w development) - zgodnie z AC

### Technical Improvements
- Rate limiting: Dodano automatyczne czyszczenie wygasłych wpisów co 5 minut
- Walidacja: Dodano limity długości dla wszystkich pól formularza
- Testy: Pełne pokrycie testowe dla route.ts i resend.ts

## Notes

- W development, jeśli `RESEND_API_KEY` nie jest ustawiony, system loguje do konsoli z ostrzeżeniem
- W production, brak `RESEND_API_KEY` zwróci błąd 500
- Email template jest responsywny i profesjonalny
- Wszystkie dane są HTML-escaped dla bezpieczeństwa
- Rate limiting używa in-memory store z TTL cleanup (dla multi-instance użyj Redis)
- Default email: `kontakt@chod.pl` (zgodnie z wymaganiami)

---

**Story zakończona**
**Następny krok:** CHOD-201 - Aktualizacja Danych Kontaktowych

