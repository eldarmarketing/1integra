import Link from "next/link";
import { W } from "./constants";

export function CtaSection() {
  return (
    <section className="py-12 md:py-20">
      <div className={W}>
        <div className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-emerald-600/20" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
              Обсудите ваш проект
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 mx-auto max-w-lg">
              Расскажите, что нужно внедрить. Мы оценим сроки и стоимость за 2 дня.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:info@1integra.ru"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-base
                  hover:shadow-xl hover:shadow-white/20 transition-all duration-200"
              >
                info@1integra.ru
              </a>
              <Link
                href="/kontakty"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-base
                  hover:bg-white/10 transition-all duration-200"
              >
                Написать нам
              </Link>
            </div>
            <p className="text-xs text-white/35 mt-5">Ответим в течение часа в рабочее время</p>
          </div>
        </div>
      </div>
    </section>
  );
}
