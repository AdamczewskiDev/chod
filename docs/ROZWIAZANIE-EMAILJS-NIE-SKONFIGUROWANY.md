# Rozwiązanie Problemu: EmailJS nie jest skonfigurowany

**Problem:** Błąd "EmailJS nie jest skonfigurowany. Sprawdź zmienne środowiskowe."

**Przyczyna:** Next.js nie załadował zmiennych środowiskowych z `.env.local`

---

## 🔧 Rozwiązanie

### Krok 1: Sprawdź Plik .env.local

Upewnij się, że plik `.env.local` istnieje i zawiera:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_7n3f2pp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_635wv83
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=4qwG5APmG_JH0S8Tv
```

### Krok 2: WAŻNE - Restart Serwera

**Next.js ładuje zmienne środowiskowe tylko przy starcie serwera!**

1. **Zatrzymaj serwer:** `Ctrl+C` w terminalu gdzie działa `npm run dev`
2. **Uruchom ponownie:** `npm run dev`

### Krok 3: Sprawdź w Konsoli

Po restarcie, w konsoli przeglądarki (DevTools → Console) powinieneś zobaczyć:
```
EmailJS Config: { serviceId: "✓", templateId: "✓", publicKey: "✓" }
```

Jeśli widzisz `✗` zamiast `✓`, zmienne nie są załadowane.

---

## ⚠️ Częste Problemy

### Problem 1: Serwer nie został zrestartowany
**Rozwiązanie:** Zatrzymaj i uruchom ponownie `npm run dev`

### Problem 2: Zmienne nie zaczynają się od NEXT_PUBLIC_
**Rozwiązanie:** W Next.js, zmienne dostępne w przeglądarce MUSZĄ zaczynać się od `NEXT_PUBLIC_`

### Problem 3: Plik .env.local nie istnieje lub jest w złym miejscu
**Rozwiązanie:** 
- Plik musi być w głównym katalogu projektu (tam gdzie `package.json`)
- Nazwa musi być dokładnie `.env.local` (z kropką na początku)

### Problem 4: Błędy w składni .env.local
**Rozwiązanie:**
- Nie używaj cudzysłowów wokół wartości
- Nie dodawaj spacji wokół `=`
- Każda zmienna w osobnej linii

---

## ✅ Sprawdzenie

Po restarcie serwera:

1. Otwórz http://localhost:3000
2. Otwórz DevTools (F12) → Console
3. Wypełnij formularz i wyślij
4. Sprawdź logi:
   - Jeśli widzisz `EmailJS Config: { serviceId: "✓", ... }` - wszystko OK
   - Jeśli widzisz `EmailJS Config: { serviceId: "✗", ... }` - zmienne nie są załadowane

---

**WAŻNE:** Restart serwera jest konieczny po każdej zmianie w `.env.local`!

