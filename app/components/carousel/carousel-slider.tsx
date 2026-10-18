import { cloneElement, use, useEffect, type PropsWithChildren } from "react";
import { CarouselContext } from "./carousel-context";

export function CarouselSlider({ children }: PropsWithChildren) {
  const { setActive } = use(CarouselContext);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % max);
    }, 5_000);

    return () => clearInterval(id);
  }, [setActive]);

  const is_array = Array.isArray(children);
  const max = is_array ? children.length : 1;
  const _children = is_array
    ? children.map((child, index) =>
        cloneElement(child, { ...child.props, index, key: index }),
      )
    : [children].map((child, index) =>
        cloneElement(child as any, {
          ...(child as any).props,
          index,
          key: index,
        }),
      );

  return (
    <div className="relative grid overflow-hidden h-full">{_children}</div>
  );
}
