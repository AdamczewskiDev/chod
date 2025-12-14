"use client";

interface Testimonial {
  name: string;
  company?: string;
  role?: string;
  text: string;
  rating: number;
  eventType: string;
  customerType: "B2B" | "B2C" | "B2B2C";
}

export default function Testimonials() {

  const testimonials: Testimonial[] = [
    {
      name: "Anna Kowalska",
      company: "TechCorp Sp. z o.o.",
      role: "Event Manager",
      text: "Profesjonalna obsługa od początku do końca. Sprzęt najwyższej jakości, zespół zawsze gotowy do pomocy. Nasza konferencja technologiczna była perfekcyjnie nagłośniona i oświetlona. Polecam!",
      rating: 5,
      eventType: "Konferencja korporacyjna",
      customerType: "B2B",
    },
    {
      name: "Piotr i Maria Nowak",
      text: "Wesele naszych marzeń! Dźwięk był krystalicznie czysty, a oświetlenie stworzyło magiczną atmosferę. Goście byli zachwyceni. Dziękujemy za niezapomniane chwile!",
      rating: 5,
      eventType: "Wesele",
      customerType: "B2C",
    },
    {
      name: "Tomasz Wiśniewski",
      company: "EventPro Agency",
      role: "Właściciel",
      text: "Współpracujemy z Chłopakami od dźwięku od lat. Zawsze profesjonalni, elastyczni i niezawodni. To nasi zaufani partnerzy do wszystkich projektów eventowych.",
      rating: 5,
      eventType: "Różne wydarzenia",
      customerType: "B2B2C",
    },
  ];


  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-orange-50 via-orange-100 to-orange-50"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2
          id="testimonials-heading"
          className="section-title text-orange-600"
        >
          Co mówią o nas klienci
        </h2>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-200 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
              role="listitem"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4" aria-label={`Ocena: ${testimonial.rating} na 5`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl" aria-hidden="true">
                    ★
                  </span>
                ))}
                <span className="sr-only">{testimonial.rating} na 5 gwiazdek</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-orange-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-orange-200 pt-4">
                <p className="font-bold text-orange-600">
                  {testimonial.name}
                  {testimonial.company && (
                    <>
                      <br />
                      <span className="text-sm font-normal text-orange-500">{testimonial.company}</span>
                    </>
                  )}
                </p>
                {testimonial.role && (
                  <p className="text-sm text-orange-500 mt-1">{testimonial.role}</p>
                )}
                <p className="text-xs text-orange-400 mt-2">{testimonial.eventType}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

