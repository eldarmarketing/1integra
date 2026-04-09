"use client";
import Link from "next/link";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

const SERVICES = [
  {
    title: "Бухгалтерия и налоги",
    desc: "Полная автоматизация бухгалтерского и налогового учёта. Интеграция с банками, ЭДО, формирование отчётности — от ежедневных операций до годовых деклараций.",
    modules: ["1С:Бухгалтерия", "1С:ЭДО", "Интеграция с банками", "Сверка с ФНС"],
    gradient: "from-blue-500 to-indigo-600",
    light: "bg-blue-50 border-blue-100 hover:border-blue-200",
  },
  {
    title: "Зарплата и кадры",
    desc: "Расчёт зарплаты любой сложности, кадровый учёт, графики, табели, больничные, отпуска. Все формы отчётности в ПФР, ФСС, ИФНС.",
    modules: ["1С:ЗУП", "Штатное расписание", "Графики работы", "Самообслуживание сотрудника"],
    gradient: "from-violet-500 to-purple-600",
    light: "bg-violet-50 border-violet-100 hover:border-violet-200",
  },
  {
    title: "Управление торговлей",
    desc: "Закупки, продажи, ценообразование, работа с клиентами. Управление торговыми представителями, логистика доставки, CRM.",
    modules: ["1С:Управление торговлей", "1С:CRM", "Мобильное приложение", "EDI-обмен"],
    gradient: "from-cyan-500 to-blue-600",
    light: "bg-cyan-50 border-cyan-100 hover:border-cyan-200",
  },
  {
    title: "Производство",
    desc: "Планирование производства, MES, рецептуры и спецификации, калькуляция себестоимости. Оперативное управление цехом.",
    modules: ["1С:ERP (производство)", "MES-модуль", "Рецептуры", "Калькуляция"],
    gradient: "from-orange-500 to-amber-600",
    light: "bg-orange-50 border-orange-100 hover:border-orange-200",
  },
  {
    title: "Склад и логистика",
    desc: "WMS-система, адресное хранение, инвентаризация, штрихкодирование. Управление транспортной логистикой и маршрутизация.",
    modules: ["1С:WMS", "Адресный склад", "ТСД и штрихкоды", "Маршрутизация"],
    gradient: "from-emerald-500 to-teal-600",
    light: "bg-emerald-50 border-emerald-100 hover:border-emerald-200",
  },
  {
    title: "ERP и интеграции",
    desc: "Полное внедрение 1С:ERP 2. Переезд с SAP, Oracle, Microsoft Dynamics. Интеграция с сайтами, маркетплейсами, госсистемами.",
    modules: ["1С:ERP 2", "Миграция SAP/Oracle", "API-интеграции", "Шина данных"],
    gradient: "from-rose-500 to-pink-600",
    light: "bg-rose-50 border-rose-100 hover:border-rose-200",
  },
  {
    title: "Документооборот",
    desc: "Электронный документооборот, согласование, маршруты документов, контроль исполнения поручений, интеграция с ЭЦП.",
    modules: ["1С:Документооборот", "Согласование", "ЭЦП", "Маршруты"],
    gradient: "from-amber-500 to-yellow-600",
    light: "bg-amber-50 border-amber-100 hover:border-amber-200",
  },
  {
    title: "Управление холдингом",
    desc: "Консолидация данных нескольких юрлиц. Управленческая отчётность, бюджетирование, казначейство, трансфертное ценообразование.",
    modules: ["1С:Управление холдингом", "Бюджетирование", "Казначейство", "МСФО"],
    gradient: "from-indigo-500 to-blue-600",
    light: "bg-indigo-50 border-indigo-100 hover:border-indigo-200",
  },
  {
    title: "Розница и общепит",
    desc: "Автоматизация розничных точек и ресторанов. Кассовые операции, программы лояльности, интеграция с ОФД и ЕГАИС.",
    modules: ["1С:Розница", "1С:Общепит", "Кассы и ОФД", "ЕГАИС"],
    gradient: "from-pink-500 to-rose-600",
    light: "bg-pink-50 border-pink-100 hover:border-pink-200",
  },
];

export default function UslugiPage() {
  const pg = useReveal();

  return (
    <div ref={pg}>
      {/* Hero */}
      <section className="pt-10 pb-6 md:pt-16 md:pb-10">
        <div className={W}>
          <div className="max-w-3xl">
            <h1 data-r="reveal" className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight">
              Направления внедрения
            </h1>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-4 leading-relaxed">
              32&nbsp;направления, 263&nbsp;модуля — от бухгалтерии до управления холдингом.
              Не ищем субподрядчиков, делаем всё силами одной команды.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-10 md:py-16">
        <div className={W}>
          <div data-r="reveal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SERVICES.map((s) => (
              <div key={s.title}
                className={`rounded-2xl border ${s.light} p-6 md:p-8 hover:shadow-lg transition-all duration-300`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.modules.map((m) => (
                    <span key={m} className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-gray-200 text-gray-500">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-6 md:pb-10">
        <div className={W}>
          <div data-r="reveal" className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-1">Не нашли своё направление?</div>
              <p className="text-sm text-gray-500">Мы работаем со всеми конфигурациями 1С. Напишите — подберём решение.</p>
            </div>
            <Link href="/kontakty"
              className="shrink-0 px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold
                hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-navy/20">
              Обсудить задачу
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
