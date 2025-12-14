# Konfiguracja EmailJS - Instrukcja Krok po Kroku

**Data:** $(date)
**Status:** ⏳ Oczekiwanie na konfigurację

---

## 🎯 Co to jest EmailJS?

**EmailJS** to serwis do wysyłania emaili bezpośrednio z przeglądarki (frontend). Jest:
- ✅ **Darmowy** (200 emaili/miesiąc)
- ✅ **Prosty** w konfiguracji
- ✅ **Działa po stronie klienta** (nie potrzebujesz backend API)

---

## 📝 Krok po Kroku - Konfiguracja EmailJS

### Krok 1: Utwórz Konto EmailJS

1. Przejdź na: **https://www.emailjs.com/**
2. Kliknij **"Sign Up"** (lub "Get Started")
3. Zarejestruj się (email lub Google)

### Krok 2: Dodaj Email Service

1. Po zalogowaniu, przejdź do **"Email Services"**
2. Kliknij **"Add New Service"**
3. Wybierz **"Gmail"** (lub inny provider)
4. Połącz swoje konto Gmail (`chlopakioddzwieku@gmail.com`)
5. **Zapisz Service ID** (np. `service_xxxxx`)

### Krok 3: Utwórz Email Template

1. Przejdź do **"Email Templates"**
2. Kliknij **"Create New Template"**
3. Użyj tego template:

**Subject:**
```
Nowa wiadomość od {{from_name}} - Chłopaki od dźwięku
```

**Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1a1a2e; display: block; margin-bottom: 5px; }
    .value { color: #555; padding: 8px; background: white; border-radius: 4px; border: 1px solid #e0e0e0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nowa wiadomość kontaktowa</h1>
      <p>Chłopaki od dźwięku</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Imię i nazwisko:</span>
        <div class="value">{{from_name}}</div>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <div class="value">{{from_email}}</div>
      </div>
      <div class="field">
        <span class="label">Telefon:</span>
        <div class="value">{{phone}}</div>
      </div>
      <div class="field">
        <span class="label">Wiadomość:</span>
        <div class="value" style="white-space: pre-wrap;">{{message}}</div>
      </div>
    </div>
  </div>
</body>
</html>
```

4. **To Email:** `chlopakioddzwieku@gmail.com`
5. **Zapisz Template ID** (np. `template_xxxxx`)

### Krok 4: Pobierz Public Key

1. Przejdź do **"Account"** → **"General"**
2. Znajdź **"Public Key"** (lub "API Keys")
3. **Skopiuj Public Key** (np. `xxxxxxxxxxxxx`)

### Krok 5: Prześlij Mi Klucze

Potrzebuję trzech wartości:

1. **Service ID:** `service_xxxxx`
2. **Template ID:** `template_xxxxx`
3. **Public Key:** `xxxxxxxxxxxxx`

---

## 🔧 Co Zrobię Po Otrzymaniu Kluczy

1. Dodam klucze do `.env.local`
2. Zaktualizuję kod (już gotowy!)
3. Przetestuję formularz
4. Sprawdzę czy email przychodzi

---

## ✅ Zalety EmailJS

- ✅ Działa bez backend API
- ✅ Darmowy plan (200 emaili/miesiąc)
- ✅ Łatwa konfiguracja
- ✅ Nie wymaga weryfikacji domain

---

## 📋 Template Variables

EmailJS używa tych zmiennych w template:
- `{{from_name}}` - Imię i nazwisko
- `{{from_email}}` - Email użytkownika
- `{{phone}}` - Telefon
- `{{message}}` - Wiadomość
- `{{to_email}}` - Email odbiorcy

---

**Czekam na Twoje klucze EmailJS!** 🔑

Napisz w formacie:
```
Service ID: service_xxxxx
Template ID: template_xxxxx
Public Key: xxxxxxxxxxxxx
```

