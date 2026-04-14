import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function Home() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="bg-inverse-surface">
        <div className={`${W} py-16 lg:py-24`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary animate-pulse" aria-hidden />
                <span className="text-xs font-medium tracking-wide uppercase text-inverse-on-surface/70">
                  Студия внедрения 1С
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-inverse-on-surface leading-[1.1]">
                Внедряем 1С<br />целиком
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-inverse-on-surface/60 max-w-xl leading-relaxed">
                32&nbsp;направления и&nbsp;263&nbsp;модуля. Одна команда вместо десяти подрядчиков.
                Параллельная работа — быстрее в&nbsp;3&nbsp;раза.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/kontakty"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full
                    bg-inverse-primary text-on-primary-container font-semibold text-sm
                    hover:brightness-110 active:scale-[0.97] transition-all"
                >
                  Обсудить проект
                </Link>
                <Link
                  href="/uslugi"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full
                    border border-inverse-on-surface/30 text-inverse-on-surface font-semibold text-sm
                    hover:bg-white/5 transition-all"
                >
                  Все направления
                </Link>
              </div>
            </div>

            {/* Stat cards 2×2 */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                { val: "32",  label: "направления", sub: "все конфигурации 1С" },
                { val: "263", label: "модуля",       sub: "от бухгалтерии до ERP" },
                { val: "×3",  label: "быстрее",      sub: "параллельные группы" },
                { val: "0₽",  label: "аванс",        sub: "оплата по результату" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-inverse-primary tabular-nums">{s.val}</div>
                  <div className="text-base font-semibold text-inverse-on-surface mt-3">{s.label}</div>
                  <div className="text-sm text-inverse-on-surface/40 mt-1">{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
              Направления внедрения
            </h2>
            <p data-r="reveal d1" className="text-lg text-on-surface-variant mt-4 leading-relaxed">
              Знаем все 263 модуля. Не&nbsp;ищем субподрядчиков — делаем сами.
            </p>
          </div>

          <div data-r="reveal d2" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="group rounded-2xl border border-outline-variant bg-surface-container-lowest
                  p-6 lg:p-8 hover:bg-surface-container-low transition-colors duration-200 block"
              >
                <h3 className="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  {s.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.modules.slice(0, 3).map((m) => (
                    <span
                      key={m}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-surface-container-high text-on-surface-variant"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/uslugi"
              className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Все 9 направлений →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ APPROACH ═══ */}
      <section className="py-16 lg:py-24 bg-surface-container-low">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
              Работаем параллельно —<br className="hidden sm:block" /> быстрее в&nbsp;3 раза
            </h2>
            <p data-r="reveal d1" className="text-lg text-on-surface-variant mt-4 leading-relaxed">
              Обычный интегратор ведёт модули по&nbsp;очереди. У&nbsp;нас несколько групп
              одновременно — ERP за&nbsp;4–5 месяцев вместо 14.
            </p>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {[
              { label: "ERP на 200 чел.", usual: "14 мес.", ours: "5 мес." },
              { label: "Бух + ЗУП",       usual: "8 мес.",  ours: "3 мес." },
              { label: "Переезд с SAP",   usual: "24 мес.", ours: "8 мес." },
            ].map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8 text-center"
              >
                <div className="text-base font-medium text-on-surface-variant">{r.label}</div>
                <div className="text-lg text-on-surface-variant/50 line-through mt-4">{r.usual}</div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mt-1">{r.ours}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/o-kompanii"
              data-r="reveal d3"
              className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Подробнее о подходе →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ GUARANTEES ═══ */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
              Гарантии в&nbsp;договоре
            </h2>
            <p data-r="reveal d1" className="text-lg text-on-surface-variant mt-4 leading-relaxed">
              Три пункта с&nbsp;печатью. Подписывается до&nbsp;начала работ.
            </p>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-16">
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
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container
                  flex items-center justify-center text-xl font-bold mb-6">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-on-surface">{c.t}</h3>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-16 lg:py-24 bg-surface-container-low">
        <div className={W}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
              Как мы работаем
            </h2>
            <p data-r="reveal d1" className="text-lg text-on-surface-variant mt-4 leading-relaxed">
              Семь шагов от&nbsp;звонка до&nbsp;работающей системы
            </p>
          </div>

          <div data-r="reveal d2" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
            {[
              { n: 1, t: "Аудит",        d: "Бесплатно изучаем процессы и текущую систему" },
              { n: 2, t: "Договор",      d: "Фиксируем требования, сроки, бюджет и гарантии" },
              { n: 3, t: "Настройка",    d: "Несколько групп параллельно настраивают модули" },
              { n: 4, t: "Разработка",   d: "Дорабатываем под ваши бизнес-процессы" },
              { n: 5, t: "Тестирование", d: "Проверяем на реальных данных с пилотной группой" },
              { n: 6, t: "Запуск",       d: "Переключаем всех, старая система доступна для отката" },
              { n: 7, t: "Поддержка",    d: "Консультируем, дорабатываем, обновляем после запуска" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-on-primary
                  flex items-center justify-center text-sm font-bold mb-5">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-on-surface">{s.t}</h3>
                <p className="text-base text-on-surface-variant mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CtaSection />

    </>
  );
}
