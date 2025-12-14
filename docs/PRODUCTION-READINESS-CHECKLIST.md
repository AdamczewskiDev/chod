# Production Readiness Checklist

**Data utworzenia:** 2025-12-14  
**Ostatnia aktualizacja:** 2025-12-14  
**Status:** ⚠️ **READY FOR DEPLOYMENT** - Wymaga tylko zastąpienia placeholderów przed deploymentem

**Related Documents:**
- [Deployment Guide](./DEPLOYMENT-GUIDE.md) - Instrukcje wdrożenia
- [Environment Variables Guide](./ENVIRONMENT-VARIABLES.md) - Konfiguracja zmiennych środowiskowych
- [Final Project Summary](./FINAL-PROJECT-SUMMARY.md) - Podsumowanie projektu

---

## ⚠️ Critical Items (Must Fix Before Production)

### 1. Replace Placeholder URLs
**Priority:** 🔴 **CRITICAL**  
**Status:** ⚠️ **PENDING**

**Files to Update:**
- `app/layout.tsx` (4 locations)

**Locations:**
1. Line 32: `metadataBase: new URL("https://chod.pl")` → Replace with actual production domain
2. Line 40: `url: "https://chod.pl"` (Open Graph) → Replace with actual production domain
3. Line 87: `url: "https://chod.pl"` (JSON-LD) → Replace with actual production domain
4. Line 63: Add Google Search Console verification code when available

**Action Required:**
- [ ] Replace all `https://chod.pl` with actual production domain
- [ ] Add Google Search Console verification code
- [ ] Add Bing verification code (optional)

**Example:**
```typescript
// Before
metadataBase: new URL("https://chod.pl"), // TODO: Zastąpić prawdziwym URL

// After
metadataBase: new URL("https://www.chlopakioddzwieku.pl"), // Production URL
```

---

### 2. Replace Placeholder Images
**Priority:** 🔴 **CRITICAL**  
**Status:** ⚠️ **PENDING**

**Files to Update:**
- `components/sections/Gallery.tsx` (lines 12-37)

**Current Status:**
- Using Unsplash placeholder images
- Need actual portfolio images

**Action Required:**
- [ ] Replace all 6 Unsplash images with actual portfolio images
- [ ] Ensure images are optimized (WebP format recommended)
- [ ] Verify all images have descriptive alt text
- [ ] Update image sources in `components/sections/Gallery.tsx`

**Image Requirements:**
- Format: WebP (with JPEG fallback)
- Sizes: Multiple sizes for responsive design
- Alt text: Descriptive, event-specific
- Content: Actual event photos (conferences, weddings, concerts, corporate events)

**Example Structure:**
```typescript
const images = [
  {
    src: "/images/portfolio/koncert-1.webp", // Actual portfolio image
    alt: "System nagłośnienia na koncercie rockowym w Warszawie",
  },
  // ... more images
];
```

---

## ✅ Completed Items

### 1. Fix Error Type Safety ✅
**Priority:** Medium  
**Status:** ✅ **COMPLETED**

**File Updated:**
- `components/sections/Contact.tsx` (line 91)

**Change:**
- Changed `catch (err: any)` to `catch (err: unknown)`
- Improved type safety with proper error handling

---

### 2. Create Privacy Policy Page ✅
**Priority:** 🔴 **CRITICAL** (GDPR)  
**Status:** ✅ **COMPLETED**

**File Created:**
- `app/privacy/page.tsx`

**Features:**
- ✅ Comprehensive GDPR/RODO compliant privacy policy
- ✅ All required sections (data collection, processing, user rights)
- ✅ Contact information for data requests
- ✅ EmailJS data processing disclosure
- ✅ Link added to Footer

---

### 3. Enhance Mobile Menu Accessibility ✅
**Priority:** Medium  
**Status:** ✅ **COMPLETED**

**File Updated:**
- `components/layout/Navigations.tsx`

**Change:**
- Overlay already has `aria-hidden="true"` ✅
- No changes needed

---

## 📋 Pre-Deployment Checklist

### Content & URLs
- [ ] Replace all placeholder URLs with production domain
- [ ] Replace all placeholder images with actual portfolio images
- [ ] Verify all contact information is correct
- [ ] Check all links work correctly

### Configuration
- [ ] Set up production environment variables
  - [ ] `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - [ ] `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- [ ] Configure EmailJS template with production email
- [ ] Add Google Search Console verification code
- [ ] Add Bing verification code (optional)

### Testing
- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Test all navigation links
- [ ] Test responsive design on multiple devices
- [ ] Run accessibility audit (Lighthouse, axe DevTools)
- [ ] Test keyboard navigation
- [ ] Verify all images load correctly
- [ ] Test lightbox functionality

### SEO
- [ ] Verify all meta tags are correct
- [ ] Check structured data (JSON-LD) is valid
- [ ] Test Open Graph previews
- [ ] Test Twitter Card previews
- [ ] Submit sitemap to Google Search Console

### Performance
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Verify Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1)
- [ ] Check image optimization
- [ ] Verify lazy loading works
- [ ] Test on slow 3G connection

### Legal & Compliance
- [ ] Privacy policy page accessible and complete ✅
- [ ] GDPR compliance verified ✅
- [ ] All user rights documented ✅

---

## 📝 Notes

### Placeholder URLs
All placeholder URLs use `https://chod.pl` as a placeholder. This must be replaced with the actual production domain before deployment.

**Search Pattern:**
```bash
grep -r "chod.pl" app/
```

### Placeholder Images
Gallery currently uses Unsplash placeholder images. These should be replaced with actual portfolio images before production.

**Image Paths:**
- Current: Unsplash URLs
- Target: Local images in `/public/images/portfolio/` or CDN

### Environment Variables
Ensure all EmailJS environment variables are set in production:
- `.env.local` for local development
- Vercel Environment Variables for production

---

## 🚀 Deployment Steps

1. **Complete Critical Items:**
   - [ ] Replace placeholder URLs
   - [ ] Replace placeholder images

2. **Configure Production:**
   - [ ] Set up production environment variables
   - [ ] Configure EmailJS for production
   - [ ] Add verification codes

3. **Final Testing:**
   - [ ] Run full test suite
   - [ ] Accessibility audit
   - [ ] Performance audit
   - [ ] Cross-browser testing

4. **Deploy:**
   - [ ] Deploy to Vercel (or chosen platform)
   - [ ] Verify production build
   - [ ] Test production site
   - [ ] Submit to search engines

---

**Last Updated:** 2025-12-14  
**Next Review:** Before production deployment

