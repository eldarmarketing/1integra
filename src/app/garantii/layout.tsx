import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гарантии — 1ИНТЕГРА",
  description: "Фиксированная цена, постоплата, штраф за просрочку. Гарантии результата в договоре.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
