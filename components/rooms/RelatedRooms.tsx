import Link from "next/link";
import Image from "next/image";
import { ROOMS } from "@/lib/rooms";

interface Props {
  currentSlug: string;
}

export default function RelatedRooms({ currentSlug }: Props) {
  const current = ROOMS.find((r) => r.slug === currentSlug);

  const related = ROOMS.filter((r) => r.slug !== currentSlug)
    .sort((a, b) => {
      if (!current) return 0;
      const aMatch = a.type === current.type ? -1 : 0;
      const bMatch = b.type === current.type ? -1 : 0;
      return aMatch - bMatch;
    })
    .slice(0, 3);

  return (
    <section className="py-16 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-[2rem] font-bold text-text mb-8">
          Похожие номера
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {related.map((room) => (
            <Link
              key={room.slug}
              href={`/rooms/${room.slug}`}
              className="bg-white rounded-[12px] overflow-hidden shadow-[var(--shadow-card)] flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="relative h-[120px] bg-bg-secondary">
                <Image
                  src={room.photos[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-text mb-1 text-base">
                  {room.name}
                </h3>
                <p className="text-primary text-sm font-medium">
                  {room.priceWeekdayDisplay}/сут
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/rooms"
            className="inline-flex items-center rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary font-semibold px-8 py-3 transition-colors"
          >
            Все номера и коттеджи →
          </Link>
        </div>
      </div>
    </section>
  );
}
