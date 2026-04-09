import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании — 1ИНТЕГРА",
  description: "Студия внедрения 1С. Одна команда на все 32 направления. Параллельная работа — в 3 раза быстрее. Постоплата.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
