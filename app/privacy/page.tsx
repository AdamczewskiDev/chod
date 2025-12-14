import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka Prywatności - Chłopaki od dźwięku",
  description: "Polityka prywatności i ochrony danych osobowych zgodna z RODO/GDPR",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-5">
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-700 font-medium mb-8 inline-block focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
        >
          ← Powrót do strony głównej
        </Link>

        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-8">Polityka Prywatności</h1>

          <div className="prose prose-orange max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              <strong>Data ostatniej aktualizacji:</strong> 14 grudnia 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">1. Administrator Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Administratorem danych osobowych jest:
              </p>
              <address className="not-italic text-gray-700 mb-4">
                <strong>Chłopaki od dźwięku</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:chlopakioddzwieku@gmail.com"
                  className="text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  chlopakioddzwieku@gmail.com
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+48796608988"
                  className="text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  +48 796 608 988
                </a>
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">2. Zakres Zbieranych Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zbieramy następujące dane osobowe poprzez formularz kontaktowy:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Email</strong> (wymagane) - w celu odpowiedzi na zapytanie
                </li>
                <li>
                  <strong>Wiadomość</strong> (wymagane) - treść zapytania
                </li>
                <li>
                  <strong>Imię i nazwisko</strong> (opcjonalne) - w celu personalizacji odpowiedzi
                </li>
                <li>
                  <strong>Numer telefonu</strong> (opcjonalne) - w celu kontaktu telefonicznego
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">3. Cel Przetwarzania Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dane osobowe są przetwarzane wyłącznie w celu:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                <li>Kontaktu z klientem w sprawie oferty lub realizacji usług</li>
                <li>Realizacji umów i świadczenia usług</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">4. Podstawa Prawna</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Przetwarzanie danych osobowych odbywa się na podstawie:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Art. 6 ust. 1 lit. b RODO</strong> - wykonanie umowy lub podjęcie działań przed zawarciem umowy
                </li>
                <li>
                  <strong>Art. 6 ust. 1 lit. f RODO</strong> - prawnie uzasadniony interes administratora (odpowiedź na zapytanie)
                </li>
                <li>
                  <strong>Zgoda użytkownika</strong> - wyrażona poprzez przesłanie formularza kontaktowego
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">5. Okres Przechowywania Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dane osobowe są przechowywane przez okres:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Niezbędny do realizacji celu przetwarzania (odpowiedź na zapytanie)</li>
                <li>Wymagany przepisami prawa (np. przepisy podatkowe - 5 lat)</li>
                <li>Do momentu wycofania zgody lub wniesienia sprzeciwu wobec przetwarzania</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">6. Udostępnianie Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dane osobowe nie są udostępniane osobom trzecim, z wyjątkiem:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>EmailJS</strong> - usługa wysyłki emaili (dane przetwarzane zgodnie z ich polityką prywatności)
                </li>
                <li>Wymaganych przepisami prawa (organy państwowe, sądy)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                EmailJS działa jako procesor danych zgodnie z RODO. Więcej informacji:{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 underline focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  EmailJS Privacy Policy
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">7. Prawa Użytkownika</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zgodnie z RODO, przysługują Państwu następujące prawa:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>Prawo dostępu</strong> - możliwość uzyskania informacji o przetwarzanych danych
                </li>
                <li>
                  <strong>Prawo do sprostowania</strong> - możliwość poprawienia nieprawidłowych danych
                </li>
                <li>
                  <strong>Prawo do usunięcia</strong> - możliwość żądania usunięcia danych ("prawo do bycia zapomnianym")
                </li>
                <li>
                  <strong>Prawo do ograniczenia przetwarzania</strong> - możliwość ograniczenia zakresu przetwarzania
                </li>
                <li>
                  <strong>Prawo do przenoszenia danych</strong> - możliwość otrzymania danych w ustrukturyzowanym formacie
                </li>
                <li>
                  <strong>Prawo do sprzeciwu</strong> - możliwość wniesienia sprzeciwu wobec przetwarzania
                </li>
                <li>
                  <strong>Prawo do cofnięcia zgody</strong> - możliwość cofnięcia zgody w dowolnym momencie
                </li>
                <li>
                  <strong>Prawo do wniesienia skargi</strong> - możliwość złożenia skargi do organu nadzorczego (UODO)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">8. Realizacja Praw</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aby skorzystać z przysługujących praw, prosimy o kontakt:
              </p>
              <address className="not-italic text-gray-700 mb-4">
                Email:{" "}
                <a
                  href="mailto:chlopakioddzwieku@gmail.com"
                  className="text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  chlopakioddzwieku@gmail.com
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+48796608988"
                  className="text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  +48 796 608 988
                </a>
              </address>
              <p className="text-gray-700 leading-relaxed mb-4">
                Odpowiemy na Państwa wniosek w ciągu 30 dni od otrzymania.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">9. Bezpieczeństwo Danych</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Szyfrowanie połączeń HTTPS (TLS 1.2+)</li>
                <li>Bezpieczne przechowywanie danych</li>
                <li>Ograniczony dostęp do danych osobowych</li>
                <li>Regularne przeglądy bezpieczeństwa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">10. Pliki Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Obecnie strona nie wykorzystuje plików cookies. W przypadku wprowadzenia cookies, polityka zostanie zaktualizowana, a użytkownicy zostaną o tym poinformowani.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">11. Zmiany w Polityce Prywatności</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. O wszelkich zmianach użytkownicy zostaną poinformowani poprzez aktualizację daty "ostatniej aktualizacji" na tej stronie.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">12. Kontakt</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                W przypadku pytań dotyczących polityki prywatności, prosimy o kontakt:
              </p>
              <address className="not-italic text-gray-700 mb-4">
                <strong>Chłopaki od dźwięku</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:chlopakioddzwieku@gmail.com"
                  className="text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  chlopakioddzwieku@gmail.com
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+48796608988"
                  className="text-orange-600 hover:text-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 rounded"
                >
                  +48 796 608 988
                </a>
              </address>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}

