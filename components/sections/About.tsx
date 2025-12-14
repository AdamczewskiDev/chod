"use client";

export default function About() {

  const values = [
    {
      title: "Doświadczenie",
      description: "Wieloletnie doświadczenie w branży eventowej. Realizujemy setki wydarzeń rocznie, od małych spotkań po wielkie festiwale.",
    },
    {
      title: "Profesjonalizm",
      description: "Najwyższa jakość obsługi i realizacji. Zawsze na czas, zawsze profesjonalnie, zawsze z pasją.",
    },
    {
      title: "Nowoczesny sprzęt",
      description: "Najnowsze technologie i profesjonalne urządzenia od najlepszych producentów. Gwarancja doskonałej jakości.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2
          id="about-heading"
          className="section-title text-orange-600"
        >
          O nas
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center mb-8 font-medium">
            Jesteśmy zespołem pasjonatów, którzy zamieniają wizje w rzeczywistość. Od lat tworzymy
            wyjątkowe doświadczenia dźwiękowe i wizualne dla wydarzeń każdej skali. Nasza misja?
            Sprawić, aby każda impreza - od kameralnego spotkania po wielki festiwal - była
            niezapomniana dzięki perfekcyjnej jakości dźwięku, światła i multimediów.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300 border-2 border-blue-200 hover:border-orange-500 shadow-lg hover:shadow-xl hover:-translate-y-2 group"
              role="listitem"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {index === 0 && "⭐"}
                {index === 1 && "🎯"}
                {index === 2 && "⚡"}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-orange-600 group-hover:text-white">{value.title}</h3>
              <p className="text-gray-700 group-hover:text-orange-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
