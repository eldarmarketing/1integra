"use client";
import Link from "next/link";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

export default function AboutPage() {
  const pg = useReveal();

  return (
    <div ref={pg}>
      {/* Hero */}
      <section className="pt-12 pb-10 md:pt-20 md:pb-14">
        <div className={W}>
          <div className="max-w-3xl">
            <h1 data-r="reveal" className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight">
              О компании
            </h1>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-6 leading-relaxed">
              Мы — студия внедрения 1С. Одна команда, которая закрывает все 32 направления платформы.
              Без субподрядчиков, без растянутых сроков, без «скорректируем бюджет».
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-5">
            Работаем параллельно
          </h2>
          <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mb-12 md:mb-16 max-w-2xl">
            Обычный интегратор ведёт модули последовательно. У нас несколько групп одновременно.
          </p>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { proj: "ERP, 200 пользователей", usual: "12–14 мес.", ours: "4–5 мес.", accent: "text-blue-600" },
              { proj: "Бухгалтерия + зарплата + склад", usual: "6–8 мес.", ours: "2–3 мес.", accent: "text-violet-600" },
              { proj: "Переезд с SAP", usual: "18–24 мес.", ours: "6–8 мес.", accent: "text-emerald-600" },
            ].map((r) => (
              <div key={r.proj} className="rounded-2xl bg-white border border-gray-200 p-7 md:p-9 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
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

      {/* For Whom */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <div data-r="reveal" className="relative overflow-hidden rounded-3xl bg-navy p-10 md:p-14 lg:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-indigo-900/30" />
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-10">
                Тем, кому надоело
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-12">
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7">
                  <p className="text-base md:text-lg text-white/65 leading-relaxed">
                    Вы производите мебель, возите грузы по стране или управляете
                    сетью из 200 магазинов. У вас сложные процессы, много юрлиц
                    и бухгалтерия, от которой зависит всё.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-7">
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

      {/* Principles */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-12 md:mb-16">
            Принципы работы
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                title: "Одна команда на всё",
                desc: "Бухгалтерия, зарплата, склад, производство, ERP — одни и те же люди от аудита до запуска. Нет «стыков» между подрядчиками.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                title: "Фиксированная цена",
                desc: "Называем сумму до старта. Ошиблись в оценке — наши расходы. Вы не услышите «нужно скорректировать бюджет» через полгода.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                ),
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Постоплата",
                desc: "Ноль вперёд. Платите, когда скажете «принимаю». Мы работаем за результат, а не за процесс.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                gradient: "from-violet-500 to-purple-600",
              },
              {
                title: "Штраф за просрочку",
                desc: "Дата сдачи — в договоре. Каждая неделя просрочки — минус 5% от суммы. Мы заинтересованы закончить вовремя.",
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                gradient: "from-orange-500 to-amber-600",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl bg-white border border-gray-200 p-7 md:p-9 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-6`}>
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
