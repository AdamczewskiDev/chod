import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigations";
import Footer from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Chłopaki od dźwięku - Profesjonalna realizacja imprez | Dźwięk, Światło, Multimedia",
  description:
    "Tworzymy niezapomniane wydarzenia dzięki profesjonalnemu dźwiękowi, światłu i multimediom. Profesjonalne systemy nagłośnienia, nowoczesne oświetlenie sceniczne i kompleksowa obsługa multimediów. Od kameralnych spotkań po wielkie festiwale.",
  keywords: [
    "realizacja imprez",
    "nagłośnienie",
    "oświetlenie sceniczne",
    "multimedia",
    "dźwięk",
    "event production",
    "systemy nagłośnienia",
    "ekrany LED",
    "projektory",
  ],
  authors: [{ name: "Chłopaki od dźwięku" }],
  creator: "Chłopaki od dźwięku",
  publisher: "Chłopaki od dźwięku",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chod.pl"), // TODO: Zastąpić prawdziwym URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chłopaki od dźwięku - Profesjonalna realizacja imprez | Dźwięk, Światło, Multimedia",
    description:
      "Tworzymy niezapomniane wydarzenia dzięki profesjonalnemu dźwiękowi, światłu i multimediom. Od kameralnych spotkań po wielkie festiwale.",
    url: "https://chod.pl", // TODO: Zastąpić prawdziwym URL
    siteName: "Chłopaki od dźwięku",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chłopaki od dźwięku - Profesjonalna realizacja imprez | Dźwięk, Światło, Multimedia",
    description:
      "Tworzymy niezapomniane wydarzenia dzięki profesjonalnemu dźwiękowi, światłu i multimediom. Od kameralnych spotkań po wielkie festiwale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Dodać kody weryfikacyjne Google Search Console i Bing
    // google: "verification-code",
    // yandex: "verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Chłopaki od dźwięku",
              description:
                "Profesjonalna realizacja imprez - dźwięk, oświetlenie, multimedia",
              url: "https://chod.pl", // TODO: Zastąpić prawdziwym URL
              telephone: "+48-796-608-988",
              email: "chlopakioddzwieku@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PL",
              },
              areaServed: {
                "@type": "Country",
                name: "Poland",
              },
              serviceType: [
                "Realizacja imprez",
                "Systemy nagłośnienia",
                "Oświetlenie sceniczne",
                "Multimedia",
              ],
            }),
          }}
        />
      </head>
      <body className={montserrat.className || ""}>
        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-md focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Przejdź do treści głównej
        </a>
        <Navigation />
        <ErrorBoundary>
          <main id="main-content">{children}</main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
