import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Гарантии внедрения 1С — фиксированная цена, постоплата",
  description:
    "Фиксированная цена до старта, постоплата по факту, штраф 5% за каждую неделю просрочки. Гарантии в договоре с печатью.",
  alternates: {
    canonical: "/garantii",
  },
  openGraph: {
    title: "Гарантии — 1ИНТЕГРА",
    description: "Фиксированная цена, постоплата, штраф за просрочку.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
