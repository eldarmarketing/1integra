"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { W, NAV } from "./constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant">
      {/* MD3 Top App Bar — 64px height */}
      <div className={`${W} h-16 flex items-center justify-between gap-4`}>

        {/* Logo */}
        <Link
          href="/"
          className="md3-title-large text-primary shrink-0"
          aria-label="1ИНТЕГРА — главная"
        >
          1ИНТЕГРА
        </Link>

        {/* Desktop Nav — center */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Навигация">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`md3-label-large h-10 px-4 flex items-center rounded-full transition-colors ${
                pathname === l.href
                  ? "bg-secondary-container text-on-secondary-container"
                  : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right — phone + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:+79651784434"
            className="md3-label-large text-on-surface hover:text-primary"
          >
            +7 (965) 178-44-34
          </a>
          <Link
            href="/kontakty"
            className="md3-label-large h-10 px-6 rounded-full bg-primary text-on-primary flex items-center
              hover:bg-primary/90 active:bg-primary/80"
          >
            Оставить заявку
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high -mr-2"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Закрыть" : "Меню"}</span>
          <svg
            className="w-6 h-6 text-on-surface"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-inverse-surface/20 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      {/* Mobile menu — slide down */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-surface-container-lowest border-b border-outline-variant
          transition-all duration-300 ease-[cubic-bezier(0.05,0.7,0.1,1)] ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="px-4 py-2" aria-label="Мобильное меню">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`md3-title-medium flex items-center px-4 py-4 rounded-xl ${
                pathname === l.href
                  ? "bg-secondary-container text-on-secondary-container"
                  : "text-on-surface hover:bg-surface-container-high"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-6 pt-3 border-t border-outline-variant space-y-3">
          <a
            href="tel:+79651784434"
            className="md3-body-large flex items-center gap-3 px-4 py-3 text-on-surface"
          >
            <svg className="w-5 h-5 text-on-surface-variant shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +7 (965) 178-44-34
          </a>
          <Link
            href="/kontakty"
            className="md3-label-large flex items-center justify-center h-12 rounded-full bg-primary text-on-primary"
          >
            Оставить заявку
          </Link>
        </div>
      </div>
    </header>
  );
}
