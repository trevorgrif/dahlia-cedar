import { Suspense } from "react";
import { Carousel } from "./carousel/carousel-context";
import { H1 } from "./header-1";
import { ViewAvailabilityButton } from "./view-availability-button";
import { ReviewOverview } from "./review-overview";

const SLIDE_HEIGHT = "h-[calc(100dvh-var(--header)+4px)]";

const slides = [
  { src: "/photos/landing/balcony.jpg", className: "object-[0%_25%]" },
  { src: "/photos/landing/entrance.jpg" },
  { src: "/photos/landing/garden_1.png" },
  { src: "/photos/landing/garden_2.jpg" },
  { src: "/photos/landing/hottub.jpg" },
  { src: "/photos/landing/windows.jpg" },
];

export function BannerSection() {
  return (
    <section
      id="banner"
      className={`relative ${SLIDE_HEIGHT} w-full text-white overflow-clip`}
    >
      <Carousel>
        <Carousel.Slider>
          {slides.map(({ src, className = "" }) => (
            <Carousel.Slide key={src} styling={{ container: SLIDE_HEIGHT }}>
              <img
                src={src}
                alt=""
                className={`object-cover size-full ${className}`}
              />
            </Carousel.Slide>
          ))}
        </Carousel.Slider>
      </Carousel>

      {/* Mobile: full-width card pinned to the bottom. Desktop: floating card. */}
      <div className="absolute inset-x-4 bottom-6 md:inset-x-auto md:bottom-24 md:left-24 flex flex-col gap-3 md:gap-4 text-pretty bg-white/1 p-5 md:p-8 rounded-sm backdrop-blur-xs border border-accent-1/20">
        <div className="uppercase font-mono text-xs md:text-base">
          A private garden escape for two in Coeur d'Alene, Idaho
        </div>
        <div className="flex flex-col">
          <H1>Slow down,</H1>
          <H1>relax, and reset</H1>
        </div>
        <Suspense fallback={null}>
          <ReviewOverview />
        </Suspense>
        <ViewAvailabilityButton className="w-full md:w-fit bg-neutral" />
      </div>
    </section>
  );
}
