"use client";

export default function Services() {

  const services = [
    {
      icon: "🔊",
      title: "Dźwięk",
      description:
        "Profesjonalne systemy nagłośnienia dla wydarzeń każdej skali. Zapewniamy krystalicznie czysty dźwięk, pełną obsługę techniczną i monitoring na żywo. Twój event zabrzmi perfekcyjnie.",
    },
    {
      icon: "💡",
      title: "Oświetlenie",
      description:
        "Nowoczesne oświetlenie sceniczne, które stworzy wyjątkową atmosferę Twojego wydarzenia. Od subtelnych akcentów po spektakularne efekty świetlne - wszystko pod kontrolą.",
    },
    {
      icon: "📽️",
      title: "Multimedia",
      description:
        "Kompleksowa obsługa multimediów - ekrany LED, projektory, realizacja video. Przekształcamy Twoje wydarzenie w niezapomniane doświadczenie wizualne.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <h2
          id="services-heading"
          className="section-title text-orange-400 mb-16"
        >
          Nasza oferta
        </h2>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-2xl p-8 border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 group"
              role="listitem"
            >
              <div
                className="text-7xl mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
