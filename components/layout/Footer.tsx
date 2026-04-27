import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/rooms", label: "Номера" },
  { href: "/services", label: "Услуги" },
  { href: "/documents", label: "Документы" },
  { href: "/documents#rules", label: "Правила" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/kaldy-logo.png"
            alt="Калды.ру"
            width={32}
            height={32}
            className="opacity-90"
          />
          <span className="font-display font-bold text-white text-lg">
            Калды.ру
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-text-muted hover:text-white transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-text-muted flex flex-col gap-1">
          <span>© 2025 База отдыха Калды.ру</span>
          <Link
            href="/documents#privacy"
            className="hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
