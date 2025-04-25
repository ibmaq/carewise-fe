"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Testimonial of some doctor comes here. This will be a slider",
      name: "Name of the Doctor",
      designation: "Designation",
      image: "/images/cta-image.webp",
    },
    {
      quote: "Testimonial of some doctor comes here. This will be a slider",
      name: "Name of the Doctor",
      designation: "Designation",
      image: "/images/cta-image.webp",
    },
    {
      quote: "Testimonial of some doctor comes here. This will be a slider",
      name: "Name of the Doctor",
      designation: "Designation",
      image: "/images/cta-image.webp",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalTime = 3000; // 3 seconds per slide
  const sliderRef = useRef(null);

  // Auto-play function with pause on hover
  useEffect(() => {
    // Only run autoplay if not paused
    if (!isPaused) {
      const autoplay = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
      }, intervalTime);

      // Clear interval on component unmount or when paused
      return () => clearInterval(autoplay);
    }
  }, [isPaused, testimonials.length]);

  // Handle manual navigation
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-c-green py-10 testimonials">
      <div className="c-container-px">
        <div
          className="flex flex-col gap-10 items-center"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex max-md:flex-col gap-8 items-center">
            <Image
              src={testimonials[currentSlide].image}
              alt="testimonial-image"
              width={438}
              height={292}
            />
            <div className="flex flex-col gap-10">
              <h3 className="text-c-text-2 text-5xl/tight font-montserrat font-semibold italic">
                "{testimonials[currentSlide].quote}"
              </h3>
              <div className="flex flex-col gap-2">
                <p className="font-montserrat text-lg/1.4 font-bold">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-base/1.4">
                  {testimonials[currentSlide].designation}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`size-4 shrink-0 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-black"
                    : "bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
