# Instrukcja: Jak Uzyskać Resend API Key - Krok po Kroku

## Co to jest Resend?

**Resend** to serwis do wysyłania emaili z aplikacji. Jest prosty w użyciu i ma darmowy plan (100 emaili/dzień).

## Dlaczego Resend?

- ✅ Darmowy plan (100 emaili/dzień)
- ✅ Prosty w użyciu
- ✅ Dobre dla małych projektów
- ✅ Łatwa integracja z Next.js

## Krok po Kroku - Jak Uzyskać API Key

### Krok 1: Wejdź na stronę Resend
Przejdź na: **https://resend.com**

### Krok 2: Utwórz Konto
1. Kliknij **"Sign Up"** (lub "Get Started")
2. Możesz zalogować się przez:
   - Email
   - GitHub (najszybsze)
   - Google

### Krok 3: Przejdź do API Keys
1. Po zalogowaniu, w dashboardzie znajdź sekcję **"API Keys"**
2. Kliknij **"Create API Key"** lub **"New API Key"**

### Krok 4: Utwórz Nowy Klucz
1. Podaj nazwę (np. "chod-website")
2. Kliknij **"Create"**
3. **WAŻNE:** Skopiuj klucz od razu - pokazuje się tylko raz!
4. Klucz wygląda tak: `re_1234567890abcdefghijklmnop`

### Krok 5: Skopiuj Klucz
Skopiuj cały klucz (zaczyna się od `re_`) i prześlij mi go.

---

## Alternatywa: Jeśli Nie Chcesz Używać Resend

Mogę skonfigurować formularz tak, aby:
- Logował wiadomości do konsoli (tylko development)
- Lub użyć innego serwisu (EmailJS, Formspree)

**Ale Resend jest najprostszy i darmowy!**

---

## Co Zrobię Gdy Otrzymam API Key

1. Dodam klucz do `.env.local`
2. Zaktualizuję dane kontaktowe (telefon, email)
3. Przetestuję formularz
4. Sprawdzę czy email przychodzi

---

**Czekam na Twój Resend API Key!** 🔑

Jeśli masz problemy z rejestracją, daj znać - pomogę!

