import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function AboutUsSection() {
  return (
    <section id="about" className="grid grid-cols-2">
      <div className="flex flex-col gap-8 p-32 justify-center">
        <SectionSmallHeader>About Us</SectionSmallHeader>
        <H2>Thoughtful hospitality, kept simple.</H2>
        <div className="flex flex-col gap-8 text-neutral-400">
          <div>
            We love sharing our little corner of Coeur d’Alene and genuinely
            enjoy meeting our guests. We’re always happy to say hello, share
            local suggestions, or help make your visit a little more special.
          </div>
          <div>
            If you feel like being social, you’re warmly invited to join us for
            a visit on our back patio. And when you’d rather settle in and enjoy
            your own space, we’ll make sure you have all the privacy you want or
            need.
          </div>
        </div>
      </div>
      <img src="/photos/selfie.jpg" />
    </section>
  );
}
