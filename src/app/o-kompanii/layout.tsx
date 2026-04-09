import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании — студия внедрения 1С",
  description:
    "Одна команда на все 32 направления 1С. Параллельная работа — в 3 раза быстрее обычного интегратора. Постоплата, фиксированная цена, гарантия сроков.",
  alternates: {
    canonical: "/o-kompanii",
  },
  openGraph: {
    title: "О компании — 1ИНТЕГРА",
    description: "Студия внедрения 1С. Параллельная работа — в 3 раза быстрее.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
