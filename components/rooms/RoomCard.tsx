import Link from "next/link";
import Image from "next/image";
import type { Room } from "@/lib/rooms";

const TYPE_LABELS: Record<Room["type"], string> = {
  cottage: "Коттедж",
  building: "Корпус",
  house: "Домик",
};

interface Props {
  room: Room;
  view?: "grid" | "list";
}

export default function RoomCard({ room, view = "grid" }: Props) {
  const btnClass = room.featured
    ? "bg-accent hover:bg-accent-dark text-bg-dark"
    : "border border-primary text-primary hover:bg-bg-secondary";

  if (view === "list") {
    return (
      <div
        className={`bg-white rounded-[12px] overflow-hidden shadow-[var(--shadow-card)] flex flex-row transition-shadow hover:shadow-lg ${
          room.featured ? "border-[1.5px] border-accent" : ""
        }`}
      >
        <div className="relative w-[200px] min-h-[160px] shrink-0 bg-bg-secondary">
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
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-display text-xl font-semibold text-text">
              {room.name}
            </h3>
            {room.noLinen && (
              <span className="shrink-0 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                ⚠️ Бельё не входит
              </span>
            )}
          </div>
          <div className="flex gap-2 mb-3">
            <span className="text-xs font-medium text-text-secondary bg-bg-secondary rounded-full px-3 py-1">
              {room.capacityLabel}
            </span>
            <span className="text-xs font-medium text-text-secondary bg-bg-secondary rounded-full px-3 py-1">
              {TYPE_LABELS[room.type]}
            </span>
          </div>
          <div className="h-px bg-border my-2" />
          <div className="flex gap-6 text-sm mt-1 mb-4">
            <div>
              <span className="text-text-muted block text-xs mb-0.5">
                Будни
              </span>
              <span className="font-semibold text-primary">
                {room.priceWeekdayDisplay}
              </span>
            </div>
            <div>
              <span className="text-text-muted block text-xs mb-0.5">
                Выходные
              </span>
              <span className="font-semibold text-primary">
                {room.priceWeekendDisplay}
              </span>
            </div>
          </div>
          <div className="mt-auto">
            <Link
              href={`/rooms/${room.slug}`}
              className={`inline-flex items-center rounded-full font-semibold px-6 py-2 text-sm transition-colors ${btnClass}`}
            >
              Подробнее →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-[12px] overflow-hidden shadow-[var(--shadow-card)] flex flex-col transition-shadow hover:shadow-lg ${
        room.featured ? "border-[1.5px] border-accent" : ""
      }`}
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
        {room.noLinen && (
          <span className="absolute top-3 right-3 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
            ⚠️ Бельё не входит
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-[1.25rem] md:text-[1.5rem] font-semibold text-text mb-2">
          {room.name}
        </h3>
        <div className="flex gap-2 flex-wrap mb-3">
          <span className="text-xs font-medium text-text-secondary bg-bg-secondary rounded-full px-3 py-1">
            {room.capacityLabel}
          </span>
          <span className="text-xs font-medium text-text-secondary bg-bg-secondary rounded-full px-3 py-1">
            {TYPE_LABELS[room.type]}
          </span>
        </div>
        <div className="h-px bg-border my-2" />
        <div className="flex gap-6 text-sm mb-4">
          <div>
            <span className="text-text-muted block text-xs mb-0.5">Будни</span>
            <span className="font-semibold text-primary">
              {room.priceWeekdayDisplay}
            </span>
          </div>
          <div>
            <span className="text-text-muted block text-xs mb-0.5">
              Выходные
            </span>
            <span className="font-semibold text-primary">
              {room.priceWeekendDisplay}
            </span>
          </div>
        </div>
        <div className="mt-auto">
          <Link
            href={`/rooms/${room.slug}`}
            className={`inline-flex items-center rounded-full font-semibold px-6 py-2 text-sm transition-colors ${btnClass}`}
          >
            Подробнее →
          </Link>
        </div>
      </div>
    </div>
  );
}
