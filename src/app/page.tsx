"use client";
import Link from "next/link";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function Home() {
  const pg = useReveal();

  return (
    <div ref={pg}>

      {/* ═══ HERO ═══ */}
      <section className="pt-12 pb-10 md:pt-20 md:pb-16">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            <div className="md:row-span-2 relative overflow-hidden rounded-3xl bg-navy p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-80 md:min-h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-indigo-900/40" />
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-indigo-400/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Студия внедрения 1С
                </div>
                <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
                  Внедряем 1С<br />целиком
                </h1>
                <p className="text-base md:text-lg text-white/60 mt-6 max-w-md leading-relaxed">
                  32&nbsp;направления и&nbsp;263&nbsp;модуля. Одна команда вместо десяти подрядчиков.
                </p>
              </div>
              <div className="relative mt-8">
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

            <div className="rounded-3xl bg-white border border-gray-200 p-7 md:p-9 flex flex-col justify-between min-h-48 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-heading font-bold text-lg">
                ×3
              </div>
              <div className="mt-5">
                <div className="font-heading font-bold text-xl text-gray-900">Быстрее обычного</div>
                <p className="text-sm text-gray-500 mt-2.5 leading-relaxed">Несколько групп работают параллельно — ERP за 4–5 месяцев вместо 14</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-7 md:p-9 flex flex-col justify-between min-h-48 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-heading font-bold text-lg">
                0₽
              </div>
              <div className="mt-5">
                <div className="font-heading font-bold text-xl text-gray-900">Постоплата</div>
                <p className="text-sm text-gray-500 mt-2.5 leading-relaxed">Платите после результата. Никаких авансов — только по факту</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-14 md:py-20">
        <div className={W}>
          <div data-r="reveal" className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {[
              ["32", "направления 1С", "from-blue-500 to-indigo-600"],
              ["263", "модуля платформы", "from-violet-500 to-purple-600"],
              ["1", "команда под ключ", "from-emerald-500 to-teal-600"],
              ["0", "субподрядчиков", "from-orange-500 to-amber-600"],
            ].map(([n, l, g]) => (
              <div key={l as string} className="rounded-2xl bg-white border border-gray-200 p-7 md:p-9 text-center">
                <div className={`inline-block font-heading font-bold text-4xl md:text-5xl leading-none bg-gradient-to-br ${g} bg-clip-text text-transparent`}>
                  {n}
                </div>
                <div className="text-sm text-gray-500 mt-3">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div>
              <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight">
                Направления внедрения
              </h2>
              <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-5 max-w-xl leading-relaxed">
                Знаем все 263 модуля. Не ищем субподрядчиков — делаем сами.
              </p>
            </div>
            <Link href="/uslugi" data-r="reveal d1"
              className="text-sm font-semibold text-navy hover:text-navy-light transition-colors duration-200 shrink-0">
              Все направления →
            </Link>
          </div>

          <div data-r="reveal d2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`}
                className={`group rounded-2xl border ${s.light} p-7 md:p-9 hover:shadow-lg transition-all duration-300 block`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APPROACH TEASER ═══ */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <div data-r="reveal" className="relative overflow-hidden rounded-3xl bg-navy p-10 md:p-14 lg:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/30" />
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-6">
                  Работаем параллельно — быстрее в&nbsp;3 раза
                </h2>
                <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
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
                  <div key={r.label} className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 text-center">
                    <div className="text-xs text-white/40 mb-3">{r.label}</div>
                    <div className="text-sm text-white/30 line-through mb-2">{r.usual}</div>
                    <div className="font-heading font-bold text-2xl text-white">{r.ours}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ GUARANTEES PREVIEW ═══ */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div>
              <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight">
                Отвечаем деньгами
              </h2>
              <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-5 leading-relaxed">
                Три пункта в договоре с печатью. До начала работ.
              </p>
            </div>
            <Link href="/garantii" data-r="reveal d1"
              className="text-sm font-semibold text-navy hover:text-navy-light transition-colors duration-200 shrink-0">
              Все гарантии →
            </Link>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { n: "01", t: "Результат", d: "Модуль не работает как в ТЗ — дорабатываем бесплатно.", gradient: "from-blue-500 to-indigo-600" },
              { n: "02", t: "Бюджет", d: "Сумма фиксируется до старта. Ошиблись — наши расходы.", gradient: "from-violet-500 to-purple-600" },
              { n: "03", t: "Сроки", d: "Каждая неделя просрочки — минус 5% от суммы.", gradient: "from-emerald-500 to-teal-600" },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl bg-white border border-gray-200 p-7 md:p-9 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center text-white font-heading font-bold text-sm mb-6`}>
                  {c.n}
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{c.t}</h3>
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
