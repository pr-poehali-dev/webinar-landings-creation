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
    role: "Ведущие серии",
    tag: "Границы",
    tagColor: "cyan",
  },
  {
    id: 2,
    date: "27 апреля",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Правило 24 часов и оплата пропусков: справедливо/несправедливо?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Этика",
    tagColor: "purple",
  },
  {
    id: 3,
    date: "27 мая",
    day: "Вторник",
    time: "19:00–20:30",
    title: "Сколько клиентов в день: где у вас «потолок» и почему?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Практика",
    tagColor: "pink",
  },
  {
    id: 4,
    date: "29 июня",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Повышение цены: как сказать и не разрушить контакт?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Деньги",
    tagColor: "cyan",
  },
  {
    id: 5,
    date: "27 июля",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Клиент просит «совет»: давать или переводить в работу?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Полярность",
    tagColor: "purple",
  },
  {
    id: 6,
    date: "31 августа",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Обесценивание/сарказм клиента: выдерживать или останавливать?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Работа с сопр.",
    tagColor: "pink",
  },
  {
    id: 7,
    date: "28 сентября",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Самодиагностика по соцсетям: спорить или использовать как вход?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Диагностика",
    tagColor: "cyan",
  },
  {
    id: 8,
    date: "26 октября",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Как говорить «нет» и сохранять контакт?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Границы",
    tagColor: "purple",
  },
  {
    id: 9,
    date: "30 ноября",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Публичность специалиста: личное/профессиональное — где граница?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Идентичность",
    tagColor: "pink",
  },
  {
    id: 10,
    date: "28 декабря",
    day: "Воскресенье",
    time: "19:00–20:30",
    title: "Синдром самозванца у опытных: что помогает держаться?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Самооценка",
    tagColor: "cyan",
  },
  {
    id: 11,
    date: "Дата уточняется",
    day: "",
    time: "19:00–20:30",
    title: "Отзывы и кейсы: маркетинг или нарушение этики?",
    speaker: "Мальцева Екатерина, Шмакова Евгения",
    role: "Ведущие серии",
    tag: "Этика",
    tagColor: "purple",
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
  {
    icon: "GitBranch",
    title: "Рамка выбора",
    desc: "Какие есть варианты действий в ситуации и чем они отличаются",
  },
  {
    icon: "SlidersHorizontal",
    title: "Критерии границ",
    desc: "Где проходит «да/нет» и какие последствия у каждого решения",
  },
  {
    icon: "MessageSquareQuote",
    title: "Готовые формулировки",
    desc: "Конкретные фразы для переписки, отмен, повышения цены и конфликтных ситуаций",
  },
  {
    icon: "TriangleAlert",
    title: "Типовые ошибки",
    desc: "Разбор частых ошибок специалистов по теме и как их обходить",
  },
  {
    icon: "ClipboardCheck",
    title: "Вопросы для самопроверки",
    desc: "Что уточнить у клиента и что проверить у себя после каждой встречи",
  },
  {
    icon: "MessagesSquare",
    title: "Ваш вопрос — в разборе",
    desc: "Задайте вопрос заранее и услышьте логику решения без персональных данных",
  },
];

const format = [
  { label: "Длительность", value: "90 минут", icon: "Clock" },
  { label: "Время", value: "19:30 МСК", icon: "Timer" },
  { label: "Периодичность", value: "Раз в месяц", icon: "CalendarDays" },
  { label: "Участие", value: "Бесплатно", icon: "BadgeCheck" },
];

const faqs = [
  {
    q: "Нужно ли платить за участие?",
    a: "Нет, все вебинары серии полностью бесплатны. Просто зарегистрируйтесь и приходите.",
  },
  {
    q: "Что если я не смогу прийти в назначенное время?",
    a: "Запись каждого вебинара будет доступна 7 дней после эфира для всех зарегистрированных участников.",
  },
  {
    q: "Можно ли задать вопрос спикеру?",
    a: "Да! Участники задают вопросы заранее или в эфире — ведущие разбирают логику решения без персональных данных.",
  },
  {
    q: "Нужно ли специальное оборудование?",
    a: "Достаточно компьютера или смартфона с интернетом. Всё остальное мы обеспечим.",
  },
  {
    q: "Можно ли зарегистрироваться только на одну встречу?",
    a: "Конечно! Вы можете выбрать любые встречи из серии или следить за расписанием.",
  },
];

const tagColors: Record<string, string> = {
  cyan: "border-purple-500/30 text-purple-300 bg-purple-500/10",
  purple: "border-purple-500/30 text-purple-300 bg-purple-500/10",
  pink: "border-purple-500/30 text-purple-300 bg-purple-500/10",
};

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen mesh-bg font-golos text-white overflow-x-hidden noise-overlay">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex flex-col leading-tight">
            <span className="font-oswald font-bold text-lg sm:text-xl tracking-wide text-white">МедОбраз</span>
            <span className="text-white/50 text-[9px] sm:text-[10px] leading-snug">АНО ДПО «НОЦ СМТ» при поддержке</span>
            <span className="text-white/50 text-[9px] sm:text-[10px] leading-snug">Союза охраны психического здоровья</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <a href="#schedule" className="hover:text-white transition-colors">Расписание</a>
            <a href="#audience" className="hover:text-white transition-colors">Для кого</a>
            <a href="#format" className="hover:text-white transition-colors">Формат</a>
            <a href="#benefits" className="hover:text-white transition-colors">Что получите</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
          <a
            href="#schedule"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500 hover:bg-purple-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Расписание
          </a>
          {/* Бургер */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {/* Мобильное меню */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-black/60 backdrop-blur-xl px-4 py-4 flex flex-col gap-4">
            {["#schedule:Расписание", "#audience:Для кого", "#format:Формат", "#benefits:Что получите", "#faq:FAQ"].map(item => {
              const [href, label] = item.split(":");
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-base py-1 transition-colors"
                >
                  {label}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-glow inline-block" />
            Бесплатные встречи для специалистов · 2026
          </div>

          <h1 className="font-oswald text-4xl sm:text-5xl md:text-7xl font-bold leading-none mb-4 sm:mb-6 animate-fade-in">
            <span className="gradient-text">Вопрос ребром</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-3 px-2">
            Ежемесячные живые видеовстречи в формате вебинар-дискуссии для специалистов в сфере психического здоровья
          </p>
          <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto mb-8 px-2">
            Один раз в месяц · 2 ведущих · одна тема · дискуссия + ответы на вопросы участников
          </p>

          <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 mt-4">
            {[
              { num: "11", label: "встреч в году" },
              { num: "19:30", label: "МСК, пн. месяца" },
              { num: "0 ₽", label: "бесплатно" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-oswald text-3xl sm:text-4xl font-bold gradient-text">{stat.num}</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">Расписание</span>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">Программа вебинаров</h2>
          </div>

          <div className="grid gap-3 sm:gap-5">
            {webinars.map((w, i) => (
              <div
                key={w.id}
                className="card-glass rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-300 hover:scale-[1.01]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Дата */}
                <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-0 flex-shrink-0">
                  <div className="text-center bg-gradient-to-br from-purple-500/20 to-cyan-400/10 border border-purple-500/20 rounded-xl p-3 sm:p-4 min-w-[72px] sm:min-w-[90px]">
                    <div className="font-oswald text-xl sm:text-2xl font-bold text-white">{w.date.split(" ")[0]}</div>
                    <div className="text-purple-300 text-xs sm:text-sm">{w.date.split(" ")[1]}</div>
                    {w.day && <div className="text-white/50 text-[10px] mt-0.5 hidden sm:block">{w.day}</div>}
                  </div>
                  <div className="sm:hidden">
                    <div className="font-oswald text-base font-bold text-purple-400">{w.time}</div>
                    <div className="text-white/40 text-xs">МСК</div>
                  </div>
                </div>

                <div className="flex-shrink-0 text-center hidden md:block">
                  <div className="font-oswald text-xl font-bold text-purple-400">{w.time}</div>
                  <div className="text-white/40 text-xs">МСК</div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                    <span className={`text-xs px-2 sm:px-3 py-1 rounded-full border font-medium ${tagColors[w.tagColor]}`}>
                      {w.tag}
                    </span>
                    <span className="hidden sm:block md:hidden text-purple-400 text-sm font-semibold">{w.time} МСК</span>
                  </div>
                  <h3 className="font-oswald text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2 leading-tight">
                    {w.title}
                  </h3>
                  <div className="flex items-start gap-2 text-white/50 text-xs sm:text-sm flex-wrap">
                    <Icon name="User" size={13} className="mt-0.5 flex-shrink-0" />
                    <span>{w.speaker}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full sm:w-auto">
                  <a
                    href="#register"
                    className="block sm:inline-block text-center px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 whitespace-nowrap"
                  >
                    Зарегистрироваться →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" className="py-10 sm:py-12 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-start">
            <div>
              <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">Аудитория</span>
              <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 sm:mb-6 text-white">
                Для кого эти<br />
                <span className="gradient-text">вебинары?</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Для специалистов, которые ведут консультации и регулярно сталкиваются с вопросами границ, договорённостей и сложных разговоров — и хотят найти ясные формулировки, а не уходить в крайности.
              </p>
              <div className="card-glass rounded-2xl p-4 sm:p-6 border border-purple-500/20">
                <p className="text-white/50 text-sm leading-relaxed italic">
                  Темы подобраны так, чтобы обсуждение было релевантно на разных этапах практики — от первых лет до опытных специалистов. Меняются риски и решения, но вопросы остаются теми же.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-1">Основная аудитория</p>
              {audience.filter(a => a.sub === "Основная аудитория").map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl card-glass transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-400/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={18} className="text-purple-400" />
                  </div>
                  <span className="text-white/90 font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mt-3 sm:mt-4 mb-1">Дополнительная аудитория</p>
              {audience.filter(a => a.sub === "Дополнительная аудитория").map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl card-glass transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-400/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={18} className="text-purple-400" />
                  </div>
                  <span className="text-white/70 font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section id="format" className="py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">Формат</span>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">Как это работает</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-14">
            {format.map((f) => (
              <div key={f.label} className="card-glass rounded-2xl p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon name={f.icon} size={18} className="text-purple-400" />
                </div>
                <div className="font-oswald text-lg sm:text-xl font-bold text-white mb-1">{f.value}</div>
                <div className="text-white/50 text-xs sm:text-sm">{f.label}</div>
              </div>
            ))}
          </div>

          <div className="card-glass rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="font-oswald text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Как проходит каждый вебинар</h3>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { step: "01", title: "2 ведущих, одна тема", desc: "Мальцева Екатерина и Шмакова Евгения рассматривают тему с разных сторон — без единственно правильного ответа" },
                { step: "02", title: "Дискуссия", desc: "Живое обсуждение полярных позиций, разбор типовых ситуаций из практики" },
                { step: "03", title: "Ответы на вопросы", desc: "Участники задают вопросы заранее или в эфире — ведущие разбирают логику решения" },
              ].map((step) => (
                <div key={step.step} className="flex gap-3 sm:gap-4">
                  <span className="font-oswald text-3xl sm:text-4xl font-black text-purple-500/30 leading-none flex-shrink-0">{step.step}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-10 sm:py-12 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">Результаты</span>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">Что вы получите</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="card-glass rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/25 to-cyan-400/10 border border-purple-500/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:border-purple-400/50 transition-colors">
                  <Icon name={b.icon} size={22} className="text-purple-400" />
                </div>
                <h3 className="font-oswald text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">Частые вопросы</h2>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card-glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 text-left gap-4"
                >
                  <span className="font-semibold text-white text-sm sm:text-base">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className={`flex-shrink-0 transition-colors ${openFaq === i ? "text-purple-400" : "text-white/40"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-7 pb-5 sm:pb-6 text-white/60 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}