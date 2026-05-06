"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TYPE_LABELS } from "@/lib/rooms";
import type { Room } from "@/lib/rooms";

const SITE_URL = "https://kaldy.ru";

const RULES = [
  { label: "Заезд с 14:00", warning: false },
  { label: "Выезд до 12:00", warning: false },
  { label: "Животные: +500 ₽/сут", warning: false },
  { label: "Только наличные", warning: true },
];

interface Props {
  room: Room;
}

export default function RoomDetail({ room }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i + 1) % room.photos.length);
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i - 1 + room.photos.length) % room.photos.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, room.photos.length]);

  function openLightbox(idx: number) {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  }

  const shareUrl = `${SITE_URL}/rooms/${room.slug}`;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav aria-label="breadcrumb" className="text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span className="mx-2">›</span>
            <Link
              href="/rooms"
              className="hover:text-primary transition-colors"
            >
              Номера и коттеджи
            </Link>
            <span className="mx-2">›</span>
            <span className="text-text" aria-current="page">
              {room.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="max-w-6xl mx-auto px-6 py-8 pb-28 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">

          {/* ── Left column ── */}
          <div>
            {/* Title + tags */}
            <h1 className="font-display text-[2rem] font-bold text-text mb-4">
              {room.name}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {room.featured && (
                <span className="bg-accent/20 text-accent-dark border border-accent rounded-full px-3 py-1 text-sm font-medium">
                  Популярный
                </span>
              )}
              <span className="bg-primary/10 text-primary border border-primary/30 rounded-full px-3 py-1 text-sm font-medium">
                {room.capacityLabel}
              </span>
              <span className="bg-bg-secondary text-text-secondary border border-border rounded-full px-3 py-1 text-sm font-medium">
                {TYPE_LABELS[room.type]}
              </span>
              {room.noLinen && (
                <span className="bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 text-sm font-medium">
                  ⚠️ Бельё не входит
                </span>
              )}
            </div>

            {/* Desktop gallery: main + 2 thumbs */}
            <div className="hidden md:grid grid-cols-[3fr_1fr] gap-2 h-[300px] rounded-xl overflow-hidden mb-6">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="relative h-full bg-bg-secondary"
                aria-label="Открыть галерею"
              >
                <Image
                  src={room.photos[0]}
                  alt={room.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
              <div className="grid grid-rows-2 gap-2 h-full">
                <button
                  type="button"
                  onClick={() => openLightbox(1)}
                  className="relative h-full bg-bg-secondary"
                  aria-label="Фото 2"
                >
                  <Image
                    src={room.photos[1] ?? room.photos[0]}
                    alt={`${room.name} — фото 2`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
                <button
                  type="button"
                  onClick={() => openLightbox(2)}
                  className="relative h-full bg-bg-secondary"
                  aria-label={
                    room.photos.length > 3
                      ? `Ещё ${room.photos.length - 3} фото`
                      : "Фото 3"
                  }
                >
                  <Image
                    src={room.photos[2] ?? room.photos[0]}
                    alt={`${room.name} — фото 3`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {room.photos.length > 3 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        +{room.photos.length - 3} фото
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile gallery: horizontal scroll */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-2 mb-6 -mx-6 px-6 snap-x">
              {room.photos.map((photo, i) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="relative shrink-0 w-[220px] h-[150px] rounded-xl overflow-hidden bg-bg-secondary snap-start"
                  aria-label={`Фото ${i + 1}`}
                >
                  <Image
                    src={photo}
                    alt={`${room.name} — фото ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>

            {/* Description */}
            <section className="mb-8">
              <h3 className="font-display text-xl font-semibold text-text mb-3">
                Описание
              </h3>
              <p className="text-text-secondary text-[1.0625rem] leading-relaxed">
                {room.description}
              </p>
            </section>

            {/* Amenities */}
            <section className="mb-8">
              <h3 className="font-display text-xl font-semibold text-text mb-4">
                Удобства
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {room.amenities.map((amenity) => (
                  <li
                    key={amenity.label}
                    className="flex items-center gap-2 text-[1.0625rem]"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        amenity.uncertain ? "bg-accent" : "bg-primary"
                      }`}
                    />
                    <span
                      className={
                        amenity.uncertain ? "text-text-secondary" : "text-text"
                      }
                    >
                      {amenity.label}
                    </span>
                    {amenity.uncertain && (
                      <span className="text-xs text-accent-dark bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5 font-medium">
                        уточнить
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* Rules */}
            <section>
              <h3 className="font-display text-xl font-semibold text-text mb-4">
                Правила проживания
              </h3>
              <div className="flex flex-wrap gap-2">
                {RULES.map((rule) => (
                  <span
                    key={rule.label}
                    className={`rounded-full px-4 py-2 text-sm ${
                      rule.warning
                        ? "bg-amber-50 text-amber-700 border border-amber-200 font-medium"
                        : "bg-bg-secondary text-text-secondary border border-border"
                    }`}
                  >
                    {rule.label}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* ── Right column — sticky booking block (desktop only) ── */}
          <div className="hidden lg:block">
            <div className="sticky top-14 bg-white rounded-[12px] border border-border shadow-[var(--shadow-card)] p-6">
              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[1.375rem] font-bold text-primary">
                    {room.priceWeekdayDisplay}
                  </span>
                  <span className="text-text-secondary text-sm">
                    в сутки (будни)
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-0.5">
                  Выходные и праздники: {room.priceWeekendDisplay}
                </p>
                <p className="text-text-muted text-sm">
                  Доп. место:{" "}
                  {room.additionalGuestPrice.toLocaleString("ru-RU")} ₽/сут
                </p>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary border border-primary/30 rounded-full px-3 py-1 text-xs font-medium">
                  {room.capacityLabel}
                </span>
                <span className="bg-bg-secondary text-text-secondary border border-border rounded-full px-3 py-1 text-xs font-medium">
                  {TYPE_LABELS[room.type]}
                </span>
              </div>

              <div className="h-px bg-border mb-4" />

              {/* CTAs */}
              <div className="flex flex-col gap-3 mb-4">
                <a
                  href="tel:+79227070244"
                  className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-bg-dark font-semibold px-6 py-3 transition-colors"
                >
                  Забронировать
                </a>
                <a
                  href="tel:+79227070244"
                  className="inline-flex items-center justify-center rounded-full border border-primary text-primary hover:bg-bg-secondary font-semibold px-6 py-3 transition-colors"
                >
                  Позвонить нам
                </a>
              </div>

              <p className="text-center text-text-muted text-sm mb-4">
                +7-922-707-02-44 · с 9:00 до 21:00
              </p>

              <div className="h-px bg-border mb-4" />

              {/* Share */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-text-muted text-sm shrink-0">
                  Поделиться:
                </span>
                <a
                  href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Поделиться ВКонтакте"
                  className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors text-xs font-bold"
                >
                  VK
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Поделиться в WhatsApp"
                  className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-green-600 hover:bg-green-50 transition-colors text-xs font-bold"
                >
                  WA
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Поделиться в Telegram"
                  className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-blue-500 hover:bg-blue-50 transition-colors text-xs font-bold"
                >
                  TG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky booking footer */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border px-6 py-3 flex items-center gap-4 shadow-lg">
        <div className="flex-1 min-w-0">
          <p className="font-bold text-primary text-lg leading-tight">
            {room.priceWeekdayDisplay}
          </p>
          <p className="text-text-muted text-xs">в сутки (будни)</p>
        </div>
        <a
          href="tel:+79227070244"
          className="shrink-0 inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-bg-dark font-semibold px-6 py-3 transition-colors"
        >
          Забронировать
        </a>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Галерея фотографий"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx(
                (i) => (i - 1 + room.photos.length) % room.photos.length
              );
            }}
            className="absolute left-4 text-white text-4xl p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Предыдущее фото"
          >
            ‹
          </button>

          <div
            className="relative w-full max-w-4xl mx-16 h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={room.photos[lightboxIdx]}
              alt={`${room.name} — фото ${lightboxIdx + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((i) => (i + 1) % room.photos.length);
            }}
            className="absolute right-4 text-white text-4xl p-3 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Следующее фото"
          >
            ›
          </button>

          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Закрыть"
          >
            ×
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIdx + 1} / {room.photos.length}
          </p>
        </div>
      )}
    </>
  );
}
