import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { DIRECTIONS, getDirectionBySlug } from "@/data/directions";
import { getModulesByDirection } from "@/data/modules";
import { JsonLd, FaqJsonLd } from "@/components/json-ld";
import { FaqAccordion } from "@/components/faq-accordion";
import { GENERAL_FAQ, SERVICE_FAQ } from "@/data/faq";

export function generateStaticParams() {
  return DIRECTIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const direction = getDirectionBySlug(slug);
  if (!direction) return {};
  return {
    title: `${direction.title} — внедрение 1С под ключ`,
    description: direction.fullDesc,
    alternates: { canonical: `/uslugi/${slug}` },
  };
}

export default async function DirectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const direction = getDirectionBySlug(slug);

  if (!direction) notFound();

  const modules = getModulesByDirection(slug);
  const otherDirections = DIRECTIONS.filter((d) => d.slug !== slug).slice(0, 3);
  const faqItems = SERVICE_FAQ[slug] ?? GENERAL_FAQ;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: direction.title,
    description: direction.fullDesc,
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
      { "@type": "ListItem", position: 3, name: direction.title, item: `https://1integra.ru/uslugi/${slug}` },
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
            <span className="text-on-surface truncate">{direction.title}</span>
          </nav>

          <div data-r="reveal d1" className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-4">
              {direction.title}
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {direction.fullDesc}
            </p>
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
            {direction.features.map((f, i) => (
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
      {modules.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className={W}>
            <div data-r="reveal" className="rounded-2xl bg-surface-container border border-outline-variant p-6 lg:p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-on-surface">
                  Модули и компоненты
                </h2>
                <span className="text-sm text-on-surface-variant shrink-0">
                  {modules.length} модулей
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {modules.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/moduli/${m.slug}`}
                    className="group flex items-center gap-3 px-3.5 py-2.5 rounded-lg
                      hover:bg-surface-container-high transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-on-surface group-hover:text-primary transition-colors">
                      {m.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cases */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            Примеры внедрений
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {direction.cases.map((c, i) => (
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

      {/* Other directions */}
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
            {otherDirections.map((d) => (
              <Link
                key={d.slug}
                href={`/uslugi/${d.slug}`}
                className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 lg:p-8
                  hover:bg-surface-container-low transition-colors block"
              >
                <h3 className="text-lg font-semibold text-on-surface mb-2">{d.title}</h3>
                <p className="text-sm text-on-surface-variant">{d.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
