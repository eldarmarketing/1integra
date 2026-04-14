import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

export const metadata = {
  title: "Стоимость внедрения 1С — цены и тарифы",
  description:
    "Стоимость внедрения 1С: от 300 000 ₽ для малого бизнеса до полного ERP. Фиксированная цена, постоплата, гарантия сроков.",
  alternates: { canonical: "/stoimost" },
};

const tiers = [
  {
    title: "Малый бизнес",
    price: "от\u00A0300\u00A0000\u00A0₽",
    highlighted: false,
    features: [
      "1–2 модуля (бухгалтерия, зарплата)",
      "До\u00A020 пользователей",
      "Срок: 1–2 месяца",
      "Обучение\u00A0+\u00A01\u00A0мес. поддержки",
    ],
  },
  {
    title: "Средний бизнес",
    price: "от\u00A01\u00A0500\u00A0000\u00A0₽",
    highlighted: true,
    badge: "Рекомендуем",
    features: [
      "3–5 модулей (ERP, торговля, склад)",
      "20–100 пользователей",
      "Срок: 2–4 месяца",
      "Обучение\u00A0+\u00A03\u00A0мес. поддержки",
    ],
  },
  {
    title: "Крупный бизнес",
    price: "от\u00A05\u00A0000\u00A0000\u00A0₽",
    highlighted: false,
    features: [
      "Полный стек модулей",
      "100+ пользователей",
      "Срок: 4–8 месяцев",
      "Обучение\u00A0+\u00A06\u00A0мес. поддержки",
      "Выделенный PM",
    ],
  },
];

const included = [
  {
    n: "01",
    t: "Аудит",
    d: "Изучаем процессы, структуру, болевые точки. Бесплатно до\u00A0заключения договора.",
  },
  {
    n: "02",
    t: "Техническое задание",
    d: "Описываем каждый модуль, интеграцию и\u00A0отчёт. Фиксируем в\u00A0документе.",
  },
  {
    n: "03",
    t: "Настройка и\u00A0разработка",
    d: "Конфигурируем и\u00A0дорабатываем 1С под\u00A0ваши бизнес-процессы.",
  },
  {
    n: "04",
    t: "Миграция данных",
    d: "Переносим всю историю: документы, остатки, контрагентов, договоры.",
  },
  {
    n: "05",
    t: "Обучение",
    d: "Учим пользователей и\u00A0администраторов. Записываем видеоинструкции.",
  },
  {
    n: "06",
    t: "Сопровождение",
    d: "Поддержка после запуска. Отвечаем в\u00A0тот же день, правим бесплатно.",
  },
];

const examples = [
  {
    name: "Бухгалтерия, 1\u00A0юрлицо",
    price: "~350\u00A0000\u00A0₽",
    duration: "1\u00A0мес.",
  },
  {
    name: "Бухгалтерия\u00A0+\u00A0ЗУП, 3\u00A0юрлица",
    price: "~900\u00A0000\u00A0₽",
    duration: "2\u00A0мес.",
  },
  {
    name: "ERP, 200\u00A0пользователей",
    price: "~8\u00A0000\u00A0000\u00A0₽",
    duration: "5\u00A0мес.",
  },
  {
    name: "Переезд с\u00A0SAP",
    price: "от\u00A010\u00A0000\u00A0000\u00A0₽",
    duration: "6–8\u00A0мес.",
  },
];

export default function StoimostPage() {
  return (
    <RevealProvider>
      {/* Hero */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-14">
        <div className={W}>
          <div className="max-w-2xl">
            <h1
              data-r="reveal"
              className="font-heading font-bold md3-headline-large text-on-surface leading-[1.15] tracking-tight"
            >
              Стоимость внедрения 1С
            </h1>
            <p
              data-r="reveal d1"
              className="md3-body-large text-on-surface-variant mt-4 md:mt-5 leading-[1.6]"
            >
              Фиксированная цена до&nbsp;старта. Называем сумму&nbsp;—
              и&nbsp;не&nbsp;меняем.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="pt-4 pb-12 md:pt-6 md:pb-24">
        <div className={W}>
          <div data-r="reveal" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {tiers.map((tier) =>
              tier.highlighted ? (
                <div
                  key={tier.title}
                  className="relative bg-inverse-surface rounded-[var(--radius-lg)] p-7 md:p-10 ring-2 ring-primary/30"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center mb-5 md:mb-7">
                    <svg
                      className="w-4.5 h-4.5 text-on-primary-container"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </div>
                  {tier.badge && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 md3-label-small text-inverse-on-surface/70 mb-4">
                      {tier.badge}
                    </div>
                  )}
                  <h3 className="font-heading font-bold md3-title-large text-inverse-on-surface mb-2.5">
                    {tier.title}
                  </h3>
                  <p className="font-heading font-bold text-[22px] md:text-[28px] text-inverse-on-surface mb-6 md:mb-8">
                    {tier.price}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-primary shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span className="md3-body-medium text-inverse-on-surface/70 leading-[1.6]">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div
                  key={tier.title}
                  className="bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300"
                >
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center mb-5 md:mb-7">
                    <svg
                      className="w-4.5 h-4.5 text-on-primary-container"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold md3-title-large text-on-surface mb-2.5">
                    {tier.title}
                  </h3>
                  <p className="font-heading font-bold text-[22px] md:text-[28px] text-on-surface mb-6 md:mb-8">
                    {tier.price}
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-on-surface-variant shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <span className="md3-body-medium text-on-surface-variant leading-[1.6]">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2
            data-r="reveal"
            className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-10 md:mb-14"
          >
            Что входит в&nbsp;стоимость
          </h2>
          <div
            data-r="reveal d1"
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {included.map((c) => (
              <div
                key={c.n}
                className="bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300"
              >
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center text-on-primary-container font-heading font-bold text-[12px] mb-5 md:mb-7">
                  {c.n}
                </div>
                <h3 className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">
                  {c.t}
                </h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project examples */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2
            data-r="reveal"
            className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-10 md:mb-14"
          >
            Примеры проектов
          </h2>
          <div
            data-r="reveal d1"
            className="grid md:grid-cols-2 gap-4 md:gap-5"
          >
            {examples.map((ex) => (
              <div
                key={ex.name}
                className="bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300 flex items-start justify-between gap-5"
              >
                <div>
                  <p className="font-heading font-semibold md3-title-medium text-on-surface mb-1.5">
                    {ex.name}
                  </p>
                  <p className="md3-body-medium text-on-surface-variant">
                    Срок: {ex.duration}
                  </p>
                </div>
                <p className="font-heading font-bold md3-title-medium text-on-surface whitespace-nowrap">
                  {ex.price}
                </p>
              </div>
            ))}
          </div>

          {/* Note block */}
          <div
            data-r="reveal d2"
            className="mt-6 md:mt-8 rounded-[var(--radius-md)] bg-primary-container p-6 md:p-8 flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-primary-container flex items-center justify-center shrink-0 mt-0.5">
              <svg
                className="w-4.5 h-4.5 text-on-primary-container"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
            <p className="md3-body-medium text-on-primary-container leading-[1.6]">
              Точную стоимость назовём после бесплатного аудита. Цена
              фиксируется в&nbsp;договоре&nbsp;— вы не заплатите больше.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </RevealProvider>
  );
}
