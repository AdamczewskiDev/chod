# Instrukcje Konfiguracji - Dane Kontaktowe

## Dane do Zaktualizowania

### 1. Numer Telefonu
**Lokalizacja:** `components/Contact.tsx` (linia ~86)

Zastąp placeholder:
```tsx
+48 XXX XXX XXX
```

Prawdziwym numerem telefonu:
```tsx
+48 123 456 789  // Przykład
```

**Status:** ⚠️ Wymaga aktualizacji przez Product Owner

### 2. Linki Social Media
**Lokalizacja:** `components/Contact.tsx` (linie ~96, ~108)

Zastąp placeholder linki:
```tsx
href="https://facebook.com"
href="https://instagram.com"
```

Prawdziwymi linkami do profili:
```tsx
href="https://facebook.com/twoj-profil"
href="https://instagram.com/twoj-profil"
```

**Status:** ⚠️ Wymaga aktualizacji przez Product Owner

### 3. URL Strony
**Lokalizacja:** `app/layout.tsx` (kilka miejsc)

Zastąp placeholder:
```tsx
https://chod.pl
```

Prawdziwym URL strony (jeśli już jest wdrożona):
```tsx
https://twoja-domena.pl
```

**Status:** ⚠️ Wymaga aktualizacji po deployment

### 4. Kody Weryfikacyjne SEO
**Lokalizacja:** `app/layout.tsx` (linia ~67)

Po dodaniu strony do Google Search Console i Bing Webmaster Tools, odkomentuj i dodaj kody:
```tsx
verification: {
  google: "twój-kod-google",
  yandex: "twój-kod-yandex",
},
```

**Status:** ⚠️ Wymaga konfiguracji po deployment

### 5. Integracja Email ✅ ZAIMPLEMENTOWANA
**Lokalizacja:** `app/api/contact/route.ts` i `app/lib/resend.ts`

✅ **Status:** Zaimplementowane w Sprint 1

**Konfiguracja:**
1. Utwórz konto na https://resend.com
2. Wygeneruj API Key
3. Dodaj do `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=kontakt@chod.pl
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Szczegółowe instrukcje:** Zobacz `docs/KONFIGURACJA-RESEND.md`

## Uwagi

- ✅ Formularz wysyła emaile przez Resend API
- ✅ Rate limiting jest aktywny (5 requestów na minutę)
- ✅ Wszystkie dane są sanitizowane przed przetworzeniem
- ✅ Error handling zaimplementowany
- ⚠️ W production wymagana weryfikacja domain w Resend

