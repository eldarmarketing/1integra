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

const W = "w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32";

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
    <div ref={pg} className="min-h-screen bg-gray-50 text-gray-900">

      {/* ═══ HEADER ═══ */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/60">
        <div className={`${W} h-16 flex items-center justify-between`}>
          <a href="#" className="font-heading font-bold text-xl text-navy tracking-tight">1ИНТЕГРА</a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+7XXXXXXXXXX" className="text-sm font-semibold text-gray-700 hover:text-navy transition-colors duration-200">
              +7 (XXX) XXX-XX-XX
            </a>
            <a href="#contacts"
              className="px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold
                hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-navy/20">
              Оставить заявку
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors" aria-label="Меню">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 space-y-1">
            {NAV.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block text-base text-gray-600 py-2.5 px-3 rounded-xl hover:bg-gray-50">{l.label}</a>
            ))}
            <a href="#contacts" onClick={() => setMenuOpen(false)}
              className="block text-center px-5 py-3 rounded-full bg-navy text-white text-sm font-semibold mt-3">
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      <main>

        {/* ═══ HERO ═══ */}
        <section className="pt-8 pb-6 md:pt-12 md:pb-10">
          <div className={W}>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
              {/* Main card */}
              <div className="md:row-span-2 relative overflow-hidden rounded-3xl bg-navy p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-80 md:min-h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-indigo-900/40" />
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-indigo-400/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Студия внедрения 1С
                  </div>
                  <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                    Внедряем 1С<br />целиком
                  </h1>
                  <p className="text-base md:text-lg text-white/60 mt-4 max-w-md leading-relaxed">
                    32&nbsp;направления и&nbsp;263&nbsp;модуля. Одна команда вместо десяти подрядчиков.
                  </p>
                </div>
                <div className="relative mt-6">
                  <a href="#contacts"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy text-sm font-semibold
                      hover:shadow-xl hover:shadow-white/20 transition-all duration-200">
                    Обсудить проект
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Speed card */}
              <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8 flex flex-col justify-between min-h-44 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-heading font-bold text-lg">
                  ×3
                </div>
                <div className="mt-4">
                  <div className="font-heading font-bold text-xl text-gray-900">Быстрее обычного</div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Несколько групп работают параллельно — ERP за 4–5 месяцев вместо 14</p>
                </div>
              </div>

              {/* Postpay card */}
              <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8 flex flex-col justify-between min-h-44 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-heading font-bold text-lg">
                  0₽
                </div>
                <div className="mt-4">
                  <div className="font-heading font-bold text-xl text-gray-900">Постоплата</div>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Платите после результата. Никаких авансов — только по факту</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className="py-10 md:py-12">
          <div className={W}>
            <div data-r="reveal" className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {[
                ["32", "направления 1С", "from-blue-500 to-indigo-600"],
                ["263", "модуля платформы", "from-violet-500 to-purple-600"],
                ["1", "команда под ключ", "from-emerald-500 to-teal-600"],
                ["0", "субподрядчиков", "from-orange-500 to-amber-600"],
              ].map(([n, l, g]) => (
                <div key={l as string} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 text-center">
                  <div className={`inline-block font-heading font-bold text-4xl md:text-5xl leading-none bg-gradient-to-br ${g} bg-clip-text text-transparent`}>
                    {n}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section id="services" className="py-12 md:py-20">
          <div className={W}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
              <div>
                <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight">
                  Направления внедрения
                </h2>
                <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-3 max-w-xl">
                  Знаем все 263 модуля. Не ищем субподрядчиков — делаем сами.
                </p>
              </div>
              <a href="#contacts" data-r="reveal d1"
                className="text-sm font-semibold text-navy hover:text-navy-light transition-colors duration-200 shrink-0">
                Обсудить задачу →
              </a>
            </div>

            <div data-r="reveal d2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: "Бухгалтерия и налоги", desc: "Бухгалтерский и налоговый учёт, отчётность, ЭДО, интеграция с банками", gradient: "from-blue-500 to-indigo-600", light: "bg-blue-50 border-blue-100 hover:border-blue-200 hover:shadow-blue-100/50" },
                { title: "Зарплата и кадры", desc: "Расчёт зарплаты, кадровый учёт, графики, табели, отпуска", gradient: "from-violet-500 to-purple-600", light: "bg-violet-50 border-violet-100 hover:border-violet-200 hover:shadow-violet-100/50" },
                { title: "Управление торговлей", desc: "Закупки, продажи, ценообразование, логистика, CRM", gradient: "from-cyan-500 to-blue-600", light: "bg-cyan-50 border-cyan-100 hover:border-cyan-200 hover:shadow-cyan-100/50" },
                { title: "Производство", desc: "Планирование, MES, рецептуры, калькуляция себестоимости", gradient: "from-orange-500 to-amber-600", light: "bg-orange-50 border-orange-100 hover:border-orange-200 hover:shadow-orange-100/50" },
                { title: "Склад и логистика", desc: "WMS, адресное хранение, инвентаризация, штрихкодирование", gradient: "from-emerald-500 to-teal-600", light: "bg-emerald-50 border-emerald-100 hover:border-emerald-200 hover:shadow-emerald-100/50" },
                { title: "ERP и интеграции", desc: "Полное внедрение 1С:ERP, переезд с SAP/Oracle, интеграции с внешними системами", gradient: "from-rose-500 to-pink-600", light: "bg-rose-50 border-rose-100 hover:border-rose-200 hover:shadow-rose-100/50" },
              ].map((s) => (
                <div key={s.title}
                  className={`rounded-2xl border ${s.light} p-6 md:p-8 hover:shadow-lg transition-all duration-300`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ APPROACH ═══ */}
        <section id="approach" className="py-12 md:py-20">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-3">
              Работаем параллельно
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mb-10 md:mb-12 max-w-2xl">
              Обычный интегратор ведёт модули последовательно. У нас несколько групп одновременно.
            </p>

            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                { proj: "ERP, 200 пользователей", usual: "12–14 мес.", ours: "4–5 мес.", accent: "text-blue-600" },
                { proj: "Бухгалтерия + зарплата + склад", usual: "6–8 мес.", ours: "2–3 мес.", accent: "text-violet-600" },
                { proj: "Переезд с SAP", usual: "18–24 мес.", ours: "6–8 мес.", accent: "text-emerald-600" },
              ].map((r) => (
                <div key={r.proj} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <h3 className="font-heading font-semibold text-base md:text-lg text-gray-900 mb-8">{r.proj}</h3>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                    <span className="text-sm text-gray-400">Обычно</span>
                    <span className="text-base text-gray-400 line-through">{r.usual}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">У нас</span>
                    <span className={`font-heading font-bold text-3xl ${r.accent}`}>{r.ours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FOR WHOM ═══ */}
        <section className="py-12 md:py-20">
          <div className={W}>
            <div data-r="reveal" className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/30" />
              <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-8">
                  Тем, кому надоело
                </h2>
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10">
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <p className="text-base md:text-lg text-white/65 leading-relaxed">
                      Вы производите мебель, возите грузы по стране или управляете
                      сетью из 200 магазинов. У вас сложные процессы, много юрлиц
                      и бухгалтерия, от которой зависит всё.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    <p className="text-base md:text-lg text-white/65 leading-relaxed">
                      Вам уже внедряли 1С. Возможно, не один раз. Проект на три месяца
                      растянулся на год. Интегратор звонил с просьбой «скорректировать
                      бюджет», хотя половина работы ещё не сделана.
                    </p>
                  </div>
                </div>
                <p className="font-heading font-bold text-xl md:text-2xl text-white">
                  Мы для тех, кому это надоело.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ GUARANTEES ═══ */}
        <section id="guarantees" className="py-12 md:py-20">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-3">
              Отвечаем деньгами
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mb-10 md:mb-12">
              Три пункта в договоре с печатью. До начала работ.
            </p>

            <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                { n: "01", t: "Результат", d: "Модуль не работает как в ТЗ — дорабатываем бесплатно, сколько потребуется.", gradient: "from-blue-500 to-indigo-600" },
                { n: "02", t: "Бюджет", d: "Сумма фиксируется до старта. Ошиблись в оценке — наши расходы.", gradient: "from-violet-500 to-purple-600" },
                { n: "03", t: "Сроки", d: "Дата сдачи в договоре. Каждая неделя просрочки — минус 5% от суммы.", gradient: "from-emerald-500 to-teal-600" },
              ].map((c) => (
                <div key={c.n} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-heading font-bold text-sm mb-5`}>
                    {c.n}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">{c.t}</h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ MIGRATION ═══ */}
        <section className="py-12 md:py-20">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-3">
              Переезд без остановки
            </h2>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mb-10 md:mb-12 max-w-2xl">
              Новая 1С рядом со старой. Данные без потерь. Откат за 15 минут.
            </p>

            <div data-r="reveal d2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                { step: "01", title: "Запуск рядом", desc: "Новая 1С параллельно со старой", gradient: "from-sky-500 to-blue-600" },
                { step: "02", title: "Пилот 10%", desc: "Небольшая группа переходит первой", gradient: "from-orange-500 to-amber-600" },
                { step: "03", title: "Переключение", desc: "Полный переход после одобрения", gradient: "from-emerald-500 to-teal-600" },
                { step: "04", title: "Все данные", desc: "Каждый документ за все годы", gradient: "from-violet-500 to-purple-600" },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-xs font-bold mb-5`}>
                    {s.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-gray-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div data-r="reveal d3" className="mt-8 rounded-2xl bg-amber-50 border border-amber-200/60 p-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-amber-800">
                Если хоть один документ потеряется — миграция за наш счёт.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ PAYMENT ═══ */}
        <section className="py-12 md:py-20">
          <div className={W}>
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-10 md:mb-12">
              Деньги после результата
            </h2>
            <div data-r="reveal d1" className="grid md:grid-cols-2 gap-4 md:gap-5">
              <div className="rounded-2xl bg-white border border-gray-200 p-8 md:p-10 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-500 mb-6">Обычно</div>
                <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10">
                  Интегратор берёт 50–70% вперёд. Вы платите за обещания.
                </p>
                <div className="font-heading font-bold text-7xl md:text-8xl text-gray-100 leading-none select-none">65%</div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-navy p-8 md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/30" />
                <div className="relative">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/70 mb-6">У нас</div>
                  <p className="text-base md:text-lg text-white/65 leading-relaxed mb-10">
                    Ноль до старта. Оплата когда скажете «принимаю».
                  </p>
                  <div className="font-heading font-bold text-7xl md:text-8xl text-white/10 leading-none select-none">0%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section id="contacts" className="py-12 md:py-20">
          <div className={W}>
            <div data-r="reveal" className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-12 lg:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-emerald-600/20" />
              <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                  Обсудите ваш проект
                </h2>
                <p className="text-base md:text-lg text-white/60 mb-8 mx-auto max-w-lg">
                  Расскажите, что нужно внедрить. Мы оценим сроки и стоимость за 2 дня.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="mailto:info@1integra.ru"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-base
                      hover:shadow-xl hover:shadow-white/20 transition-all duration-200">
                    info@1integra.ru
                  </a>
                  <a href="tel:+7XXXXXXXXXX"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-base
                      hover:bg-white/10 transition-all duration-200">
                    +7 (XXX) XXX-XX-XX
                  </a>
                </div>
                <p className="text-xs text-white/35 mt-5">Ответим в течение часа в рабочее время</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-gray-200 bg-white py-8 md:py-10">
        <div className={`${W} flex flex-col md:flex-row md:items-center md:justify-between gap-6`}>
          <div className="flex items-center gap-4">
            <span className="font-heading font-bold text-lg text-navy">1ИНТЕГРА</span>
            <span className="text-sm text-gray-400">&copy; 2026</span>
          </div>
          <nav className="flex flex-wrap gap-6">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-gray-400 hover:text-gray-700 transition-colors duration-200">{l.label}</a>
            ))}
          </nav>
          <div className="text-sm text-gray-400">info@1integra.ru</div>
        </div>
      </footer>
    </div>
  );
}
