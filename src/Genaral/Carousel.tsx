import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { person_name } from "./secret";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [],
  );

  const [_autoplay, setAutoplay] = useState<any>(null);

  const slides = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/41/20/ea/4120ea8a5c82715a396fef96382c921d.jpg",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/1200x/3d/ef/55/3def558579612a517065a7c48310e918.jpg",
    },
  ];

  // Autoplay function
  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      emblaApi.scrollNext();
    };

    const interval = setInterval(play, 3000); // 3s smooth
    setAutoplay(interval);

    return () => {
      clearInterval(interval);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-7xl mx-auto h-[80vh] w-full">
      <div className="w-full h-full overflow-hidden shadow-2xl" ref={emblaRef}>
        <div className="flex w-full h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative h-full w-[100vw]"
            >
              <h1>{slide.id}</h1>
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-[100vw] h-full object-cover transform hover:scale-105 transition duration-500"
              />

              {/* Overlay Content Center */}
              {/* Overlay Content Center */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <div className="text-center max-w-4xl px-6">
                  {/* ✅ FIXED — Vashikaran removed */}
                  <h2 className="text-5xl md:text-7xl font-extrabold montserrat text-yellow-300 drop-shadow-lg mb-4">
                    Trusted Vedic Astrologer
                  </h2>

                  {/* Pandit Name — unchanged, already fine */}
                  <h3 className="text-3xl md:text-5xl font-bold montserrat text-pink-400 mb-6 drop-shadow-md">
                    Pandit <span className="text-white">{person_name}</span>
                  </h3>

                  {/* ✅ FIXED — removed "Vashikaran" and "result-oriented" */}
                  <p className="text-lg md:text-2xl text-gray-100 poppins leading-relaxed mb-3">
                    Traditional astrology guidance to restore love, attract
                    harmony, and solve complex life challenges with trusted
                    consultation.
                  </p>
                  <p className="text-lg md:text-2xl text-gray-100 poppins leading-relaxed">
                    Decades of experience helping people worldwide with safe,
                    ethical, and spiritually grounded astrology solutions.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full p-3 shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={3} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gradient-to-l from-purple-600 to-pink-500 text-white rounded-full p-3 shadow-lg hover:scale-110 transition"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={3} />
      </button>
    </div>
  );
}
