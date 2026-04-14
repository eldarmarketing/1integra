import Link from "next/link";
import { W, NAV } from "./constants";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className={`${W} py-10 md:py-12`}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="md3-title-medium text-primary"
              aria-label="1ИНТЕГРА — главная"
            >
              1ИНТЕГРА
            </Link>
            <span className="md3-body-medium text-on-surface-variant">&copy; 2026</span>
          </div>

          {/* Nav links */}
          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-2 md:flex md:flex-wrap md:gap-x-6 md:gap-y-0"
            aria-label="Ссылки"
          >
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="md3-body-medium text-on-surface-variant hover:text-on-surface"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Contacts */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
            <a
              href="tel:+79651784434"
              className="md3-body-medium text-on-surface-variant hover:text-on-surface"
            >
              +7 (965) 178-44-34
            </a>
            <a
              href="mailto:info@1integra.ru"
              className="md3-body-medium text-on-surface-variant hover:text-on-surface"
            >
              info@1integra.ru
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
