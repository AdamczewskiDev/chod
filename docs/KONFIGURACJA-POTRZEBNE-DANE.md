# Konfiguracja - Potrzebne Dane

**Data:** $(date)
**Status:** ⏳ Oczekiwanie na dane

---

## 📋 Dane Potrzebne do Konfiguracji

Aby dokończyć konfigurację i przetestować formularz kontaktowy, potrzebuję następujących danych:

### 1. 🔑 Resend API Key (WYMAGANE)

**Co to jest:** Klucz API do serwisu Resend, który będzie wysyłał emaile z formularza.

**Jak uzyskać:**
1. Przejdź na https://resend.com
2. Utwórz darmowe konto (lub zaloguj się)
3. Przejdź do sekcji "API Keys"
4. Kliknij "Create API Key"
5. Skopiuj wygenerowany klucz (zaczyna się od `re_`)

**Format:** `re_xxxxxxxxxxxxx`

**Gdzie dodać:** Plik `.env.local` w głównym katalogu projektu

---

### 2. 📞 Numer Telefonu (OPCJONALNE - dla Story CHOD-201)

**Co to jest:** Prawdziwy numer telefonu firmy do wyświetlenia na stronie.

**Format:** `+48 XXX XXX XXX` lub `+48XXXXXXXXX`

**Gdzie dodać:** `components/Contact.tsx`

---

### 3. 🌐 Linki Social Media (OPCJONALNE - dla Story CHOD-201)

**Co to jest:** Prawdziwe linki do profili Facebook i Instagram.

**Format:**
- Facebook: `https://facebook.com/twoj-profil` lub `https://www.facebook.com/twoj-profil`
- Instagram: `https://instagram.com/twoj-profil` lub `https://www.instagram.com/twoj-profil`

**Gdzie dodać:** `components/Contact.tsx`

---

## 🚀 Co Zrobię Po Otrzymaniu Danych

1. **Zaktualizuję `.env.local`** z Resend API Key
2. **Zaktualizuję dane kontaktowe** w `components/Contact.tsx`
3. **Przeprowadzę test** wysyłki email przez formularz
4. **Zweryfikuję** czy wszystko działa poprawnie

---

## 📝 Instrukcje

**Opcja 1: Podaj mi dane tutaj**
- Wystarczy, że napiszesz:
  - Resend API Key: `re_xxxxx`
  - Telefon: `+48 XXX XXX XXX` (lub "pomiń na razie")
  - Facebook: `https://...` (lub "pomiń na razie")
  - Instagram: `https://...` (lub "pomiń na razie")

**Opcja 2: Zaktualizuj samodzielnie**
- Edytuj `.env.local` i dodaj `RESEND_API_KEY=re_xxxxx`
- Edytuj `components/Contact.tsx` i zaktualizuj dane
- Daj mi znać gdy będziesz gotowy do testu

---

**Status:** ⏳ Czekam na dane...

