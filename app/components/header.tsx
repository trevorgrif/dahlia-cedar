import type { HTMLAttributes, PropsWithChildren } from "react";
import { FullLogo } from "./logo";
import { ViewAvailabilityButton } from "./view-availability-button";

export function Header({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <header
      {...rest}
      className="z-10 sticky top-0 h-20 bg-primary-2 py-4 px-8 flex justify-center gap-12 items-center border-b-4 border-accent-2"
    >
      <FullLogo styling={{ container: "mr-auto" }} />
      {children}
      <ViewAvailabilityButton className="ml-auto" />
    </header>
  );
}
