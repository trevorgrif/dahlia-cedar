import { FeatureTable } from "./feature-table";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";
import { ViewAvailabilityButton } from "./view-availability-button";

export function OverviewSection() {
  return (
    <section id="overview" className="">
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
      <div className="bg-green-900 flex flex-col justify-center py-32 items-center gap-8">
        <SectionSmallHeader>Just beyond your door</SectionSmallHeader>
        <H2>Room to slow down.</H2>
        <div className="text-white w-xl pretty text-center leading-8">
          You’re invited to explore the shared garden, gather around the fire
          pit on the flagstone patio, climb up into the treehouse and enjoy the
          hammock chairs, unwind in the hot tub or sauna, or find a quiet bench
          beneath the trees.
        </div>
      </div>
      <div className="grid grid-cols-[65%_35%] h-160 overflow-clip">
        <img src="/photos/kitchen.jpg" />
        <img src="/photos/entrance_2.jpg" />
      </div>
    </section>
  );
}
