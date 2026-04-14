import Link from "next/link";
import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function UslugiPage() {
  return (
    <RevealProvider>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div className="max-w-2xl">
            <h1
              data-r="reveal"
              className="md3-headline-large text-on-surface"
            >
              Направления внедрения
            </h1>
            <p
              data-r="reveal d1"
              className="md3-body-large text-on-surface-variant mt-4"
            >
              32&nbsp;направления, 263&nbsp;модуля — от&nbsp;бухгалтерии до&nbsp;управления холдингом.
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
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low active:scale-[0.98] transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)] block"
              >
                <h3 className="md3-title-large text-on-surface mb-2">
                  {s.title}
                </h3>
                <p className="md3-body-medium text-on-surface-variant mb-6">
                  {s.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.modules.map((m) => (
                    <span
                      key={m}
                      className="md3-label-medium px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <span className="md3-label-large text-primary group-hover:opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                  Подробнее →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="rounded-xl bg-surface-container border border-outline-variant p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <div className="md3-title-medium text-on-surface mb-2">
                Не нашли своё направление?
              </div>
              <p className="md3-body-medium text-on-surface-variant">
                Мы работаем со&nbsp;всеми конфигурациями 1С. Напишите — подберём решение.
              </p>
            </div>
            <Link
              href="/kontakty"
              className="shrink-0 h-10 px-6 rounded-full bg-primary text-on-primary md3-label-large flex items-center justify-center
                hover:bg-primary/90 transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              Обсудить задачу
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </RevealProvider>
  );
}
