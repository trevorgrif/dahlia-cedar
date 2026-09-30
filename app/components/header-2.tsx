import { cn } from "cn";
import type { PropsWithChildren } from "react";

interface H2Styling {
  container?: string;
}

interface H2Props {
  styling?: H2Styling;
}

export function H2({
  children,
  styling: { container = "" } = {},
}: PropsWithChildren<H2Props>) {
  const _styling = {
    container: cn("font-georgia text-4xl text-black", container),
  };
  return <h2 className={_styling.container}>{children}</h2>;
}
