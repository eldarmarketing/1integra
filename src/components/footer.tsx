import Link from "next/link";
import { W, NAV } from "./constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 md:py-10">
      <div className={`${W} flex flex-col md:flex-row md:items-center md:justify-between gap-6`}>
        <div className="flex items-center gap-4">
          <Link href="/" className="font-heading font-bold text-lg text-navy">
            1ИНТЕГРА
          </Link>
          <span className="text-sm text-gray-400">&copy; 2026</span>
        </div>
        <nav className="flex flex-wrap gap-6">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-gray-400">info@1integra.ru</div>
      </div>
    </footer>
  );
}
