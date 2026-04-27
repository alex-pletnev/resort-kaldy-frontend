export default function ContactsRow() {
  return (
    <section className="py-16 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Телефон */}
        <div className="bg-white rounded-[12px] p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold text-text mb-2">
            Телефон
          </h3>
          <a
            href="tel:+79227070244"
            className="text-primary text-[1.0625rem] font-semibold hover:text-primary-light transition-colors block mb-1"
          >
            +7-922-707-02-44
          </a>
          <p className="text-text-secondary text-sm">WhatsApp / Telegram</p>
          <p className="text-text-muted text-sm mt-1">с 9:00 до 21:00</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-[12px] p-6 shadow-[var(--shadow-card)]">
          <h3 className="font-display text-lg font-semibold text-text mb-2">
            Email
          </h3>
          <a
            href="mailto:info@kaldy.ru"
            className="text-primary text-[1.0625rem] font-semibold hover:text-primary-light transition-colors block mb-1"
          >
            info@kaldy.ru
          </a>
          <p className="text-text-secondary text-sm">Ответим в течение часа</p>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-[12px] p-6 flex flex-col justify-center text-center">
          <p className="text-white font-display text-xl font-semibold mb-4">
            Хотите приехать? Позвоните нам
          </p>
          <a
            href="tel:+79227070244"
            className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-bg-dark font-semibold px-6 py-2 text-sm transition-colors"
          >
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}
