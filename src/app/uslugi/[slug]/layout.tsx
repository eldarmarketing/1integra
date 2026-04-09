import type { Metadata } from "next";
import { SERVICES } from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Услуга не найдена — 1ИНТЕГРА" };
  return {
    title: `${service.title} — 1ИНТЕГРА`,
    description: service.fullDesc,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
