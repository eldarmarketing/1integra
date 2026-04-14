import Link from "next/link";
import { W } from "./constants";

export function CtaSection() {
  return (
    <section className="pt-14 pb-14 md:pt-24 md:pb-24">
      <div className={W}>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-inverse-surface py-16 px-8 md:py-24 md:px-16 lg:py-28 lg:px-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-tertiary/10" />
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-[28px] md:text-[44px] text-inverse-on-surface leading-[1.15] tracking-tight">
              Обсудите ваш проект
            </h2>
            <p className="md3-body-large text-inverse-on-surface/55 mt-5 md:mt-6 mx-auto max-w-md leading-[1.6]">
              Расскажите, что нужно внедрить. Мы&nbsp;оценим сроки и&nbsp;стоимость за&nbsp;2&nbsp;рабочих дня.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 mt-10 md:mt-12">
              <a
                href="mailto:info@1integra.ru"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-inverse-primary text-on-primary-container font-semibold text-[15px]
                  hover:bg-inverse-primary/90 active:bg-inverse-primary/80 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
              >
                info@1integra.ru
              </a>
              <Link
                href="/kontakty"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-inverse-on-surface/20 text-inverse-on-surface font-medium text-[15px]
                  hover:bg-inverse-on-surface/10 active:bg-inverse-on-surface/15 transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
              >
                Написать нам
              </Link>
            </div>
            <p className="md3-body-small text-inverse-on-surface/35 mt-5 md:mt-6">Ответим в&nbsp;течение часа в&nbsp;рабочее время</p>
          </div>
        </div>
      </div>
    </section>
  );
}
