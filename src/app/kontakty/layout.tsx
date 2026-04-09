import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — обсудить внедрение 1С",
  description:
    "Свяжитесь с 1ИНТЕГРА: email, телефон, Telegram. Оценим сроки и стоимость внедрения 1С за 2 рабочих дня. Бесплатная консультация.",
  alternates: {
    canonical: "/kontakty",
  },
  openGraph: {
    title: "Контакты — 1ИНТЕГРА",
    description: "Обсудите ваш проект внедрения 1С. Ответим за 2 рабочих дня.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
