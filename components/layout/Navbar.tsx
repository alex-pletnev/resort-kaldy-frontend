"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/rooms", label: "Номера" },
  { href: "/services", label: "Услуги" },
  { href: "/gallery", label: "Галерея" },
  { href: "/how-to-get", label: "Как добраться" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 h-11 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/kaldy-logo.png"
            alt="Калды.ру"
            width={36}
            height={36}
          />
          <span className="font-display font-bold text-primary text-lg leading-none">
            Калды.ру
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors text-[1.0625rem] ${
                pathname === l.href
                  ? "text-primary font-semibold underline underline-offset-4 decoration-primary"
                  : "text-text hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="tel:+79227070244"
          className="hidden md:inline-flex items-center rounded-full bg-accent hover:bg-accent-dark text-bg-dark font-semibold px-6 py-2 text-sm transition-colors"
        >
          Забронировать
        </Link>

        <button
          className="md:hidden p-2 text-text"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[1.0625rem] transition-colors ${
                pathname === l.href
                  ? "text-primary font-semibold"
                  : "text-text hover:text-primary"
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="tel:+79227070244"
            className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-dark text-bg-dark font-semibold px-6 py-2 text-sm transition-colors"
          >
            Забронировать
          </Link>
        </div>
      )}
    </header>
  );
}
