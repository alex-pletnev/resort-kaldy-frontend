"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { ROOMS } from "@/lib/rooms";
import RoomCard from "./RoomCard";
import FilterPanel, { type SortOption } from "./FilterPanel";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 9;

function applyCapacityFilter(
  capacityMin: number,
  capacityMax: number,
  filter: string
): boolean {
  if (filter === "all") return true;
  if (filter === "2") return capacityMin <= 2;
  if (filter === "3-4") return capacityMin <= 4 && capacityMax >= 3;
  if (filter === "5+") return capacityMax >= 5;
  return true;
}

export default function RoomsCatalog() {
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState<SortOption>("popularity");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = ROOMS.filter((room) => {
      if (type !== "all" && room.type !== type) return false;
      if (!applyCapacityFilter(room.capacityMin, room.capacityMax, capacity))
        return false;
      if (priceMin && room.priceWeekday < Number(priceMin)) return false;
      if (priceMax && room.priceWeekday > Number(priceMax)) return false;
      return true;
    });

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => a.priceWeekday - b.priceWeekday);
    } else if (sort === "price-desc") {
      result = [...result].sort((a, b) => b.priceWeekday - a.priceWeekday);
    } else {
      result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [type, capacity, priceMin, priceMax, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const onTypeChange = useCallback((v: string) => { setType(v); setPage(1); }, []);
  const onCapacityChange = useCallback((v: string) => { setCapacity(v); setPage(1); }, []);
  const onPriceMinChange = useCallback((v: string) => { setPriceMin(v); setPage(1); }, []);
  const onPriceMaxChange = useCallback((v: string) => { setPriceMax(v); setPage(1); }, []);
  const onSortChange = useCallback((v: SortOption) => { setSort(v); setPage(1); }, []);

  const filterProps = useMemo(() => ({
    type,
    capacity,
    priceMin,
    priceMax,
    sort,
    onTypeChange,
    onCapacityChange,
    onPriceMinChange,
    onPriceMaxChange,
    onSortChange,
  }), [type, capacity, priceMin, priceMax, sort, onTypeChange, onCapacityChange, onPriceMinChange, onPriceMaxChange, onSortChange]);

  return (
    <main className="min-h-screen">
      {/* Page header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav aria-label="breadcrumb" className="text-sm text-text-muted mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span className="mx-2">›</span>
            <span className="text-text" aria-current="page">Номера и коттеджи</span>
          </nav>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-text mb-2">
            Номера и коттеджи
          </h1>
          <p className="text-text-secondary text-[1.0625rem]">
            Выберите подходящий вариант размещения на берегу озера Калды
          </p>
        </div>
      </div>

      {/* Desktop filter panel */}
      <div className="hidden md:block bg-bg border-b border-border sticky top-11 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <FilterPanel {...filterProps} />
        </div>
      </div>

      {/* Mobile filter toggle */}
      <div className="md:hidden bg-bg border-b border-border px-6 py-3 sticky top-11 z-40">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4h18M7 12h10M10 20h4"
            />
          </svg>
          Фильтры
          {(type !== "all" || capacity !== "all" || priceMin || priceMax) && (
            <span className="w-2 h-2 rounded-full bg-accent" />
          )}
        </button>
      </div>

      {/* Mobile filter bottom sheet */}
      {mobileFiltersOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative bg-white rounded-t-2xl p-6 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-text">
                Фильтры
              </h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Закрыть"
                className="text-text-muted text-2xl leading-none"
              >
                ×
              </button>
            </div>
            <FilterPanel {...filterProps} />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold px-8 py-3 transition-colors hover:bg-primary-dark"
            >
              Показать {filtered.length} вариантов
            </button>
          </div>
        </div>
      )}

      {/* Results bar */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <p className="text-text-secondary text-[1.0625rem]">
          Найдено номеров:{" "}
          <span className="font-semibold text-text">{filtered.length}</span>
        </p>
        <div className="flex gap-1">
          <button
            onClick={() => setView("grid")}
            aria-label="Сетка"
            className={`p-2 rounded-lg transition-colors ${
              view === "grid"
                ? "text-primary bg-bg-secondary"
                : "text-text-muted hover:text-primary"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3h6v6H2V3zm10 0h6v6h-6V3zm-10 8h6v6H2v-6zm10 0h6v6h-6v-6z" />
            </svg>
          </button>
          <button
            onClick={() => setView("list")}
            aria-label="Список"
            className={`p-2 rounded-lg transition-colors ${
              view === "list"
                ? "text-primary bg-bg-secondary"
                : "text-text-muted hover:text-primary"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 4h16v2H2V4zm0 5h16v2H2V9zm0 5h16v2H2v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-4">
        {paginated.length === 0 ? (
          <div className="text-center py-20 text-text-secondary">
            <p className="text-xl mb-2">Ничего не найдено</p>
            <p className="text-sm">Попробуйте изменить параметры фильтрации</p>
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((room) => (
              <RoomCard key={room.slug} room={room} view="grid" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {paginated.map((room) => (
              <RoomCard key={room.slug} room={room} view="list" />
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="max-w-6xl mx-auto px-6">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </main>
  );
}
