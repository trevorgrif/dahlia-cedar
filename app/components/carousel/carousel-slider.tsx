import { cloneElement, use, useEffect, type PropsWithChildren } from "react";
import { CarouselContext } from "./carousel-context";

export function CarouselSlider({ children }: PropsWithChildren) {
  const { setActive } = use(CarouselContext);
  if (!Array.isArray(children)) return null;
  const max = children.length;

  const _children = children.map((child, index) =>
    cloneElement(child, { ...child.props, index, key: index }),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % max);
    }, 5_000);

    return () => clearInterval(id);
  }, [setActive]);

  return <div className="relative grid overflow-hidden">{_children}</div>;
}
