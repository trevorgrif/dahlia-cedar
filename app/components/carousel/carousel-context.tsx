import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { CarouselSlide } from "./carousel-slide";
import { CarouselSlider } from "./carousel-slider";

type CarouselContext = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

export const CarouselContext = createContext<CarouselContext>({
  active: 0,
  setActive: () => {},
});

export function Carousel({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);

  return (
    <CarouselContext value={{ active, setActive }}>{children}</CarouselContext>
  );
}

Carousel.Slider = CarouselSlider;
Carousel.Slide = CarouselSlide;
