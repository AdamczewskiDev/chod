This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is configured for deployment on Cloudflare Pages (darmowy hosting).

### Prerequisites

1. **Cloudflare Account** (darmowy)

   - Utwórz konto na [cloudflare.com](https://www.cloudflare.com)
   - Przejdź do [Cloudflare Dashboard](https://dash.cloudflare.com)

2. **GitHub Repository**

   - Projekt musi być w repozytorium GitHub
   - Repozytorium musi być publiczne lub mieć dostęp do Cloudflare

3. **Cloudflare API Token**

   - W Cloudflare Dashboard: My Profile → API Tokens
   - Utwórz token z uprawnieniami: `Account.Cloudflare Pages:Edit`
   - Skopiuj token

4. **Cloudflare Account ID**
   - W Cloudflare Dashboard: wybierz domenę
   - Account ID znajduje się w prawym panelu

### Konfiguracja GitHub Secrets

Dodaj następujące secrets w GitHub repository (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` - Twój Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` - Twój Cloudflare Account ID

### Automatyczny Deploy

Deploy jest automatyczny przy każdym push do brancha `main`:

1. GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`) automatycznie:

   - Instaluje zależności
   - Uruchamia testy
   - Buduje aplikację Next.js
   - Deplojuje do Cloudflare Pages

2. Po pierwszym deploy, Cloudflare Pages automatycznie:
   - Tworzy projekt `chod`
   - Konfiguruje automatyczny deploy z GitHub
   - Generuje URL: `https://chod.pages.dev`

### Konfiguracja Cloudflare Pages

#### 1. Połączenie z GitHub

1. Przejdź do [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Kliknij **"Create a project"**
3. Wybierz **"Connect to Git"**
4. Wybierz repozytorium `chod`
5. Kliknij **"Begin setup"**

#### 2. Build Settings

Cloudflare Pages automatycznie wykryje Next.js, ale ustaw ręcznie:

- **Framework preset:** None (lub Next.js jeśli dostępne)
- **Build command:** `npx @opennextjs/cloudflare build`
- **Build output directory:** `.open-next/assets`
- **Root directory:** `/`

#### 3. Environment Variables

W Cloudflare Pages Dashboard (Settings → Environment variables), dodaj:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=kontakt@chod.pl
RESEND_FROM_EMAIL=kontakt@chod.pl
NODE_ENV=production
```

**Ważne:** Dodaj te same zmienne dla **Production**, **Preview** i **Development** environments.

#### 4. Compatibility Flags

W Cloudflare Pages Dashboard (Settings → Functions):

- Dodaj compatibility flag: `nodejs_compat`
- Zastosuj dla Production i Preview environments

### Custom Domain (Opcjonalnie)

1. W Cloudflare Pages Dashboard → Project → Custom domains
2. Kliknij **"Set up a custom domain"**
3. Wprowadź domenę (np. `chod.pl`)
4. Postępuj zgodnie z instrukcjami DNS

### Manual Deploy

Możesz też ręcznie zdeployować używając Wrangler CLI:

```bash
# Zainstaluj Wrangler (już zainstalowany jako dev dependency)
npm install -g wrangler

# Login do Cloudflare
wrangler login

# Build aplikacji
npm run build

# Deploy
wrangler pages deploy .next --project-name=chod
```

### Troubleshooting

**Problem: Build fails**

- Sprawdź czy wszystkie zależności są w `package.json`
- Sprawdź logi w Cloudflare Pages Dashboard

**Problem: API routes nie działają**

- Upewnij się, że `nodejs_compat` flag jest ustawiony
- Sprawdź czy Edge Runtime jest skonfigurowany w API routes

**Problem: Environment variables nie działają**

- Upewnij się, że zmienne są dodane w Cloudflare Pages Dashboard
- Sprawdź czy są ustawione dla właściwego environment (Production/Preview)

### Dokumentacja

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

## Deploy on Vercel (Alternatywa)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
