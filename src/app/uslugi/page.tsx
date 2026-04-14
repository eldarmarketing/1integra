import Link from "next/link";
import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function UslugiPage() {
  return (
    <RevealProvider>
      {/* Hero */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-14">
        <div className={W}>
          <div className="max-w-2xl">
            <h1
              data-r="reveal"
              className="font-heading font-bold md3-headline-large text-on-surface leading-[1.15] tracking-tight"
            >
              Направления внедрения
            </h1>
            <p
              data-r="reveal d1"
              className="md3-body-large text-on-surface-variant mt-4 md:mt-5 leading-[1.6]"
            >
              32&nbsp;направления, 263&nbsp;модуля — от&nbsp;бухгалтерии до&nbsp;управления холдингом.
              Не&nbsp;ищем субподрядчиков, делаем всё силами одной команды.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="pt-4 pb-12 md:pt-6 md:pb-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="group rounded-[var(--radius-lg)] border border-outline-variant/50 bg-surface-container-lowest p-7 md:p-9 hover:bg-surface-container-low active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] block"
              >
                <h3 className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">
                  {s.title}
                </h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6] mb-5 md:mb-6">
                  {s.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
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
      <section className="pb-10 md:pb-16">
        <div className={W}>
          <div
            data-r="reveal"
            className="rounded-[var(--radius-lg)] bg-surface-container border border-outline-variant/50 p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          >
            <div>
              <div className="font-heading font-bold md3-title-medium text-on-surface mb-2 md:mb-2.5">
                Не нашли своё направление?
              </div>
              <p className="md3-body-medium text-on-surface-variant leading-[1.6]">
                Мы работаем со&nbsp;всеми конфигурациями 1С. Напишите — подберём решение.
              </p>
            </div>
            <Link
              href="/kontakty"
              className="shrink-0 px-7 py-3 rounded-full bg-primary text-on-primary md3-label-large text-center
                hover:opacity-90 active:opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
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
