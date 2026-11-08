import { Carousel } from "./carousel/carousel-context";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

const photos = [
  "flowers_1",
  "flowers_2",
  "fire_1",
  "fire_2",
  "flowers_3",
  "flowers_4",
  "flowers_5",
  "flowers_6",
  "flowers_7",
  "pond",
  "sauna",
  "spa",
  "treehouse",
];

export function GardenSection() {
  return (
    <section id="garden" className="scroll-mt-(--header)">
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] h-full">
        {/* Mobile: photos on top with a fixed aspect ratio. Desktop: left column. */}
        <div className="relative order-2 md:order-0 aspect-4/3 md:aspect-auto">
          <div className="absolute inset-0">
            <Carousel>
              <Carousel.Slider>
                {photos.map((name) => (
                  <Carousel.Slide key={name}>
                    <img
                      src={`/photos/garden/${name}.jpg`}
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

        <div className="bg-primary-2 flex flex-col justify-center items-center gap-6 md:gap-8 px-6 py-16 md:px-8 md:py-32 md:h-[calc(100dvh-var(--header)+4px)]">
          <SectionSmallHeader>Just beyond your door</SectionSmallHeader>
          <H2
            styling={{
              container: "text-white text-4xl md:text-6xl text-center",
            }}
          >
            Room to slow down.
          </H2>
          <div className="text-white w-full max-w-xl text-pretty text-center leading-7 md:leading-8">
            You’re invited to explore the shared garden, gather around the fire
            pit on the flagstone patio, climb up into the treehouse and enjoy
            the hammock chairs, unwind in the hot tub or sauna, or find a quiet
            bench beneath the trees.
          </div>
        </div>
      </div>
    </section>
  );
}
