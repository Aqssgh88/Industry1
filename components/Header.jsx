import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/Shirts/u2.png",
    description: "Elevate your style with our latest premium shirt designs."
  },
  {
    id: 2,
    image: "/Shirts/Factory2.png",
    description: "Experience comfort and fashion with our new casual wear."
  }
];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className=" h-[60vh] sm:h-screen overflow-hidden">


      {/* ✅ Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="relative w-full h-[100vh]">
            <section className="relative w-full h-[60vh] sm:h-[100vh] overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.description}
                fill
                priority={index === 0}
                className="object-cover sm:object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </section>

            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      ))}

      {/* ✅ Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* ✅ Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${index === currentSlide
              ? "bg-white"
              : "bg-white/50 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;
