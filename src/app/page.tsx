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

/* Container — same pattern as birson: wide + responsive padding */
const C = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12";

const NAV = [
  { label: "О нас", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Контакты", href: "#contacts" },
];

const Arr = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export default function Home() {
  const pg = useReveal();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div ref={pg} className="min-h-screen bg-white">

      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-deep/5">
        <div className={`${C} h-16 md:h-18 flex items-center justify-between`}>
          <a href="#" className="font-heading font-bold text-xl text-navy-deep tracking-tight
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
            1ИНТЕГРА
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Навигация">
            {NAV.map((l) => (
              <a key={l.label} href={l.href}
                className="text-sm font-medium text-text-secondary hover:text-navy-deep transition-colors duration-150
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contacts"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg
              bg-navy text-white hover:bg-navy-mid transition-colors duration-150
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
            Обсудить проект
          </a>
          <button onClick={() => setNavOpen(!navOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-navy-deep
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            aria-label="Меню">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {navOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
            </svg>
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-navy-deep/5 bg-white">
            <nav className={`${C} py-4 flex flex-col gap-3`}>
              {NAV.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setNavOpen(false)}
                  className="text-base text-text-secondary hover:text-navy-deep py-2 transition-colors duration-150">
                  {l.label}
                </a>
              ))}
              <a href="#contacts" onClick={() => setNavOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-lg
                  bg-navy text-white">
                Обсудить проект
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-44 lg:pb-24">
          <div className={`${C} text-center`}>
            <p data-r="reveal"
              className="text-xs md:text-sm font-semibold tracking-widest uppercase text-accent mb-6 md:mb-8">
              Студия внедрения 1С
            </p>
            <h1 data-r="reveal d1"
              className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-navy-deep leading-none tracking-tight">
              Внедряем&nbsp;1С целиком
            </h1>
            <p data-r="reveal d2"
              className="text-lg md:text-xl lg:text-2xl text-text-secondary mt-6 md:mt-8 mx-auto max-w-3xl leading-relaxed">
              32&nbsp;направления и&nbsp;263&nbsp;модуля.
              Одна&nbsp;команда вместо&nbsp;десяти подрядчиков.
            </p>
            <div data-r="reveal d3" className="mt-8 md:mt-10">
              <a href="#contacts"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-navy text-white text-base font-semibold
                  hover:bg-navy-mid transition-colors duration-150
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy active:bg-navy-deep">
                Обсудить проект <Arr />
              </a>
            </div>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className="py-12 md:py-16 border-y border-border">
          <div className={C}>
            <div data-r="reveal" className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {[
                ["32", "направления 1С"],
                ["263", "модуля платформы"],
                ["×3", "быстрее обычного"],
                ["0 ₽", "предоплата"],
              ].map(([n, l]) => (
                <div key={l as string} className="text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-deep leading-none">
                    {n}
                  </div>
                  <div className="text-sm md:text-base text-text-muted mt-2 md:mt-3">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ О КОМПАНИИ ═══ */}
        <section id="about" className="py-20 md:py-24">
          <div className={C}>
            <div className="text-center mb-12 md:mb-16">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-navy-deep leading-tight tracking-tight">
                Знаем все 263&nbsp;модуля
              </h2>
              <p data-r="reveal d1"
                className="text-base md:text-lg text-text-secondary mt-4 md:mt-6 mx-auto max-w-3xl leading-relaxed">
                У платформы 1С 32&nbsp;направления и 263&nbsp;модуля. Большинство
                интеграторов хорошо знают 5–8 из них, а на остальное ищут субподрядчиков.
              </p>
            </div>
            <div data-r="reveal d2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                ["32", "направления", "Бухгалтерия, склад, производство, зарплата, CRM и другие — все под одной крышей"],
                ["263", "модуля", "Полное покрытие платформы. Не ищем субподрядчиков на то, что не знаем"],
                ["1", "команда", "Один договор, один менеджер, одна ответственность за весь проект"],
                ["0", "субподрядчиков", "Всё делаем сами. Никаких потерянных задач между компаниями"],
              ].map(([n, t, d]) => (
                <div key={t as string} className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                  <div className="font-heading font-bold text-4xl md:text-5xl text-navy leading-none">{n}</div>
                  <div className="font-heading font-semibold text-lg text-navy-deep mt-3">{t}</div>
                  <p className="text-sm text-text-muted mt-2 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ДЛЯ КОГО ═══ */}
        <section className="bg-navy-deep py-20 md:py-24">
          <div className={C}>
            <div className="text-center mb-12">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight tracking-tight">
                Тем, кому надоело
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div data-r="reveal d1" className="rounded-2xl border border-white/10 p-6 md:p-8">
                <p className="text-base md:text-lg leading-relaxed text-white/60">
                  Вы производите мебель, возите грузы по стране или управляете
                  сетью из 200&nbsp;магазинов. У вас сложные процессы, много юрлиц
                  и бухгалтерия, от которой зависит всё.
                </p>
              </div>
              <div data-r="reveal d2" className="rounded-2xl border border-white/10 p-6 md:p-8">
                <p className="text-base md:text-lg leading-relaxed text-white/60">
                  Вам уже внедряли 1С. Возможно, не один раз. Проект на три
                  месяца растянулся на год. Интегратор звонил с просьбой
                  «скорректировать бюджет», хотя половина работы ещё не сделана.
                </p>
              </div>
            </div>
            <div data-r="reveal d3" className="mt-10 md:mt-12 text-center">
              <p className="font-heading font-bold text-xl md:text-2xl text-white">
                <span className="text-accent">—</span> Мы для тех, кому это надоело.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ ПОДХОД ═══ */}
        <section id="approach" className="py-20 md:py-24">
          <div className={C}>
            <div className="text-center mb-12 md:mb-16">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-navy-deep leading-tight tracking-tight">
                Работаем параллельно
              </h2>
              <p data-r="reveal d1"
                className="text-base md:text-lg text-text-secondary mt-4 md:mt-6 mx-auto max-w-3xl leading-relaxed">
                Обычно 3–5 человек идут по модулям последовательно. ERP
                на 200&nbsp;пользователей — год-полтора. У нас несколько групп
                работают одновременно.
              </p>
            </div>

            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                ["ERP, 200 пользователей", "12–14 мес.", "4–5 мес."],
                ["Бухгалтерия + зарплата + склад", "6–8 мес.", "2–3 мес."],
                ["Переезд с SAP", "18–24 мес.", "6–8 мес."],
              ].map(([p, u, o]) => (
                <div key={p as string} className="rounded-2xl border border-border p-6 md:p-8">
                  <h3 className="font-heading font-semibold text-lg text-navy-deep mb-6">{p}</h3>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">Обычно</div>
                      <div className="text-lg text-text-muted line-through decoration-text-muted/30">{u}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-navy uppercase tracking-wide mb-1">У нас</div>
                      <div className="font-heading font-bold text-2xl md:text-3xl text-navy-deep">{o}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p data-r="reveal d3" className="text-sm md:text-base text-text-muted text-center">
              Месяц без новой системы стоит бизнесу денег. Если мы экономим
              8&nbsp;месяцев, сэкономленное часто перекрывает стоимость внедрения.
            </p>
          </div>
        </section>

        {/* ═══ ГАРАНТИИ ═══ */}
        <section id="guarantees" className="py-20 md:py-24 bg-surface">
          <div className={C}>
            <div className="text-center mb-12 md:mb-16">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-navy-deep leading-tight tracking-tight">
                Отвечаем деньгами
              </h2>
              <p data-r="reveal d1"
                className="text-base md:text-lg text-text-secondary mt-4 md:mt-6 mx-auto max-w-2xl leading-relaxed">
                Три&nbsp;пункта в договоре с&nbsp;печатью. Подписывается до&nbsp;начала работ.
              </p>
            </div>
            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { n: "01", t: "Результат", d: "Модуль не работает как в ТЗ — дорабатываем бесплатно, сколько потребуется." },
                { n: "02", t: "Бюджет", d: "Сумма фиксируется до старта. Ошиблись в оценке — наши расходы." },
                { n: "03", t: "Сроки", d: "Дата сдачи в договоре. Каждая неделя просрочки — минус 5% от суммы." },
              ].map((c) => (
                <div key={c.n} className="rounded-2xl border border-border bg-white p-6 md:p-8 text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl text-accent leading-none mb-4">{c.n}</div>
                  <h3 className="font-heading font-bold text-xl text-navy-deep mb-3">{c.t}</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ ПЕРЕЕЗД ═══ */}
        <section className="py-20 md:py-24">
          <div className={C}>
            <div className="text-center mb-12 md:mb-16">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-navy-deep leading-tight tracking-tight">
                Переезд без остановки
              </h2>
              <p data-r="reveal d1"
                className="text-base md:text-lg text-text-secondary mt-4 md:mt-6 mx-auto max-w-3xl leading-relaxed">
                Миграция обычно нервная: бизнес замирает, данные переносят ночами,
                часть записей теряется. У нас новая 1С запускается рядом со старой.
              </p>
            </div>
            <div data-r="reveal d2" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                ["Запуск рядом", "Новая 1С параллельно со старой системой"],
                ["Пилот 10%", "Небольшая группа пользователей переходит первой"],
                ["Переключение", "Полный переход после вашего одобрения"],
                ["Все данные", "Каждый документ за все годы работы"],
              ].map(([t, d], i) => (
                <div key={i} className="rounded-2xl border border-border p-6 md:p-8">
                  <div className="font-heading font-bold text-3xl text-accent leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy-deep mb-2">{t}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <div data-r="reveal d3" className="mt-10 md:mt-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
                <span className="text-accent text-xl">✦</span>
                <p className="text-sm md:text-base font-semibold text-navy-deep">
                  Если хоть один документ потеряется — миграция за наш счёт
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ПОСТОПЛАТА ═══ */}
        <section className="py-20 md:py-24 bg-surface">
          <div className={C}>
            <div className="text-center mb-12 md:mb-16">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-navy-deep leading-tight tracking-tight">
                Деньги после результата
              </h2>
            </div>
            <div data-r="reveal d1" className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl border border-border bg-white p-8 md:p-12">
                <div className="text-xs font-bold text-text-muted tracking-wider uppercase mb-6">Обычно</div>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
                  Интегратор берёт 50–70% вперёд. Вы платите за обещания.
                </p>
                <div className="font-heading font-bold text-6xl md:text-8xl text-navy-deep/10 leading-none">65%</div>
                <div className="text-sm text-text-muted mt-2">предоплата</div>
              </div>
              <div className="rounded-2xl bg-navy-deep p-8 md:p-12">
                <div className="text-xs font-bold text-white/40 tracking-wider uppercase mb-6">У нас</div>
                <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
                  Ноль до старта. Оплата когда скажете «принимаю».
                </p>
                <div className="font-heading font-bold text-6xl md:text-8xl text-white/15 leading-none">0%</div>
                <div className="text-sm text-white/40 mt-2">предоплата</div>
              </div>
            </div>
            <p data-r="reveal d2" className="text-sm md:text-base text-text-muted mt-6 md:mt-8 text-center">
              Почему мы так можем? Потому что уверены, что сдадим.
            </p>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section id="contacts" className="bg-navy-deep py-20 md:py-24">
          <div className={C}>
            <div className="text-center mb-12">
              <h2 data-r="reveal"
                className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight tracking-tight">
                Обсудите ваш проект
              </h2>
              <p data-r="reveal d1"
                className="text-base md:text-lg text-white/50 mt-4 md:mt-6 mx-auto max-w-2xl leading-relaxed">
                Расскажите, что нужно внедрить. Мы оценим сроки и&nbsp;стоимость за&nbsp;2&nbsp;дня.
              </p>
            </div>

            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                "Вы описываете задачу",
                "Мы оцениваем за 2 дня",
                "Работаем — платите по результату",
              ].map((t, i) => (
                <div key={i} className="rounded-2xl border border-white/10 p-6 md:p-8 text-center">
                  <div className="font-heading font-bold text-3xl text-accent leading-none mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base text-white/60">{t}</p>
                </div>
              ))}
            </div>

            <div data-r="reveal d3" className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@1integra.ru"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-navy-deep font-semibold text-base
                  hover:bg-accent/90 transition-colors duration-150
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                info@1integra.ru
              </a>
              <a href="tel:+7XXXXXXXXXX"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white font-medium text-base
                  hover:border-white/40 transition-colors duration-150
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                +7 (XXX) XXX-XX-XX
              </a>
            </div>
            <p data-r="reveal d4" className="mt-4 text-xs text-white/30 text-center">
              Ответим в течение часа в рабочее время
            </p>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-navy-deep border-t border-white/5 py-8">
        <div className={`${C} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4`}>
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-base text-white/60">1ИНТЕГРА</span>
            <span className="text-xs text-white/20">&copy; 2026</span>
          </div>
          <nav className="flex gap-6">
            {NAV.map((l) => (
              <a key={l.label} href={l.href}
                className="text-sm text-white/25 hover:text-white/50 transition-colors duration-150
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
