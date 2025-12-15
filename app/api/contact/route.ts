import { NextRequest, NextResponse } from "next/server";
import { resend, createContactEmailTemplate } from "@/app/lib/resend";

// Cloudflare Pages compatibility - Node.js runtime required for Resend API
// nodejs_compat flag must be set in Cloudflare Pages settings

// Rate limiting - in-memory store with TTL cleanup
// Note: For production with multiple instances, consider using Redis
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Cleanup expired entries every 5 minutes to prevent memory leak
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
let lastCleanup = Date.now();

function cleanupExpiredEntries() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) {
    return;
  }
  
  for (const [ip, limit] of rateLimitMap.entries()) {
    if (now > limit.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
  lastCleanup = now;
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  
  // Periodic cleanup to prevent memory leak
  cleanupExpiredEntries();
  
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minuta
    return true;
  }

  if (limit.count >= 5) {
    // Max 5 requestów na minutę
    return false;
  }

  limit.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  if (!input || typeof input !== "string") {
    return "";
  }
  return input.trim().replace(/[<>]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Zbyt wiele żądań. Spróbuj ponownie za chwilę." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Walidacja - sprawdź czy pola istnieją i są stringami
    if (!name || typeof name !== "string" || !email || typeof email !== "string" || !message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Wszystkie wymagane pola muszą być wypełnione." },
        { status: 400 }
      );
    }

    // Walidacja długości pól (zapobieganie DoS i spam)
    const MAX_NAME_LENGTH = 100;
    const MAX_EMAIL_LENGTH = 254; // RFC 5321
    const MAX_PHONE_LENGTH = 20;
    const MAX_MESSAGE_LENGTH = 5000;

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Imię i nazwisko nie może przekraczać ${MAX_NAME_LENGTH} znaków.` },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: `Email nie może przekraczać ${MAX_EMAIL_LENGTH} znaków.` },
        { status: 400 }
      );
    }

    if (phone && typeof phone === "string" && phone.length > MAX_PHONE_LENGTH) {
      return NextResponse.json(
        { error: `Telefon nie może przekraczać ${MAX_PHONE_LENGTH} znaków.` },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Wiadomość nie może przekraczać ${MAX_MESSAGE_LENGTH} znaków.` },
        { status: 400 }
      );
    }

    // Walidacja email
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Nieprawidłowy adres email." },
        { status: 400 }
      );
    }

    // Sanityzacja danych - upewnij się, że wartości są stringami
    const sanitizedData = {
      name: sanitizeInput(String(name || "")),
      email: sanitizeInput(String(email || "")),
      phone: phone && typeof phone === "string" ? sanitizeInput(phone) : "",
      message: sanitizeInput(String(message || "")),
    };

    // Wysyłka email przez Resend
    if (resend && process.env.RESEND_API_KEY) {
      try {
        const emailHtml = createContactEmailTemplate(sanitizedData);
        const contactEmail = process.env.CONTACT_EMAIL || "kontakt@chod.pl";
        
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev", // W produkcji użyj zweryfikowanego domain
          to: contactEmail,
          replyTo: sanitizedData.email,
          subject: `Nowa wiadomość od ${sanitizedData.name} - Chłopaki od dźwięku`,
          html: emailHtml,
        });

        // Logowanie tylko w development (bez wrażliwych danych)
        if (process.env.NODE_ENV === "development") {
          console.log("Email wysłany pomyślnie do:", contactEmail);
        }
      } catch (emailError) {
        console.error("Błąd podczas wysyłania email przez Resend:", emailError);
        // W development, jeśli Resend nie jest skonfigurowany, loguj do konsoli
        if (process.env.NODE_ENV === "development" && !process.env.RESEND_API_KEY) {
          console.log("Resend nie skonfigurowany - wiadomość kontaktowa:", sanitizedData);
        } else {
          // W production, jeśli Resend failuje, zwróć błąd
          throw emailError;
        }
      }
    } else {
      // Fallback: jeśli Resend nie jest skonfigurowany, loguj (tylko w development)
      if (process.env.NODE_ENV === "development") {
        console.log("Resend nie skonfigurowany - wiadomość kontaktowa:", sanitizedData);
        console.warn("⚠️  UWAGA: Dodaj RESEND_API_KEY do .env.local aby wysyłać emaile");
      } else {
        // W production, jeśli Resend nie jest skonfigurowany, to błąd
        return NextResponse.json(
          { error: "Serwis email nie jest skonfigurowany. Skontaktuj się z administratorem." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Wiadomość została wysłana pomyślnie!" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd podczas przetwarzania formularza:", error);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później." },
      { status: 500 }
    );
  }
}

