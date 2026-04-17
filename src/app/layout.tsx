import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCta } from "@/components/mobile-cta";
import { JsonLd } from "@/components/json-ld";
import { YandexMetrika } from "@/components/yandex-metrika";
import "./globals.css";

const gtEesti = localFont({
  src: [
    {
      path: "../../public/fonts/gteestiprodisplay_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gteestiprodisplay_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gteestiprodisplay_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-eesti",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1b5fa8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://1integra.ru"),
  title: {
    default: "1ИНТЕГРА — Внедрение и интеграция 1С под ключ",
    template: "%s | 1ИНТЕГРА",
  },
  description:
    "Внедрение 1С под ключ: 32 направления, 263 модуля, одна команда. ERP, бухгалтерия, зарплата, склад, производство. Фиксированная цена, постоплата, гарантия сроков.",
  keywords: [
    "внедрение 1С",
    "интеграция 1С",
    "1С ERP внедрение",
    "1С бухгалтерия внедрение",
    "1С зарплата и кадры",
    "1С управление торговлей",
    "1С склад WMS",
    "1С производство MES",
    "автоматизация бизнеса 1С",
    "переход на 1С с SAP",
    "внедрение 1С под ключ",
    "1С интегратор",
    "1С ERP 2",
    "миграция на 1С",
    "1С для производства",
    "1С для торговли",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://1integra.ru",
    siteName: "1ИНТЕГРА",
    title: "1ИНТЕГРА — Внедряем 1С целиком",
    description:
      "32 направления, 263 модуля, одна команда вместо десяти подрядчиков. Фиксированная цена и постоплата.",
  },
  twitter: {
    card: "summary_large_image",
    title: "1ИНТЕГРА — Внедряем 1С целиком",
    description:
      "32 направления, 263 модуля, одна команда. Фиксированная цена и постоплата.",
  },
  alternates: {
    canonical: "https://1integra.ru",
  },
  verification: {
    yandex: "da8d379fa37d196f",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "1ИНТЕГРА",
  url: "https://1integra.ru",
  description: "Студия внедрения 1С. 32 направления, 263 модуля, одна команда под ключ.",
  email: "info@1integra.ru",
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  telephone: "+7 967 968-88-68",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+7 967 968-88-68",
    email: "info@1integra.ru",
    contactType: "sales",
    availableLanguage: "Russian",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Санкт-Петербург",
    addressCountry: "RU",
  },
  knowsAbout: [
    "Внедрение 1С",
    "1С ERP",
    "1С Бухгалтерия",
    "1С Зарплата и кадры",
    "1С Управление торговлей",
    "1С WMS",
    "1С Производство",
    "Миграция с SAP на 1С",
  ],
  priceRange: "от 150 000 ₽",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "1ИНТЕГРА",
  url: "https://1integra.ru",
  description: "Внедрение и интеграция 1С под ключ",
  inLanguage: "ru",
  publisher: {
    "@type": "Organization",
    name: "1ИНТЕГРА",
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
      className={`${gtEesti.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface text-on-surface">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCta />
        <YandexMetrika />
      </body>
    </html>
  );
}
