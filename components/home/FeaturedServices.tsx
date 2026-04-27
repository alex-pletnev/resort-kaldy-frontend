import Link from "next/link";
import Image from "next/image";

const BASE = "https://storage.yandexcloud.net/kaldy-media";

const services = [
  {
    slug: "prokat-lodok",
    name: "Аренда лодок",
    price: "уточнить у администратора",
    photo: `${BASE}/services-photo-1.jpg`,
  },
  {
    slug: "banya",
    name: "Баня на дровах",
    price: "1 250 ₽/час",
    photo: `${BASE}/services-photo-2.jpg`,
  },
  {
    slug: "mangal",
    name: "Мангальная зона",
    price: "от 150 ₽/час",
    photo: `${BASE}/services-photo-3.jpg`,
  },
  {
    slug: "pitanie",
    name: "Питание",
    price: "830 ₽/день",
    photo: `${BASE}/services-photo-4.jpg`,
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-text mb-10 text-center">
          Услуги
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-bg rounded-[12px] overflow-hidden shadow-[var(--shadow-card)] flex flex-col"
            >
              <div className="relative h-[120px] bg-bg-secondary">
                <Image
                  src={service.photo}
                  alt={service.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-text mb-1">{service.name}</h3>
                <p className="text-accent font-semibold text-sm">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border-2 border-primary text-primary hover:bg-bg-secondary font-semibold px-8 py-3 transition-colors"
          >
            Все услуги →
          </Link>
        </div>
      </div>
    </section>
  );
}
