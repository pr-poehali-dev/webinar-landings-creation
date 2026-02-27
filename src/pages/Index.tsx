import { useState } from "react";
import Icon from "@/components/ui/icon";

const webinars = [
  {
    id: 1,
    date: "30 марта",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Переписка между сессиями: отвечать или нет?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Границы",
    tagColor: "violet",
  },
  {
    id: 2,
    date: "27 апреля",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Правило 24 часов и оплата пропусков: справедливо/несправедливо?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Этика",
    tagColor: "slate",
  },
  {
    id: 3,
    date: "27 мая",
    day: "Вторник",
    time: "19:00–20:30",
    title: "Сколько клиентов в день: где у вас «потолок» и почему?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Практика",
    tagColor: "violet",
  },
  {
    id: 4,
    date: "29 июня",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Повышение цены: как сказать и не разрушить контакт?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Деньги",
    tagColor: "slate",
  },
  {
    id: 5,
    date: "27 июля",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Клиент просит «совет»: давать или переводить в работу?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Полярность",
    tagColor: "violet",
  },
  {
    id: 6,
    date: "31 августа",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Обесценивание/сарказм клиента: выдерживать или останавливать?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Работа с сопр.",
    tagColor: "slate",
  },
  {
    id: 7,
    date: "28 сентября",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Самодиагностика по соцсетям: спорить или использовать как вход?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Диагностика",
    tagColor: "violet",
  },
  {
    id: 8,
    date: "26 октября",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Как говорить «нет» и сохранять контакт?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Границы",
    tagColor: "slate",
  },
  {
    id: 9,
    date: "30 ноября",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Публичность специалиста: личное/профессиональное — где граница?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Идентичность",
    tagColor: "violet",
  },
  {
    id: 10,
    date: "28 декабря",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Синдром самозванца у опытных: что помогает держаться?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Самооценка",
    tagColor: "slate",
  },
  {
    id: 11,
    date: "Дата уточняется",
    day: "",
    time: "19:00–20:30",
    title: "Отзывы и кейсы: маркетинг или нарушение этики?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    tag: "Этика",
    tagColor: "violet",
  },
];

const audience = [
  { icon: "Stethoscope", text: "Практикующие психологи", sub: "Основная аудитория" },
  { icon: "Brain", text: "Психотерапевты", sub: "Основная аудитория" },
  { icon: "Activity", text: "Психиатры", sub: "Основная аудитория" },
  { icon: "GraduationCap", text: "Студенты старших курсов профильных направлений", sub: "Дополнительная аудитория" },
  { icon: "Sprout", text: "Начинающие специалисты, выстраивающие правила работы", sub: "Дополнительная аудитория" },
];

const benefits = [
  { icon: "GitBranch", title: "Рамка выбора", desc: "Какие есть варианты действий в ситуации и чем они отличаются" },
  { icon: "SlidersHorizontal", title: "Критерии границ", desc: "Где проходит «да/нет» и какие последствия у каждого решения" },
  { icon: "MessageSquareQuote", title: "Готовые формулировки", desc: "Конкретные фразы для переписки, отмен, повышения цены и конфликтных ситуаций" },
  { icon: "TriangleAlert", title: "Типовые ошибки", desc: "Разбор частых ошибок специалистов по теме и как их обходить" },
  { icon: "ClipboardCheck", title: "Вопросы для самопроверки", desc: "Что уточнить у клиента и что проверить у себя после каждой встречи" },
  { icon: "MessagesSquare", title: "Ваш вопрос — в разборе", desc: "Задайте вопрос заранее и услышьте логику решения без персональных данных" },
];

const format = [
  { label: "Длительность", value: "90 минут", icon: "Clock" },
  { label: "Время", value: "19:30 МСК", icon: "Timer" },
  { label: "Периодичность", value: "Раз в месяц", icon: "CalendarDays" },
  { label: "Участие", value: "Бесплатно", icon: "BadgeCheck" },
];

const faqs = [
  { q: "Нужно ли платить за участие?", a: "Нет, все встречи полностью бесплатны. Просто зарегистрируйтесь и приходите." },
  { q: "Что если я не смогу прийти в назначенное время?", a: "Запись каждого вебинара будет доступна 7 дней после эфира для всех зарегистрированных участников." },
  { q: "Можно ли задать вопрос ведущим?", a: "Да. Участники задают вопросы заранее или в эфире — ведущие разбирают логику решения без персональных данных." },
  { q: "Нужно ли специальное оборудование?", a: "Достаточно компьютера или смартфона с интернетом." },
  { q: "Можно ли прийти только на одну встречу?", a: "Конечно. Каждая встреча независима, можно выбрать любую тему." },
];

const tagColors: Record<string, string> = {
  violet: "border-violet-500/20 text-violet-300 bg-violet-500/8",
  slate: "border-white/10 text-white/40 bg-white/[0.03]",
};

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen mesh-bg font-golos text-white overflow-x-hidden noise-overlay">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[#0d0d12]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="font-oswald font-bold text-lg sm:text-xl tracking-wide text-white">МедОбраз</span>
            <span className="text-white/30 text-[9px] sm:text-[10px] leading-snug">АНО ДПО «НОЦ СМТ» при поддержке</span>
            <span className="text-white/30 text-[9px] sm:text-[10px] leading-snug">Союза охраны психического здоровья</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/35">
            {["#schedule:Расписание", "#audience:Для кого", "#format:Формат", "#benefits:Что получите", "#faq:FAQ"].map(item => {
              const [href, label] = item.split(":");
              return <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>;
            })}
          </nav>
          <a
            href="#schedule"
            className="hidden md:flex items-center px-4 py-2 rounded-md border border-white/10 text-white/55 text-sm font-medium hover:border-white/20 hover:text-white transition-all duration-200"
          >
            Расписание
          </a>
          <button
            className="md:hidden p-2 text-white/40 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/[0.06] bg-[#0d0d12]/95 px-4 py-4 flex flex-col gap-4">
            {["#schedule:Расписание", "#audience:Для кого", "#format:Формат", "#benefits:Что получите", "#faq:FAQ"].map(item => {
              const [href, label] = item.split(":");
              return (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-white/55 hover:text-white text-base py-1 transition-colors">
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-6 font-medium">
            Бесплатные встречи для специалистов · 2026
          </p>
          <h1 className="font-oswald text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-5 tracking-tight">
            Вопрос<br />ребром
          </h1>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
            Ежемесячные живые встречи в формате вебинар-дискуссии для специалистов в сфере психического здоровья
          </p>
          <p className="text-white/20 text-sm max-w-md mx-auto mb-12">
            2 ведущих · одна тема · дискуссия + ответы на вопросы
          </p>

          <div className="flex flex-row items-center justify-center gap-10 sm:gap-14">
            {[
              { num: "11", label: "встреч в году" },
              { num: "19:30", label: "МСК, пн. месяца" },
              { num: "0 ₽", label: "бесплатно" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-oswald text-3xl sm:text-4xl font-bold text-white">{stat.num}</div>
                <div className="text-white/30 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-px bg-white/[0.06]" /></div>

      {/* SCHEDULE */}
      <section id="schedule" className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-1">Расписание</p>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">Программа встреч</h2>
          </div>
          <div className="border border-white/[0.06] rounded-xl overflow-hidden">
            {webinars.map((w, i) => (
              <div
                key={w.id}
                className={`hover:bg-white/[0.02] transition-colors duration-200 px-5 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 ${i < webinars.length - 1 ? "border-b border-white/[0.05]" : ""}`}
              >
                <div className="flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-0.5 sm:w-28 flex-shrink-0">
                  <span className="font-oswald text-xl sm:text-2xl font-bold text-white">{w.date.split(" ")[0]}</span>
                  <span className="text-white/30 text-sm">{w.date.split(" ")[1]}</span>
                </div>
                <div className="hidden sm:block flex-shrink-0 w-24">
                  <span className="text-white/40 text-sm">{w.time}</span>
                  <p className="text-white/20 text-xs">МСК</p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`text-[11px] px-2.5 py-0.5 rounded border font-medium ${tagColors[w.tagColor]}`}>{w.tag}</span>
                    <span className="sm:hidden text-white/25 text-xs">{w.time} МСК</span>
                  </div>
                  <h3 className="text-white/85 text-sm sm:text-base font-medium leading-snug">{w.title}</h3>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="#register"
                    className="inline-block text-center px-4 py-2 rounded-md border border-white/[0.08] text-white/35 text-xs sm:text-sm font-medium hover:border-violet-500/25 hover:text-violet-300/80 transition-all duration-200 whitespace-nowrap"
                  >
                    Зарегистрироваться
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-px bg-white/[0.06]" /></div>

      {/* AUDIENCE */}
      <section id="audience" className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-1">Аудитория</p>
              <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white mb-5">Для кого эти встречи?</h2>
              <p className="text-white/45 text-base leading-relaxed mb-6">
                Для специалистов, которые ведут консультации и регулярно сталкиваются с вопросами границ, договорённостей и сложных разговоров — и хотят найти ясные формулировки, а не уходить в крайности.
              </p>
              <div className="border border-white/[0.06] rounded-xl p-5">
                <p className="text-white/30 text-sm leading-relaxed italic">
                  Темы подобраны так, чтобы обсуждение было релевантно на разных этапах практики — от первых лет до опытных специалистов. Меняются риски и решения, но вопросы остаются теми же.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-white/20 text-[11px] uppercase tracking-[0.18em] font-medium mb-3">Основная аудитория</p>
              {audience.filter(a => a.sub === "Основная аудитория").map((item) => (
                <div key={item.text} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.06] hover:border-white/10 transition-colors">
                  <Icon name={item.icon} size={15} className="text-violet-400/50 flex-shrink-0" />
                  <span className="text-white/65 text-sm">{item.text}</span>
                </div>
              ))}
              <p className="text-white/20 text-[11px] uppercase tracking-[0.18em] font-medium pt-4 mb-3">Дополнительная аудитория</p>
              {audience.filter(a => a.sub === "Дополнительная аудитория").map((item) => (
                <div key={item.text} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                  <Icon name={item.icon} size={15} className="text-white/25 flex-shrink-0" />
                  <span className="text-white/35 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-px bg-white/[0.06]" /></div>

      {/* FORMAT */}
      <section id="format" className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-1">Формат</p>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">Как это работает</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {format.map((f) => (
              <div key={f.label} className="border border-white/[0.06] rounded-xl p-4 sm:p-5">
                <Icon name={f.icon} size={16} className="text-violet-400/50 mb-3" />
                <div className="font-oswald text-lg sm:text-xl font-bold text-white mb-0.5">{f.value}</div>
                <div className="text-white/30 text-xs">{f.label}</div>
              </div>
            ))}
          </div>
          <div className="border border-white/[0.06] rounded-xl p-6 sm:p-8">
            <h3 className="font-oswald text-xl font-semibold text-white mb-6">Структура каждой встречи</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: "01", title: "2 ведущих, одна тема", desc: "Мальцева Екатерина и Шмакова Евгения рассматривают тему с разных сторон — без единственно правильного ответа" },
                { step: "02", title: "Дискуссия", desc: "Живое обсуждение полярных позиций, разбор типовых ситуаций из практики" },
                { step: "03", title: "Ответы на вопросы", desc: "Участники задают вопросы заранее или в эфире — ведущие разбирают логику решения" },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="font-oswald text-2xl sm:text-3xl font-black text-white/[0.08] leading-none flex-shrink-0">{step.step}</span>
                  <div>
                    <h4 className="font-medium text-white/70 mb-1 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-white/30 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-px bg-white/[0.06]" /></div>

      {/* BENEFITS */}
      <section id="benefits" className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-1">Результаты</p>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">Что вы получите</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="border border-white/[0.06] rounded-xl p-5 sm:p-6 hover:border-white/10 transition-colors">
                <Icon name={b.icon} size={16} className="text-violet-400/50 mb-4" />
                <h3 className="font-oswald text-base sm:text-lg font-semibold text-white/80 mb-1.5">{b.title}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="h-px bg-white/[0.06]" /></div>

      {/* FAQ */}
      <section id="faq" className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-white/25 text-xs uppercase tracking-[0.2em] mb-1">FAQ</p>
            <h2 className="font-oswald text-3xl sm:text-4xl font-bold text-white">Частые вопросы</h2>
          </div>
          <div className="border border-white/[0.06] rounded-xl overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className={`hover:bg-white/[0.02] transition-colors ${i < faqs.length - 1 ? "border-b border-white/[0.05]" : ""}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4"
                >
                  <span className="text-white/70 text-sm sm:text-base font-medium">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className={`flex-shrink-0 transition-colors ${openFaq === i ? "text-violet-400/70" : "text-white/20"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-5 text-white/35 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-8 px-4 sm:px-6 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-white/20 text-xs">
          <span>АНО ДПО «НОЦ СМТ» при поддержке Союза охраны психического здоровья</span>
          <span>Вопрос ребром · 2026</span>
        </div>
      </footer>

    </div>
  );
}
