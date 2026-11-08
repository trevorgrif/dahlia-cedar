import { Carousel } from "./carousel/carousel-context";
import { FeatureTable } from "./feature-table";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";
import { ViewAvailabilityButton } from "./view-availability-button";

const photos = [
  "balcony_1",
  "bathroom_1",
  "bathroom_2",
  "balcony_2",
  "living_room_1",
  "living_room_2",
  "living_room_3",
  "living_room_4",
  "shelves",
  "kitchen_1",
  "bedroom_1",
  "bedroom_2",
];

export function ApartmentSection() {
  return (
    <section id="apartment" className="bg-white shrink scroll-mt-(--header)">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:max-h-min">
        <span className="flex flex-col gap-6 md:gap-8 justify-center px-6 py-10 md:px-16 md:py-8 h-fit">
          <SectionSmallHeader>The Garden Apartment</SectionSmallHeader>
          <div className="flex flex-col text-3xl md:text-4xl">
            <H2>Thoughtful comfort.</H2>
            <H2>Genuine hospitality.</H2>
          </div>
          <div className="text-neutral-600">
            Tucked behind our home, this private 500-square-foot guesthouse is
            thoughtfully prepared for an easy, comfortable stay—with downtown
            Coeur d’Alene, the lake, freeway access, and North Idaho trails all
            within easy reach.
          </div>
          <FeatureTable />
          <ViewAvailabilityButton className="w-full md:w-fit text-neutral" />
        </span>

        {/* Mobile: photos on top with a fixed aspect ratio. Desktop: right column. */}
        <div className="relative aspect-4/3 md:aspect-auto">
          <div className="absolute inset-0">
            <Carousel>
              <Carousel.Slider>
                {photos.map((name) => (
                  <Carousel.Slide key={name}>
                    <img
                      src={`/photos/apartment/${name}.jpg`}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover"
                    />
                  </Carousel.Slide>
                ))}
              </Carousel.Slider>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
