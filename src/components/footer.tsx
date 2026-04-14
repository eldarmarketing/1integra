import Link from "next/link";
import { W, NAV } from "./constants";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest py-12 md:py-14 pb-32 md:pb-14">
      <div className={`${W} flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10`}>
        <div className="flex items-center gap-5">
          <Link href="/" className="font-heading font-bold text-[18px] text-primary">
            1ИНТЕГРА
          </Link>
          <span className="md3-body-small text-on-surface-variant">&copy; 2026</span>
        </div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-4 md:flex md:flex-wrap md:gap-8">
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
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6 md3-body-medium text-on-surface-variant">
          <a href="tel:+79651784434" className="hover:text-on-surface">+7 (965) 178-44-34</a>
          <a href="mailto:info@1integra.ru" className="hover:text-on-surface">info@1integra.ru</a>
        </div>
      </div>
    </footer>
  );
}
