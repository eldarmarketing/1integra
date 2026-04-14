import Link from "next/link";
import { W } from "./constants";

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className={W}>
        <div className="rounded-3xl bg-inverse-surface py-16 px-6 md:py-20 md:px-16 text-center">

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-inverse-on-surface">
            Обсудите ваш проект
          </h2>

          <p className="text-lg text-inverse-on-surface/60 mt-5 max-w-md mx-auto leading-relaxed">
            Расскажите, что нужно внедрить. Оценим сроки и&nbsp;стоимость за&nbsp;2&nbsp;рабочих дня.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mt-10">
            <Link
              href="/kontakty"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full
                bg-inverse-primary text-on-primary-container font-semibold text-sm
                hover:brightness-110 active:scale-[0.97] transition-all"
            >
              Оставить заявку
            </Link>
            <a
              href="mailto:info@1integra.ru"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full
                border border-inverse-on-surface/30 text-inverse-on-surface font-semibold text-sm
                hover:bg-white/5 transition-all"
            >
              info@1integra.ru
            </a>
          </div>

          <p className="text-sm text-inverse-on-surface/40 mt-6">
            Ответим в&nbsp;течение часа в&nbsp;рабочее время
          </p>

        </div>
      </div>
    </section>
  );
}
