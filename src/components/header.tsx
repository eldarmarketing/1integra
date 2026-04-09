"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { W, NAV } from "./constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
      <div className={`${W} h-16 flex items-center justify-between`}>
        <Link href="/" className="font-heading font-bold text-xl text-navy tracking-tight">
          1ИНТЕГРА
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === l.href
                  ? "text-navy"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+7XXXXXXXXXX"
            className="text-sm font-semibold text-gray-700 hover:text-navy transition-colors duration-200"
          >
            +7 (XXX) XXX-XX-XX
          </a>
          <Link
            href="/kontakty"
            className="px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold
              hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-navy/20"
          >
            Оставить заявку
          </Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          aria-label="Меню"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 space-y-1">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-base py-2.5 px-3 rounded-xl ${
                pathname === l.href
                  ? "text-navy bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontakty"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-5 py-3 rounded-full bg-navy text-white text-sm font-semibold mt-3"
          >
            Оставить заявку
          </Link>
        </div>
      )}
    </header>
  );
}
