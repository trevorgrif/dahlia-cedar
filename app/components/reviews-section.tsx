import { useRef } from "react";
import { useLoaderData } from "react-router";
import type { MainLoader } from "~/routes/_index";
import { useAutoScroll } from "./hooks/use-auto-scroll";
import { ReviewCard } from "./review-card";
import { SectionSmallHeader } from "./section-small-header";
import { H2 } from "./header-2";
import { Star } from "lucide-react";
import { ReviewOverviewVerbose } from "./review-overview";

export function ReviewsSection() {
  const { reviews } = useLoaderData<MainLoader>();
  const scrollerRef = useRef<HTMLDivElement>(null);
  useAutoScroll(scrollerRef, 32);

  if (!reviews.length) return null;

  return (
    <section id="reviews" className="bg-[#fff8e9] scroll-mt-(--header) py-10">
      <div className="flex flex-col md:max-h-min">
        <span className="flex flex-col gap-6 md:gap-8 justify-center px-6 py-10 md:px-16 md:py-8 h-fit">
          <SectionSmallHeader>Guest Reviews</SectionSmallHeader>
          <div className="flex flex-col text-3xl md:text-4xl">
            <H2>A peaceful place to unwind.</H2>
          </div>
        </span>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Rendered twice so the loop is seamless */}
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 gap-4"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {reviews.map((review) => (
                <ReviewCard
                  key={`${copy}-${review.id}`}
                  review={review}
                  focusable={copy === 0}
                />
              ))}
            </div>
          ))}
        </div>
        <ReviewOverviewVerbose />
      </div>
    </section>
  );
}
