"use client";
import Link from "next/link";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

export default function GarantiiPage() {
  const pg = useReveal();

  return (
    <div ref={pg}>
      {/* Hero */}
      <section className="pt-12 pb-10 md:pt-20 md:pb-14">
        <div className={W}>
          <div className="max-w-3xl">
            <h1 data-r="reveal" className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight">
              Гарантии
            </h1>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-6 leading-relaxed">
              Три пункта в договоре с печатью. До начала работ. Не обещания — юридические обязательства.
            </p>
          </div>
        </div>
      </section>

      {/* Three guarantees */}
      <section className="py-14 md:py-24">
        <div className={W}>
          <div data-r="reveal" className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                n: "01",
                t: "Результат",
                d: "Модуль не работает как в ТЗ — дорабатываем бесплатно, сколько потребуется. Без дополнительных смет и переговоров.",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                n: "02",
                t: "Бюджет",
                d: "Сумма фиксируется до старта. Ошиблись в оценке — наши расходы. Вы не заплатите ни рублём больше.",
                gradient: "from-violet-500 to-purple-600",
              },
              {
                n: "03",
                t: "Сроки",
                d: "Дата сдачи в договоре. Каждая неделя просрочки — минус 5% от суммы. Мы финансово заинтересованы закончить вовремя.",
                gradient: "from-emerald-500 to-teal-600",
              },
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

      {/* Payment model */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-12 md:mb-16">
            Деньги после результата
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-9 md:p-12 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-500 mb-8">Обычно</div>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-10">
                Интегратор берёт 50–70% вперёд. Вы платите за обещания. Если что-то пойдёт не так — деньги уже у них.
              </p>
              <div className="font-heading font-bold text-7xl md:text-8xl text-gray-100 leading-none select-none">65%</div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-navy p-8 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/30" />
              <div className="relative">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/70 mb-6">У нас</div>
                <p className="text-base md:text-lg text-white/65 leading-relaxed mb-10">
                  Ноль до старта. Оплата когда скажете «принимаю». Весь финансовый риск — на нашей стороне.
                </p>
                <div className="font-heading font-bold text-7xl md:text-8xl text-white/10 leading-none select-none">0%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration */}
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
              { step: "01", title: "Запуск рядом", desc: "Новая 1С параллельно со старой. Работа не останавливается ни на минуту.", gradient: "from-sky-500 to-blue-600" },
              { step: "02", title: "Пилот 10%", desc: "Небольшая группа переходит первой. Ловим все баги на ограниченном масштабе.", gradient: "from-orange-500 to-amber-600" },
              { step: "03", title: "Переключение", desc: "Полный переход после одобрения. Старая система остаётся доступна.", gradient: "from-emerald-500 to-teal-600" },
              { step: "04", title: "Все данные", desc: "Каждый документ за все годы. Проверяем суммы и остатки после миграции.", gradient: "from-violet-500 to-purple-600" },
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

      <CtaSection />
    </div>
  );
}
