"use client";
import { useReveal } from "@/components/reveal";
import { W } from "@/components/constants";

export default function KontaktyPage() {
  const pg = useReveal();

  return (
    <div ref={pg}>
      {/* Hero */}
      <section className="pt-10 pb-6 md:pt-16 md:pb-10">
        <div className={W}>
          <div className="max-w-3xl">
            <h1 data-r="reveal" className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight tracking-tight">
              Контакты
            </h1>
            <p data-r="reveal d1" className="text-base md:text-lg text-gray-500 mt-4 leading-relaxed">
              Расскажите, что нужно внедрить. Мы оценим сроки и стоимость за 2 рабочих дня.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-10 md:py-16">
        <div className={W}>
          <div data-r="reveal" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {/* Email */}
            <a href="mailto:info@1integra.ru"
              className="group rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-1">Электронная почта</div>
              <p className="text-sm text-gray-500 mb-4">Напишите — ответим в течение часа в рабочее время</p>
              <span className="text-base font-semibold text-navy group-hover:text-navy-light transition-colors duration-200">
                info@1integra.ru
              </span>
            </a>

            {/* Phone */}
            <a href="tel:+7XXXXXXXXXX"
              className="group rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-1">Телефон</div>
              <p className="text-sm text-gray-500 mb-4">Пн–Пт, 09:00–18:00 по Москве</p>
              <span className="text-base font-semibold text-navy group-hover:text-navy-light transition-colors duration-200">
                +7 (XXX) XXX-XX-XX
              </span>
            </a>

            {/* Telegram */}
            <a href="https://t.me/integra1c" target="_blank" rel="noopener noreferrer"
              className="group rounded-2xl bg-white border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-violet-200 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <div className="font-heading font-bold text-lg text-gray-900 mb-1">Telegram</div>
              <p className="text-sm text-gray-500 mb-4">Быстрая связь — напишите в любое время</p>
              <span className="text-base font-semibold text-navy group-hover:text-navy-light transition-colors duration-200">
                @integra1c
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-12 md:py-20">
        <div className={W}>
          <div data-r="reveal" className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-emerald-600/20" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                Оставьте заявку
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-8 max-w-lg">
                Опишите вашу задачу — какие модули нужны, сколько пользователей, какие сроки.
                Мы подготовим предложение с фиксированной ценой за 2 рабочих дня.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Какие модули 1С нужны",
                  "Сколько пользователей",
                  "Есть ли текущая система",
                  "Желаемые сроки запуска",
                  "Особые требования",
                  "Бюджетные ограничения",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="mailto:info@1integra.ru"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-base
                    hover:shadow-xl hover:shadow-white/20 transition-all duration-200">
                  Написать на почту
                </a>
                <a href="https://t.me/integra1c" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-base
                    hover:bg-white/10 transition-all duration-200">
                  Написать в Telegram
                </a>
              </div>
              <p className="text-xs text-white/35 mt-5">Ответим в течение часа в рабочее время</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
