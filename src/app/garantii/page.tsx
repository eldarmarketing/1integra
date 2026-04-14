import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { FaqAccordion } from "@/components/faq-accordion";
import { FaqJsonLd } from "@/components/json-ld";
import { GENERAL_FAQ } from "@/data/faq";

export const metadata = {
  title: "Гарантии внедрения 1С — фиксированная цена и сроки",
  description: "Три гарантии в договоре: результат по ТЗ, фиксированный бюджет, сроки с неустойкой. Постоплата — платите только за работающую систему.",
  alternates: { canonical: "/garantii" },
};

export default function GarantiiPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div className="max-w-2xl">
            <h1 data-r="reveal" className="md3-headline-large text-on-surface">
              Гарантии
            </h1>
            <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4">
              Три пункта в&nbsp;договоре с&nbsp;печатью. До&nbsp;начала работ. Не&nbsp;обещания — юридические обязательства.
            </p>
          </div>
        </div>
      </section>

      {/* Three guarantees */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div data-r="reveal" className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {[
              {
                n: "01",
                t: "Результат",
                d: "Модуль не\u00A0работает как в\u00A0ТЗ — дорабатываем бесплатно, сколько потребуется. Без\u00A0дополнительных смет и\u00A0переговоров.",
              },
              {
                n: "02",
                t: "Бюджет",
                d: "Сумма фиксируется до\u00A0старта. Ошиблись в\u00A0оценке — наши расходы. Вы не\u00A0заплатите ни\u00A0рублём больше.",
              },
              {
                n: "03",
                t: "Сроки",
                d: "Дата сдачи в\u00A0договоре. Каждая неделя просрочки — минус 5% от\u00A0суммы. Мы финансово заинтересованы закончить вовремя.",
              },
            ].map((c) => (
              <div key={c.n} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container md3-label-medium mb-4">
                  {c.n}
                </div>
                <h3 className="md3-title-medium text-on-surface mb-1">{c.t}</h3>
                <p className="md3-body-medium text-on-surface-variant">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment model */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Деньги после результата
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-12">
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container md3-label-medium mb-6">Обычно</div>
              <p className="md3-body-large text-on-surface-variant mb-6 md:mb-8">
                Интегратор берёт 50–70% вперёд. Вы платите за&nbsp;обещания. Если что-то пойдёт не&nbsp;так — деньги уже у&nbsp;них.
              </p>
              <div className="font-heading font-bold text-[48px] md:text-[72px] text-on-surface/10 leading-none select-none">65%</div>
            </div>
            <div className="bg-inverse-surface rounded-xl p-4 md:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 md3-label-medium text-inverse-on-surface/70 mb-6">У нас</div>
              <p className="md3-body-large text-inverse-on-surface/65 mb-6 md:mb-8">
                Ноль до&nbsp;старта. Оплата когда скажете «принимаю». Весь финансовый риск — на&nbsp;нашей стороне.
              </p>
              <div className="font-heading font-bold text-[48px] md:text-[72px] text-inverse-on-surface/10 leading-none select-none">0%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Переезд без&nbsp;остановки
          </h2>
          <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 mb-8 md:mb-12">
            Новая 1С рядом со&nbsp;старой. Данные без&nbsp;потерь. Откат за&nbsp;15 минут.
          </p>

          <div data-r="reveal d2" className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {[
              { step: "01", title: "Запуск рядом", desc: "Новая 1С параллельно со\u00A0старой. Работа не\u00A0останавливается ни\u00A0на\u00A0минуту." },
              { step: "02", title: "Пилот 10%", desc: "Небольшая группа переходит первой. Ловим все баги на\u00A0ограниченном масштабе." },
              { step: "03", title: "Переключение", desc: "Полный переход после одобрения. Старая система остаётся доступна." },
              { step: "04", title: "Все данные", desc: "Каждый документ за\u00A0все годы. Проверяем суммы и\u00A0остатки после миграции." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container md3-label-medium mb-4">
                  {s.step}
                </div>
                <h3 className="md3-title-medium text-on-surface mb-1">{s.title}</h3>
                <p className="md3-body-medium text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>

          <div data-r="reveal d3" className="mt-6 md:mt-8 rounded-xl bg-tertiary-container border border-outline-variant/30 p-4 md:p-6 flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-tertiary-container flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-on-tertiary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <p className="md3-label-large text-on-tertiary-container">
              Если хоть один документ потеряется — миграция за&nbsp;наш счёт.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Частые вопросы
          </h2>
          <div data-r="reveal d1" className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 mt-8 md:mt-12">
            <FaqAccordion items={GENERAL_FAQ} />
          </div>
        </div>
      </section>
      <FaqJsonLd items={GENERAL_FAQ} />

      <CtaSection />
    </>
  );
}
