'use client';

import { useEffect, useRef, useCallback, useMemo } from 'react';

export default function Carousel() {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  
  const carouselImages = useMemo(() => [
    { src: "img1.webp", alt: "Fotografía artística 1" },
    { src: "img2.webp", alt: "Fotografía artística 2" },
    { src: "img3.webp", alt: "Fotografía artística 3" },
    { src: "img4.webp", alt: "Fotografía artística 4" },
    { src: "img5.webp", alt: "Fotografía artística 5" },
    { src: "img6.webp", alt: "Fotografía artística 6" },
  ], []);

  const renderCarouselItems = useCallback((keyPrefix: string) => {
    return carouselImages.map((image, index) => (
      <div
        key={`${keyPrefix}-${index}`}
        className="carousel-item flex-shrink-0 group"
      >
        <div className="carousel-item-inner relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            className="carousel-image select-none pointer-events-none grayscale h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 group-active:grayscale-0 group-active:scale-105"
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        </div>
      </div>
    ));
  }, [carouselImages]);

  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;

    let currentOffset = 0;
    let animationId: number;
    let isPaused = false;
    const scrollStep = 0.5;
    const singleSetWidth = container.scrollWidth / 2;

    const autoScroll = () => {
      if (!isPaused) {
        currentOffset += scrollStep;
        
        if (currentOffset >= singleSetWidth) {
          currentOffset = 0;
        }
        
        container.style.transform = `translateX(-${currentOffset}px)`;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    // Funciones para pausar/reanudar
    const pauseAnimation = () => {
      isPaused = true;
    };

    const resumeAnimation = () => {
      isPaused = false;
    };

    // Iniciar la animación
    animationId = requestAnimationFrame(autoScroll);

    // Eventos para desktop (hover)
    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    // Eventos para móviles (touch)
    container.addEventListener('touchstart', pauseAnimation, { passive: true });
    container.addEventListener('touchend', resumeAnimation, { passive: true });
    container.addEventListener('touchcancel', resumeAnimation, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
      container.removeEventListener('touchstart', pauseAnimation);
      container.removeEventListener('touchend', resumeAnimation);
      container.removeEventListener('touchcancel', resumeAnimation);
    };
  }, []);

  return (
    <div className="carousel-wrapper w-full max-w-[720px] mx-auto overflow-hidden py-2 md:py-4">
      <div
        ref={carouselContainerRef}
        className="carousel-track flex gap-3 md:gap-4 will-change-transform"
          style={{ width: 'max-content' }}
      >
        {renderCarouselItems('set1')}
        {renderCarouselItems('set2')}
      </div>
    </div>
  );
}