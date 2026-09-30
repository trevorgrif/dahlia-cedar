import { Carousel } from "./carousel/carousel-context";
import { H1 } from "./header-1";
import { ViewAvailabilityButton } from "./view-availability-button";

export function BannerSection() {
  return (
    <section className="relative h-[calc(100dvh-var(--header)+4px)] w-full text-white overflow-clip">
      <Carousel>
        <Carousel.Slider>
          <Carousel.Slide
            styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
          >
            <img
              src="/photos/landing/balcony.jpg"
              className="object-cover size-full object-[0%_25%]"
            />
          </Carousel.Slide>
          <Carousel.Slide
            styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
          >
            <img
              src="/photos/landing/entrance.jpg"
              className="object-cover size-full"
            />
          </Carousel.Slide>
        </Carousel.Slider>
      </Carousel>

      <div className="absolute bottom-24 left-24 flex flex-col gap-4 text-pretty bg-white/1 p-8 rounded-sm backdrop-blur-xs border border-accent-1/20">
        <div className="uppercase font-mono">
          A private garden stay in Coeur d'Alene Idaho
        </div>
        <div className="flex flex-col">
          <H1>The Garden</H1>
          <H1>Apartment</H1>
        </div>
        <ViewAvailabilityButton className="w-fit bg-neutral" />
      </div>
    </section>
  );
}
