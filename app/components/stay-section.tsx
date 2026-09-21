import { H1 } from "./header-1";
import { ViewAvailabilityButton } from "./view-availability-button";

export function StaySection() {
  return (
    <section
      id="stay"
      className="relative bg-neutral-400 h-[calc(100dvh-4rem)] text-white overflow-clip"
    >
      <img src="/photos/garden_view.jpg" className="relative top-0 left-0" />

      <div className="absolute bottom-24 left-24 flex flex-col gap-4 text-pretty bg-white/1 p-8 rounded-sm backdrop-blur-xs border border-accent-1/20">
        <div className="uppercase font-mono">
          A private garden stay in Coeur d'Alene Idaho
        </div>
        <div className="flex flex-col">
          <H1>The Garden</H1>
          <H1>Apartment</H1>
        </div>
        <ViewAvailabilityButton className="w-fit bg-neutral" />
      </div>
    </section>
  );
}
