import type { PropsWithChildren } from "react";

export function H2({ children }: PropsWithChildren) {
  return <h2 className="font-georgia text-4xl">{children}</h2>;
}
