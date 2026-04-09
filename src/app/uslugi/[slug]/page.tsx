"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useReveal } from "@/components/reveal";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES, getServiceBySlug } from "@/data/services";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const pg = useReveal();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <div className={W}>
          <h1 className="font-heading font-bold text-3xl text-gray-900 mb-4">Услуга не найдена</h1>
          <Link href="/uslugi" className="text-navy hover:text-navy-light transition-colors">
            ← Все направления
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div ref={pg}>
      {/* Breadcrumb + Hero */}
      <section className="pt-8 pb-6 md:pt-12 md:pb-10">
        <div className={W}>
          <nav data-r="reveal" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-600 transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/uslugi" className="hover:text-gray-600 transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-gray-600">{service.title}</span>
          </nav>

          <div data-r="reveal d1" className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-3">
              <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} items-center justify-center mb-6`}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h1 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="lg:col-span-2 rounded-2xl bg-white border border-gray-200 p-6 md:p-8">
              <div className="font-heading font-semibold text-sm text-gray-400 uppercase tracking-wider mb-4">Продукты</div>
              <div className="space-y-3">
                {service.products.map((p) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient} shrink-0`} />
                    {p}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link href="/kontakty"
                  className="block text-center px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold
                    hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-navy/20">
                  Обсудить внедрение
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-10 md:mb-12">
            Что входит
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-4 md:gap-5">
            {service.features.map((f, i) => (
              <div key={f.title} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-heading font-bold text-xs mb-5`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-10 md:py-16">
        <div className={W}>
          <div data-r="reveal" className="rounded-3xl bg-white border border-gray-200 p-8 md:p-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 leading-tight mb-6">
              Модули и компоненты
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.modules.map((m) => (
                <span key={m}
                  className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium">
                  {m}
                </span>
              ))}
              {service.products.map((p) => (
                <span key={p}
                  className={`px-4 py-2 rounded-full border border-transparent bg-gradient-to-r ${service.gradient} text-sm text-white font-medium`}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-12 md:py-20">
        <div className={W}>
          <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-4xl text-gray-900 leading-tight mb-10 md:mb-12">
            Примеры внедрений
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {service.cases.map((c, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-heading font-bold text-xs mb-5`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-12 md:py-20">
        <div className={W}>
          <div className="flex items-end justify-between gap-4 mb-10 md:mb-12">
            <h2 data-r="reveal" className="font-heading font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
              Другие направления
            </h2>
            <Link href="/uslugi" data-r="reveal"
              className="text-sm font-semibold text-navy hover:text-navy-light transition-colors duration-200 shrink-0">
              Все направления →
            </Link>
          </div>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`}
                className={`rounded-2xl border ${s.light} p-6 md:p-8 hover:shadow-lg transition-all duration-300 block`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
