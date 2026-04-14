import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { JsonLd, FaqJsonLd } from "@/components/json-ld";
import { FaqAccordion } from "@/components/faq-accordion";
import { GENERAL_FAQ, SERVICE_FAQ } from "@/data/faq";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — внедрение 1С под ключ`,
    description: service.fullDesc,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== params.slug).slice(0, 3);
  const faqItems = SERVICE_FAQ[params.slug] ?? GENERAL_FAQ;

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
    url: `https://1integra.ru/uslugi/${params.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://1integra.ru" },
      { "@type": "ListItem", position: 2, name: "Услуги", item: "https://1integra.ru/uslugi" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://1integra.ru/uslugi/${params.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb + Hero */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <nav
            data-r="reveal"
            className="flex items-center gap-1.5 text-sm text-on-surface-variant mb-6 md:mb-8"
          >
            <Link href="/" className="hover:text-on-surface transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/uslugi" className="hover:text-on-surface transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-on-surface truncate">{service.title}</span>
          </nav>

          <div data-r="reveal d1" className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div className="lg:col-span-2 rounded-2xl bg-surface-container border border-outline-variant p-6 lg:p-8">
              <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-6">
                Продукты
              </div>
              <div className="space-y-4">
                {service.products.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-on-surface">{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-7 border-t border-outline-variant hidden md:block">
                <Link
                  href="/kontakty"
                  className="flex items-center justify-center h-12 px-6 rounded-full bg-primary text-on-primary text-sm font-semibold
                    hover:bg-primary/90 transition-colors"
                >
                  Обсудить внедрение
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            Что входит
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-6 mt-12 lg:mt-16">
            {service.features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8
                  hover:bg-surface-container-low transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container
                  flex items-center justify-center text-xs font-semibold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-semibold text-on-surface mb-1">{f.title}</h3>
                <p className="text-sm text-on-surface-variant">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <div data-r="reveal" className="rounded-2xl bg-surface-container border border-outline-variant p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-on-surface mb-6">Модули и компоненты</h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {service.modules.map((m) => (
                <span key={m} className="px-3.5 py-2 rounded-full bg-surface-container-high text-on-surface text-xs font-semibold">
                  {m}
                </span>
              ))}
              {service.products.map((p) => (
                <span key={p} className="px-3.5 py-2 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            Примеры внедрений
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {service.cases.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8
                  hover:bg-surface-container-low transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container
                  flex items-center justify-center text-xs font-semibold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-sm text-on-surface">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            Частые вопросы
          </h2>
          <div data-r="reveal d1" className="rounded-2xl bg-surface-container border border-outline-variant p-6 lg:p-8 mt-12 lg:mt-16">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
      <FaqJsonLd items={faqItems} />

      {/* Other services */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <div className="flex items-end justify-between gap-6 mb-12 lg:mb-16">
            <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
              Другие направления
            </h2>
            <Link
              href="/uslugi"
              data-r="reveal"
              className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity shrink-0"
            >
              Все направления →
            </Link>
          </div>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8
                  hover:bg-surface-container-low transition-colors block"
              >
                <h3 className="text-lg font-semibold text-on-surface mb-2">{s.title}</h3>
                <p className="text-sm text-on-surface-variant">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
