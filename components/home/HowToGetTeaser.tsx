import Link from "next/link";

export default function HowToGetTeaser() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-text mb-10 text-center">
          Как добраться
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Карта */}
          <div className="rounded-xl overflow-hidden border border-border h-[300px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=61.267315%2C55.669011&z=14&pt=61.267484%2C55.669143"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin"
              title="Карта базы отдыха Калды.ру"
            />
          </div>

          {/* Текст */}
          <div className="flex flex-col gap-4 text-[1.0625rem] text-text-secondary">
            <p>
              <span className="font-semibold text-text">Адрес:</span> Челябинская
              область, Кунашакский район, озеро Калды (62-й км трассы
              Челябинск — Екатеринбург)
            </p>
            <p>
              <span className="font-semibold text-text">На автомобиле:</span> из
              Челябинска ~60 км по Свердловскому тракту до 61 км, повернуть по
              указателю «Калды.ру», ещё 300 метров.
            </p>
            <p>
              <span className="font-semibold text-text">На автобусе:</span>{" "}
              автобусы в направлении Екатеринбурга, Перми или Кунашака — выйти
              на 61 км трассы, затем 300 метров пешком.
            </p>
            <p>
              <span className="font-semibold text-text">Трансфер:</span> по
              запросу, уточняйте у администрации.
            </p>

            <Link
              href="/how-to-get"
              className="mt-2 inline-flex items-center font-semibold text-primary hover:text-primary-light transition-colors"
            >
              Подробнее →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
