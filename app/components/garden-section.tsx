import { Carousel } from "./carousel/carousel-context";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function GardenSection() {
  return (
    <section id="garden">
      <div className="bg-primary-2 flex flex-col justify-center py-32 items-center gap-8">
        <SectionSmallHeader>Just beyond your door</SectionSmallHeader>
        <H2 styling={{ container: "text-white text-6xl" }}>
          Room to slow down.
        </H2>
        <div className="text-white w-xl pretty text-center leading-8">
          You’re invited to explore the shared garden, gather around the fire
          pit on the flagstone patio, climb up into the treehouse and enjoy the
          hammock chairs, unwind in the hot tub or sauna, or find a quiet bench
          beneath the trees.
        </div>
      </div>
      <div className="h-220 w-full overflow-clip">
        <Carousel>
          <Carousel.Slider>
            <Carousel.Slide
              styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
            >
              <img
                src="/photos/garden/flowers_1.jpg"
                className="object-fill size-full"
              />
            </Carousel.Slide>
            <Carousel.Slide
              styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
            >
              <img
                src="/photos/garden/flowers_2.jpg"
                className="object-fill size-full"
              />
            </Carousel.Slide>
            <Carousel.Slide
              styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
            >
              <img
                src="/photos/garden/pond.jpg"
                className="object-fill size-full"
              />
            </Carousel.Slide>
            <Carousel.Slide
              styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
            >
              <img
                src="/photos/garden/sauna.jpg"
                className="object-fill size-full"
              />
            </Carousel.Slide>
            <Carousel.Slide
              styling={{ container: "h-[calc(100dvh-var(--header)+4px)]" }}
            >
              <img
                src="/photos/garden/spa.jpg"
                className="object-fill size-full"
              />
            </Carousel.Slide>
          </Carousel.Slider>
        </Carousel>
      </div>
    </section>
  );
}
