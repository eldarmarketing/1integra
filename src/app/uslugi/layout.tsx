import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги внедрения 1С — 32 направления под ключ",
  description:
    "Все направления внедрения 1С: бухгалтерия, зарплата, торговля, производство, склад, ERP, документооборот, холдинг, розница. 263 модуля, одна команда.",
  alternates: {
    canonical: "/uslugi",
  },
  openGraph: {
    title: "Услуги внедрения 1С — 1ИНТЕГРА",
    description: "32 направления внедрения 1С под ключ. От бухгалтерии до ERP.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
