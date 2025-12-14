# Deployment Guide - chod

**Projekt:** Chłopaki od dźwięku - Website  
**Platforma:** Vercel (recommended)  
**Data utworzenia:** 2025-12-14

---

## 📋 Pre-Deployment Checklist

Przed rozpoczęciem deploymentu, upewnij się, że wszystkie poniższe kroki zostały wykonane:

### ✅ Critical Items (Must Complete)
- [ ] **Placeholder URLs zastąpione** - zobacz sekcję "Replace Placeholder URLs"
- [ ] **Placeholder images zastąpione** - zobacz sekcję "Replace Placeholder Images"
- [ ] **Environment variables skonfigurowane** - zobacz `ENVIRONMENT-VARIABLES.md`
- [ ] **Build testowany lokalnie** - `npm run build` przechodzi bez błędów

### ✅ Important Items (Should Complete)
- [ ] **Google Search Console verification** - kod weryfikacyjny dodany
- [ ] **Resend API skonfigurowany** - API key uzyskany i skonfigurowany
- [ ] **Privacy policy page** - dostępna i kompletna ✅
- [ ] **All links tested** - wszystkie linki działają poprawnie

---

## 🚀 Deployment na Vercel

### Opcja 1: Deployment przez Vercel Dashboard (Recommended)

#### Krok 1: Przygotowanie repozytorium
```bash
# Upewnij się, że wszystkie zmiany są commitowane
git add .
git commit -m "Ready for production deployment"
git push origin main
```

#### Krok 2: Połączenie z Vercel
1. Przejdź do [Vercel Dashboard](https://vercel.com/dashboard)
2. Kliknij **"Add New Project"**
3. Wybierz repozytorium `chod`
4. Vercel automatycznie wykryje Next.js

#### Krok 3: Konfiguracja projektu
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (root)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

#### Krok 4: Environment Variables
Dodaj następujące zmienne środowiskowe w Vercel Dashboard:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Gdzie znaleźć:**
- Settings → Environment Variables
- Dodaj dla wszystkich środowisk (Production, Preview, Development)

#### Krok 5: Deployment
1. Kliknij **"Deploy"**
2. Poczekaj na zakończenie builda
3. Po zakończeniu, otrzymasz URL produkcyjny

#### Krok 6: Weryfikacja
- [ ] Sprawdź, czy strona ładuje się poprawnie
- [ ] Przetestuj formularz kontaktowy
- [ ] Sprawdź wszystkie sekcje strony
- [ ] Przetestuj na różnych urządzeniach

---

### Opcja 2: Deployment przez Vercel CLI

#### Krok 1: Instalacja Vercel CLI
```bash
npm i -g vercel
```

#### Krok 2: Login
```bash
vercel login
```

#### Krok 3: Deployment
```bash
# Pierwszy deployment (wymaga konfiguracji)
vercel

# Kolejne deploymenty
vercel --prod
```

#### Krok 4: Konfiguracja Environment Variables
```bash
# Dodaj environment variable
vercel env add RESEND_API_KEY

# Lub edytuj w dashboard
vercel env ls
```

---

## 🔧 Konfiguracja Domena

### Krok 1: Dodanie domeny w Vercel
1. Przejdź do projektu w Vercel Dashboard
2. Settings → Domains
3. Dodaj domenę (np. `www.chlopakioddzwieku.pl`)

### Krok 2: Konfiguracja DNS
Vercel dostarczy instrukcje konfiguracji DNS. Zazwyczaj:
- Dodaj CNAME record wskazujący na Vercel
- Lub dodaj A record z IP Vercel

### Krok 3: Aktualizacja URLs w kodzie
Po skonfigurowaniu domeny, zaktualizuj URLs w `app/layout.tsx`:
- `metadataBase: new URL("https://twoja-domena.pl")`
- `openGraph.url: "https://twoja-domena.pl"`
- `JSON-LD.url: "https://twoja-domena.pl"`

---

## 🔐 Environment Variables

### Wymagane zmienne

#### Resend API Key
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Jak uzyskać:**
1. Zarejestruj się na [Resend.com](https://resend.com)
2. Utwórz API key w dashboard
3. Skopiuj klucz i dodaj do Vercel Environment Variables

### Opcjonalne zmienne

#### EmailJS (jeśli używane jako fallback)
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxxx
```

---

## 📝 Replace Placeholder URLs

### Lokalizacja: `app/layout.tsx`

#### 1. Metadata Base (Line 37)
```typescript
// Przed
metadataBase: new URL("https://chod.pl"), // TODO: Zastąpić prawdziwym URL

// Po
metadataBase: new URL("https://www.chlopakioddzwieku.pl"),
```

#### 2. Open Graph URL (Line 45)
```typescript
// Przed
url: "https://chod.pl", // TODO: Zastąpić prawdziwym URL

// Po
url: "https://www.chlopakioddzwieku.pl",
```

#### 3. JSON-LD URL (Line 92)
```typescript
// Przed
url: "https://chod.pl", // TODO: Zastąpić prawdziwym URL

// Po
url: "https://www.chlopakioddzwieku.pl",
```

#### 4. Google Search Console Verification (Line 68)
```typescript
// Przed
verification: {
  // TODO: Dodać kody weryfikacyjne Google Search Console i Bing
},

// Po
verification: {
  google: "your-google-verification-code",
  // yandex: "your-yandex-verification-code", // opcjonalne
},
```

---

## 🖼️ Replace Placeholder Images

### Lokalizacja: `components/sections/Gallery.tsx`

#### Krok 1: Przygotowanie obrazów
1. Przygotuj prawdziwe zdjęcia portfolio
2. Zoptymalizuj obrazy (WebP format recommended)
3. Umieść obrazy w `/public/images/portfolio/`

#### Krok 2: Aktualizacja kodu
```typescript
// Przed
const images = [
  {
    id: "photo-1493225457124-a3eb161ffa5f",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    alt: "System nagłośnienia na koncercie",
  },
  // ... więcej placeholder images
];

// Po
const images = [
  {
    id: "koncert-1",
    src: "/images/portfolio/koncert-1.webp",
    alt: "System nagłośnienia na koncercie rockowym w Warszawie",
  },
  {
    id: "slub-1",
    src: "/images/portfolio/slub-1.webp",
    alt: "Oświetlenie sceniczne na weselu w Krakowie",
  },
  // ... więcej prawdziwych zdjęć portfolio
];
```

#### Krok 3: Aktualizacja next.config.ts (jeśli potrzebne)
Jeśli używasz zewnętrznego CDN, dodaj do `remotePatterns`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "twoj-cdn.com",
      pathname: "/images/**",
    },
  ],
},
```

---

## ✅ Post-Deployment Checklist

Po deployment, wykonaj następujące kroki:

### Testing
- [ ] Strona ładuje się poprawnie
- [ ] Wszystkie sekcje są widoczne
- [ ] Formularz kontaktowy działa
- [ ] Email jest wysyłany poprawnie
- [ ] Wszystkie linki działają
- [ ] Responsive design działa na mobile/tablet/desktop
- [ ] Lightbox w galerii działa
- [ ] Navigation menu działa

### SEO
- [ ] Google Search Console skonfigurowane
- [ ] Sitemap przesłany do Google
- [ ] Meta tags są poprawne (sprawdź w DevTools)
- [ ] Structured data jest poprawne (sprawdź w Google Rich Results Test)
- [ ] Open Graph preview działa (sprawdź w Facebook Debugger)
- [ ] Twitter Card preview działa (sprawdź w Twitter Card Validator)

### Performance
- [ ] Lighthouse audit (cel: 90+)
- [ ] Core Web Vitals są w normie (LCP <2.5s, FID <100ms, CLS <0.1)
- [ ] Obrazy ładują się poprawnie
- [ ] Lazy loading działa

### Accessibility
- [ ] Keyboard navigation działa
- [ ] Screen reader test (opcjonalne)
- [ ] Focus indicators są widoczne
- [ ] Alt text dla wszystkich obrazów

### Analytics (Opcjonalne)
- [ ] Google Analytics skonfigurowane (jeśli potrzebne)
- [ ] Tracking działa poprawnie

---

## 🔄 Continuous Deployment

Vercel automatycznie deployuje przy każdym push do głównej gałęzi:

```bash
# Automatyczny deployment przy push
git push origin main
```

### Preview Deployments
Vercel automatycznie tworzy preview deployments dla każdego PR:
- Każdy PR otrzymuje unikalny URL
- Idealne do testowania przed merge

---

## 🐛 Troubleshooting

### Build Fails
1. Sprawdź logi w Vercel Dashboard
2. Upewnij się, że `npm run build` działa lokalnie
3. Sprawdź environment variables

### Environment Variables Not Working
1. Sprawdź, czy zmienne są dodane w Vercel Dashboard
2. Upewnij się, że są dodane dla właściwego środowiska (Production)
3. Redeploy po dodaniu zmiennych

### Images Not Loading
1. Sprawdź ścieżki do obrazów
2. Upewnij się, że obrazy są w `/public/`
3. Sprawdź `next.config.ts` dla `remotePatterns`

### Form Not Working
1. Sprawdź `RESEND_API_KEY` w environment variables
2. Sprawdź logi w Vercel Functions
3. Przetestuj API route lokalnie

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Resend Documentation](https://resend.com/docs)
- [Production Readiness Checklist](./PRODUCTION-READINESS-CHECKLIST.md)
- [Environment Variables Guide](./ENVIRONMENT-VARIABLES.md)

---

**Ostatnia aktualizacja:** 2025-12-14  
**Wersja:** 1.0
