"use client";
import { useEffect, useRef, useState } from "react";

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
            (e.target as HTMLElement).classList.add(
              ...((e.target as HTMLElement).dataset.r || "reveal").split(" ")
            );
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

const W = "w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12";

const NAV = [
  { label: "Услуги", href: "#services" },
  { label: "Подход", href: "#approach" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Контакты", href: "#contacts" },
];

export default function Home() {
  const pg = useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div ref={pg} className="min-h-screen bg-white text-text">

      {/* ═══════ HEADER ═══════ */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className={`${W} h-16 flex items-center justify-between`}>
          <a href="#" className="font-heading font-bold text-xl text-navy tracking-tight">
            1ИНТЕГРА
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium text-text-secondary hover:text-navy transition-colors duration-150">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+7XXXXXXXXXX" className="text-sm font-semibold text-navy">
              +7 (XXX) XXX-XX-XX
            </a>
            <a href="#contacts"
              className="px-5 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold
                hover:bg-navy-light transition-colors duration-150">
              Оставить заявку
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center" aria-label="Меню">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block text-base text-text-secondary py-2">{l.label}</a>
            ))}
            <a href="#contacts" onClick={() => setMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-xl bg-navy text-white text-sm font-semibold mt-2">
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      <main>

        {/* ═══════ HERO — gradient cards like rarus ═══════ */}
        <section className="py-10 md:py-14">
          <div className={W}>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* Main hero card */}
              <div className="md:row-span-2 rounded-3xl bg-gradient-to-br from-navy via-navy-light to-blue-500 p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-72 md:min-h-96">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white/80 text-xs font-medium mb-6">
                    Студия внедрения 1С
                  </span>
                  <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                    Внедряем 1С
                    <br />целиком
                  </h1>
                  <p className="text-base md:text-lg text-white/70 mt-4 max-w-md leading-relaxed">
                    32&nbsp;направления и&nbsp;263&nbsp;модуля. Одна команда вместо десяти подрядчиков.
                  </p>
                </div>
                <div className="mt-6">
                  <a href="#contacts"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy text-sm font-semibold
                      hover:bg-white/90 transition-colors duration-150">
                    Обсудить проект
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Top-right card */}
              <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-100 p-6 md:p-8 flex flex-col justify-between min-h-44">
                <div className="text-3xl md:text-4xl font-heading font-bold text-orange-600">×3</div>
                <div>
                  <div className="font-heading font-semibold text-lg text-gray-900">Быстрее обычного</div>
                  <p className="text-sm text-gray-600 mt-1">Несколько групп работают параллельно — ERP за 4–5 месяцев вместо 14</p>
                </div>
              </div>

              {/* Bottom-right card */}
              <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-green-100 p-6 md:p-8 flex flex-col justify-between min-h-44">
                <div className="text-3xl md:text-4xl font-heading font-bold text-emerald-600">0 ₽</div>
                <div>
                  <div className="font-heading font-semibold text-lg text-gray-900">Предоплата</div>
                  <p className="text-sm text-gray-600 mt-1">Платите после результата. Никаких авансов — только постоплата</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ STATS BAR ═══════ */}
        <section className="py-8 md:py-10 border-y border-border bg-surface">
          <div className={W}>
            <div data-r="reveal" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                ["32", "направления 1С"],
                ["263", "модуля платформы"],
                ["1", "команда под ключ"],
                ["0", "субподрядчиков"],
              ].map(([n, l]) => (
                <div key={l as string} className="text-center">
                  <div className="font-heading font-bold text-3xl md:text-4xl text-navy leading-none">{n}</div>
                  <div className="text-sm text-text-muted mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SERVICES ═══════ */}
        <section id="services" className="py-14 md:py-20">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-text leading-tight mb-3">
              Направления внедрения
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-text-secondary mb-10 md:mb-12 max-w-2xl">
              Знаем все 263 модуля платформы 1С. Не ищем субподрядчиков — делаем сами от начала до конца.
            </p>

            <div data-r="reveal d2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "Бухгалтерия и налоги", desc: "Бухгалтерский и налоговый учёт, отчётность, ЭДО, интеграция с банками", color: "from-blue-50 to-indigo-100", icon: "text-indigo-500" },
                { title: "Зарплата и кадры", desc: "Расчёт зарплаты, кадровый учёт, графики, табели, отпуска", color: "from-violet-50 to-purple-100", icon: "text-purple-500" },
                { title: "Управление торговлей", desc: "Закупки, продажи, ценообразование, логистика, CRM", color: "from-sky-50 to-cyan-100", icon: "text-cyan-600" },
                { title: "Производство", desc: "Планирование, MES, рецептуры, калькуляция себестоимости", color: "from-amber-50 to-yellow-100", icon: "text-amber-600" },
                { title: "Склад и логистика", desc: "WMS, адресное хранение, инвентаризация, штрихкодирование", color: "from-emerald-50 to-green-100", icon: "text-emerald-600" },
                { title: "ERP и комплексные проекты", desc: "Полное внедрение 1С:ERP, переезд с SAP/Oracle, интеграции", color: "from-rose-50 to-pink-100", icon: "text-rose-500" },
              ].map((s) => (
                <div key={s.title}
                  className={`rounded-2xl bg-gradient-to-br ${s.color} p-6 md:p-8 hover:shadow-md transition-shadow duration-200`}>
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 ${s.icon}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ APPROACH ═══════ */}
        <section id="approach" className="py-14 md:py-20 bg-surface">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-text leading-tight mb-3">
              Работаем параллельно
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-text-secondary mb-10 md:mb-12 max-w-2xl">
              Обычный интегратор ведёт модули последовательно. У нас несколько групп работают одновременно.
            </p>

            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                { proj: "ERP, 200 пользователей", usual: "12–14 мес.", ours: "4–5 мес." },
                { proj: "Бухгалтерия + зарплата + склад", usual: "6–8 мес.", ours: "2–3 мес." },
                { proj: "Переезд с SAP", usual: "18–24 мес.", ours: "6–8 мес." },
              ].map((r) => (
                <div key={r.proj} className="rounded-2xl bg-white border border-border p-6 md:p-8">
                  <h3 className="font-heading font-semibold text-base md:text-lg text-text mb-6">{r.proj}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Обычно</span>
                      <span className="text-base text-text-muted line-through">{r.usual}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-navy">У нас</span>
                      <span className="font-heading font-bold text-2xl md:text-3xl text-navy">{r.ours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p data-r="reveal d3" className="text-sm text-text-muted mt-8 text-center md:text-left">
              Если мы экономим 8 месяцев — сэкономленное часто перекрывает стоимость самого внедрения.
            </p>
          </div>
        </section>

        {/* ═══════ FOR WHOM ═══════ */}
        <section className="py-14 md:py-20">
          <div className={W}>
            <div data-r="reveal" className="rounded-3xl bg-gradient-to-br from-navy via-navy-mid to-navy-deep p-8 md:p-12 lg:p-16">
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-6 md:mb-8">
                Тем, кому надоело
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8">
                <p className="text-base md:text-lg text-white/60 leading-relaxed">
                  Вы производите мебель, возите грузы по стране или управляете
                  сетью из 200 магазинов. У вас сложные процессы, много юрлиц
                  и бухгалтерия, от которой зависит всё.
                </p>
                <p className="text-base md:text-lg text-white/60 leading-relaxed">
                  Вам уже внедряли 1С. Возможно, не один раз. Проект на три месяца
                  растянулся на год. Интегратор звонил с просьбой «скорректировать
                  бюджет», хотя половина работы ещё не сделана.
                </p>
              </div>
              <p className="font-heading font-bold text-xl md:text-2xl text-white">
                Мы для тех, кому это надоело.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ GUARANTEES ═══════ */}
        <section id="guarantees" className="py-14 md:py-20 bg-surface">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-text leading-tight mb-3">
              Отвечаем деньгами
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-text-secondary mb-10 md:mb-12">
              Три пункта в договоре с печатью. Подписывается до начала работ.
            </p>

            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-6">
              {[
                { n: "01", t: "Результат", d: "Модуль не работает как в ТЗ — дорабатываем бесплатно, сколько потребуется.", color: "from-blue-500 to-indigo-600" },
                { n: "02", t: "Бюджет", d: "Сумма фиксируется до старта. Ошиблись в оценке — наши расходы.", color: "from-violet-500 to-purple-600" },
                { n: "03", t: "Сроки", d: "Дата сдачи в договоре. Каждая неделя просрочки — минус 5% от суммы.", color: "from-emerald-500 to-teal-600" },
              ].map((c) => (
                <div key={c.n} className="rounded-2xl bg-white border border-border p-6 md:p-8 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color}`} />
                  <div className="font-heading font-bold text-4xl text-navy/15 leading-none mb-4">{c.n}</div>
                  <h3 className="font-heading font-bold text-xl text-text mb-2">{c.t}</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ MIGRATION ═══════ */}
        <section className="py-14 md:py-20">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-text leading-tight mb-3">
              Переезд без остановки
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-text-secondary mb-10 md:mb-12 max-w-2xl">
              Новая 1С запускается рядом со старой. Данные переносятся без потерь. Откат за 15 минут.
            </p>

            <div data-r="reveal d2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: "01", title: "Запуск рядом", desc: "Новая 1С параллельно со старой системой", color: "from-sky-50 to-blue-100" },
                { step: "02", title: "Пилот 10%", desc: "Небольшая группа переходит первой", color: "from-amber-50 to-orange-100" },
                { step: "03", title: "Переключение", desc: "Полный переход после вашего одобрения", color: "from-emerald-50 to-green-100" },
                { step: "04", title: "Все данные", desc: "Каждый документ за все годы работы", color: "from-violet-50 to-purple-100" },
              ].map((s) => (
                <div key={s.step} className={`rounded-2xl bg-gradient-to-br ${s.color} p-6 md:p-8`}>
                  <div className="font-heading font-bold text-2xl text-gray-400 mb-4">{s.step}</div>
                  <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div data-r="reveal d3" className="mt-8 md:mt-10 rounded-2xl bg-amber-50 border border-amber-200 p-5 md:p-6 flex items-start gap-3">
              <span className="text-amber-500 text-xl shrink-0">⚡</span>
              <p className="text-sm md:text-base font-medium text-amber-900">
                Если хоть один документ потеряется — миграция за наш счёт.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ PAYMENT ═══════ */}
        <section className="py-14 md:py-20 bg-surface">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-text leading-tight mb-10 md:mb-12">
              Деньги после результата
            </h2>

            <div data-r="reveal d1" className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl bg-white border border-border p-8 md:p-10">
                <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-text-muted mb-6">Обычно</div>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8">
                  Интегратор берёт 50–70% вперёд. Вы платите за обещания.
                </p>
                <div className="font-heading font-bold text-7xl md:text-8xl text-gray-100 leading-none">65%</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-navy via-navy-light to-blue-500 p-8 md:p-10">
                <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-medium text-white/70 mb-6">У нас</div>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
                  Ноль до старта. Оплата когда скажете «принимаю».
                </p>
                <div className="font-heading font-bold text-7xl md:text-8xl text-white/15 leading-none">0%</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ CTA ═══════ */}
        <section id="contacts" className="py-14 md:py-20">
          <div className={W}>
            <div data-r="reveal"
              className="rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-8 md:p-12 lg:p-16 text-center">
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                Обсудите ваш проект
              </h2>
              <p className="text-base md:text-lg text-white/80 mb-8 mx-auto max-w-xl">
                Расскажите, что нужно внедрить. Мы оценим сроки и стоимость за 2 дня.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:info@1integra.ru"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-gray-900 font-semibold text-base
                    hover:bg-white/90 transition-colors duration-150">
                  info@1integra.ru
                </a>
                <a href="tel:+7XXXXXXXXXX"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-medium text-base
                    hover:border-white/70 transition-colors duration-150">
                  +7 (XXX) XXX-XX-XX
                </a>
              </div>
              <p className="text-xs text-white/50 mt-4">Ответим в течение часа в рабочее время</p>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-border py-8 md:py-10">
        <div className={`${W} flex flex-col md:flex-row md:items-center md:justify-between gap-6`}>
          <div className="flex items-center gap-4">
            <span className="font-heading font-bold text-lg text-navy">1ИНТЕГРА</span>
            <span className="text-sm text-text-muted">&copy; 2026</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-text-muted hover:text-navy transition-colors duration-150">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="text-sm text-text-muted">
            info@1integra.ru
          </div>
        </div>
      </footer>
    </div>
  );
}
