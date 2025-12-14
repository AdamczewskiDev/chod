# Instrukcja Konfiguracji Resend

## Krok 1: Utworzenie Konta Resend

1. Przejdź na https://resend.com
2. Utwórz darmowe konto
3. Przejdź do sekcji API Keys
4. Wygeneruj nowy API Key

## Krok 2: Konfiguracja Lokalna

1. Utwórz plik `.env.local` w głównym katalogu projektu:

```bash
cp .env.example .env.local
```

2. Dodaj swój Resend API Key:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=kontakt@chod.pl
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Uwaga:** W development możesz użyć `onboarding@resend.dev` jako FROM email. W production musisz zweryfikować własny domain.

## Krok 3: Weryfikacja Domain (Production)

1. W Resend dashboard, przejdź do Domains
2. Dodaj swój domain (np. chod.pl)
3. Dodaj DNS records do swojego DNS provider
4. Po weryfikacji, użyj `kontakt@chod.pl` jako FROM email

## Krok 4: Testowanie

1. Uruchom serwer: `npm run dev`
2. Wypełnij formularz kontaktowy
3. Sprawdź czy email przychodzi do `CONTACT_EMAIL`
4. Sprawdź console logs dla błędów

## Troubleshooting

### Email nie przychodzi
- Sprawdź czy `RESEND_API_KEY` jest poprawny
- Sprawdź Resend dashboard dla logs
- Sprawdź spam folder
- W development, sprawdź console logs

### Błąd "Domain not verified"
- W development: użyj `onboarding@resend.dev`
- W production: zweryfikuj domain w Resend

### Rate Limiting
- Resend ma limit 100 emaili/dzień na darmowym planie
- Sprawdź usage w Resend dashboard

---

**Dokumentacja wygenerowana przez:** BMAD Dev Agent

