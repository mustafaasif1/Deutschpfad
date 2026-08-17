import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { isExternalHref, toPath } from "@/lib/href";

type Props = {
  to: string;
  className?: string;
  children: ReactNode;
  "aria-current"?: "page" | undefined;
  "data-filter"?: string;
  "data-nav"?: string;
};

export function AppLink({ to, className, children, ...rest }: Props) {
  const href = toPath(to);
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
