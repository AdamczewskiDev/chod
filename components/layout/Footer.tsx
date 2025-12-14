"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 relative overflow-hidden"
      role="contentinfo"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-orange-400 font-bold mb-4 text-lg">Kontakt</h3>
            <address className="text-orange-200 text-sm not-italic space-y-2">
              <p>
                <a
                  href="tel:+48796608988"
                  className="hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                >
                  +48 796 608 988
                </a>
              </p>
              <p>
                <a
                  href="mailto:chlopakioddzwieku@gmail.com"
                  className="hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                >
                  chlopakioddzwieku@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-400 font-bold mb-4 text-lg">Szybkie linki</h3>
            <nav aria-label="Stopka nawigacja">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-orange-200 hover:text-orange-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                  >
                    O nas
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-orange-200 hover:text-orange-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                  >
                    Oferta
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-orange-200 hover:text-orange-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-orange-200 hover:text-orange-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                  >
                    Kontakt
                  </a>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-orange-200 hover:text-orange-400 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                  >
                    Polityka Prywatności
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-orange-400 font-bold mb-4 text-lg">O firmie</h3>
            <p className="text-orange-200 text-sm">
              Profesjonalna realizacja imprez - dźwięk, światło, multimedia. Od kameralnych spotkań po wielkie festiwale.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-500/20 pt-8 text-center">
          <p className="text-orange-200 text-sm font-light">
            © 2025 Chłopaki od dźwięku. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
