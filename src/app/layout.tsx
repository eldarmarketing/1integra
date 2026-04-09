import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gtEesti = localFont({
  src: [
    {
      path: "../../public/fonts/gteestiprodisplay_regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gteestiprodisplay_medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gteestiprodisplay_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-eesti",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1ИНТЕГРА — Внедрение и интеграция 1С",
  description:
    "32 направления. 263 модуля. Одна команда вместо десяти подрядчиков. Внедряем 1С целиком — в срок, в бюджет, с гарантией.",
  keywords: "1С внедрение, интеграция 1С, 1С ERP, автоматизация бизнеса",
  openGraph: {
    title: "1ИНТЕГРА — Внедряем 1С целиком",
    description:
      "32 направления. 263 модуля. Одна команда вместо десяти подрядчиков.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${gtEesti.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-[#333]">{children}</body>
    </html>
  );
}
