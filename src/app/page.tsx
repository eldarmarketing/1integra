"use client";
import Link from "next/link";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

export default function Home() {
  const pg = useReveal();

  return (
    <div ref={pg}>

      {/* ═══ HERO ═══ */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-10">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
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
                <Link
                  href="/kontakty"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy text-sm font-semibold
                    hover:shadow-xl hover:shadow-white/20 transition-all duration-200"
                >
                  Обсудить проект
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8 flex flex-col justify-between min-h-44 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-heading font-bold text-lg">
                ×3
              </div>
              <div className="mt-4">
                <div className="font-heading font-bold text-xl text-gray-900">Быстрее обычного</div>
                <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">Несколько групп работают параллельно — ERP за 4–5 месяцев вместо 14</p>
              </div>
            </div>

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

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-12 md:py-20">
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
            <Link href="/uslugi" data-r="reveal d1"
              className="text-sm font-semibold text-navy hover:text-navy-light transition-colors duration-200 shrink-0">
              Все направления →
            </Link>
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

      {/* ═══ APPROACH TEASER ═══ */}
      <section className="py-12 md:py-20">
        <div className={W}>
          <div data-r="reveal" className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/30" />
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                  Работаем параллельно — быстрее в&nbsp;3 раза
                </h2>
                <p className="text-base md:text-lg text-white/60 leading-relaxed mb-6">
                  Обычный интегратор ведёт модули по очереди. У нас несколько групп одновременно — ERP за 4–5 месяцев вместо 14.
                </p>
                <Link
                  href="/o-kompanii"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold
                    hover:bg-white/20 transition-all duration-200"
                >
                  Подробнее о подходе →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "ERP 200 чел.", usual: "14 мес.", ours: "5 мес." },
                  { label: "Бух + ЗУП", usual: "8 мес.", ours: "3 мес." },
                  { label: "Переезд SAP", usual: "24 мес.", ours: "8 мес." },
                ].map((r) => (
                  <div key={r.label} className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-center">
                    <div className="text-xs text-white/40 mb-2">{r.label}</div>
                    <div className="text-sm text-white/30 line-through mb-1">{r.usual}</div>
                    <div className="font-heading font-bold text-2xl text-white">{r.ours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GUARANTEES PREVIEW ═══ */}
      <section className="py-12 md:py-20">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
            <div>
              <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight">
                Отвечаем деньгами
              </h2>
              <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-3">
                Три пункта в договоре с печатью. До начала работ.
              </p>
            </div>
            <Link href="/garantii" data-r="reveal d1"
              className="text-sm font-semibold text-navy hover:text-navy-light transition-colors duration-200 shrink-0">
              Все гарантии →
            </Link>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { n: "01", t: "Результат", d: "Модуль не работает как в ТЗ — дорабатываем бесплатно.", gradient: "from-blue-500 to-indigo-600" },
              { n: "02", t: "Бюджет", d: "Сумма фиксируется до старта. Ошиблись — наши расходы.", gradient: "from-violet-500 to-purple-600" },
              { n: "03", t: "Сроки", d: "Каждая неделя просрочки — минус 5% от суммы.", gradient: "from-emerald-500 to-teal-600" },
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

      {/* ═══ CTA ═══ */}
      <CtaSection />
    </div>
  );
}
