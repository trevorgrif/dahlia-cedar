import type { PropsWithChildren } from "react";

export function SectionSmallHeader({ children }: PropsWithChildren) {
  return (
    <div className="text-accent-2 italic font-georgia text-2xl">{children}</div>
  );
}
