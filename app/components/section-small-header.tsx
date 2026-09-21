import type { PropsWithChildren } from "react";

export function SectionSmallHeader({ children }: PropsWithChildren) {
  return <div className="text-accent-1 italic">{children}</div>;
}
