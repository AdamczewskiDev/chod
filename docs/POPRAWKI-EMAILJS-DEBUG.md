# Poprawki EmailJS - Debug i Obsługa Błędów

**Data:** $(date)
**Status:** ✅ Kod poprawiony

---

## 🔧 Co Zostało Poprawione

### 1. Inicjalizacja EmailJS
- ✅ Przeniesiona do `useEffect` - inicjalizuje się raz przy starcie komponentu
- ✅ Nie inicjalizuje się przy każdym submit

### 2. Lepsza Obsługa Błędów
- ✅ Szczegółowe logowanie błędów w konsoli
- ✅ Wyświetlanie konkretnych komunikatów błędów
- ✅ Obsługa różnych typów błędów EmailJS

### 3. Debug Logging
- ✅ Logowanie konfiguracji (czy zmienne są załadowane)
- ✅ Logowanie sukcesu
- ✅ Szczegółowe logowanie błędów

---

## 🧪 Testowanie

### Krok 1: Restart Serwera
Serwer został zatrzymany. Uruchom ponownie:
```bash
npm run dev
```

### Krok 2: Sprawdź Konsolę
1. Otwórz DevTools (F12)
2. Przejdź do zakładki "Console"
3. Wypełnij formularz i wyślij
4. Sprawdź logi - powinny pokazać:
   - `EmailJS Config:` - czy zmienne są załadowane
   - `EmailJS success:` - jeśli sukces
   - `EmailJS error details:` - jeśli błąd (ze szczegółami)

### Krok 3: Sprawdź Błąd
Jeśli nadal jest błąd, w konsoli zobaczysz:
- `error` - obiekt błędu
- `message` - komunikat błędu
- `text` - tekst błędu z EmailJS
- `status` - kod statusu

---

## 🔍 Możliwe Problemy i Rozwiązania

### Problem: "EmailJS nie jest skonfigurowany"
**Rozwiązanie:** 
- Sprawdź czy `.env.local` istnieje
- Restart serwera (`npm run dev`)
- Sprawdź czy zmienne zaczynają się od `NEXT_PUBLIC_`

### Problem: Błąd z EmailJS API
**Możliwe przyczyny:**
1. **Nieprawidłowy Service ID** - sprawdź w EmailJS dashboard
2. **Nieprawidłowy Template ID** - sprawdź w EmailJS dashboard
3. **Nieprawidłowy Public Key** - sprawdź w EmailJS dashboard
4. **Template nie ma wymaganych zmiennych** - sprawdź czy template używa: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

### Problem: "Invalid template"
**Rozwiązanie:**
- Sprawdź czy template istnieje w EmailJS dashboard
- Sprawdź czy template ma wszystkie wymagane zmienne
- Sprawdź czy Template ID jest poprawny

---

## 📋 Sprawdź w EmailJS Dashboard

1. Przejdź na: https://www.emailjs.com/
2. Sprawdź:
   - **Email Services** - czy `service_7n3f2pp` istnieje i jest aktywny
   - **Email Templates** - czy `template_635wv83` istnieje i ma poprawne zmienne
   - **Account** → **General** - czy Public Key jest poprawny

---

## ✅ Następne Kroki

1. **Restart serwera:** `npm run dev`
2. **Przetestuj formularz**
3. **Sprawdź konsolę** - zobaczysz szczegółowe informacje
4. **Daj mi znać** co pokazuje konsola

---

**Status:** ⏳ Czekam na restart serwera i test

Daj mi znać:
- Co pokazuje konsola po wysłaniu formularza?
- Jaki jest dokładny komunikat błędu?

