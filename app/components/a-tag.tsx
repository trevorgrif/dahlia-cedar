import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

/**
 * Progressively enhanced <a> tag
 * @param param0
 * @returns
 */
export function A({
  children,
  ...rest
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <a {...rest}>{children}</a>;
}
