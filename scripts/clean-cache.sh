#!/bin/bash

# Skrypt do pełnego czyszczenia cache Next.js i rozwiązania problemów z lock file

echo "🧹 Czyszczenie cache Next.js i rozwiązywanie problemów z lock file..."

# Zatrzymaj wszystkie procesy Next.js
echo "⏹️  Zatrzymywanie procesów Next.js..."
pkill -f "next dev" 2>/dev/null
pkill -f "next-server" 2>/dev/null
sleep 2

# Zwolnij port 3000
echo "🔌 Zwolnienie portu 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null
sleep 1

# Usuń lock file
echo "🔓 Usuwanie lock file..."
rm -f .next/dev/lock 2>/dev/null
rm -f .next/dev/*.lock 2>/dev/null
rm -f .next/**/*.lock 2>/dev/null

# Wyczyść wszystkie cache
echo "🗑️  Usuwanie cache..."
rm -rf .next
rm -rf .turbo
rm -rf node_modules/.cache
rm -rf .swc

# Sprawdź czy port jest wolny
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Ostrzeżenie: Port 3000 nadal jest zajęty. Spróbuj ponownie za chwilę."
else
    echo "✅ Port 3000 jest wolny"
fi

echo "✅ Cache wyczyszczony i lock file usunięty!"
echo ""
echo "Teraz uruchom: npm run dev"

