import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — 1ИНТЕГРА",
  description: "Свяжитесь с нами: email, телефон, Telegram. Оценим сроки и стоимость внедрения 1С за 2 рабочих дня.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
