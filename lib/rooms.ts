export type RoomType = "cottage" | "building" | "house";

export interface RoomAmenity {
  label: string;
  uncertain?: boolean;
}

export interface Room {
  slug: string;
  name: string;
  type: RoomType;
  capacityMin: number;
  capacityMax: number;
  capacityLabel: string;
  priceWeekday: number;
  priceWeekend: number;
  priceWeekdayDisplay: string;
  priceWeekendDisplay: string;
  additionalGuestPrice: number;
  featured: boolean;
  noLinen: boolean;
  photos: string[];
  description: string;
  amenities: RoomAmenity[];
}

const BASE = "https://storage.yandexcloud.net/kaldy-media";

function photos(slug: string, count = 3): string[] {
  return Array.from({ length: count }, (_, i) => `${BASE}/${slug}-photo-${i + 1}.jpg`);
}

const BASE_AMENITIES: RoomAmenity[] = [
  { label: "Пляж с понтоном" },
  { label: "Бесплатные лежаки на пляже" },
  { label: "Мангальная зона" },
  { label: "Парковка на территории" },
  { label: "Баня (аренда, 1 250 ₽/ч)" },
  { label: "Столовая на территории" },
  { label: "Санузел в номере", uncertain: true },
  { label: "Холодильник", uncertain: true },
  { label: "Wi-Fi", uncertain: true },
  { label: "Телевизор", uncertain: true },
];

const LARGE_AMENITIES: RoomAmenity[] = [
  ...BASE_AMENITIES.slice(0, 6),
  { label: "Несколько спальных комнат" },
  { label: "Кухонная зона", uncertain: true },
  ...BASE_AMENITIES.slice(6),
];

export const ROOMS: Room[] = [
  {
    slug: "cottage-1",
    name: "Коттедж №1",
    type: "cottage",
    capacityMin: 5,
    capacityMax: 6,
    capacityLabel: "5–6 мест",
    priceWeekday: 8500,
    priceWeekend: 10500,
    priceWeekdayDisplay: "8 500 ₽",
    priceWeekendDisplay: "10 500 ₽",
    additionalGuestPrice: 1000,
    featured: false,
    noLinen: false,
    photos: photos("cottage-1"),
    description:
      "Просторный двухэтажный коттедж на 5–6 человек на берегу озера Калды. Первый этаж — общая зона с кухней и санузлом, второй — спальни для комфортного отдыха. Терраса с видом на берёзовый лес и озеро создаёт особую атмосферу уединения. Подходит для большой семьи или компании, ценящей пространство и комфорт на природе.",
    amenities: LARGE_AMENITIES,
  },
  {
    slug: "cottage-7-8",
    name: "Коттедж №7 / №8",
    type: "cottage",
    capacityMin: 7,
    capacityMax: 7,
    capacityLabel: "7 мест",
    priceWeekday: 7200,
    priceWeekend: 9500,
    priceWeekdayDisplay: "7 200 ₽",
    priceWeekendDisplay: "9 500 ₽",
    additionalGuestPrice: 700,
    featured: true,
    noLinen: false,
    photos: photos("cottage-7-8"),
    description:
      "Один из самых популярных вариантов на базе — объединённый коттедж №7 / №8 рассчитан на компанию до 7 человек. Несколько жилых зон позволяют каждому найти своё пространство. Удобное расположение в центре базы обеспечивает быстрый доступ к пляжу, баням и другой инфраструктуре. Идеально подходит для большой компании друзей или двух семей.",
    amenities: LARGE_AMENITIES,
  },
  {
    slug: "cottage-10",
    name: "Коттедж №10",
    type: "cottage",
    capacityMin: 3,
    capacityMax: 4,
    capacityLabel: "3–4 места",
    priceWeekday: 5000,
    priceWeekend: 6000,
    priceWeekdayDisplay: "5 000 ₽",
    priceWeekendDisplay: "6 000 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: false,
    photos: photos("cottage-10"),
    description:
      "Уютный двухэтажный коттедж для небольшой семьи или компании до 4 человек. На первом этаже — гостиная с кухонной зоной, на втором — спальня. Тихое расположение среди берёзового леса создаёт атмосферу настоящего загородного отдыха. Отличный выбор для пары с детьми или небольшой компании друзей.",
    amenities: BASE_AMENITIES,
  },
  {
    slug: "cottage-14",
    name: "Коттедж №14",
    type: "cottage",
    capacityMin: 8,
    capacityMax: 8,
    capacityLabel: "8 мест",
    priceWeekday: 6000,
    priceWeekend: 7000,
    priceWeekdayDisplay: "6 000 ₽",
    priceWeekendDisplay: "7 000–7 400 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: false,
    photos: photos("cottage-14"),
    description:
      "Большой коттедж из двух независимых блоков с отдельными входами — всего до 8 мест. Каждый блок имеет собственную спальню, гостиную и санузел. Можно арендовать один блок или весь коттедж целиком — идеально для двух семей, приехавших вместе. Широкая терраса объединяет оба блока для совместного отдыха.",
    amenities: LARGE_AMENITIES,
  },
  {
    slug: "cottage-9",
    name: "Коттедж №9",
    type: "cottage",
    capacityMin: 4,
    capacityMax: 7,
    capacityLabel: "4–7 мест",
    priceWeekday: 4000,
    priceWeekend: 5500,
    priceWeekdayDisplay: "от 4 000 ₽",
    priceWeekendDisplay: "от 5 500 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: false,
    photos: photos("cottage-9"),
    description:
      "Многоуровневый коттедж с гибкой планировкой: номер на 4 места на первом этаже и просторные номера на 6–7 мест на втором. Подходит для семей разного размера. Светлые просторные комнаты и близость к озеру делают этот коттедж отличным выбором для летнего отдыха.",
    amenities: LARGE_AMENITIES,
  },
  {
    slug: "building-2",
    name: "Корпус №2",
    type: "building",
    capacityMin: 2,
    capacityMax: 6,
    capacityLabel: "2–6 мест",
    priceWeekday: 2500,
    priceWeekend: 3500,
    priceWeekdayDisplay: "от 2 500 ₽",
    priceWeekendDisplay: "от 3 500 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: false,
    photos: photos("building-2"),
    description:
      "Двухэтажный жилой корпус с широким выбором номеров на 2–6 человек. Удобный формат мини-гостиницы в окружении природы — у каждого номера отдельный вход, собственный санузел и всё необходимое для комфорта. Расположен в центре базы рядом со столовой и детскими площадками. Оптимальный выбор для тех, кто предпочитает классическое размещение.",
    amenities: BASE_AMENITIES,
  },
  {
    slug: "town-15-17",
    name: "Коттеджи №15–17А",
    type: "cottage",
    capacityMin: 3,
    capacityMax: 3,
    capacityLabel: "3 места",
    priceWeekday: 2300,
    priceWeekend: 3700,
    priceWeekdayDisplay: "от 2 300 ₽",
    priceWeekendDisplay: "от 3 700 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: true,
    photos: photos("town-15-17"),
    description:
      "Компактные двухэтажные коттеджи «Городка» на 3 человека каждый. Простая и функциональная обстановка для активного отдыха — здесь главное не номер, а озеро, пляж и свежий воздух. Постельное бельё не предоставляется: необходимо привезти с собой (можно заказать за 150 ₽/комплект). Доступная цена делает этот вариант отличным для экономного отдыха.",
    amenities: BASE_AMENITIES,
  },
  {
    slug: "colored-houses",
    name: "Цветные домики",
    type: "house",
    capacityMin: 3,
    capacityMax: 5,
    capacityLabel: "3–5 мест",
    priceWeekday: 1900,
    priceWeekend: 3000,
    priceWeekdayDisplay: "от 1 900 ₽",
    priceWeekendDisplay: "от 3 000 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: true,
    photos: photos("colored-houses"),
    description:
      "Яркие разноцветные домики — синий, зелёный, жёлтый, розовый и коричневый — создают особую атмосферу дачного отдыха у озера. Рассчитаны на 3–5 человек в зависимости от выбранного цвета. Близость к пляжу и доступная цена делают их популярным выбором. Постельное бельё необходимо привезти с собой (150 ₽/комплект).",
    amenities: BASE_AMENITIES,
  },
  {
    slug: "fishing-houses",
    name: "Рыбацкие домики",
    type: "house",
    capacityMin: 2,
    capacityMax: 3,
    capacityLabel: "2–3 места",
    priceWeekday: 2000,
    priceWeekend: 2500,
    priceWeekdayDisplay: "от 2 000 ₽",
    priceWeekendDisplay: "от 2 500 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: true,
    photos: photos("fishing-houses"),
    description:
      "Небольшие уютные домики для рыбаков и любителей тихого отдыха на берегу. Рассчитаны на 2–3 человека — идеально для рыбацкого выезда или уединённого отдыха вдали от городского шума. Всё необходимое для ночлега после активного дня на воде. Постельное бельё необходимо привезти с собой (150 ₽/комплект).",
    amenities: BASE_AMENITIES,
  },
  {
    slug: "flower-house",
    name: "Цветочный домик",
    type: "house",
    capacityMin: 3,
    capacityMax: 3,
    capacityLabel: "3 места",
    priceWeekday: 2000,
    priceWeekend: 2500,
    priceWeekdayDisplay: "2 000 ₽",
    priceWeekendDisplay: "2 500 ₽",
    additionalGuestPrice: 700,
    featured: false,
    noLinen: true,
    photos: photos("flower-house"),
    description:
      "Уютный небольшой домик для компании до 3 человек в окружении природы базы отдыха Калды.ру. Тихое расположение, свежий воздух и близость к озеру — всё, что нужно для настоящего отдыха. Постельное бельё необходимо привезти с собой (150 ₽/комплект).",
    amenities: BASE_AMENITIES,
  },
];
