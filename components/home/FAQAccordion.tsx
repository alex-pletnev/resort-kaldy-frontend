"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Как заселиться? Когда заезд и выезд?",
    answer:
      "Заезд с 14:00, выезд до 12:00. Администрация работает с 9:00 до 21:00 без выходных по телефону +7-922-707-02-44.",
  },
  {
    question: "Можно ли с питомцами?",
    answer:
      "Да, по согласованию с администратором — в некоторых номерах возможно размещение с небольшими животными. Дополнительная плата +500 ₽/сутки.",
    defaultOpen: true,
  },
  {
    question: "Есть ли парковка?",
    answer:
      "Да, на территории базы есть автостоянка. Для гостей без путёвки стоянка автомобиля — 300 ₽.",
  },
  {
    question: "Как оплатить бронирование?",
    answer:
      "В настоящее время принимается только наличный расчёт. Для бронирования звоните по телефону +7-922-707-02-44.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(
    faqs.findIndex((f) => f.defaultOpen)
  );

  return (
    <section className="py-16 px-6 bg-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-[2rem] md:text-[2.5rem] font-bold text-text mb-10 text-center">
          Частые вопросы
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-white rounded-[12px] border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-text text-[1.0625rem] hover:text-primary transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className="ml-4 shrink-0 text-primary text-xl leading-none">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-text-secondary text-[1.0625rem] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
