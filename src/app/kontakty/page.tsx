import { RevealProvider } from "@/components/reveal-provider";
import { ContactForm } from "@/components/contact-form";
import { W } from "@/components/constants";

export default function KontaktyPage() {
  return (
    <RevealProvider>
      {/* Hero */}
      <section className="pt-8 pb-8 md:pt-16 md:pb-14">
        <div className={W}>
          <div className="max-w-2xl">
            <h1 data-r="reveal" className="font-heading font-bold md3-headline-large text-on-surface leading-[1.15] tracking-tight">
              Контакты
            </h1>
            <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 md:mt-5 leading-[1.6]">
              Расскажите, что нужно внедрить. Мы оценим сроки и&nbsp;стоимость за&nbsp;2 рабочих дня.
            </p>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pt-4 pb-12 md:pt-6 md:pb-24">
        <div className={W}>
          <div data-r="reveal" className="grid md:grid-cols-3 gap-4 md:gap-5">
            {/* Email */}
            <a href="mailto:info@1integra.ru"
              className="group bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low active:scale-[0.98] transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center mb-5 md:mb-7">
                <svg className="w-4.5 h-4.5 text-on-primary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">Электронная почта</div>
              <p className="md3-body-medium text-on-surface-variant mb-5 leading-[1.6]">Напишите — ответим в&nbsp;течение часа в&nbsp;рабочее время</p>
              <span className="md3-label-large font-semibold text-primary">
                info@1integra.ru
              </span>
            </a>

            {/* Phone */}
            <a href="tel:+79651784434"
              className="group bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low active:scale-[0.98] transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center mb-5 md:mb-7">
                <svg className="w-4.5 h-4.5 text-on-primary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">Телефон</div>
              <p className="md3-body-medium text-on-surface-variant mb-5 leading-[1.6]">Пн–Пт, 09:00–18:00 по&nbsp;Москве</p>
              <span className="md3-label-large font-semibold text-primary">
                +7 (965) 178-44-34
              </span>
            </a>

            {/* Telegram */}
            <a href="https://t.me/integra1c" target="_blank" rel="noopener noreferrer"
              className="group bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10 hover:bg-surface-container-low active:scale-[0.98] transition-all ease-[cubic-bezier(0.2,0,0,1)] duration-300">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-primary-container flex items-center justify-center mb-5 md:mb-7">
                <svg className="w-4.5 h-4.5 text-on-primary-container" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <div className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">Telegram</div>
              <p className="md3-body-medium text-on-surface-variant mb-5 leading-[1.6]">Быстрая связь — напишите в&nbsp;любое время</p>
              <span className="md3-label-large font-semibold text-primary">
                @integra1c
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-24">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-start">
            <div data-r="reveal">
              <ContactForm />
            </div>
            <div data-r="reveal d1" className="space-y-5">
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-[var(--radius-lg)] p-7 md:p-10">
                <div className="font-heading font-bold md3-title-medium text-on-surface mb-5">
                  Что написать в&nbsp;заявке
                </div>
                <div className="space-y-3.5">
                  {[
                    "Какие модули 1С нужны",
                    "Сколько пользователей",
                    "Есть ли текущая система",
                    "Желаемые сроки запуска",
                    "Особые требования",
                    "Бюджетные ограничения",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 md3-body-medium text-on-surface-variant">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[var(--radius-lg)] bg-primary-container/30 border border-outline-variant/30 p-7 md:p-10">
                <div className="font-heading font-bold md3-title-medium text-on-surface mb-2.5">Ответим за&nbsp;2 рабочих дня</div>
                <p className="md3-body-medium text-on-surface-variant leading-[1.6]">
                  Подготовим предложение с&nbsp;фиксированной ценой, сроками и&nbsp;планом работ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealProvider>
  );
}
