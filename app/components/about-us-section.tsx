import { Carousel } from "./carousel/carousel-context";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function AboutUsSection() {
  return (
    <section id="about" className="bg-white shrink scroll-mt-(--header)">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] md:max-h-min md:min-h-180">
        <div className="flex flex-col gap-6 md:gap-8 px-6 py-10 md:px-32 md:py-16 justify-center">
          <SectionSmallHeader>About Us</SectionSmallHeader>
          <div className="flex flex-col gap-2">
            <H2>Thoughtful hospitality,</H2>
            <H2>kept simple.</H2>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 text-neutral-600 md:text-lg">
            Hello! We're Bobby and Brenda, your hosts. Since we live right here,
            help is just a message away, and your privacy always comes first.
            Come share a drink with us on the back patio, or keep to yourselves.
            We're happy either way. The garden is a true labor of love,
            especially in summer, when Bobby's dahlia obsession is in full
            bloom!
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
