# Komendy do zamykania portów na localhost

## 🔍 Sprawdzenie otwartych portów

```bash
# Sprawdź wszystkie otwarte porty
lsof -iTCP -sTCP:LISTEN -n -P

# Sprawdź konkretny port (np. 3000)
lsof -ti:3000
```

## 🛑 Zamykanie portów

### Zatrzymanie Next.js dev server
```bash
pkill -f "next dev"
```

### Zatrzymanie procesu na konkretnym porcie (np. 3000)
```bash
# Znajdź PID procesu na porcie 3000
lsof -ti:3000

# Zabij proces na porcie 3000
lsof -ti:3000 | xargs kill -9
```

### Zatrzymanie wszystkich procesów Node.js
```bash
pkill -f node
```

### Zatrzymanie wszystkich procesów na portach 3000-3010
```bash
for port in {3000..3010}; do
  lsof -ti:$port | xargs kill -9 2>/dev/null
done
```

## 📋 Jedna komenda do wszystkiego

```bash
# Zatrzymaj Next.js i zwolnij port 3000
pkill -f "next dev" && lsof -ti:3000 | xargs kill -9 2>/dev/null && echo "✅ Porty zwolnione"
```

