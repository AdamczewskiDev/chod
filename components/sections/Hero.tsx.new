"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent" />

      <div className="relative z-10 px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-orange-400 leading-tight">
          Chłopaki od dźwięku
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 font-light text-white max-w-2xl mx-auto leading-relaxed">
          Tworzymy niezapomniane wydarzenia dzięki profesjonalnemu dźwiękowi, światłu i multimediom
          <br />
          <span className="text-orange-300 font-medium">Od kameralnych spotkań po wielkie festiwale</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contact"
            className="cta-button inline-block hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
            aria-label="Otrzymaj wycenę w 2 minuty"
          >
            Otrzymaj wycenę w 2 minuty
          </Link>
          <Link
            href="#services"
            className="text-orange-200 hover:text-orange-400 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded px-4 py-2"
            aria-label="Poznaj naszą ofertę"
          >
            Poznaj naszą ofertę
          </Link>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-orange-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

