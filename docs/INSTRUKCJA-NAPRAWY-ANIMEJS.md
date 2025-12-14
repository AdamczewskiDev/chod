# Instrukcja Naprawy Problemu z anime.js

**Problem:** Next.js nadal próbuje załadować anime.js mimo usunięcia z package.json

---

## 🔧 Rozwiązanie Krok po Kroku

### Krok 1: Zatrzymaj serwer dev
```bash
# W terminalu gdzie działa npm run dev:
Ctrl+C
```

### Krok 2: Zatrzymaj wszystkie procesy Next.js
```bash
pkill -f "next dev"
```

### Krok 3: Zwolnij port 3000
```bash
lsof -ti:3000 | xargs kill -9
```

### Krok 4: Wyczyść WSZYSTKIE cache
```bash
rm -rf .next
rm -rf .turbo
rm -rf node_modules/.cache
rm -rf .swc
```

### Krok 5: Zainstaluj zależności ponownie
```bash
npm install
```

### Krok 6: Wyczyść cache przeglądarki
- **Chrome/Edge:** `Ctrl+Shift+Delete` → Wybierz "Cached images and files" → Wyczyść
- **Lub użyj trybu incognito:** `Ctrl+Shift+N`

### Krok 7: Uruchom serwer dev
```bash
npm run dev
```

---

## 🚀 Szybkie Rozwiązanie (Skrypt)

Użyj skryptu do automatycznego czyszczenia:

```bash
./scripts/clean-cache.sh
npm install
npm run dev
```

---

## 🔍 Weryfikacja

Po restarcie sprawdź:
1. ✅ Brak błędów o anime.js w konsoli przeglądarki
2. ✅ Strona ładuje się poprawnie
3. ✅ Wszystkie komponenty działają

---

## ⚠️ Jeśli Problem Nadal Występuje

### Opcja 1: Hard Refresh w przeglądarce
- **Chrome/Edge:** `Ctrl+Shift+R` lub `Ctrl+F5`
- **Safari:** `Cmd+Shift+R`

### Opcja 2: Wyczyść cache przeglądarki całkowicie
1. Otwórz DevTools (F12)
2. Kliknij prawym przyciskiem na przycisk odświeżania
3. Wybierz "Empty Cache and Hard Reload"

### Opcja 3: Użyj trybu incognito
- Otwórz nowe okno incognito
- Przejdź do `http://localhost:3000`

### Opcja 4: Sprawdź czy nie ma innych procesów
```bash
ps aux | grep "next dev"
# Jeśli są, zatrzymaj je:
pkill -f "next dev"
```

### Opcja 5: Zrestartuj całkowicie
```bash
# Zatrzymaj wszystko
pkill -f "next dev"
lsof -ti:3000 | xargs kill -9

# Wyczyść wszystko
rm -rf .next .turbo node_modules/.cache .swc

# Zainstaluj ponownie
npm install

# Uruchom
npm run dev
```

---

## 📝 Uwagi

1. **Cache przeglądarki** - często jest główną przyczyną problemu
2. **HMR (Hot Module Replacement)** - Next.js może mieć stare informacje w pamięci
3. **Port 3000** - upewnij się, że jest wolny przed restartem

---

**Status:** Gotowe do wykonania - wykonaj kroki powyżej w kolejności.

