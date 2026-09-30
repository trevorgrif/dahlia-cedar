import type { PropsWithChildren } from "react";
import { ChevronDown } from "lucide-react";
import { H2 } from "./header-2";
import { SectionSmallHeader } from "./section-small-header";

export function FAQSection() {
  return (
    <section id="faq" className="grid grid-cols-2 p-32 bg-[#fff8e9]">
      <div className="flex flex-col gap-8">
        <SectionSmallHeader>Good to know</SectionSmallHeader>
        <H2 styling={{ container: "text-5xl" }}>Frequently asked questions.</H2>
      </div>
      <div className="flex flex-col gap-8">
        <Details>
          <Summary>Is the apartment private</Summary>
          <Content>
            <p>
              Yes. The Garden Apartment is an entire private guesthouse with its
              own entrance. The backyard, garden, hot tub, sauna, fire pit and
              treehouse are shared with your hosts.
            </p>
          </Content>
        </Details>
        <Details>
          <Summary>Where do guest park?</Summary>
          <Content>
            <p>
              A reserved parking space is located in front of the wooden privacy
              gate. From there, a landscaped sidewalk leads to your private
              entrance.
            </p>
          </Content>
        </Details>
        <Details>
          <Summary>Can guest use the outdoor amenities?</Summary>
          <Content>
            <p>
              Yes. Guests are welcome to enjoy the hot tub, sauna, fire pit and
              treehouse. Because these are in shared areas, we simply ask that
              you let us know when you plan to use them so we can give you
              privacy.
            </p>
          </Content>
        </Details>
        <Details>
          <Summary>What time do I need to check-in and checkout?</Summary>
          <Content>
            <p>
              Check-in is at 3:00 PM or anytime afterward. Checkout is at 11:00
              AM.
            </p>
          </Content>
        </Details>
        <Details>
          <Summary>Is the apartment suitable for children?</Summary>
          <Content>
            <p>
              The apartment is not suitable for children because of the sleeping
              loft and stairs.
            </p>
          </Content>
        </Details>
      </div>
    </section>
  );
}

function Details({ children }: PropsWithChildren) {
  return (
    <details className="group flex flex-col gap-4 hover:cursor-pointer [interpolate-size:allow-keywords] details-content:h-0 details-content:overflow-hidden details-content:opacity-0 details-content:transition-[height,opacity,content-visibility] details-content:duration-300 details-content:ease-in-out details-content:transition-discrete open:details-content:h-auto open:details-content:opacity-100 motion-reduce:details-content:transition-none">
      {children}
    </details>
  );
}

function Summary({ children }: PropsWithChildren) {
  return (
    <summary className="text-black flex list-none items-center justify-between gap-4 text-lg font-georgia [&::-webkit-details-marker]:hidden">
      <span>{children}</span>
      <ChevronDown
        aria-hidden="true"
        className="size-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180 motion-reduce:transition-none text-accent-2"
      />
    </summary>
  );
}

function Content({ children }: PropsWithChildren) {
  return <div className="text-neutral-600">{children}</div>;
}
