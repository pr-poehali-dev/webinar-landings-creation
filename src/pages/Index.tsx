import { useState } from "react";
import Icon from "@/components/ui/icon";

const webinars = [
  {
    id: 1,
    date: "10 марта",
    day: "Понедельник",
    time: "19:00",
    title: "Инструменты роста: как специалисту выйти на новый уровень",
    speaker: "Анна Смирнова",
    role: "Senior Product Manager, ex-Яндекс",
    tag: "Карьера",
    tagColor: "cyan",
    seats: 120,
  },
  {
    id: 2,
    date: "17 марта",
    day: "Понедельник",
    time: "19:00",
    title: "Переговоры и ставки: как обосновать повышение зарплаты",
    speaker: "Михаил Петров",
    role: "HR-директор, 15 лет опыта",
    tag: "Переговоры",
    tagColor: "purple",
    seats: 95,
  },
  {
    id: 3,
    date: "24 марта",
    day: "Понедельник",
    time: "19:00",
    title: "Личный бренд специалиста: видимость без соцсетей",
    speaker: "Ольга Васильева",
    role: "Карьерный консультант, 500+ клиентов",
    tag: "Бренд",
    tagColor: "pink",
    seats: 150,
  },
  {
    id: 4,
    date: "31 марта",
    day: "Понедельник",
    time: "19:00",
    title: "Нетворкинг без неловкости: связи, которые работают",
    speaker: "Дмитрий Козлов",
    role: "Founder, Community Builder",
    tag: "Нетворкинг",
    tagColor: "cyan",
    seats: 80,
  },
];

const audience = [
  { icon: "Briefcase", text: "Специалисты с опытом 2–10 лет" },
  { icon: "TrendingUp", text: "Те, кто хочет расти быстрее рынка" },
  { icon: "Target", text: "Ищущие новые возможности и проекты" },
  { icon: "Users", text: "Руководители и тимлиды" },
];

const benefits = [
  {
    icon: "Zap",
    title: "Практические инструменты",
    desc: "Готовые техники, которые можно применить сразу после вебинара",
  },
  {
    icon: "BookOpen",
    title: "Конспект и материалы",
    desc: "Каждый участник получает структурированные заметки и шаблоны",
  },
  {
    icon: "MessageCircle",
    title: "Q&A с экспертом",
    desc: "30 минут живых вопросов и ответов в конце каждого эфира",
  },
  {
    icon: "PlayCircle",
    title: "Запись эфира",
    desc: "Доступна 7 дней — смотри в удобное время",
  },
  {
    icon: "Award",
    title: "Сертификат участника",
    desc: "Подтверждение для резюме и LinkedIn",
  },
  {
    icon: "Users",
    title: "Закрытое сообщество",
    desc: "Чат участников серии — связи и поддержка после вебинаров",
  },
];

const format = [
  { label: "Длительность", value: "90 минут", icon: "Clock" },
  { label: "Платформа", value: "Zoom + YouTube", icon: "Monitor" },
  { label: "Участников", value: "До 150 чел.", icon: "Users" },
  { label: "Формат", value: "Живой эфир", icon: "Radio" },
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
    a: "Да! Последние 30 минут каждого вебинара — это живая сессия Q&A, где спикер отвечает на вопросы аудитории.",
  },
  {
    q: "Нужно ли специальное оборудование?",
    a: "Достаточно компьютера или смартфона с интернетом. Всё остальное мы обеспечим.",
  },
  {
    q: "Можно ли зарегистрироваться только на один вебинар?",
    a: "Конечно! Вы можете выбрать любые вебинары из серии или зарегистрироваться на все сразу.",
  },
];

const tagColors: Record<string, string> = {
  cyan: "border-cyan-400/40 text-cyan-400 bg-cyan-400/10",
  purple: "border-purple-400/40 text-purple-400 bg-purple-400/10",
  pink: "border-pink-400/40 text-pink-400 bg-pink-400/10",
};

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", webinar: "all" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen mesh-bg font-golos text-white overflow-x-hidden noise-overlay">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="font-oswald font-semibold text-lg tracking-wide">WebinarPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#schedule" className="hover:text-white transition-colors">Расписание</a>
            <a href="#audience" className="hover:text-white transition-colors">Для кого</a>
            <a href="#format" className="hover:text-white transition-colors">Формат</a>
            <a href="#benefits" className="hover:text-white transition-colors">Что получите</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
          <a
            href="#register"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500 hover:bg-purple-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Зарегистрироваться
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-glow inline-block" />
            Бесплатная серия — март 2026
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-in">
            <span className="gradient-text">4 вебинара,</span>
            <br />
            которые изменят<br />
            <span className="text-white">твою карьеру</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Серия бесплатных онлайн-встреч для специалистов, которые хотят расти быстрее, зарабатывать больше и строить правильные связи
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#register"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              Зарегистрироваться бесплатно
            </a>
            <a
              href="#schedule"
              className="px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-lg hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Смотреть расписание
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16">
            {[
              { num: "4", label: "вебинара в серии" },
              { num: "500+", label: "мест для участников" },
              { num: "0 ₽", label: "полностью бесплатно" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-oswald text-4xl font-bold gradient-text">{stat.num}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Расписание</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-white">Программа вебинаров</h2>
          </div>

          <div className="grid gap-5">
            {webinars.map((w, i) => (
              <div
                key={w.id}
                className="card-glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 text-center bg-gradient-to-br from-purple-500/20 to-cyan-400/10 border border-purple-500/20 rounded-xl p-4 min-w-[90px]">
                  <div className="font-oswald text-2xl font-bold text-white">{w.date.split(" ")[0]}</div>
                  <div className="text-purple-300 text-sm">{w.date.split(" ")[1]}</div>
                  <div className="text-white/50 text-xs mt-1">{w.day}</div>
                </div>

                <div className="flex-shrink-0 text-center hidden md:block">
                  <div className="font-oswald text-xl font-bold text-cyan-400">{w.time}</div>
                  <div className="text-white/40 text-xs">МСК</div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${tagColors[w.tagColor]}`}>
                      {w.tag}
                    </span>
                    <span className="md:hidden text-cyan-400 text-sm font-semibold">{w.time} МСК</span>
                  </div>
                  <h3 className="font-oswald text-xl md:text-2xl font-semibold text-white mb-2 leading-tight">
                    {w.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Icon name="User" size={14} />
                    <span>{w.speaker}</span>
                    <span className="text-white/30">·</span>
                    <span>{w.role}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                  <div className="text-white/40 text-xs flex items-center gap-1">
                    <Icon name="Users" size={12} />
                    {w.seats} мест
                  </div>
                  <a
                    href="#register"
                    className="px-5 py-2.5 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200 whitespace-nowrap"
                  >
                    Записаться →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section id="audience" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Аудитория</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 mb-6 text-white">
                Для кого эти<br />
                <span className="gradient-text">вебинары?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Серия создана для специалистов, которые уже добились первых результатов и хотят перейти на следующий уровень — профессионально и финансово.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {audience.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 p-5 rounded-xl card-glass transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-400/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={22} className="text-purple-400" />
                  </div>
                  <span className="text-white/90 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section id="format" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">Формат</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-white">Как это работает</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {format.map((f) => (
              <div key={f.label} className="card-glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={f.icon} size={22} className="text-pink-400" />
                </div>
                <div className="font-oswald text-xl font-bold text-white mb-1">{f.value}</div>
                <div className="text-white/50 text-sm">{f.label}</div>
              </div>
            ))}
          </div>

          <div className="card-glass rounded-2xl p-8 md:p-10">
            <h3 className="font-oswald text-2xl font-semibold text-white mb-8">Как проходит каждый вебинар</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Контент (45 мин)", desc: "Структурированный материал от эксперта с практическими примерами и кейсами" },
                { step: "02", title: "Практика (15 мин)", desc: "Живые упражнения и разбор ситуаций участников прямо во время эфира" },
                { step: "03", title: "Q&A (30 мин)", desc: "Открытые вопросы спикеру — задайте своё и услышьте ответы коллег" },
              ].map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="font-oswald text-4xl font-black text-purple-500/30 leading-none">{step.step}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Результаты</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-white">Что вы получите</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="card-glass rounded-2xl p-7 transition-all duration-300 hover:scale-[1.03] group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/25 to-cyan-400/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:border-purple-400/50 transition-colors">
                  <Icon name={b.icon} size={26} className="text-purple-400" />
                </div>
                <h3 className="font-oswald text-xl font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Регистрация</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-white">Займи своё место</h2>
            <p className="text-white/60 mt-3">Бесплатно. Без спама. Только материалы вебинара.</p>
          </div>

          <div className="card-glass rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={36} className="text-white" />
                </div>
                <h3 className="font-oswald text-3xl font-bold text-white mb-3">Вы зарегистрированы!</h3>
                <p className="text-white/60">Мы отправим ссылку на вебинар за 24 часа до начала на ваш email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/60 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/60 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Выберите вебинар</label>
                  <select
                    value={formData.webinar}
                    onChange={(e) => setFormData({ ...formData, webinar: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/60 transition-all appearance-none"
                  >
                    <option value="all" className="bg-gray-900">Все вебинары серии</option>
                    {webinars.map((w) => (
                      <option key={w.id} value={w.id} className="bg-gray-900">
                        {w.date} — {w.title}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.02] mt-2"
                >
                  Зарегистрироваться бесплатно →
                </button>
                <p className="text-center text-white/30 text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-pink-400 text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mt-2 text-white">Частые вопросы</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card-glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className={`flex-shrink-0 transition-colors ${openFaq === i ? "text-purple-400" : "text-white/40"}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-400/10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white mb-4">
            Готов к новому уровню?
          </h2>
          <p className="text-white/60 text-xl mb-8">Следующий вебинар начнётся уже 10 марта в 19:00 МСК</p>
          <a
            href="#register"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <Icon name="Rocket" size={22} />
            Зарегистрироваться бесплатно
          </a>
        </div>
      </section>
    </div>
  );
}