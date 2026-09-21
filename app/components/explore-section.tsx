import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function ExploreSection() {
  return (
    <section id="explore" className="grid grid-cols-[55%_45%] ">
      <div className="bg-green-900 flex flex-col gap-8 p-32">
        <SectionSmallHeader>Explore Couer d'Alene</SectionSmallHeader>
        <H2>Some of Our Favorites</H2>
        <div className="text-white">
          A few of the restaurants, coffee shops, trails, and local places we
          genuinely enjoy—and love sharing with our guests.
        </div>
      </div>
      <img src="/photos/cda.jpg" />
    </section>
  );
}
