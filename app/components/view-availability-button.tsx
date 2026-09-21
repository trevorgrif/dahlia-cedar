import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { route_map } from "./routes";
import { Link } from "react-router";
import { cn } from "cn";

export function ViewAvailabilityButton({
  className,
  variant = "solid",
}: PropsWithChildren<{
  className?: string | undefined;
  variant?: "solid" | "ghost";
}>) {
  const _styling = {
    container: cn(
      {
        "px-2 py-1 bg-accent-2 hover:bg-accent-1 text-primary-2 rounded-sm":
          variant === "solid",
      },
      {
        "px-2 py-1 border-b-2 border-transparent hover:border-accent-2 text-primary-2 transition-color":
          variant === "ghost",
      },

      className,
    ),
  };

  return (
    <Link
      to={route_map._external.airbnb}
      target="_blank"
      rel="noopener noreferrer"
      className={_styling.container}
    >
      View Availability
    </Link>
  );
}
