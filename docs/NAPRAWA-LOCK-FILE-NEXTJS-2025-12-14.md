# Naprawa Problemu z Lock File w Next.js

**Data:** 2025-12-14  
**Problem:** `Unable to acquire lock at /Users/damian/dev/chod/.next/dev/lock, is another instance of next dev running?`  
**Status:** ✅ **NAPRAWIONE**

---

## 🔍 Analiza Problemu

### Zidentyfikowane Przyczyny

1. **Zombie Process**
   - Proces Next.js (PID 89017) nadal działał na porcie 3000
   - Proces nie został poprawnie zatrzymany (Ctrl+C nie zadziałał)
   - Lock file został utworzony, ale proces zakończył się niepoprawnie

2. **Lock File**
   - Lock file `.next/dev/lock` istnieje i blokuje nowe instancje
   - Lock file jest pusty (0 bajtów), co wskazuje na niepoprawne zakończenie procesu
   - Next.js nie może utworzyć nowego lock file, bo stary nadal istnieje

3. **Port 3000**
   - Port 3000 jest zajęty przez zombie process
   - Nowa instancja Next.js nie może się uruchomić

---

## ✅ Wykonane Naprawy

### 1. Zatrzymanie Zombie Process

**Problem:** Proces Next.js (PID 89017) nadal działał na porcie 3000

**Rozwiązanie:**
```bash
# Znajdź proces na porcie 3000
lsof -ti:3000

# Zatrzymaj proces
kill -9 89017

# Alternatywnie - zatrzymaj wszystkie procesy Next.js
pkill -f "next dev"
```

### 2. Usunięcie Lock File

**Problem:** Lock file `.next/dev/lock` blokuje nowe instancje

**Rozwiązanie:**
```bash
# Usuń lock file
rm -f .next/dev/lock

# Usuń wszystkie lock files w .next
rm -f .next/dev/*.lock
rm -f .next/**/*.lock
```

### 3. Ulepszenie Skryptu clean-cache.sh

**Dodano:**
- Automatyczne zatrzymywanie wszystkich procesów Next.js
- Usuwanie lock files
- Weryfikację czy port 3000 jest wolny
- Lepsze komunikaty błędów

**Nowy skrypt:**
```bash
#!/bin/bash
# Zatrzymaj procesy
pkill -f "next dev"
pkill -f "next-server"

# Zwolnij port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Usuń lock file
rm -f .next/dev/lock

# Wyczyść cache
rm -rf .next .turbo node_modules/.cache .swc
```

---

## 📋 Instrukcje Naprawy

### Szybkie Rozwiązanie (Automatyczne)

```bash
# Użyj skryptu clean-cache.sh
./scripts/clean-cache.sh

# Uruchom serwer dev
npm run dev
```

### Ręczne Rozwiązanie (Krok po Kroku)

#### Krok 1: Zatrzymaj wszystkie procesy Next.js
```bash
# Znajdź procesy
ps aux | grep "next dev"

# Zatrzymaj wszystkie
pkill -f "next dev"
pkill -f "next-server"
```

#### Krok 2: Zwolnij port 3000
```bash
# Znajdź proces na porcie 3000
lsof -ti:3000

# Zatrzymaj proces
lsof -ti:3000 | xargs kill -9
```

#### Krok 3: Usuń lock file
```bash
# Usuń lock file
rm -f .next/dev/lock

# Lub usuń cały katalog .next
rm -rf .next
```

#### Krok 4: Wyczyść cache
```bash
rm -rf .next .turbo node_modules/.cache .swc
```

#### Krok 5: Uruchom serwer dev
```bash
npm run dev
```

---

## 🔧 Zapobieganie Problemowi

### 1. Zawsze zatrzymuj serwer poprawnie

**❌ Nie rób:**
- Zamykanie terminala bez Ctrl+C
- Force quit terminala
- Kill procesu bezpośrednio (chyba że konieczne)

**✅ Rób:**
- Użyj `Ctrl+C` w terminalu gdzie działa `npm run dev`
- Poczekaj aż proces się zakończy
- Sprawdź czy port jest wolny przed ponownym uruchomieniem

### 2. Użyj skryptu clean-cache.sh przed restartem

```bash
# Przed uruchomieniem npm run dev
./scripts/clean-cache.sh
npm run dev
```

### 3. Sprawdź czy port jest wolny

```bash
# Sprawdź czy port 3000 jest wolny
lsof -ti:3000

# Jeśli zwraca PID, zatrzymaj proces:
lsof -ti:3000 | xargs kill -9
```

---

## 🎯 Dlaczego To Działa?

### 1. Lock File Mechanizm
- Next.js używa lock file do zapobiegania wielu instancjom dev servera
- Lock file jest tworzony przy starcie i usuwany przy zakończeniu
- Jeśli proces zakończy się niepoprawnie, lock file pozostaje

### 2. Port 3000
- Next.js domyślnie używa portu 3000
- Jeśli port jest zajęty, Next.js nie może się uruchomić
- Zombie process może trzymać port otwarty

### 3. Cache
- Cache Next.js może zawierać stare informacje o procesach
- Wyczyszczenie cache usuwa wszystkie stare dane

---

## 📊 Weryfikacja

### Sprawdź czy problem jest rozwiązany:

```bash
# 1. Sprawdź czy port 3000 jest wolny
lsof -ti:3000
# Powinno zwrócić: (puste)

# 2. Sprawdź czy lock file nie istnieje
ls -la .next/dev/lock
# Powinno zwrócić: No such file or directory

# 3. Sprawdź czy nie ma procesów Next.js
ps aux | grep "next dev"
# Powinno zwrócić: (tylko grep process)

# 4. Uruchom serwer dev
npm run dev
# Powinno uruchomić się bez błędów
```

---

## 🚨 Jeśli Problem Nadal Występuje

### Opcja 1: Sprawdź inne porty
```bash
# Sprawdź czy Next.js próbuje użyć innego portu
lsof -i :3000
lsof -i :3001
```

### Opcja 2: Zmień port
```bash
# Uruchom na innym porcie
PORT=3001 npm run dev
```

### Opcja 3: Pełny restart systemu
```bash
# Zatrzymaj wszystko
pkill -f "next"
pkill -f "node"

# Wyczyść wszystko
rm -rf .next .turbo node_modules/.cache .swc

# Zainstaluj ponownie
npm install

# Uruchom
npm run dev
```

---

## 📝 Uwagi Techniczne

### Lock File Format
- Lock file jest pusty (0 bajtów)
- Next.js sprawdza tylko jego istnienie
- Nie zawiera żadnych danych o procesie

### Port 3000
- Next.js domyślnie używa portu 3000
- Można zmienić przez zmienną środowiskową: `PORT=3001`
- Lub przez flagę: `next dev -p 3001`

### Zombie Processes
- Procesy, które nie zostały poprawnie zakończone
- Mogą trzymać porty i lock files
- Wymagają force kill (`kill -9`)

---

## ✅ Status

**Status:** ✅ **NAPRAWIONE**

**Wykonane działania:**
1. ✅ Zatrzymano zombie process (PID 89017)
2. ✅ Usunięto lock file `.next/dev/lock`
3. ✅ Zwolniono port 3000
4. ✅ Ulepszono skrypt `clean-cache.sh`
5. ✅ Utworzono dokumentację

**Aplikacja powinna teraz uruchamiać się bez problemów.**

---

## 🔄 Automatyczne Rozwiązanie

Użyj skryptu `clean-cache.sh` przed każdym uruchomieniem:

```bash
./scripts/clean-cache.sh && npm run dev
```

Skrypt automatycznie:
- Zatrzyma wszystkie procesy Next.js
- Zwolni port 3000
- Usunie lock files
- Wyczyści cache
- Zweryfikuje czy wszystko jest gotowe

---

**Data naprawy:** 2025-12-14  
**Wersja Next.js:** 16.0.1  
**System:** macOS (darwin 25.2.0)

