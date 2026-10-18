import { Carousel } from "./carousel/carousel-context";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function AboutUsSection() {
  return (
    <section id="about" className=" bg-white shrink scroll-mt-[var(--header)]">
      <div className="grid grid-cols-2 h-full">
        <div className="h-full flex flex-col gap-8 p-32 justify-center">
          <SectionSmallHeader>About Us</SectionSmallHeader>
          <H2>Thoughtful hospitality, kept simple.</H2>
          <div className="flex flex-col gap-8 text-neutral-600">
            <div>
              We love sharing our little corner of Coeur d’Alene and genuinely
              enjoy meeting our guests. We’re always happy to say hello, share
              local suggestions, or help make your visit a little more special.
            </div>
            <div>
              If you feel like being social, you’re warmly invited to join us
              for a visit on our back patio. And when you’d rather settle in and
              enjoy your own space, we’ll make sure you have all the privacy you
              want or need.
            </div>
          </div>
        </div>
        <Carousel>
          <Carousel.Slider>
            <Carousel.Slide
              styling={{
                container: "max-h-full min-h-[calc(100dvh-var(--header)+4px)]",
              }}
            >
              <img src="/photos/selfie.jpg" className="object-fill size-full" />
            </Carousel.Slide>
          </Carousel.Slider>
        </Carousel>
      </div>
    </section>
  );
}
