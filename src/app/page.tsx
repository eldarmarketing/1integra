"use client";
import { useEffect, useRef, useState } from "react";

/* ── Scroll-reveal ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-r]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const cls = (e.target as HTMLElement).dataset.r || "reveal";
            (e.target as HTMLElement).classList.add(...cls.split(" "));
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((i) => obs.observe(i));
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Nav links ── */
const NAV = [
  { label: "О нас", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Контакты", href: "#contacts" },
];

/* ── Arrow icon ── */
const Arr = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function Home() {
  const pg = useReveal();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div ref={pg} className="min-h-screen bg-white">
      {/* ════════════════════ HEADER ════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-deep/5">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-14 flex items-center justify-between">
          <a
            href="#"
            className="font-heading font-bold text-lg text-navy-deep tracking-tight
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            1ИНТЕГРА
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Навигация">
            {NAV.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-text-muted hover:text-navy-deep transition-colors duration-150
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-navy-deep
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            aria-label="Меню"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {navOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {navOpen && (
          <div className="md:hidden border-t border-navy-deep/5 bg-white">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3">
              {NAV.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setNavOpen(false)}
                  className="text-sm text-text-secondary hover:text-navy-deep py-2 transition-colors duration-150"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ════════════════════ HERO ════════════════════ */}
        <section className="pt-32 pb-16 lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p
              data-r="reveal"
              className="text-xs font-semibold tracking-widest uppercase text-accent mb-8"
            >
              Студия внедрения 1С
            </p>
            <h1
              data-r="reveal d1"
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-navy-deep leading-none tracking-tight"
            >
              Внедряем&nbsp;1С
              <br />
              целиком
            </h1>
            <p
              data-r="reveal d2"
              className="text-lg lg:text-xl text-text-secondary mt-6 max-w-xl leading-relaxed"
            >
              32&nbsp;направления и&nbsp;263&nbsp;модуля.
              Одна&nbsp;команда вместо&nbsp;десяти подрядчиков.
            </p>
            <div data-r="reveal d3" className="mt-10">
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-deep text-white text-sm font-semibold
                           hover:bg-navy transition-colors duration-150
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy
                           active:bg-navy-mid"
              >
                Обсудить проект <Arr />
              </a>
            </div>

            {/* Stats row */}
            <div
              data-r="reveal d4"
              className="mt-20 pt-8 border-t border-navy-deep/10
                         grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8"
            >
              {[
                ["32", "направления"],
                ["263", "модуля"],
                ["×3", "быстрее"],
                ["0 ₽", "предоплата"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <div className="font-heading font-bold text-3xl lg:text-4xl text-navy-deep leading-none">
                    {n}
                  </div>
                  <div className="text-xs text-text-muted mt-2 uppercase tracking-wide">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ О КОМПАНИИ ════════════════════ */}
        <section id="about" className="py-20 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Left: text */}
              <div className="lg:col-span-3">
                <h2
                  data-r="reveal"
                  className="font-heading font-bold text-3xl lg:text-5xl text-navy-deep leading-tight tracking-tight"
                >
                  Знаем все
                  <br className="hidden lg:block" />
                  263&nbsp;модуля
                </h2>
                <div
                  data-r="reveal d1"
                  className="mt-8 space-y-4 text-base text-text-secondary leading-relaxed"
                >
                  <p>
                    У платформы 1С 32&nbsp;направления и 263&nbsp;модуля. Большинство
                    интеграторов хорошо знают 5–8 из них, а на остальное ищут
                    субподрядчиков. Мы разбираемся во всех.
                  </p>
                  <p>
                    Вам не придётся нанимать одну компанию на бухгалтерию, другую
                    на склад, третью на производство и потом разбираться, почему
                    между ними ничего не стыкуется.
                  </p>
                </div>
              </div>

              {/* Right: numbers */}
              <div
                data-r="reveal d2"
                className="lg:col-span-2 grid grid-cols-2 gap-px bg-navy-deep/10"
              >
                {[
                  ["32", "направления"],
                  ["263", "модуля"],
                  ["1", "команда"],
                  ["0", "субподрядчиков"],
                ].map(([n, l]) => (
                  <div key={l as string} className="bg-white p-6 lg:p-8">
                    <div className="font-heading font-bold text-4xl text-navy-deep leading-none">
                      {n}
                    </div>
                    <div className="text-xs text-text-muted mt-2 uppercase tracking-wide">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ ДЛЯ КОГО ════════════════════ */}
        <section className="bg-navy-deep py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2
                data-r="reveal"
                className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight tracking-tight"
              >
                Тем, кому надоело
              </h2>
              <div
                data-r="reveal d1"
                className="mt-8 space-y-5 text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <p>
                  Вы производите мебель, возите грузы по стране или управляете
                  сетью из 200&nbsp;магазинов. У вас сложные процессы, много юрлиц
                  и бухгалтерия, от которой зависит всё.
                </p>
                <p>
                  Вам уже внедряли 1С. Возможно, не один раз. Проект на три
                  месяца растянулся на год. Интегратор звонил с просьбой
                  «скорректировать бюджет», хотя половина работы ещё не сделана.
                </p>
              </div>
              <div data-r="reveal d2" className="mt-10 border-l-2 border-accent pl-6">
                <p className="font-heading font-bold text-xl text-white leading-snug">
                  Мы для тех, кому это надоело.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ ПОДХОД ════════════════════ */}
        <section id="approach" className="py-20 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-3xl lg:text-5xl text-navy-deep leading-tight tracking-tight"
            >
              Работаем параллельно
            </h2>
            <p
              data-r="reveal d1"
              className="text-base text-text-secondary leading-relaxed mt-5 max-w-2xl"
            >
              Обычно 3–5 человек идут по модулям последовательно. ERP
              на 200&nbsp;пользователей — год-полтора. У нас несколько групп
              работают одновременно.
            </p>

            <div data-r="reveal d2" className="mt-12 overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm min-w-96">
                <thead>
                  <tr className="border-b-2 border-navy-deep">
                    <th className="text-left py-3 pr-8 font-semibold text-navy-deep">
                      Проект
                    </th>
                    <th className="py-3 px-8 font-medium text-text-muted text-right">
                      Обычно
                    </th>
                    <th className="py-3 pl-8 font-semibold text-navy text-right">
                      У нас
                    </th>
                  </tr>
                </thead>
                <tbody className="font-variant-numeric tabular-nums">
                  {[
                    ["ERP, 200 пользователей", "12–14 мес.", "4–5 мес."],
                    ["Бухгалтерия + зарплата + склад", "6–8 мес.", "2–3 мес."],
                    ["Переезд с SAP", "18–24 мес.", "6–8 мес."],
                  ].map(([p, u, o], i) => (
                    <tr key={i} className="border-b border-navy-deep/10">
                      <td className="py-4 pr-8 text-text">{p}</td>
                      <td className="py-4 px-8 text-right text-text-muted line-through decoration-text-muted/30">
                        {u}
                      </td>
                      <td className="py-4 pl-8 text-right font-bold text-navy-deep">
                        {o}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p
              data-r="reveal d3"
              className="text-sm text-text-muted mt-8 max-w-lg"
            >
              Месяц без новой системы стоит бизнесу денег. Если мы экономим
              8&nbsp;месяцев, сэкономленное часто перекрывает стоимость самого
              внедрения.
            </p>
          </div>
        </section>

        {/* ════════════════════ ГАРАНТИИ ════════════════════ */}
        <section id="guarantees" className="py-20 lg:py-28 bg-surface">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-3xl lg:text-5xl text-navy-deep leading-tight tracking-tight"
            >
              Отвечаем деньгами
            </h2>
            <p
              data-r="reveal d1"
              className="text-base text-text-secondary leading-relaxed mt-4 max-w-lg"
            >
              Три&nbsp;пункта в договоре с&nbsp;печатью. Подписывается
              до&nbsp;начала работ.
            </p>

            <div className="mt-12 divide-y divide-navy-deep/10">
              {[
                {
                  n: "01",
                  t: "Результат",
                  d: "Модуль не работает как в ТЗ — дорабатываем бесплатно, сколько потребуется.",
                },
                {
                  n: "02",
                  t: "Бюджет",
                  d: "Сумма фиксируется до старта. Ошиблись в оценке — наши расходы.",
                },
                {
                  n: "03",
                  t: "Сроки",
                  d: "Дата сдачи в договоре. Каждая неделя просрочки — минус 5% от суммы.",
                },
              ].map((c, i) => (
                <div
                  key={c.n}
                  data-r="reveal"
                  className={`d${i + 1} grid sm:grid-cols-12 gap-4 sm:gap-8 py-8 first:pt-0`}
                >
                  <div className="sm:col-span-1">
                    <span className="font-heading font-bold text-2xl text-accent leading-none">
                      {c.n}
                    </span>
                  </div>
                  <div className="sm:col-span-3">
                    <h3 className="font-heading font-bold text-lg text-navy-deep">
                      {c.t}
                    </h3>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-base text-text-secondary leading-relaxed">
                      {c.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ ПЕРЕЕЗД ════════════════════ */}
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-3xl lg:text-5xl text-navy-deep leading-tight tracking-tight"
            >
              Переезд без остановки
            </h2>
            <p
              data-r="reveal d1"
              className="text-base text-text-secondary leading-relaxed mt-5 max-w-2xl"
            >
              Миграция обычно нервная: бизнес замирает, данные переносят ночами,
              часть записей теряется. У нас новая 1С запускается рядом со старой.
              Откат за 15&nbsp;минут.
            </p>

            {/* Steps as a numbered list, NOT cards */}
            <div data-r="reveal d2" className="mt-12 grid sm:grid-cols-2 gap-x-16 gap-y-8">
              {[
                ["Запуск рядом", "Новая 1С параллельно со старой системой"],
                ["Пилот 10%", "Небольшая группа пользователей переходит первой"],
                ["Переключение", "Полный переход после вашего одобрения"],
                ["Все данные", "Каждый документ за все годы работы"],
              ].map(([t, d], i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="font-heading font-bold text-sm text-accent mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-semibold text-navy-deep text-sm">
                      {t}
                    </div>
                    <div className="text-sm text-text-muted mt-1 leading-relaxed">
                      {d}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              data-r="reveal d3"
              className="mt-10 border-l-2 border-accent pl-6"
            >
              <p className="text-sm font-semibold text-navy-deep">
                Если хоть один документ потеряется — миграция за наш счёт.
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════ ПОСТОПЛАТА ════════════════════ */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-3xl lg:text-5xl text-navy-deep leading-tight tracking-tight"
            >
              Деньги после результата
            </h2>

            <div
              data-r="reveal d1"
              className="mt-12 grid lg:grid-cols-2 overflow-hidden border border-navy-deep/10"
            >
              {/* Left: usual */}
              <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-navy-deep/10">
                <div className="text-xs font-bold text-text-muted tracking-wider uppercase mb-6">
                  Обычно
                </div>
                <p className="text-base text-text-secondary leading-relaxed mb-8">
                  Интегратор берёт 50–70% вперёд.
                  <br />
                  Вы платите за обещания.
                </p>
                <div className="font-heading font-bold text-6xl lg:text-7xl text-navy-deep/10 leading-none">
                  65%
                </div>
                <div className="text-xs text-text-muted mt-2">предоплата</div>
              </div>

              {/* Right: ours */}
              <div className="bg-navy-deep p-8 lg:p-12">
                <div className="text-xs font-bold text-white/40 tracking-wider uppercase mb-6">
                  У нас
                </div>
                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Ноль до старта.
                  <br />
                  Оплата когда скажете «принимаю».
                </p>
                <div className="font-heading font-bold text-6xl lg:text-7xl text-white/15 leading-none">
                  0%
                </div>
                <div className="text-xs text-white/40 mt-2">предоплата</div>
              </div>
            </div>

            <p
              data-r="reveal d2"
              className="text-sm text-text-muted mt-6"
            >
              Почему мы так можем? Потому что уверены, что сдадим.
            </p>
          </div>
        </section>

        {/* ════════════════════ CTA ════════════════════ */}
        <section id="contacts" className="bg-navy-deep py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: message */}
              <div>
                <h2
                  data-r="reveal"
                  className="font-heading font-bold text-3xl lg:text-4xl text-white leading-tight tracking-tight"
                >
                  Обсудите ваш проект
                </h2>
                <p
                  data-r="reveal d1"
                  className="mt-5 text-base leading-relaxed max-w-md"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Расскажите, что нужно внедрить. Мы оценим сроки
                  и&nbsp;стоимость за&nbsp;2&nbsp;дня.
                </p>
                <div data-r="reveal d2" className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:info@1integra.ru"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-deep font-semibold text-sm
                               hover:bg-white/90 transition-colors duration-150
                               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    info@1integra.ru
                  </a>
                  <a
                    href="tel:+7XXXXXXXXXX"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-sm
                               hover:border-white/40 transition-colors duration-150
                               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
                <p
                  data-r="reveal d3"
                  className="mt-5 text-xs"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Ответим в течение часа в рабочее время
                </p>
              </div>

              {/* Right: what happens next */}
              <div data-r="reveal d2" className="hidden lg:block">
                <div className="text-xs font-bold tracking-wider uppercase mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Что будет дальше
                </div>
                <div className="space-y-6">
                  {[
                    "Вы описываете задачу",
                    "Мы оцениваем за 2 дня",
                    "Подписываем договор",
                    "Работаем — платите по результату",
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="font-heading font-bold text-sm text-accent mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer className="bg-navy-deep border-t border-white/5 py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-sm text-white/60">
              1ИНТЕГРА
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              &copy; 2026
            </span>
          </div>
          <nav className="flex gap-6">
            {NAV.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs hover:text-white/50 transition-colors duration-150
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
