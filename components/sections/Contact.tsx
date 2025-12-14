"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Wyczyść błąd przy zmianie pola
    if (error) setError(null);
  };

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!formData.email || !formData.message) {
      setError("Email i wiadomość są wymagane.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Proszę podać prawidłowy adres email.");
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS nie jest skonfigurowany. Sprawdź zmienne środowiskowe w .env.local"
        );
      }

      // Send email through EmailJS
      // Używamy nazw parametrów zgodnych z template w dashboard: name, email, message
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        // Opcjonalne parametry jeśli są w template
        phone: formData.phone || "",
      };

      const result = await emailjs.send(serviceId, templateId, templateParams);

      // Sprawdź czy response jest sukcesem
      if (result.status === 200 || result.text === "OK") {
        // Sukces
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(`EmailJS returned status: ${result.status}, text: ${result.text}`);
      }
    } catch (err: unknown) {
      // Obsługa błędów EmailJS
      let errorMessage = "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.";

      // Sprawdź różne możliwe formaty błędów EmailJS
      if (err && typeof err === "object") {
        if ("text" in err && typeof err.text === "string") {
          errorMessage = `EmailJS: ${err.text}`;
        } else if ("message" in err && typeof err.message === "string") {
          errorMessage = err.message;
        }
      } else if (typeof err === "string") {
        errorMessage = err;
      }

      console.error("EmailJS error:", err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2
          id="contact-heading"
          className="section-title text-orange-600"
        >
          Kontakt
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Email
              </h3>
              <a
                href="mailto:chlopakioddzwieku@gmail.com"
                className="text-orange-500 hover:text-orange-600 transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white rounded"
              >
                chlopakioddzwieku@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                <span className="text-2xl">📞</span> Telefon
              </h3>
              <a
                href="tel:+48796608988"
                className="text-orange-500 hover:text-orange-600 transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-white rounded"
                aria-label="Zadzwoń do nas"
              >
                +48 796 608 988
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:border-orange-500 transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span> Obserwuj nas
              </h3>
              <p className="text-orange-700 text-sm mb-4">Wkrótce dostępne</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white p-8 rounded-xl shadow-lg border-2 border-blue-200"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-orange-700 mb-1">
                Imię i nazwisko <span className="text-orange-400 text-xs">(opcjonalnie)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Imię i nazwisko"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-orange-700 placeholder-orange-400"
                aria-label="Imię i nazwisko (opcjonalnie)"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-orange-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-orange-700 placeholder-orange-400"
                required
                aria-required="true"
                aria-invalid={error ? "true" : "false"}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-orange-700 mb-1">
                Telefon <span className="text-orange-400 text-xs">(opcjonalnie)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefon (opcjonalnie)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all text-orange-700 placeholder-orange-400"
                aria-label="Numer telefonu (opcjonalnie)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-orange-700 mb-1">
                Wiadomość <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Wiadomość"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none transition-all text-orange-700 placeholder-orange-400"
                required
                aria-required="true"
                aria-invalid={error ? "true" : "false"}
              />
            </div>

            <button
              type="submit"
              className="cta-button w-full text-center disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Wysyłanie..." : "Skontaktuj się z nami"}
            </button>

            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                {error}
              </div>
            )}

            {submitted && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                Dziękujemy! Wiadomość została wysłana.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
