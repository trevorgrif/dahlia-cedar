import { use, type PropsWithChildren } from "react";
import { CarouselContext } from "./carousel-context";
import { cn } from "cn";

interface CarouselSlideStyling {
  container?: string;
}

interface CarouselSlide {
  index?: number;
  styling?: CarouselSlideStyling;
}

export function CarouselSlide({
  children,
  index = 0,
  styling: { container } = {},
}: PropsWithChildren<CarouselSlide>) {
  const { active } = use(CarouselContext);
  const _styling = {
    container: cn(
      "col-start-1 row-start-1 transition-all duration-2000 ease-in-out",
      { "opacity-100 translate-x-0": active === index },
      { "opacity-0  pointer-events-none": active < index },
      { "opacity-0  pointer-events-none": active > index },
      container,
    ),
  };

  return <div className={_styling.container}>{children}</div>;
}
