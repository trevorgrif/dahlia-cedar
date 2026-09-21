import type { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="font-georgia text-8xl">{children}</h1>;
}
