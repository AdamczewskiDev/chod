"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: "photo-1493225457124-a3eb161ffa5f",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
      alt: "System nagłośnienia na koncercie",
    },
    {
      id: "photo-1470225620780-dba8ba36b745",
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      alt: "Oświetlenie sceniczne",
    },
    {
      id: "photo-1459749411175-04bf5292ceea",
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
      alt: "Mikser audio",
    },
    {
      id: "photo-1504384308090-c894fdcc538d",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      alt: "Koncert",
    },
    {
      id: "photo-1487180144351-b8472da7d491",
      src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491",
      alt: "Scena festiwalowa",
    },
  ];

  // Debug logging - tylko po stronie klienta
  useEffect(() => {
    console.log("[Gallery] ===== CLIENT SIDE ===== ");
    console.log("[Gallery] Component mounted/updated");
    console.log("[Gallery] Images count:", images.length);
    console.log("[Gallery] Images:", JSON.stringify(images.map(img => ({ id: img.id, alt: img.alt })), null, 2));
    console.log("[Gallery] Window available:", typeof window !== "undefined");
    console.log("[Gallery] ======================== ");
  }, []);

  // Log przy każdej zmianie images
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("[Gallery] Images array changed, count:", images.length);
    }
  }, [images.length]);


  // Keyboard navigation dla lightbox
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((selectedImage - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setSelectedImage((selectedImage + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images.length]);

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2
          id="gallery-heading"
          className="section-title text-orange-600"
        >
          Galeria
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" role="list">
          {images.map((image, index) => {
            // Log tylko po stronie klienta, poza renderem
            if (index === 0) {
              console.log(`[Gallery] Rendering ${images.length} images`);
            }
            return (
              <button
                key={image.id}
                onClick={() => {
                  console.log(`[Gallery] Image clicked:`, { index, id: image.id, alt: image.alt });
                  setSelectedImage(index);
                }}
                className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:-translate-y-2 border-2 border-blue-200 hover:border-orange-500"
                aria-label={`Otwórz zdjęcie ${index + 1}: ${image.alt}`}
                role="listitem"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  onLoad={() => {
                    console.log(`[Gallery] Image loaded:`, image.id);
                  }}
                  onError={(e) => {
                    console.error(`[Gallery] Image error:`, image.id, image.src, e);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-blue-900/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <button
              className="absolute top-4 right-4 text-orange-400 text-4xl hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full p-2 transition-all hover:bg-orange-500/10"
              onClick={() => setSelectedImage(null)}
              aria-label="Zamknij galerię"
            >
              ✕
            </button>

            <button
              className="absolute left-4 text-orange-400 text-4xl hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full p-2 transition-all hover:bg-orange-500/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  (selectedImage - 1 + images.length) % images.length
                );
              }}
              aria-label="Poprzednie zdjęcie"
            >
              ❮
            </button>

            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
                priority
                onLoad={() => console.log(`[Gallery] Lightbox image loaded:`, images[selectedImage].id)}
                onError={(e) => {
                  console.error(`[Gallery] Lightbox image error:`, images[selectedImage].id, e);
                }}
              />
              <h3 id="lightbox-title" className="sr-only">
                {images[selectedImage].alt} - Zdjęcie {selectedImage + 1} z{" "}
                {images.length}
              </h3>
            </div>

            <button
              className="absolute right-4 text-orange-400 text-4xl hover:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full p-2 transition-all hover:bg-orange-500/10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % images.length);
              }}
              aria-label="Następne zdjęcie"
            >
              ❯
            </button>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-orange-500/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
