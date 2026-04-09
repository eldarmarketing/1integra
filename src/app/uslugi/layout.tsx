import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги — 1ИНТЕГРА",
  description: "32 направления внедрения 1С: бухгалтерия, зарплата, торговля, производство, склад, ERP, документооборот, розница.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
