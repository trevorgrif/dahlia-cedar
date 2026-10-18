import { ConnectForm } from "./connect-form";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative  shrink w-full scroll-mt-[var(--header)] overflow-clip"
    >
      <img
        src="/photos/apartment/balcony_2.jpg"
        className="object-cover w-full h-164 object-[0%_55%]"
      />
      <div className="absolute h-164 top-0 w-full p-32 grid grid-cols-2 gap-8 bg-primary-2/70 backdrop-blur-xs">
        <div className="flex flex-col justify-center gap-8">
          <SectionSmallHeader>Connect with us</SectionSmallHeader>
          <H2 styling={{ container: "text-white" }}>Let's plan your stay.</H2>
          <div className="text-neutral-300">
            Have questions about the Garden Apartment or an upcoming visit? Send
            us a note—we’d be happy to help.
          </div>
        </div>
        <ConnectForm />
      </div>
    </section>
  );
}
