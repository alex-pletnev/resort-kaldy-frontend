import Link from "next/link";
import Image from "next/image";

const BASE = "https://storage.yandexcloud.net/kaldy-media";

const rooms = [
  {
    slug: "building-2-room-12",
    name: "Корпус №2, номер 12",
    capacity: "4",
    priceWeekday: 3000,
    featured: false,
    photo: `${BASE}/rooms-building-2-room-12-photo-1.jpg`,
  },
  {
    slug: "building-2-room-1",
    name: "Корпус №2, номер 1",
    capacity: "4",
    priceWeekday: 4500,
    featured: true,
    photo: `${BASE}/rooms-building-2-room-1-photo-1.jpg`,
  },
  {
    slug: "building-2-room-7",
    name: "Корпус №2, номер 7",
    capacity: "2",
    priceWeekday: 4700,
    featured: false,
    photo: `${BASE}/rooms-building-2-room-7-photo-1.jpg`,
  },
];

export default function FeaturedRooms() {
  return (
    <section className="py-16 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-text mb-10 text-center">
          Номера и коттеджи
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {rooms.map((room) => (
            <div
              key={room.slug}
              className="bg-white rounded-[12px] overflow-hidden shadow-[var(--shadow-card)] flex flex-col"
            >
              <div className="relative h-[160px] bg-bg-secondary">
                <Image
                  src={room.photo}
                  alt={room.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {room.featured && (
                  <span className="absolute top-3 left-3 bg-accent text-bg-dark text-xs font-semibold rounded-full px-3 py-1 z-10">
                    Популярный
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-text mb-1">
                  {room.name}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {room.capacity} чел. · от{" "}
                  {room.priceWeekday.toLocaleString("ru-RU")} ₽/сут
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className={`inline-flex items-center rounded-full font-semibold px-6 py-2 text-sm transition-colors ${
                      room.featured
                        ? "bg-accent hover:bg-accent-dark text-bg-dark"
                        : "border border-primary text-primary hover:bg-bg-secondary"
                    }`}
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/rooms"
            className="inline-flex items-center rounded-full border-2 border-primary text-primary hover:bg-bg-secondary font-semibold px-8 py-3 transition-colors"
          >
            Все номера →
          </Link>
        </div>
      </div>
    </section>
  );
}
