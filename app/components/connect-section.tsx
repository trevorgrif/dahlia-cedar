import { ConnectForm } from "./connect-form";
import { H1 } from "./header-1";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";
import { ViewAvailabilityButton } from "./view-availability-button";

export function ConnectSection() {
  return (
    <section id="connect">
      <div className="p-32 grid grid-cols-2 gap-8 bg-amber-100">
        <div className="flex flex-col justify-center gap-8">
          <SectionSmallHeader>Connect with us</SectionSmallHeader>
          <H2>Let's plan your stay.</H2>
          <div className="text-neutral-400">
            Have questions about the Garden Apartment or an upcoming visit? Send
            us a note—we’d be happy to help.
          </div>
        </div>
        <ConnectForm />
      </div>
      <div className="p-32 bg-green-800">
        <div className="flex flex-col justify-center items-center gap-8">
          <SectionSmallHeader>Stay with us</SectionSmallHeader>
          <H1>Plan your stay.</H1>
          <div className="text-white">
            View available dates, current pricing and reservation details
            through Airbnb.
          </div>
          <ViewAvailabilityButton />
        </div>
      </div>
    </section>
  );
}
