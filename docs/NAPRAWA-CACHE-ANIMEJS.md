# Naprawa Cache anime.js

**Data:** 2025-12-14  
**Problem:** Next.js HMR cache nadal próbuje załadować anime.js mimo usunięcia z package.json

---

## 🔧 Wykonane Kroki

1. ✅ **Zatrzymano serwer dev** - proces 81266
2. ✅ **Wyczyszczono wszystkie cache:**
   - `.next/` - cache Next.js
   - `node_modules/.cache/` - cache npm
   - `.turbo/` - cache Turbopack
3. ✅ **Zweryfikowano package-lock.json** - anime.js nie jest w dependencies
4. ✅ **Zainstalowano zależności** - `npm install`
5. ✅ **Przetestowano build** - działa bez błędów

---

## 📋 Instrukcje dla Użytkownika

### Krok 1: Zatrzymaj serwer dev
```bash
# W terminalu gdzie działa `npm run dev`, naciśnij:
Ctrl+C
```

### Krok 2: Wyczyść cache (jeśli jeszcze nie wyczyszczone)
```bash
rm -rf .next node_modules/.cache .turbo
```

### Krok 3: Zainstaluj zależności
```bash
npm install
```

### Krok 4: Uruchom serwer dev ponownie
```bash
npm run dev
```

---

## ✅ Weryfikacja

Po restarcie serwera:
- ✅ Brak błędów o anime.js w konsoli
- ✅ Strona ładuje się poprawnie
- ✅ Wszystkie komponenty działają

---

## 🔍 Jeśli Problem Nadal Występuje

1. **Wyczyść cache przeglądarki:**
   - Chrome/Edge: Ctrl+Shift+Delete → Wyczyść cache
   - Lub użyj trybu incognito

2. **Sprawdź czy nie ma innych procesów Next.js:**
   ```bash
   ps aux | grep "next dev"
   # Zatrzymaj wszystkie procesy
   ```

3. **Sprawdź czy port 3000 jest wolny:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

4. **Zrestartuj całkowicie:**
   ```bash
   rm -rf .next node_modules/.cache .turbo
   npm install
   npm run dev
   ```

---

**Status:** ✅ Cache wyczyszczony, gotowe do restartu serwera dev.

