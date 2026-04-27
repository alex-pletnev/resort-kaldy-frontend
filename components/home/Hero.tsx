import Link from "next/link";
import Image from "next/image";

const HERO_PHOTO = "https://storage.yandexcloud.net/kaldy-media/territory-photo-1.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden bg-bg-dark">
      <Image
        src={HERO_PHOTO}
        alt="База отдыха Калды.ру — озеро и лес"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-bg-dark/60" />

      <div className="relative z-10 text-center px-6 py-20 max-w-3xl mx-auto">
        <h1 className="font-display text-[2.5rem] md:text-[3.5rem] font-bold text-white leading-tight mb-4">
          Калды.ру — отдых у воды
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10">
          Лес, озеро и пляж. Семейный отдых в тишине природы.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/rooms"
            className="rounded-full bg-accent hover:bg-accent-dark text-bg-dark font-semibold px-8 py-3 transition-colors text-[1.0625rem]"
          >
            Смотреть номера
          </Link>
          <Link
            href="/how-to-get"
            className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 transition-colors text-[1.0625rem]"
          >
            Как добраться
          </Link>
        </div>
      </div>
    </section>
  );
}
