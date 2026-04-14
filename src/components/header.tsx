import Link from "next/link";
import { W, NAV } from "./constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant">
      <div className={`${W} h-16 flex items-center justify-between gap-4`}>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-primary shrink-0"
          aria-label="1ИНТЕГРА — главная"
        >
          1ИНТЕГРА
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center" aria-label="Навигация">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold h-10 px-4 flex items-center rounded-full
                text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:+79651784434"
            className="text-sm font-semibold text-on-surface hover:text-primary transition-colors"
          >
            +7 (965) 178-44-34
          </a>
          <Link
            href="/kontakty"
            className="text-sm font-semibold h-10 px-6 rounded-full bg-primary text-on-primary
              flex items-center hover:bg-primary/90 active:bg-primary/80 transition-colors"
          >
            Оставить заявку
          </Link>
        </div>

        {/* Mobile menu — pure HTML, zero JS */}
        <details className="md:hidden group -mr-2">
          <summary
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high cursor-pointer list-none [&::-webkit-details-marker]:hidden"
            aria-label="Меню"
          >
            <svg
              className="w-6 h-6 text-on-surface group-open:hidden"
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            <svg
              className="w-6 h-6 text-on-surface hidden group-open:block"
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </summary>

          <div className="fixed top-16 left-0 right-0 bg-surface-container-lowest border-b border-outline-variant animate-[fadeIn_0.2s_ease]">
            <nav className="px-4 py-2" aria-label="Мобильное меню">
              {NAV.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base font-semibold flex items-center px-4 py-4 rounded-xl
                    text-on-surface hover:bg-surface-container-high"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-6 pt-3 border-t border-outline-variant space-y-3">
              <a
                href="tel:+79651784434"
                className="text-base flex items-center gap-3 px-4 py-3 text-on-surface"
              >
                <svg className="w-5 h-5 text-on-surface-variant shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +7 (965) 178-44-34
              </a>
              <Link
                href="/kontakty"
                className="text-sm font-semibold flex items-center justify-center h-12 rounded-full bg-primary text-on-primary"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
