import Link from "next/link";
import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

export default function AboutPage() {
  return (
    <RevealProvider>
      {/* Hero */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-14">
        <div className={W}>
          <div className="max-w-2xl">
            <h1 data-r="reveal" className="font-heading font-bold md3-headline-large text-on-surface leading-[1.15] tracking-tight">
              О&nbsp;компании
            </h1>
            <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 md:mt-5 leading-[1.6]">
              Мы — студия внедрения 1С. Одна команда, которая закрывает все 32&nbsp;направления платформы.
              Без&nbsp;субподрядчиков, без&nbsp;растянутых сроков, без&nbsp;«скорректируем бюджет».
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-24">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-4 md:mb-5">
            Работаем параллельно
          </h2>
          <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mb-10 md:mb-14 max-w-2xl leading-[1.6]">
            Обычный интегратор ведёт модули последовательно. У&nbsp;нас несколько групп одновременно.
          </p>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              { proj: "ERP, 200 пользователей", usual: "12–14 мес.", ours: "4–5 мес." },
              { proj: "Бухгалтерия + зарплата + склад", usual: "6–8 мес.", ours: "2–3 мес." },
              { proj: "Переезд с\u00A0SAP", usual: "18–24 мес.", ours: "6–8 мес." },
            ].map((r) => (
              <div key={r.proj} className="bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300">
                <h3 className="font-heading font-semibold md3-title-medium text-on-surface mb-5 md:mb-6">{r.proj}</h3>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline-variant/40">
                  <span className="md3-body-medium text-on-surface-variant">Обычно</span>
                  <span className="md3-body-medium text-on-surface-variant line-through">{r.usual}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="md3-body-medium text-on-surface-variant font-medium">У&nbsp;нас</span>
                  <span className="font-heading font-bold text-[22px] md:text-[26px] text-primary">{r.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-24">
        <div className={W}>
          <div data-r="reveal" className="bg-inverse-surface rounded-[var(--radius-lg)] p-8 md:p-12 lg:p-14">
            <h2 className="font-heading font-bold md3-headline-medium text-inverse-on-surface leading-[1.2] mb-5 md:mb-7">
              Тем, кому надоело
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-6 md:mb-10">
              <div className="rounded-[var(--radius-md)] bg-white/5 border border-white/10 p-6 md:p-8">
                <p className="md3-body-large text-inverse-on-surface/65 leading-[1.6]">
                  Вы производите мебель, возите грузы по&nbsp;стране или управляете
                  сетью из&nbsp;200 магазинов. У&nbsp;вас сложные процессы, много юрлиц
                  и&nbsp;бухгалтерия, от&nbsp;которой зависит всё.
                </p>
              </div>
              <div className="rounded-[var(--radius-md)] bg-white/5 border border-white/10 p-6 md:p-8">
                <p className="md3-body-large text-inverse-on-surface/65 leading-[1.6]">
                  Вам уже внедряли 1С. Возможно, не&nbsp;один раз. Проект на&nbsp;три месяца
                  растянулся на&nbsp;год. Интегратор звонил с&nbsp;просьбой «скорректировать
                  бюджет», хотя половина работы ещё не&nbsp;сделана.
                </p>
              </div>
            </div>
            <p className="font-heading font-bold md3-title-large text-inverse-on-surface">
              Мы для&nbsp;тех, кому это надоело.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-10 md:mb-14">
            Принципы работы
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                title: "Одна команда на\u00A0всё",
                desc: "Бухгалтерия, зарплата, склад, производство, ERP — одни и\u00A0те же люди от\u00A0аудита до\u00A0запуска. Нет «стыков» между подрядчиками.",
                icon: (
                  <svg className="w-5 h-5 text-on-primary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: "Фиксированная цена",
                desc: "Называем сумму до\u00A0старта. Ошиблись в\u00A0оценке — наши расходы. Вы не\u00A0услышите «нужно скорректировать бюджет» через\u00A0полгода.",
                icon: (
                  <svg className="w-5 h-5 text-on-primary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                ),
              },
              {
                title: "Постоплата",
                desc: "Ноль вперёд. Платите, когда скажете «принимаю». Мы работаем за\u00A0результат, а\u00A0не\u00A0за\u00A0процесс.",
                icon: (
                  <svg className="w-5 h-5 text-on-primary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "Штраф за\u00A0просрочку",
                desc: "Дата сдачи — в\u00A0договоре. Каждая неделя просрочки — минус 5% от\u00A0суммы. Мы заинтересованы закончить вовремя.",
                icon: (
                  <svg className="w-5 h-5 text-on-primary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
              },
            ].map((p) => (
              <div key={p.title} className="bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center mb-5 md:mb-7">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">{p.title}</h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </RevealProvider>
  );
}
