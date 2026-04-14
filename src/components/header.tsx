"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { W, NAV } from "./constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant/40">
      <div className={`${W} h-16 md:h-[72px] flex items-center justify-between`}>
        <Link href="/" className="font-heading font-bold text-[20px] text-primary tracking-tight">
          1ИНТЕГРА
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                pathname === l.href
                  ? "text-on-primary-container bg-primary-container/60"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+79651784434"
            className="text-[14px] font-semibold text-on-surface hover:text-primary"
          >
            +7 (965) 178-44-34
          </a>
          <Link
            href="/kontakty"
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-[14px] font-semibold
              hover:bg-primary/90 active:bg-primary/80"
          >
            Оставить заявку
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high/60 -mr-1"
          aria-label="Меню"
        >
          <div className="relative w-5 h-5">
            <span className={`absolute left-0 top-[6px] w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 top-[10px]" : ""}`} />
            <span className={`absolute left-0 top-[13px] w-5 h-[2px] bg-on-surface rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 top-[10px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-on-surface/20 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-surface-container-lowest border-b border-outline-variant/30 shadow-xl shadow-on-surface/5 transition-all duration-300 ease-[cubic-bezier(0.05,0.7,0.1,1)] ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-center text-[16px] py-3.5 px-5 rounded-xl ${
                pathname === l.href
                  ? "text-on-primary-container font-semibold bg-primary-container/50"
                  : "text-on-surface active:bg-surface-container-high/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="px-4 pb-5 space-y-3 border-t border-outline-variant/30 pt-4">
          <a
            href="tel:+79651784434"
            className="flex items-center gap-3 text-[15px] font-semibold text-on-surface px-5 py-3"
          >
            <svg className="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +7 (965) 178-44-34
          </a>
          <Link
            href="/kontakty"
            className="flex items-center justify-center px-6 py-3.5 rounded-full bg-primary text-on-primary text-[15px] font-semibold
              active:bg-primary/80"
          >
            Оставить заявку
          </Link>
        </div>
      </div>
    </header>
  );
}
