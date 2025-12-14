# Story Development: CHOD-101 - Konfiguracja Resend

**Story ID:** CHOD-101
**Story Title:** Konfiguracja Resend
**Created:** $(date)
**Status:** ✅ Completed
**Sprint:** Sprint 1

## Story Description

Skonfigurować Resend API dla wysyłki emaili z formularza kontaktowego.

## Acceptance Criteria

- [x] Resend package zainstalowany (`npm install resend`)
- [x] Environment variable `RESEND_API_KEY` skonfigurowany (dokumentacja w .env.example)
- [x] Resend client utworzony w `app/lib/resend.ts`
- [x] Email template helper utworzony
- [x] `.env.example` zaktualizowany z dokumentacją

## Technical Implementation

### Files Created/Modified

1. **app/lib/resend.ts** (NOWY)
   - Resend client initialization
   - Email template helper function
   - HTML escape function dla bezpieczeństwa

2. **.env.example** (NOWY)
   - Dokumentacja wszystkich environment variables
   - Instrukcje konfiguracji

3. **package.json** (ZMODYFIKOWANY)
   - Dodano dependency: `resend`

### Implementation Details

**Resend Client:**
- Conditional initialization (tylko jeśli API key jest dostępny)
- Graceful fallback w development

**Email Template:**
- Profesjonalny HTML template
- Responsive design
- Wszystkie dane z formularza
- HTML escaping dla bezpieczeństwa

**Environment Variables:**
- `RESEND_API_KEY` - wymagany dla produkcji
- `CONTACT_EMAIL` - email odbiorcy
- `RESEND_FROM_EMAIL` - email nadawcy

## Testing

### Manual Testing
- [x] Build przechodzi bez błędów
- [ ] Test wysyłki email (wymaga RESEND_API_KEY)

### Next Steps
- Story CHOD-102: Integracja z API Route

## Notes

- Resend client jest gotowy do użycia
- W development, jeśli API key nie jest ustawiony, system loguje do konsoli
- W production, brak API key zwróci błąd

---

**Story zakończona**
**Następny krok:** CHOD-102 - Integracja z API Route

