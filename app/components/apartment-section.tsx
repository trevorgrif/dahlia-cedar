import { Carousel } from "./carousel/carousel-context";
import { FeatureTable } from "./feature-table";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";
import { ViewAvailabilityButton } from "./view-availability-button";

export function ApartmentSection() {
  return (
    <section
      id="apartment"
      className="bg-white shrink scroll-mt-[var(--header)]"
    >
      <div className="grid grid-cols-[1.2fr_1fr] max-h-min">
        <span className="flex flex-col gap-8 justify-center px-16 py-8 h-fit 2xl:p-32">
          <SectionSmallHeader>The Garden Apartment</SectionSmallHeader>
          <div className="flex flex-col text-4xl">
            <H2>Thoughful comfort.</H2>
            <H2>Genuine hospitality.</H2>
          </div>
          <div className="text-neutral-600">
            Tucked behind our home, this private 500-square-foot guesthouse is
            thoughtfully prepared for an easy, comfortable stay—with downtown
            Coeur d’Alene, the lake, freeway access, and North Idaho trails all
            within easy reach.
          </div>
          <FeatureTable />
          <ViewAvailabilityButton className="w-fit text-neutral" />
        </span>
        <div className="relative">
          <div className="h-full asolute inset-0">
            <Carousel>
              <Carousel.Slider>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/balcony_1.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/balcony_2.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/balcony_3.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/bathroom_1.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/bathroom_2.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/living_room_1.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/living_room_2.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/living_room_3.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/living_room_4.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/shelves.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/kitchen_1.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/bedroom_1.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <img
                    src="/photos/apartment/bedroom_2.jpg"
                    className="absolute inset-0 size-full object-cover"
                  />
                </Carousel.Slide>
              </Carousel.Slider>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
