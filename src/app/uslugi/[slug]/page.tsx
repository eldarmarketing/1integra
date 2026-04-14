"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RevealProvider } from "@/components/reveal-provider";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { JsonLd, FaqJsonLd } from "@/components/json-ld";
import { FaqAccordion } from "@/components/faq-accordion";
import { GENERAL_FAQ, SERVICE_FAQ } from "@/data/faq";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="py-24 md:py-32 text-center">
        <div className={W}>
          <h1 className="font-heading font-bold md3-headline-large text-on-surface mb-5">
            Услуга не&nbsp;найдена
          </h1>
          <Link
            href="/uslugi"
            className="text-primary hover:opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
          >
            ← Все направления
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const faqItems = SERVICE_FAQ[slug] ?? GENERAL_FAQ;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.fullDesc,
    provider: {
      "@type": "Organization",
      name: "1ИНТЕГРА",
      url: "https://1integra.ru",
    },
    areaServed: { "@type": "Country", name: "Россия" },
    url: `https://1integra.ru/uslugi/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://1integra.ru" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://1integra.ru/uslugi" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://1integra.ru/uslugi/${slug}` },
    ],
  };

  return (
    <RevealProvider>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb + Hero */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-14">
        <div className={W}>
          <nav
            data-r="reveal"
            className="flex items-center gap-1.5 md3-body-small text-on-surface-variant mb-5 md:mb-8"
          >
            <Link
              href="/"
              className="hover:text-on-surface transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              Главная
            </Link>
            <span>/</span>
            <Link
              href="/uslugi"
              className="hover:text-on-surface transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
            >
              Услуги
            </Link>
            <span>/</span>
            <span className="text-on-surface truncate">{service.title}</span>
          </nav>

          <div data-r="reveal d1" className="grid lg:grid-cols-5 gap-5 lg:gap-10 items-start">
            <div className="lg:col-span-3">
              <h1 className="font-heading font-bold md3-headline-large text-on-surface leading-[1.15] tracking-tight mb-5 md:mb-6">
                {service.title}
              </h1>
              <p className="md3-body-large text-on-surface-variant leading-[1.6] max-w-2xl">
                {service.fullDesc}
              </p>
            </div>

            <div className="lg:col-span-2 rounded-[var(--radius-lg)] bg-surface-container border border-outline-variant/50 p-7 md:p-9">
              <div className="font-heading font-semibold md3-label-medium text-on-surface-variant uppercase tracking-wider mb-5 md:mb-6">
                Продукты
              </div>
              <div className="space-y-3.5">
                {service.products.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="md3-body-medium text-on-surface">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-7 border-t border-outline-variant/50 hidden md:block">
                <Link
                  href="/kontakty"
                  className="block text-center px-7 py-3.5 rounded-full bg-primary text-on-primary md3-label-large
                    hover:opacity-90 active:opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
                >
                  Обсудить внедрение
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2
            data-r="reveal"
            className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-10 md:mb-14"
          >
            Что входит
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-4 md:gap-5">
            {service.features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/50 p-7 md:p-10 hover:bg-surface-container-low transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
              >
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container text-on-primary-container flex items-center justify-center font-heading font-bold md3-label-medium mb-5 md:mb-7">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">
                  {f.title}
                </h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="pt-4 pb-12 md:pt-8 md:pb-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="rounded-[var(--radius-lg)] bg-surface-container border border-outline-variant/50 p-7 md:p-10"
          >
            <h2 className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-6 md:mb-8">
              Модули и компоненты
            </h2>
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {service.modules.map((m) => (
                <span
                  key={m}
                  className="px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-surface-container-high text-on-surface md3-label-medium"
                >
                  {m}
                </span>
              ))}
              {service.products.map((p) => (
                <span
                  key={p}
                  className="px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-primary-container text-on-primary-container md3-label-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2
            data-r="reveal"
            className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-10 md:mb-14"
          >
            Примеры внедрений
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {service.cases.map((c, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-lg)] bg-surface-container-lowest border border-outline-variant/50 p-7 md:p-10 hover:bg-surface-container-low transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
              >
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container text-on-primary-container flex items-center justify-center font-heading font-bold md3-label-medium mb-5 md:mb-7">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="md3-body-medium text-on-surface leading-[1.6]">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <h2
            data-r="reveal"
            className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2] mb-10 md:mb-14"
          >
            Частые вопросы
          </h2>
          <div
            data-r="reveal d1"
            className="rounded-[var(--radius-lg)] bg-surface-container border border-outline-variant/50 p-7 md:p-10"
          >
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <FaqJsonLd items={faqItems} />

      {/* Other services */}
      <section className="pt-12 pb-12 md:pt-24 md:pb-24">
        <div className={W}>
          <div className="flex items-end justify-between gap-5 mb-10 md:mb-14">
            <h2
              data-r="reveal"
              className="font-heading font-bold md3-headline-medium text-on-surface leading-[1.2]"
            >
              Другие направления
            </h2>
            <Link
              href="/uslugi"
              data-r="reveal"
              className="md3-label-large text-primary hover:opacity-80 transition-opacity duration-300 ease-[cubic-bezier(0.2,0,0,1)] shrink-0"
            >
              Все направления →
            </Link>
          </div>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="rounded-[var(--radius-lg)] border border-outline-variant/50 bg-surface-container-lowest p-7 md:p-9 hover:bg-surface-container-low active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] block"
              >
                <h3 className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">
                  {s.title}
                </h3>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </RevealProvider>
  );
}
