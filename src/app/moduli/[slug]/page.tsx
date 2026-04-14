import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";
import { MODULES, getModuleBySlug, getModulesByDirection } from "@/data/modules";
import { getDirectionBySlug } from "@/data/directions";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return {};
  return {
    title: `${mod.title} — внедрение и настройка`,
    description: mod.desc,
  };
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  const directions = mod.directions
    .map((slug) => getDirectionBySlug(slug))
    .filter(Boolean);

  /* Related modules from same directions (exclude current) */
  const relatedSet = new Set<string>();
  mod.directions.forEach((dSlug) => {
    getModulesByDirection(dSlug).forEach((m) => {
      if (m.slug !== mod.slug) relatedSet.add(m.slug);
    });
  });
  const related = MODULES.filter((m) => relatedSet.has(m.slug)).slice(0, 6);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://1integra.ru" },
      { "@type": "ListItem", position: 2, name: "Модули", item: "https://1integra.ru/moduli" },
      { "@type": "ListItem", position: 3, name: mod.title, item: `https://1integra.ru/moduli/${slug}` },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Внедрение ${mod.title}`,
    description: mod.desc,
    provider: {
      "@type": "Organization",
      name: "1ИНТЕГРА",
      url: "https://1integra.ru",
    },
    areaServed: { "@type": "Country", name: "Россия" },
    url: `https://1integra.ru/moduli/${slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />

      {/* Breadcrumb + Hero */}
      <section className="py-16 lg:py-24">
        <div className={W}>
          <nav
            data-r="reveal"
            className="flex items-center gap-1.5 text-sm text-on-surface-variant mb-6 md:mb-8"
          >
            <Link href="/" className="hover:text-on-surface transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/moduli" className="hover:text-on-surface transition-colors">Модули</Link>
            <span>/</span>
            <span className="text-on-surface truncate">{mod.title}</span>
          </nav>

          <div data-r="reveal d1" className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-4">
              {mod.title}
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {mod.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Directions this module belongs to */}
      {directions.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <div className={W}>
            <div data-r="reveal" className="rounded-2xl bg-surface-container border border-outline-variant p-6 lg:p-8">
              <h2 className="text-lg font-bold text-on-surface mb-5">
                Направления внедрения
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {directions.map((d) => d && (
                  <Link
                    key={d.slug}
                    href={`/uslugi/${d.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest
                      p-4 hover:bg-surface-container-low transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container
                      flex items-center justify-center text-sm font-bold shrink-0">
                      1С
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {d.title}
                      </div>
                      <div className="text-xs text-on-surface-variant mt-0.5 line-clamp-1">
                        {d.shortDesc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-16 lg:pb-24">
        <div className={W}>
          <div
            data-r="reveal"
            className="rounded-2xl bg-inverse-surface p-8 lg:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-inverse-on-surface mb-3">
              Нужно внедрить {mod.title}?
            </h2>
            <p className="text-base text-inverse-on-surface/60 mb-8 max-w-lg mx-auto">
              Расскажите о&nbsp;задаче — подготовим план внедрения и&nbsp;рассчитаем стоимость.
              Консультация бесплатно.
            </p>
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full
                bg-inverse-primary text-on-primary-container font-semibold text-sm
                hover:brightness-110 active:scale-[0.97] transition-all"
            >
              Обсудить внедрение
            </Link>
          </div>
        </div>
      </section>

      {/* Related modules */}
      {related.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <div className={W}>
            <div className="flex items-end justify-between gap-6 mb-8">
              <h2 data-r="reveal" className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
                Связанные модули
              </h2>
              <Link
                href="/moduli"
                data-r="reveal"
                className="text-sm font-semibold text-primary hover:opacity-80 transition-opacity shrink-0"
              >
                Все модули →
              </Link>
            </div>
            <div data-r="reveal d1" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  href={`/moduli/${m.slug}`}
                  className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-4
                    hover:bg-surface-container-low transition-colors block"
                >
                  <h3 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-1 line-clamp-2">
                    {m.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
