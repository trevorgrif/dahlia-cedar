import { Carousel } from "./carousel/carousel-context";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function AboutUsSection() {
  return (
    <section id="about" className="bg-white shrink scroll-mt-(--header)">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:max-h-min">
        <div className="h-fit flex flex-col gap-6 md:gap-8 px-6 py-10 md:px-32 md:py-16 justify-center">
          <SectionSmallHeader>About Us</SectionSmallHeader>
          <H2 styling={{ container: "text-3xl md:text-5xl" }}>
            Thoughtful hospitality, kept simple.
          </H2>
          <div className="flex flex-col gap-6 md:gap-8 text-neutral-600">
            <div>We care for the details so you don't have to.</div>
          </div>
        </div>

        <div className="relative aspect-4/3 md:aspect-auto">
          <div className="absolute inset-0">
            <Carousel>
              <Carousel.Slider>
                <Carousel.Slide>
                  <img
                    src="/photos/selfie.jpg"
                    alt="Your hosts"
                    loading="lazy"
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
