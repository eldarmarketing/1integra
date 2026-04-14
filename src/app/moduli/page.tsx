import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { MODULES } from "@/data/modules";
import { DIRECTIONS } from "@/data/directions";

export const metadata = {
  title: "263 модуля 1С — полный каталог",
  description:
    "Каталог всех 263 модулей 1С, с которыми работает 1ИНТЕГРА. От бухгалтерии до ERP — находите нужный модуль и оставляйте заявку.",
  alternates: { canonical: "/moduli" },
};

export default function ModuliPage() {
  /* Group modules by direction */
  const grouped = DIRECTIONS.map((d) => ({
    direction: d,
    modules: MODULES.filter((m) => m.directions.includes(d.slug)),
  })).filter((g) => g.modules.length > 0);

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
              Каталог модулей 1С
            </h1>
            <p
              data-r="reveal d1"
              className="text-lg text-on-surface-variant mt-4 leading-relaxed"
            >
              {MODULES.length}&nbsp;модулей по&nbsp;{DIRECTIONS.length}&nbsp;направлениям.
              Внедряем, настраиваем, дорабатываем — всё силами одной команды.
            </p>
          </div>
        </div>
      </section>

      {/* Modules by direction */}
      <section className="pb-16 md:pb-24">
        <div className={W}>
          <div className="space-y-12">
            {grouped.map(({ direction, modules }) => (
              <div key={direction.slug} data-r="reveal">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h2 className="text-xl font-bold text-on-surface">
                    {direction.title}
                  </h2>
                  <Link
                    href={`/uslugi/${direction.slug}`}
                    className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity shrink-0"
                  >
                    Направление →
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {modules.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/moduli/${m.slug}`}
                      className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-4
                        hover:bg-surface-container-low active:scale-[0.98]
                        transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)] block"
                    >
                      <h3 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {m.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant mt-1 line-clamp-2">
                        {m.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
                Не нашли нужный модуль?
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
