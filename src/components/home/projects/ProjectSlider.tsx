"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function ProjectSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<any>([]);

  // Setup pagination behavior
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Buttons
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: any) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const slides = [
    "/assets/services/branding.jpg",
    "/assets/services/web.jpg",
    "/assets/services/social.jpg",
    "/assets/services/poster.jpg",
  ];

  return (
    <div className='relative w-full max-w-5xl mx-auto z-10 py-20' dir="ltr">
      {/* Carousel Container */}
      <div className='overflow-hidden rounded-2xl' ref={emblaRef}>
        <div className='flex'>
          {slides.map((src, index) => (
            <div
              key={index}
              className='min-w-full md:min-w-[50%] relative transition-all'>
              <Image
                width={300}
                height={300}
                src={src}
                alt={`Slide ${index + 1}`}
                className='w-full h-[350px] object-cover'
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Buttons - Bottom Left */}
      <div className='flex gap-2 mt-4'>
        {scrollSnaps.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-6 h-1 rounded transition-all ${
              index === selectedIndex
                ? "bg-my-white scale-110"
                : "bg-my-gray/80 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
