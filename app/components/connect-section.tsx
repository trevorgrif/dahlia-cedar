import { ConnectForm } from "./connect-form";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative shrink w-full scroll-mt-(--header) overflow-clip"
    >
      <img
        src="/photos/apartment/balcony_2.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-[0%_55%]"
      />
      <div className="relative w-full min-h-164 px-6 py-12 md:p-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary-2/70 backdrop-blur-xs">
        <div className="flex flex-col justify-center gap-6 md:gap-8">
          <SectionSmallHeader>Connect with us</SectionSmallHeader>
          <H2 styling={{ container: "text-white text-3xl md:text-4xl" }}>
            Ready to slow down?
          </H2>
          <H2 styling={{ container: "text-white text-3xl md:text-4xl" }}>
            Let's plan your stay for two.
          </H2>
        </div>
        <ConnectForm />
      </div>
    </section>
  );
}
