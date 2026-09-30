import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router";

export function HeaderTag({
  children,
  ...rest
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <Link
      className="text-base text-neutral py-2 border-b border-transparent hover:border-accent-1 transition-colors"
      to={rest.href ?? ""}
      {...rest}
    >
      {children}
    </Link>
  );
}
