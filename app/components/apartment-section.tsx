import { FeatureTable } from "./feature-table";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";
import { ViewAvailabilityButton } from "./view-availability-button";

export function ApartmentSection() {
  return (
    <section id="apartment" className="bg-white">
      <div className="grid grid-cols-[55%_45%]">
        <span className="outline flex flex-col gap-8 justify-center p-16">
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
        <img src="/photos/balcony.jpg" />
      </div>
    </section>
  );
}
