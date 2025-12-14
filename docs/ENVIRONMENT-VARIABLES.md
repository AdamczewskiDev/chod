# Environment Variables Guide - chod

**Projekt:** Chłopaki od dźwięku - Website  
**Data utworzenia:** 2025-12-14

---

## 📋 Overview

Ten dokument opisuje wszystkie wymagane i opcjonalne zmienne środowiskowe dla projektu chod.

---

## 🔐 Required Environment Variables

### Resend API Key

**Variable Name:** `RESEND_API_KEY`  
**Type:** Secret  
**Required:** ✅ Yes  
**Environment:** Production, Preview, Development

**Description:**  
API key dla Resend service używany do wysyłki emaili z formularza kontaktowego.

**How to Obtain:**
1. Zarejestruj się na [Resend.com](https://resend.com)
2. Przejdź do Dashboard → API Keys
3. Kliknij "Create API Key"
4. Skopiuj wygenerowany klucz (zaczyna się od `re_`)

**Format:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Where to Set:**
- **Local Development:** `.env.local` (gitignored)
- **Vercel:** Settings → Environment Variables → Add

**Usage:**
Używany w `app/lib/resend.ts` do inicjalizacji Resend client.

---

## 🔧 Optional Environment Variables

### EmailJS (Fallback - jeśli używane)

**Variables:**
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

**Type:** Public (NEXT_PUBLIC_ prefix)  
**Required:** ❌ No (Resend jest primary)  
**Environment:** Production, Preview, Development

**Description:**  
EmailJS może być używane jako fallback jeśli Resend nie jest dostępny. Obecnie projekt używa Resend jako primary email service.

**Note:**  
Te zmienne są opcjonalne i nie są wymagane jeśli używasz tylko Resend.

---

## 📁 File Structure

### Local Development

Utwórz plik `.env.local` w root projektu:

```bash
# .env.local (gitignored)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Important:**  
- `.env.local` jest w `.gitignore` - nie commituj tego pliku!
- Użyj `.env.example` jako template (bez prawdziwych wartości)

### Production (Vercel)

1. Przejdź do Vercel Dashboard
2. Wybierz projekt
3. Settings → Environment Variables
4. Dodaj zmienne dla każdego środowiska:
   - Production
   - Preview
   - Development

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Używaj `.env.local` dla lokalnego developmentu
- ✅ Dodaj `.env.local` do `.gitignore`
- ✅ Używaj Vercel Environment Variables dla production
- ✅ Używaj Secret type dla API keys
- ✅ Nie commituj prawdziwych API keys
- ✅ Rotate API keys regularnie

### ❌ DON'T:
- ❌ Nie commituj `.env.local` do git
- ❌ Nie hardcode'uj API keys w kodzie
- ❌ Nie udostępniaj API keys publicznie
- ❌ Nie używaj production keys w development

---

## 📝 Setup Instructions

### Local Development Setup

#### Krok 1: Utwórz `.env.local`
```bash
# W root projektu
touch .env.local
```

#### Krok 2: Dodaj zmienne
```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### Krok 3: Restart dev server
```bash
# Zatrzymaj obecny server (Ctrl+C)
npm run dev
```

### Production Setup (Vercel)

#### Krok 1: Otwórz Vercel Dashboard
1. Przejdź do [vercel.com/dashboard](https://vercel.com/dashboard)
2. Wybierz projekt `chod`

#### Krok 2: Dodaj Environment Variables
1. Settings → Environment Variables
2. Kliknij "Add New"
3. Wprowadź:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Environment:** Production, Preview, Development
4. Kliknij "Save"

#### Krok 3: Redeploy
Po dodaniu zmiennych, redeploy projektu:
- Automatyczny redeploy przy następnym push
- Lub ręcznie: Deployments → ... → Redeploy

---

## 🧪 Testing Environment Variables

### Local Testing
```bash
# Sprawdź czy zmienne są załadowane
npm run dev

# W kodzie, sprawdź:
console.log(process.env.RESEND_API_KEY) // Nie powinno być undefined
```

**Note:**  
W Next.js, tylko zmienne z prefixem `NEXT_PUBLIC_` są dostępne w browser. Server-side variables (jak `RESEND_API_KEY`) są dostępne tylko w server components i API routes.

### Production Testing
1. Deploy do Vercel
2. Sprawdź Vercel Functions logs
3. Przetestuj formularz kontaktowy
4. Sprawdź czy email jest wysyłany

---

## 🔍 Verification

### Check if Variables are Set

#### Local
```bash
# Sprawdź .env.local
cat .env.local
```

#### Vercel
1. Vercel Dashboard → Settings → Environment Variables
2. Sprawdź listę zmiennych
3. Upewnij się, że są dodane dla właściwego środowiska

### Test Email Sending

1. Wypełnij formularz kontaktowy na stronie
2. Sprawdź czy email został wysłany
3. Sprawdź Vercel Functions logs dla błędów

---

## 📚 Related Documentation

- [Deployment Guide](./DEPLOYMENT-GUIDE.md)
- [Production Readiness Checklist](./PRODUCTION-READINESS-CHECKLIST.md)
- [Resend Documentation](https://resend.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

## 🆘 Troubleshooting

### Variable Not Found
**Problem:** `process.env.RESEND_API_KEY` is undefined

**Solutions:**
1. Sprawdź czy `.env.local` istnieje w root projektu
2. Sprawdź czy zmienna ma poprawną nazwę
3. Restart dev server po dodaniu zmiennych
4. W production, sprawdź Vercel Environment Variables

### Email Not Sending
**Problem:** Formularz nie wysyła emaili

**Solutions:**
1. Sprawdź czy `RESEND_API_KEY` jest ustawiony
2. Sprawdź Vercel Functions logs
3. Sprawdź czy API key jest poprawny
4. Sprawdź czy domain jest zweryfikowany w Resend (jeśli wymagane)

### Build Fails
**Problem:** Build fails z powodu missing environment variables

**Solutions:**
1. Sprawdź czy wszystkie wymagane zmienne są ustawione
2. W Vercel, upewnij się że zmienne są dodane dla Production environment
3. Sprawdź logi builda w Vercel Dashboard

---

**Ostatnia aktualizacja:** 2025-12-14  
**Wersja:** 1.0
