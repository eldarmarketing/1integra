import { CtaSection } from "@/components/cta-section";
import { W } from "@/components/constants";

export const metadata = {
  title: "О компании 1ИНТЕГРА — сертифицированный партнёр 1С",
  description: "Студия внедрения 1С: сертифицированный партнёр 1С:Франчайзи. Параллельное внедрение модулей — быстрее в 3 раза. Фиксированная цена, постоплата, гарантия сроков.",
  alternates: { canonical: "/o-kompanii" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div className="max-w-3xl">
            <h1 data-r="reveal" className="md3-headline-large text-on-surface">
              О&nbsp;компании
            </h1>
            <div data-r="reveal d1" className="mt-4 space-y-4">
              <p className="md3-body-large text-on-surface-variant">
                1Integra занимается внедрением 1С. У&nbsp;платформы 32&nbsp;направления и&nbsp;263&nbsp;модуля.
                Большинство интеграторов хорошо знают 5–8 из&nbsp;них, а&nbsp;на&nbsp;остальное ищут субподрядчиков.
                Мы разбираемся во&nbsp;всех.
              </p>
              <p className="md3-body-large text-on-surface-variant">
                На&nbsp;практике это значит, что вам не&nbsp;придётся нанимать одну компанию на&nbsp;бухгалтерию,
                другую на&nbsp;склад, третью на&nbsp;производство и&nbsp;потом разбираться, почему между ними
                ничего не&nbsp;стыкуется.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Для кого */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <div data-r="reveal" className="bg-inverse-surface rounded-[28px] p-8 md:p-12 lg:p-16">
            <h2 className="md3-headline-large text-inverse-on-surface mb-4">
              Для кого
            </h2>
            <div className="grid md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-10">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 md:p-6">
                <p className="md3-body-large text-inverse-on-surface/65">
                  Вы производите мебель, возите грузы по&nbsp;стране или управляете сетью
                  из&nbsp;200 магазинов. У&nbsp;вас сложные процессы, много юрлиц
                  и&nbsp;бухгалтерия, от&nbsp;которой зависит всё.
                </p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4 md:p-6">
                <p className="md3-body-large text-inverse-on-surface/65">
                  Вам уже внедряли 1С. Возможно, не&nbsp;один раз. Вы помните, как проект
                  на&nbsp;три месяца растянулся на&nbsp;год. И&nbsp;как интегратор звонил
                  с&nbsp;просьбой «чуть скорректировать бюджет», хотя половина работы ещё
                  не&nbsp;сделана.
                </p>
              </div>
            </div>
            <p className="md3-headline-medium text-inverse-on-surface">
              Мы для&nbsp;тех, кому это надоело.
            </p>
          </div>
        </div>
      </section>

      {/* Работаем параллельно */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Работаем параллельно
          </h2>
          <div data-r="reveal d1" className="max-w-3xl space-y-4 mt-4 mb-8 md:mb-12">
            <p className="md3-body-large text-on-surface-variant">
              Обычно на&nbsp;проекте сидит команда из&nbsp;3–5 человек. Настроили один модуль,
              перешли к&nbsp;следующему. ERP на&nbsp;200 пользователей тянется год-полтора.
              Все привыкли, что так и&nbsp;должно быть.
            </p>
            <p className="md3-body-large text-on-surface-variant">
              У&nbsp;нас несколько экспертных групп берут разные модули одновременно.
              Пока одни разворачивают склад, другие настраивают производство, третьи переносят
              данные. Они не&nbsp;ждут друг друга.
            </p>
          </div>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {[
              { proj: "ERP, 200\u00A0пользователей", usual: "12–14 мес.", ours: "4–5 мес." },
              { proj: "Бухгалтерия + зарплата + склад", usual: "6–8 мес.", ours: "2–3 мес." },
              { proj: "Переезд с\u00A0SAP", usual: "18–24 мес.", ours: "6–8 мес." },
            ].map((r) => (
              <div key={r.proj} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                <h3 className="md3-title-medium text-on-surface mb-4">{r.proj}</h3>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-outline-variant/40">
                  <span className="md3-body-medium text-on-surface-variant">Обычно</span>
                  <span className="md3-body-medium text-on-surface-variant line-through">{r.usual}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="md3-body-medium text-on-surface-variant">У&nbsp;нас</span>
                  <span className="md3-title-large text-primary">{r.ours}</span>
                </div>
              </div>
            ))}
          </div>

          <div data-r="reveal d3" className="mt-6 md:mt-8 rounded-xl bg-primary-container/30 border border-outline-variant/30 p-4 md:p-6">
            <p className="md3-body-large text-on-surface-variant max-w-3xl">
              Тут полезно посчитать. Месяц без&nbsp;новой системы стоит бизнесу денег.
              Если мы экономим 8&nbsp;месяцев, сэкономленное часто перекрывает стоимость
              самого внедрения.
            </p>
          </div>
        </div>
      </section>

      {/* Отвечаем деньгами */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Отвечаем деньгами
          </h2>
          <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 mb-8 md:mb-12 max-w-3xl">
            На&nbsp;рынке 1С нормой считается «примерно 3–5 миллионов, сделаем где-то
            за&nbsp;полгода». Потом бюджет растёт, сроки едут, вы подписываете допсоглашения.
            Мы положили в&nbsp;договор три вещи, которые это исключают.
          </p>

          <div data-r="reveal d2" className="grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {[
              {
                n: "01",
                t: "Результат",
                d: "Модуль не\u00A0работает как написано в\u00A0ТЗ? Дорабатываем бесплатно, сколько потребуется.",
              },
              {
                n: "02",
                t: "Бюджет",
                d: "Называем сумму до\u00A0старта. Она не\u00A0вырастет. Ошиблись в\u00A0оценке? Наши расходы.",
              },
              {
                n: "03",
                t: "Сроки",
                d: "Дата сдачи в\u00A0договоре. Просрочили неделю\u00A0— минус 5% от\u00A0суммы проекта.",
              },
            ].map((c) => (
              <div key={c.n} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container md3-label-medium mb-4">
                  {c.n}
                </div>
                <h3 className="md3-title-medium text-on-surface mb-1">{c.t}</h3>
                <p className="md3-body-medium text-on-surface-variant">{c.d}</p>
              </div>
            ))}
          </div>

          <div data-r="reveal d3" className="mt-6 md:mt-8 rounded-xl bg-tertiary-container border border-outline-variant/30 p-4 md:p-6 flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-on-tertiary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <p className="md3-label-large text-on-tertiary-container">
              Это не&nbsp;текст на&nbsp;сайте, а&nbsp;пункты договора с&nbsp;печатью.
              Подписывается до&nbsp;начала работ.
            </p>
          </div>
        </div>
      </section>

      {/* Переезд без остановки */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Переезд без&nbsp;остановки
          </h2>
          <p data-r="reveal d1" className="md3-body-large text-on-surface-variant mt-4 mb-8 md:mb-12 max-w-3xl">
            Миграция обычно выглядит нервно. Бизнес замирает на&nbsp;несколько дней, данные
            переносят ночами, часть записей теряется, люди не&nbsp;могут работать.
          </p>

          <div data-r="reveal d2" className="max-w-3xl space-y-4 mb-8 md:mb-12">
            <p className="md3-body-large text-on-surface-variant">
              Мы научились делать это без&nbsp;стресса. Новая 1С запускается рядом
              со&nbsp;старой системой, данные между ними синхронизируются. Сначала пересаживаем
              маленькую группу — процентов десять сотрудников. Они работают, мы смотрим, что
              не&nbsp;так, чиним. Все остальные даже не&nbsp;знают, что что-то происходит.
            </p>
            <p className="md3-body-large text-on-surface-variant">
              Когда пилотная группа говорит «нормально» — переключаем остальных.
              Если вдруг что-то не&nbsp;так, откат за&nbsp;15 минут.
            </p>
          </div>

          <div data-r="reveal d3" className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {[
              { step: "01", title: "Запуск рядом", desc: "Новая 1С параллельно со\u00A0старой. Работа не\u00A0останавливается ни\u00A0на\u00A0минуту." },
              { step: "02", title: "Пилот 10%", desc: "Небольшая группа переходит первой. Ловим все баги на\u00A0ограниченном масштабе." },
              { step: "03", title: "Переключение", desc: "Полный переход после одобрения. Старая система остаётся доступна." },
              { step: "04", title: "Все данные", desc: "Каждый документ за\u00A0все годы. Проверяем суммы и\u00A0остатки после миграции." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
                <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container md3-label-medium mb-4">
                  {s.step}
                </div>
                <h3 className="md3-title-medium text-on-surface mb-1">{s.title}</h3>
                <p className="md3-body-medium text-on-surface-variant">{s.desc}</p>
              </div>
            ))}
          </div>

          <div data-r="reveal d4" className="mt-6 md:mt-8 rounded-xl bg-tertiary-container border border-outline-variant/30 p-4 md:p-6 flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-on-tertiary-container" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <p className="md3-label-large text-on-tertiary-container">
              Данные переносим все, за&nbsp;все годы. Если хоть один документ потеряется — миграция за&nbsp;наш счёт.
            </p>
          </div>
        </div>
      </section>

      {/* Деньги после результата */}
      <section className="py-16 md:py-24">
        <div className={W}>
          <h2 data-r="reveal" className="md3-headline-large text-on-surface">
            Деньги после результата
          </h2>
          <div data-r="reveal d1" className="grid md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-8 md:mt-12">
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4 md:p-6 hover:bg-surface-container-low transition-colors duration-300 ease-[cubic-bezier(0.2,0,0,1)]">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container md3-label-medium mb-6">Обычно</div>
              <p className="md3-body-large text-on-surface-variant mb-6 md:mb-8">
                Интегратор берёт 50–70% вперёд. Вы платите за&nbsp;обещания и&nbsp;ждёте.
              </p>
              <div className="font-heading font-bold text-[48px] md:text-[72px] text-on-surface/10 leading-none select-none">65%</div>
            </div>
            <div className="bg-inverse-surface rounded-xl p-4 md:p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 md3-label-medium text-inverse-on-surface/70 mb-6">У нас</div>
              <p className="md3-body-large text-inverse-on-surface/65 mb-3">
                Вы не&nbsp;платите ничего, пока система не&nbsp;заработает. Ноль до&nbsp;старта,
                ноль в&nbsp;процессе, ноль на&nbsp;сдаче.
              </p>
              <p className="md3-body-large text-inverse-on-surface/65 mb-6 md:mb-8">
                Оплата целиком, когда вы посмотрели систему, погоняли её в&nbsp;работе
                и&nbsp;сказали «всё, принимаю».
              </p>
              <div className="font-heading font-bold text-[48px] md:text-[72px] text-inverse-on-surface/10 leading-none select-none">0%</div>
            </div>
          </div>
          <p data-r="reveal d2" className="md3-body-large text-on-surface-variant mt-6 md:mt-8 max-w-3xl">
            Почему мы так можем? Потому что уверены, что сдадим. Для этого и&nbsp;придумали
            гарантии из&nbsp;предыдущего пункта.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
