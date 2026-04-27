const items = [
  {
    title: "Лес и озеро",
    description: "Пляж с лежаками",
  },
  {
    title: "Семейный отдых",
    description: "Для всех возрастов",
  },
  {
    title: "Тишина природы",
    description: "Вдали от городского шума",
  },
];

export default function ThreeColumnUSP() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-bg rounded-[12px] p-6 text-center shadow-[var(--shadow-card)]"
          >
            <h3 className="font-display text-xl font-semibold text-text mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary text-[1.0625rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
