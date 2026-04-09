"use client";
import { useEffect, useRef } from "react";

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

const Arrow = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const NAV_LINKS = [
  { label: "О нас", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Контакты", href: "#contacts" },
];

export default function Home() {
  const pg = useReveal();

  return (
    <div ref={pg} className="min-h-screen bg-white overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-heading font-bold text-xl text-navy tracking-tight">
            1ИНТЕГРА
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Навигация">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-text-secondary hover:text-navy font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-navy text-white rounded-lg hover:bg-navy-mid transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Обсудить проект
          </a>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="pt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div data-r="reveal" className="gold-line mx-auto mb-6" />
              <h1
                data-r="reveal d1"
                className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-deep leading-tight tracking-tight mb-4"
              >
                Внедряем 1С целиком
              </h1>
              <p data-r="reveal d2" className="text-lg text-text-secondary leading-relaxed mb-8">
                32&nbsp;направления. 263&nbsp;модуля. Одна&nbsp;команда вместо десяти&nbsp;подрядчиков.
              </p>
              <div data-r="reveal d3" className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="#contacts"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold bg-navy text-white rounded-lg hover:bg-navy-mid transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Обсудить проект <Arrow />
                </a>
                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-navy border border-navy/20 rounded-lg hover:bg-navy/5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Узнать подход
                </a>
              </div>
            </div>

            {/* Stats */}
            <div data-r="reveal d4" className="grid grid-cols-2 sm:grid-cols-4 border-t border-border pt-8 gap-6">
              {[
                ["32", "направления"],
                ["263", "модуля"],
                ["×3", "быстрее"],
                ["0 ₽", "предоплата"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-heading font-bold text-3xl sm:text-4xl text-navy-deep leading-none">{n}</div>
                  <div className="text-sm text-text-muted mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== О КОМПАНИИ ===== */}
        <section id="about" className="py-12 sm:py-16 lg:py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2
                data-r="reveal"
                className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-deep leading-tight tracking-tight mb-3"
              >
                Знаем все 263&nbsp;модуля
              </h2>
              <div data-r="reveal d1" className="gold-line mb-6" />
              <div data-r="reveal d2" className="grid sm:grid-cols-2 gap-8 text-base text-text-secondary leading-relaxed">
                <p>
                  У платформы 1С 32 направления и 263 модуля. Большинство интеграторов хорошо знают 5–8 из них,
                  а на остальное ищут субподрядчиков. Мы разбираемся во всех.
                </p>
                <p>
                  Вам не придётся нанимать одну компанию на бухгалтерию, другую на склад, третью на производство
                  и потом разбираться, почему между ними ничего не стыкуется.
                </p>
              </div>
            </div>

            {/* Numbers grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
              {[
                ["32", "направления 1С"],
                ["263", "модуля платформы"],
                ["1", "команда под ключ"],
                ["0", "субподрядчиков"],
              ].map(([n, l], i) => (
                <div
                  key={l}
                  data-r="reveal"
                  className={`d${i + 1} bg-white p-6 lg:p-8 text-center`}
                >
                  <div className="font-heading font-bold text-4xl lg:text-5xl num-navy leading-none">{n}</div>
                  <div className="text-sm text-text-muted mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ДЛЯ КОГО ===== */}
        <section className="bg-navy-deep py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2
                data-r="reveal"
                className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight mb-6"
              >
                Тем, кому надоело
              </h2>
              <div data-r="reveal d1" className="space-y-4 text-base text-white/60 leading-relaxed mb-8">
                <p>
                  Вы производите мебель, возите грузы по стране или управляете сетью из 200 магазинов.
                  У вас сложные процессы, много юрлиц и бухгалтерия, от которой зависит всё.
                </p>
                <p>
                  Вам уже внедряли 1С. Возможно, не один раз. Проект на три месяца растянулся на год.
                  Интегратор звонил с просьбой «скорректировать бюджет», хотя половина работы ещё не сделана.
                </p>
              </div>
              <div data-r="reveal d2" className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 rounded-lg">
                <div className="w-1 h-6 bg-accent rounded-full" />
                <p className="font-heading font-bold text-lg text-white">
                  Мы для тех, кому это надоело.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== РАБОТАЕМ ПАРАЛЛЕЛЬНО ===== */}
        <section id="approach" className="py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-deep leading-tight tracking-tight mb-3"
            >
              Работаем параллельно
            </h2>
            <div data-r="reveal d1" className="gold-line mb-6" />
            <p data-r="reveal d2" className="text-base text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Обычно 3–5 человек идут по модулям последовательно. ERP на 200 пользователей — год-полтора.
              У нас несколько групп работают одновременно.
            </p>

            <div data-r="reveal d3" className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-navy">
                    <th className="text-left py-3 pr-6 font-semibold text-navy-deep">Проект</th>
                    <th className="py-3 px-6 font-semibold text-text-muted text-center">Обычно</th>
                    <th className="py-3 pl-6 font-semibold text-navy text-center">У нас</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ERP, 200 пользователей", "12–14 мес.", "4–5 мес."],
                    ["Бухгалтерия + зарплата + склад", "6–8 мес.", "2–3 мес."],
                    ["Переезд с SAP", "18–24 мес.", "6–8 мес."],
                  ].map(([p, u, o], i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-3 pr-6 text-text">{p}</td>
                      <td className="py-3 px-6 text-center text-text-muted">{u}</td>
                      <td className="py-3 pl-6 text-center font-semibold text-navy">{o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p data-r="reveal d4" className="text-sm text-text-muted max-w-xl">
              Месяц без новой системы стоит бизнесу денег. Если мы экономим 8 месяцев,
              сэкономленное часто перекрывает стоимость самого внедрения.
            </p>
          </div>
        </section>

        {/* ===== ГАРАНТИИ ===== */}
        <section id="guarantees" className="py-12 sm:py-16 lg:py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-deep leading-tight tracking-tight mb-3"
            >
              Отвечаем деньгами
            </h2>
            <p data-r="reveal d1" className="text-base text-text-secondary leading-relaxed mb-10 max-w-lg">
              Три&nbsp;пункта в договоре с&nbsp;печатью. Подписывается до&nbsp;начала работ.
            </p>

            <div className="grid md:grid-cols-3 gap-px border border-border rounded-2xl overflow-hidden bg-border">
              {[
                {
                  n: "01",
                  t: "Результат",
                  b: "Модуль не работает как в ТЗ — дорабатываем бесплатно, сколько потребуется.",
                },
                {
                  n: "02",
                  t: "Бюджет",
                  b: "Сумма фиксируется до старта. Ошиблись в оценке — наши расходы.",
                },
                {
                  n: "03",
                  t: "Сроки",
                  b: "Дата сдачи в договоре. Каждая неделя просрочки — минус 5% от суммы.",
                },
              ].map((c, i) => (
                <div
                  key={c.n}
                  data-r="reveal"
                  className={`d${i + 1} bg-white p-6 lg:p-8`}
                >
                  <div className="text-xs font-bold text-accent tracking-widest mb-4">{c.n}</div>
                  <h3 className="font-heading font-bold text-lg text-navy-deep mb-2">{c.t}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ПЕРЕЕЗД ===== */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-deep leading-tight tracking-tight mb-3"
            >
              Переезд без остановки
            </h2>
            <div data-r="reveal d1" className="gold-line mb-6" />
            <p data-r="reveal d2" className="text-base text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Миграция обычно нервная: бизнес замирает, данные переносят ночами, часть записей теряется.
              У нас новая 1С запускается рядом со старой. Откат за 15 минут.
            </p>

            <div data-r="reveal d3" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                ["1", "Запуск рядом", "Новая 1С параллельно со старой"],
                ["2", "Пилот 10%", "Небольшая группа переходит первой"],
                ["3", "Переключение", "Полный переход после одобрения"],
                ["4", "Все данные", "Каждый документ за все годы"],
              ].map(([n, t, d]) => (
                <div key={n} className="border border-border rounded-xl p-5">
                  <div className="w-7 h-7 rounded-md bg-navy text-white flex items-center justify-center text-xs font-bold mb-3">{n}</div>
                  <div className="font-semibold text-sm text-navy-deep mb-1">{t}</div>
                  <div className="text-sm text-text-muted leading-normal">{d}</div>
                </div>
              ))}
            </div>

            <div
              data-r="reveal d4"
              className="px-5 py-3 bg-accent/10 border-l-2 border-accent rounded-r-lg text-sm text-text-secondary inline-block"
            >
              Если хоть один документ потеряется — миграция за наш счёт.
            </div>
          </div>
        </section>

        {/* ===== ПОСТОПЛАТА ===== */}
        <section className="py-12 sm:py-16 lg:py-24 bg-surface">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2
              data-r="reveal"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-navy-deep leading-tight tracking-tight mb-3"
            >
              Деньги после результата
            </h2>
            <div data-r="reveal d1" className="gold-line mb-8" />

            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden mb-8">
              <div data-r="reveal d1" className="bg-white p-6 lg:p-8">
                <div className="text-xs font-bold text-text-muted tracking-wider uppercase mb-4">Обычно</div>
                <p className="text-base text-text-secondary leading-relaxed mb-6">
                  Интегратор берёт 50–70% вперёд. Вы платите за обещания.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-text-muted">Предоплата</span>
                    <span className="text-text-muted">65%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-full bg-gray-300 rounded-full w-2/3" />
                  </div>
                </div>
              </div>

              <div data-r="reveal d2" className="bg-navy p-6 lg:p-8">
                <div className="text-xs font-bold text-white/50 tracking-wider uppercase mb-4">У нас</div>
                <p className="text-base text-white/70 leading-relaxed mb-6">
                  Ноль до старта. Оплата целиком, когда скажете «принимаю».
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-white/40">Постоплата</span>
                    <span className="text-white font-bold">100%</span>
                  </div>
                  <div className="h-1.5 bg-white/15 rounded-full">
                    <div className="h-full bg-white rounded-full w-full" />
                  </div>
                </div>
              </div>
            </div>

            <p data-r="reveal d3" className="text-sm text-text-muted">
              Почему мы так можем? Потому что уверены, что сдадим.
            </p>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section id="contacts" className="bg-navy-deep py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <h2
                  data-r="reveal"
                  className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight mb-4"
                >
                  Обсудите ваш проект
                </h2>
                <p data-r="reveal d1" className="text-base text-white/50 leading-relaxed mb-8 max-w-lg">
                  Расскажите, что нужно внедрить. Мы оценим сроки и стоимость за 2&nbsp;дня.
                </p>
                <div data-r="reveal d2" className="flex flex-wrap gap-3 mb-6">
                  <a
                    href="mailto:info@1integra.ru"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-lg font-semibold text-base hover:bg-white/90 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    info@1integra.ru
                  </a>
                  <a
                    href="tel:+7XXXXXXXXXX"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium text-base hover:border-white/40 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
                <p data-r="reveal-fade d3" className="text-sm text-white/30">
                  Ответим в течение часа в рабочее время
                </p>
              </div>

              <div data-r="reveal d3" className="hidden lg:block lg:col-span-2">
                <div className="text-xs font-bold text-white/30 tracking-wider uppercase mb-5">Что будет дальше</div>
                <div className="space-y-4">
                  {[
                    "Вы описываете задачу",
                    "Мы оцениваем за 2 дня",
                    "Подписываем договор",
                    "Работаем — платите по результату",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md bg-accent/20 text-accent flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm text-white/60">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-navy-deep border-t border-white/5 py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-base text-white/70">1ИНТЕГРА</span>
            <span className="text-sm text-white/25">&copy; 2026</span>
          </div>
          <nav className="flex gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/25 hover:text-white/50 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
