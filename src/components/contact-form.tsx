"use client";
import { useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", company: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-xl)] bg-success-container p-10 md:p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-on-success" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <div className="font-heading md3-title-large text-on-success-container mb-2.5">Заявка отправлена</div>
        <p className="md3-body-large text-on-success-container/70 leading-[1.6]">Мы свяжемся с&nbsp;вами в&nbsp;течение часа в&nbsp;рабочее время</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[var(--radius-xl)] bg-surface-container-lowest border border-outline-variant/50 p-7 md:p-10 space-y-6">
      <div className="font-heading md3-title-large text-on-surface">
        Оставить заявку
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder=" "
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            id="name"
            className="peer w-full px-4 pt-5 pb-2.5 rounded-[var(--radius-sm)] border border-outline-variant bg-transparent text-[15px] text-on-surface
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
          />
          <label htmlFor="name" className="absolute left-4 top-2 text-[11px] text-on-surface-variant font-medium
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-normal
            peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:text-primary
            transition-all pointer-events-none">
            Имя *
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder=" "
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            id="company"
            className="peer w-full px-4 pt-5 pb-2.5 rounded-[var(--radius-sm)] border border-outline-variant bg-transparent text-[15px] text-on-surface
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
          />
          <label htmlFor="company" className="absolute left-4 top-2 text-[11px] text-on-surface-variant font-medium
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-normal
            peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:text-primary
            transition-all pointer-events-none">
            Компания
          </label>
        </div>
      </div>
      <div className="relative">
        <input
          type="tel"
          placeholder=" "
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          id="phone"
          className="peer w-full px-4 pt-5 pb-2.5 rounded-[var(--radius-sm)] border border-outline-variant bg-transparent text-[15px] text-on-surface
            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
        />
        <label htmlFor="phone" className="absolute left-4 top-2 text-[11px] text-on-surface-variant font-medium
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-normal
          peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:text-primary
          transition-all pointer-events-none">
          Телефон *
        </label>
      </div>
      <div className="relative">
        <textarea
          placeholder=" "
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          id="message"
          className="peer w-full px-4 pt-5 pb-2.5 rounded-[var(--radius-sm)] border border-outline-variant bg-transparent text-[15px] text-on-surface
            focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none placeholder-transparent"
        />
        <label htmlFor="message" className="absolute left-4 top-2 text-[11px] text-on-surface-variant font-medium
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-normal
          peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-medium peer-focus:text-primary
          transition-all pointer-events-none">
          Опишите задачу
        </label>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-4 rounded-full bg-primary text-on-primary text-[15px] font-semibold
            hover:bg-primary/90 active:bg-primary/80
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Отправляем..." : "Отправить заявку"}
        </button>
        {status === "error" && (
          <p className="md3-body-medium text-error">Ошибка отправки. Попробуйте позвонить нам.</p>
        )}
      </div>
      <p className="md3-body-small text-on-surface-variant leading-[1.6]">
        Нажимая «Отправить», вы соглашаетесь с&nbsp;<Link href="/politika" className="underline hover:text-on-surface">политикой обработки персональных данных</Link>
      </p>
    </form>
  );
}
