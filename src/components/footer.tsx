import Link from "next/link";
import { W, NAV } from "./constants";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className={`${W} py-10 md:py-12`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-lg font-bold text-primary"
              aria-label="1ИНТЕГРА — главная"
            >
              1ИНТЕГРА
            </Link>
            <span className="text-sm text-on-surface-variant">&copy; 2026</span>
          </div>

          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:flex-wrap md:gap-x-6 md:gap-y-0"
            aria-label="Ссылки"
          >
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
            <a
              href="tel:+79679688868"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              +7 (967) 968-88-68
            </a>
            <a
              href="mailto:info@1integra.ru"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              info@1integra.ru
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
