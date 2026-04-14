"use client";
import { useState } from "react";
import Link from "next/link";

interface FormState {
  name: string;
  company: string;
  phone: string;
  message: string;
}

/* MD3 Outlined text field with floating label */
function Field({
  id,
  label,
  required,
  type = "text",
  textarea,
  value,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const baseClass =
    "peer w-full px-4 rounded-sm border border-outline-variant bg-transparent text-on-surface " +
    "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent " +
    "transition-colors duration-200 md3-body-large";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          placeholder=" "
          required={required}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClass} pt-6 pb-3 resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder=" "
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClass} pt-6 pb-3 h-14`}
        />
      )}
      <label
        htmlFor={id}
        className={
          "absolute left-4 top-2 md3-body-small text-on-surface-variant pointer-events-none " +
          "peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 " +
          "peer-placeholder-shown:md3-body-large " +
          "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:md3-body-small peer-focus:text-primary " +
          "transition-all duration-200"
        }
        style={{ fontSize: "inherit" }}
      >
        {label}{required && " *"}
      </label>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", company: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

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
      <div className="rounded-xl border border-outline-variant bg-success-container p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-on-success" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <p className="md3-headline-small text-on-success-container mb-2">Заявка отправлена</p>
        <p className="md3-body-large text-on-success-container/70">
          Свяжемся в&nbsp;течение часа в&nbsp;рабочее время
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8 space-y-5"
      noValidate
    >
      <p className="md3-title-medium text-on-surface">Оставить заявку</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="name"    label="Имя"      required value={form.name}    onChange={set("name")} />
        <Field id="company" label="Компания"          value={form.company} onChange={set("company")} />
      </div>

      <Field id="phone"   label="Телефон"  required type="tel" value={form.phone}   onChange={set("phone")} />
      <Field id="message" label="Задача"   textarea           value={form.message} onChange={set("message")} />

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="md3-label-large h-10 px-6 rounded-full bg-primary text-on-primary
            flex items-center justify-center
            hover:bg-primary/90 active:bg-primary/80
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Отправляем…" : "Отправить заявку"}
        </button>
        {status === "error" && (
          <p className="md3-body-medium text-error">Ошибка. Позвоните нам напрямую.</p>
        )}
      </div>

      <p className="md3-body-small text-on-surface-variant">
        Нажимая «Отправить», вы соглашаетесь с&nbsp;
        <Link href="/politika" className="underline hover:text-on-surface">
          политикой обработки данных
        </Link>
      </p>
    </form>
  );
}
