import Link from "next/link";
import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function Home() {
  return (
    <RevealProvider>

      {/* ═══ HERO ═══ */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-14">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div className="md:row-span-2 relative overflow-hidden rounded-[var(--radius-xl)] bg-inverse-surface p-8 md:p-12 lg:p-14 flex flex-col justify-between min-h-72 md:min-h-[28rem]">
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container md3-label-medium mb-6 md:mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Студия внедрения 1С
                </div>
                <h1 className="font-heading font-bold text-[26px] md:text-[40px] text-inverse-on-surface leading-[1.15] tracking-tight">
                  Внедряем 1С<br />целиком
                </h1>
                <p className="md3-body-large text-inverse-on-surface/60 mt-5 md:mt-6 max-w-md leading-[1.6]">
                  32&nbsp;направления и&nbsp;263&nbsp;модуля. Одна команда вместо десяти подрядчиков.
                </p>
              </div>
              <div className="relative mt-8 md:mt-10">
                <Link
                  href="/kontakty"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-inverse-primary text-on-primary-container md3-label-large
                    hover:opacity-90 active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                >
                  Обсудить проект
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/50 p-7 md:p-10 flex flex-col justify-between min-h-40 md:min-h-48 hover:bg-surface-container-low transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center text-on-primary-container font-heading font-bold text-[13px]">
                ×3
              </div>
              <div className="mt-5 md:mt-6">
                <div className="font-heading font-bold text-[15px] md:text-[17px] text-on-surface">Быстрее обычного</div>
                <p className="md3-body-medium text-on-surface-variant mt-2.5 leading-[1.6]">Несколько групп работают параллельно — ERP за&nbsp;4–5 месяцев вместо 14</p>
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/50 p-7 md:p-10 flex flex-col justify-between min-h-40 md:min-h-48 hover:bg-surface-container-low transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-secondary-container flex items-center justify-center text-on-secondary-container font-heading font-bold text-[13px]">
                0₽
              </div>
              <div className="mt-5 md:mt-6">
                <div className="font-heading font-bold text-[15px] md:text-[17px] text-on-surface">Постоплата</div>
                <p className="md3-body-medium text-on-surface-variant mt-2.5 leading-[1.6]">Платите после результата. Никаких авансов — только по&nbsp;факту</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-10 md:py-16">
        <div className={W}>
          <div data-r="reveal" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              ["32", "направления 1С"],
              ["263", "модуля платформы"],
              ["1", "команда под\u00A0ключ"],
              ["0", "субподрядчиков"],
            ].map(([n, l]) => (
              <div key={l as string} className="rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/50 p-6 md:p-8 text-center">
                <div className="font-heading font-bold text-[28px] md:text-[40px] leading-none text-primary">
                  {n}
                </div>
                <div className="md3-body-medium text-on-surface-variant mt-3 md:mt-4">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-5 mb-10 md:mb-14">
            <div>
              <h2 data-r="reveal" className="font-heading font-bold text-[22px] md:text-[36px] text-on-surface leading-[1.2]">
                Направления внедрения
              </h2>
              <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 md:mt-5 max-w-xl leading-[1.6]">
                Знаем все 263 модуля. Не&nbsp;ищем субподрядчиков — делаем сами.
              </p>
            </div>
            <Link href="/uslugi" data-r="reveal d1"
              className="md3-label-large text-primary hover:opacity-80 transition-opacity duration-200 shrink-0">
              Все направления →
            </Link>
          </div>

          <div data-r="reveal d2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`}
                className="group rounded-[var(--radius-xl)] bg-surface-container-low p-7 md:p-9 hover:bg-surface-container active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] block">
                <h3 className="font-heading font-bold text-[15px] md:text-[17px] text-on-surface mb-2.5">{s.title}</h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APPROACH TEASER ═══ */}
      <section className="pt-10 pb-10 md:pt-16 md:pb-16">
        <div className={W}>
          <div data-r="reveal" className="relative overflow-hidden rounded-[var(--radius-xl)] bg-inverse-surface p-8 md:p-12 lg:p-14">
            <div className="relative grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="font-heading font-bold text-[22px] md:text-[36px] text-inverse-on-surface leading-[1.2] mb-4 md:mb-5">
                  Работаем параллельно — быстрее в&nbsp;3 раза
                </h2>
                <p className="md3-body-large text-inverse-on-surface/60 leading-[1.6] mb-6 md:mb-8">
                  Обычный интегратор ведёт модули по&nbsp;очереди. У&nbsp;нас несколько групп одновременно — ERP за&nbsp;4–5 месяцев вместо 14.
                </p>
                <Link
                  href="/o-kompanii"
                  className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface md3-label-large
                    hover:bg-inverse-on-surface/20 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                >
                  Подробнее о&nbsp;подходе →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {[
                  { label: "ERP 200 чел.", usual: "14 мес.", ours: "5 мес." },
                  { label: "Бух + ЗУП", usual: "8 мес.", ours: "3 мес." },
                  { label: "Переезд SAP", usual: "24 мес.", ours: "8 мес." },
                ].map((r) => (
                  <div key={r.label} className="rounded-[var(--radius-lg)] bg-inverse-on-surface/5 border border-inverse-on-surface/10 p-4 md:p-6 text-center">
                    <div className="md3-label-small text-inverse-on-surface/40 mb-2">{r.label}</div>
                    <div className="md3-body-small text-inverse-on-surface/30 line-through mb-1.5">{r.usual}</div>
                    <div className="font-heading font-bold text-[20px] md:text-[24px] text-inverse-on-surface">{r.ours}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/o-kompanii"
                className="md:hidden inline-flex items-center gap-2 px-6 py-3 rounded-full bg-inverse-on-surface/10 border border-inverse-on-surface/10 text-inverse-on-surface md3-label-large
                  hover:bg-inverse-on-surface/20 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] justify-center"
              >
                Подробнее о&nbsp;подходе →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GUARANTEES PREVIEW ═══ */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-5 mb-10 md:mb-14">
            <div>
              <h2 data-r="reveal" className="font-heading font-bold text-[22px] md:text-[36px] text-on-surface leading-[1.2]">
                Отвечаем деньгами
              </h2>
              <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 md:mt-5 leading-[1.6]">
                Три пункта в&nbsp;договоре с&nbsp;печатью. До&nbsp;начала работ.
              </p>
            </div>
            <Link href="/garantii" data-r="reveal d1"
              className="md3-label-large text-primary hover:opacity-80 transition-opacity duration-200 shrink-0">
              Все гарантии →
            </Link>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { n: "01", t: "Результат", d: "Модуль не\u00A0работает как в\u00A0ТЗ — дорабатываем бесплатно." },
              { n: "02", t: "Бюджет", d: "Сумма фиксируется до\u00A0старта. Ошиблись — наши расходы." },
              { n: "03", t: "Сроки", d: "Каждая неделя просрочки — минус 5% от\u00A0суммы." },
            ].map((c) => (
              <div key={c.n} className="rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/50 p-7 md:p-10 hover:bg-surface-container-low transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container text-on-primary-container flex items-center justify-center font-heading font-bold text-[12px] mb-5 md:mb-7">
                  {c.n}
                </div>
                <h3 className="font-heading font-bold text-[16px] md:text-[18px] text-on-surface mb-2.5">{c.t}</h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS STEPS ═══ */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold text-[22px] md:text-[36px] text-on-surface leading-[1.2] mb-4 md:mb-5">
            Как мы работаем
          </h2>
          <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mb-10 md:mb-14 max-w-2xl leading-[1.6]">
            Семь шагов от&nbsp;первого звонка до&nbsp;работающей системы.
          </p>
          <div data-r="reveal d2" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { n: 1, t: "Аудит", d: "Изучаем процессы и\u00A0текущую систему бесплатно" },
              { n: 2, t: "ТЗ", d: "Фиксируем требования, сроки и\u00A0стоимость в\u00A0договоре" },
              { n: 3, t: "Настройка", d: "Параллельно настраиваем все модули" },
              { n: 4, t: "Разработка", d: "Дорабатываем под\u00A0ваши процессы" },
              { n: 5, t: "Тестирование", d: "Проверяем на\u00A0реальных данных с\u00A0пилотной группой" },
              { n: 6, t: "Запуск", d: "Переключаем всех, старая система остаётся доступна" },
              { n: 7, t: "Поддержка", d: "Консультируем, дорабатываем, обновляем" },
            ].map((s) => (
              <div key={s.n} className="rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/50 p-6 md:p-7">
                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-primary text-on-primary flex items-center justify-center font-heading font-bold text-[12px] mb-5">
                  {s.n}
                </div>
                <div className="font-heading font-bold text-[14px] md:text-[15px] text-on-surface mb-2.5">{s.t}</div>
                <p className="md3-body-small text-on-surface-variant leading-[1.6]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CtaSection />
    </RevealProvider>
  );
}
