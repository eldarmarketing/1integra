"use client";
import Link from "next/link";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES } from "@/data/services";

export default function UslugiPage() {
  const pg = useReveal();

  return (
    <div ref={pg}>
      {/* Hero */}
      <section className="pt-12 pb-10 md:pt-20 md:pb-14">
        <div className={W}>
          <div className="max-w-3xl">
            <h1 data-r="reveal" className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight">
              Направления внедрения
            </h1>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-6 leading-relaxed">
              32&nbsp;направления, 263&nbsp;модуля — от бухгалтерии до управления холдингом.
              Не ищем субподрядчиков, делаем всё силами одной команды.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-28">
        <div className={W}>
          <div data-r="reveal" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`}
                className={`group rounded-2xl border ${s.light} p-7 md:p-9 hover:shadow-lg transition-all duration-300 block`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.modules.map((m) => (
                    <span key={m} className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-gray-200 text-gray-500">
                      {m}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-navy group-hover:text-navy-light transition-colors duration-200">
                  Подробнее →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-10 md:pb-14">
        <div className={W}>
          <div data-r="reveal" className="rounded-2xl bg-white border border-gray-200 p-7 md:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-2">Не нашли своё направление?</div>
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
