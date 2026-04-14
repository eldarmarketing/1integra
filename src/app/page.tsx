import Link from "next/link";
import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function Home() {
  return (
    <RevealProvider>

      {/* ═══ HERO ═══ */}
      <section className="bg-inverse-surface">
        <div className={`${W} py-16 md:py-24`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary animate-pulse" aria-hidden />
                <span className="md3-label-medium text-inverse-on-surface/70">Студия внедрения 1С</span>
              </div>

              <h1 className="md3-display-medium text-inverse-on-surface">
                Внедряем 1С целиком
              </h1>

              <p className="md3-body-large text-inverse-on-surface/60 mt-4 max-w-lg">
                32&nbsp;направления и&nbsp;263&nbsp;модуля. Одна команда вместо десяти подрядчиков. Параллельная работа — быстрее в&nbsp;3&nbsp;раза.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  href="/kontakty"
                  className="md3-label-large h-10 px-6 rounded-full bg-inverse-primary text-on-primary-container
                    flex items-center justify-center hover:brightness-110 active:scale-[0.97]"
                >
                  Обсудить проект
                </Link>
                <Link
                  href="/uslugi"
                  className="md3-label-large h-10 px-6 rounded-full border border-inverse-on-surface/30 text-inverse-on-surface
                    flex items-center justify-center hover:bg-white/5"
                >
                  Все направления
                </Link>
              </div>
            </div>

            {/* Right — stat cards 2×2 */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
              {[
                { val: "32",  label: "направления", sub: "все конфигурации 1С" },
                { val: "263", label: "модуля",       sub: "от бухгалтерии до ERP" },
                { val: "×3",  label: "быстрее",      sub: "параллельные группы" },
                { val: "0₽",  label: "аванс",        sub: "оплата по результату" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-6"
                >
                  <div className="md3-display-medium text-inverse-primary tabular-nums">{s.val}</div>
                  <div className="md3-title-small text-inverse-on-surface mt-2">{s.label}</div>
                  <div className="md3-body-small text-inverse-on-surface/40 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="md3-headline-large text-on-surface">
              Направления внедрения
            </h2>
            <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4">
              Знаем все 263 модуля. Не&nbsp;ищем субподрядчиков — делаем сами.
            </p>
          </div>

          <div data-r="reveal d2" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-12">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6
                  hover:bg-surface-container-low transition-colors duration-300 block"
              >
                <h3 className="md3-title-medium text-on-surface group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="md3-body-medium text-on-surface-variant mt-2">
                  {s.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {s.modules.slice(0, 3).map((m) => (
                    <span
                      key={m}
                      className="md3-label-medium px-2.5 py-1 rounded-[4px] bg-surface-container-high text-on-surface-variant"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/uslugi"
              className="md3-label-large text-primary hover:opacity-80"
            >
              Все 9 направлений →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ APPROACH ═══ */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className={W}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text */}
            <div>
              <h2 data-r="reveal" className="md3-headline-large text-on-surface">
                Работаем параллельно — быстрее в&nbsp;3 раза
              </h2>
              <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4">
                Обычный интегратор ведёт модули по&nbsp;очереди. У&nbsp;нас несколько групп
                одновременно — ERP за&nbsp;4–5 месяцев вместо 14.
              </p>
              <Link
                href="/o-kompanii"
                data-r="reveal d2"
                className="md3-label-large text-primary inline-flex items-center gap-1 mt-6 hover:opacity-80"
              >
                Подробнее о подходе →
              </Link>
            </div>

            {/* Right — 3 comparison cards */}
            <div data-r="reveal d2" className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6">
              {[
                { label: "ERP на 200 чел.", usual: "14 мес.", ours: "5 мес." },
                { label: "Бух + ЗУП",       usual: "8 мес.",  ours: "3 мес." },
                { label: "Переезд с SAP",   usual: "24 мес.", ours: "8 мес." },
              ].map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 text-center"
                >
                  <div className="md3-body-small text-on-surface-variant">{r.label}</div>
                  <div className="md3-body-medium text-on-surface-variant/50 line-through mt-3">{r.usual}</div>
                  <div className="md3-headline-small text-primary mt-1">{r.ours}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══ GUARANTEES ═══ */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="md3-headline-large text-on-surface">
              Гарантии в&nbsp;договоре
            </h2>
            <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4">
              Три пункта с&nbsp;печатью. Подписывается до&nbsp;начала работ.
            </p>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-12">
            {[
              {
                icon: "✓",
                t: "Результат",
                d: "Модуль не\u00A0работает как в\u00A0ТЗ — дорабатываем бесплатно, сколько бы это ни\u00A0заняло.",
              },
              {
                icon: "₽",
                t: "Фиксированный бюджет",
                d: "Сумма фиксируется до\u00A0старта. Ошиблись в\u00A0оценке — доплачиваем из\u00A0своих.",
              },
              {
                icon: "⏱",
                t: "Сроки в договоре",
                d: "Дата сдачи зафиксирована. Каждая неделя просрочки — минус 5% от\u00A0суммы проекта.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center md3-title-medium mb-5">
                  {c.icon}
                </div>
                <h3 className="md3-title-large text-on-surface">{c.t}</h3>
                <p className="md3-body-medium text-on-surface-variant mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="md3-headline-large text-on-surface">
              Как мы работаем
            </h2>
            <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4">
              Семь шагов от&nbsp;звонка до&nbsp;работающей системы
            </p>
          </div>

          {/* Row 1 — 4 steps */}
          <div data-r="reveal d2" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-12">
            {[
              { n: 1, t: "Аудит",      d: "Бесплатно изучаем процессы и текущую систему" },
              { n: 2, t: "Договор",    d: "Фиксируем требования, сроки, бюджет и гарантии" },
              { n: 3, t: "Настройка",  d: "Несколько групп параллельно настраивают модули" },
              { n: 4, t: "Разработка", d: "Дорабатываем под ваши бизнес-процессы" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6"
              >
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center md3-label-large mb-4">
                  {s.n}
                </div>
                <h3 className="md3-title-medium text-on-surface">{s.t}</h3>
                <p className="md3-body-medium text-on-surface-variant mt-1">{s.d}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 steps */}
          <div data-r="reveal d3" className="grid sm:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-2 md:mt-4 lg:mt-6">
            {[
              { n: 5, t: "Тестирование", d: "Проверяем на реальных данных с пилотной группой" },
              { n: 6, t: "Запуск",       d: "Переключаем всех, старая система доступна для отката" },
              { n: 7, t: "Поддержка",    d: "Консультируем, дорабатываем, обновляем после запуска" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6"
              >
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center md3-label-large mb-4">
                  {s.n}
                </div>
                <h3 className="md3-title-medium text-on-surface">{s.t}</h3>
                <p className="md3-body-medium text-on-surface-variant mt-1">{s.d}</p>
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
