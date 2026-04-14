import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { DIRECTIONS } from "@/data/directions";
import { MODULES, getModulesByDirection } from "@/data/modules";

export const metadata = {
  title: "Услуги внедрения 1С — 32 направления под ключ",
  description: "32 направления внедрения 1С: ERP, бухгалтерия, зарплата, склад, производство, торговля, документооборот. 263 модуля, одна команда.",
  alternates: { canonical: "/uslugi" },
};

export default function UslugiPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div className="max-w-2xl">
            <h1
              data-r="reveal"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface"
            >
              Направления внедрения
            </h1>
            <p
              data-r="reveal d1"
              className="text-lg text-on-surface-variant mt-4 leading-relaxed"
            >
              {DIRECTIONS.length}&nbsp;направлений, {MODULES.length}&nbsp;модулей — от&nbsp;бухгалтерии до&nbsp;управления холдингом.
              Не&nbsp;ищем субподрядчиков, делаем всё силами одной команды.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6"
          >
            {DIRECTIONS.map((s) => {
              const dirModules = getModulesByDirection(s.slug);
              return (
                <Link
                  key={s.slug}
                  href={`/uslugi/${s.slug}`}
                  className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low active:scale-[0.98] transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)] block"
                >
                  <h3 className="text-base font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    {s.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {dirModules.slice(0, 3).map((m) => (
                      <span
                        key={m.slug}
                        className="text-xs px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface"
                      >
                        {m.title}
                      </span>
                    ))}
                    {dirModules.length > 3 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant/50">
                        +{dirModules.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-primary group-hover:opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                    Подробнее →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Link to modules */}
      <section className="pb-16 md:pb-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="rounded-xl bg-surface-container border border-outline-variant p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <div className="text-base font-semibold text-on-surface mb-2">
                Ищете конкретный модуль?
              </div>
              <p className="text-sm text-on-surface-variant">
                В&nbsp;каталоге {MODULES.length}&nbsp;модулей 1С с&nbsp;описанием и&nbsp;привязкой к&nbsp;направлениям.
              </p>
            </div>
            <Link
              href="/moduli"
              className="shrink-0 h-10 px-6 rounded-full bg-primary text-on-primary text-sm font-semibold flex items-center justify-center
                hover:bg-primary/90 transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              Каталог модулей
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-16 md:pb-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="rounded-xl bg-surface-container border border-outline-variant p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <div className="text-base font-semibold text-on-surface mb-2">
                Не нашли своё направление?
              </div>
              <p className="text-sm text-on-surface-variant">
                Мы работаем со&nbsp;всеми конфигурациями 1С. Напишите — подберём решение.
              </p>
            </div>
            <Link
              href="/kontakty"
              className="shrink-0 h-10 px-6 rounded-full bg-primary text-on-primary text-sm font-semibold flex items-center justify-center
                hover:bg-primary/90 transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              Обсудить задачу
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
