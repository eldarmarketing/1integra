import Link from "next/link";
import { W } from "./constants";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className={W}>
        <div className="rounded-[28px] bg-inverse-surface py-16 px-6 md:py-20 md:px-16 text-center">

          <h2 className="md3-headline-large text-inverse-on-surface">
            Обсудите ваш проект
          </h2>

          <p className="md3-body-large text-inverse-on-surface/60 mt-4 max-w-md mx-auto">
            Расскажите, что нужно внедрить. Оценим сроки и&nbsp;стоимость за&nbsp;2&nbsp;рабочих дня.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-8">
            {/* MD3 Filled button — inverse-primary on dark */}
            <Link
              href="/kontakty"
              className="md3-label-large h-10 px-6 rounded-full bg-inverse-primary text-on-primary-container
                flex items-center justify-center hover:brightness-110 active:scale-[0.97]"
            >
              Оставить заявку
            </Link>
            {/* MD3 Outlined button — on inverse surface */}
            <a
              href="mailto:info@1integra.ru"
              className="md3-label-large h-10 px-6 rounded-full border border-inverse-on-surface/30 text-inverse-on-surface
                flex items-center justify-center hover:bg-white/5"
            >
              info@1integra.ru
            </a>
          </div>

          <p className="md3-body-small text-inverse-on-surface/40 mt-5">
            Ответим в&nbsp;течение часа в&nbsp;рабочее время
          </p>

        </div>
      </div>
    </section>
  );
}
