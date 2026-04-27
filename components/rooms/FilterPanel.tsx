"use client";

export type SortOption = "popularity" | "price-asc" | "price-desc";

const TYPE_OPTIONS = [
  { value: "all", label: "Все" },
  { value: "cottage", label: "Коттедж" },
  { value: "building", label: "Корпус" },
  { value: "house", label: "Домик" },
];

const CAPACITY_OPTIONS = [
  { value: "all", label: "Все" },
  { value: "2", label: "2 чел." },
  { value: "3-4", label: "3–4 чел." },
  { value: "5+", label: "5+ чел." },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "По популярности" },
  { value: "price-asc", label: "По цене ↑" },
  { value: "price-desc", label: "По цене ↓" },
];

interface Props {
  type: string;
  capacity: string;
  priceMin: string;
  priceMax: string;
  sort: SortOption;
  onTypeChange: (v: string) => void;
  onCapacityChange: (v: string) => void;
  onPriceMinChange: (v: string) => void;
  onPriceMaxChange: (v: string) => void;
  onSortChange: (v: SortOption) => void;
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-text-secondary text-sm font-medium shrink-0">
        {label}
      </span>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            value === opt.value
              ? "bg-accent/20 text-accent-dark border border-accent"
              : "bg-white border border-border text-text-secondary hover:border-primary hover:text-primary"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function FilterPanel({
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
}: Props) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
      <ChipGroup
        label="Тип:"
        options={TYPE_OPTIONS}
        value={type}
        onChange={onTypeChange}
      />
      <ChipGroup
        label="Вместимость:"
        options={CAPACITY_OPTIONS}
        value={capacity}
        onChange={onCapacityChange}
      />
      <div className="flex items-center gap-2">
        <span className="text-text-secondary text-sm font-medium shrink-0">
          Цена:
        </span>
        <input
          type="number"
          placeholder="от"
          value={priceMin}
          onChange={(e) => onPriceMinChange(e.target.value)}
          className="w-24 rounded-lg border border-border px-3 py-1.5 text-sm text-text focus:outline-none focus:border-primary bg-white"
        />
        <span className="text-text-muted">—</span>
        <input
          type="number"
          placeholder="до"
          value={priceMax}
          onChange={(e) => onPriceMaxChange(e.target.value)}
          className="w-24 rounded-lg border border-border px-3 py-1.5 text-sm text-text focus:outline-none focus:border-primary bg-white"
        />
        <span className="text-text-secondary text-sm">₽</span>
      </div>
      <div className="flex items-center gap-2 md:ml-auto">
        <span className="text-text-secondary text-sm font-medium shrink-0">
          Сортировка:
        </span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="rounded-lg border border-border px-3 py-1.5 text-sm text-text focus:outline-none focus:border-primary bg-white"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
