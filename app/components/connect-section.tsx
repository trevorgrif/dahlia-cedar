import { ConnectForm } from "./connect-form";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function ConnectSection() {
  return (
    <section id="connect">
      <div className="p-32 grid grid-cols-2 gap-8 bg-[#efdcb6]">
        <div className="flex flex-col justify-center gap-8">
          <SectionSmallHeader>Connect with us</SectionSmallHeader>
          <H2>Let's plan your stay.</H2>
          <div className="text-neutral-600">
            Have questions about the Garden Apartment or an upcoming visit? Send
            us a note—we’d be happy to help.
          </div>
        </div>
        <ConnectForm />
      </div>
    </section>
  );
}
