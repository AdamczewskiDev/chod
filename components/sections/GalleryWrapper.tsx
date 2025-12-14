"use client";

import dynamic from "next/dynamic";

// Gallery renderowane tylko po stronie klienta aby uniknąć problemów z hydratacją
const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
  loading: () => (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title text-orange-600">Galeria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="relative h-64 sm:h-80 md:h-96 rounded-xl bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  ),
});

export default Gallery;

