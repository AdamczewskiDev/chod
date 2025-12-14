"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "O nas" },
    { href: "#services", label: "Oferta" },
    { href: "#gallery", label: "Galeria" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-blue-900/98 shadow-2xl backdrop-blur-md py-3"
          : "bg-blue-900/95 backdrop-blur-sm py-5"
      }`}
      role="navigation"
      aria-label="Główne menu nawigacyjne"
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors duration-300 hover:scale-110"
          aria-label="Strona główna - Chłopaki od dźwięku"
        >
          CHOD
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8" role="menubar">
          {navLinks.map((link) => (
            <li
              key={link.href}
              role="none"
            >
              <a
                href={link.href}
                className="text-white hover:text-orange-400 transition-colors duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                role="menuitem"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-900 rounded p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`w-6 h-0.5 bg-orange-400 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`w-6 h-0.5 bg-orange-400 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
            aria-hidden="true"
          />
          <span
            className={`w-6 h-0.5 bg-orange-400 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay to close menu when clicking outside */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="md:hidden bg-blue-800/98 backdrop-blur-md mt-2 border-t border-orange-500/20 relative z-50"
            role="menu"
            aria-label="Menu mobilne"
          >
            <ul className="flex flex-col gap-4 p-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                <a
                  href={link.href}
                  className="text-orange-200 hover:text-orange-400 transition-colors duration-300 block py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-800 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
