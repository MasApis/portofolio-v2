import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-900 shadow-sm",
  secondary:
    "bg-raised text-ink border border-line hover:border-brand-400 hover:text-brand-700 dark:hover:text-brand-300",
  ghost: "text-ink-body hover:text-ink hover:bg-sunken",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

type BaseProps = StyleProps & {
  children: React.ReactNode;
};

type InternalProps = {
  external?: boolean;
};

function classes({ variant, size, className }: StyleProps) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
    "transition-colors duration-150",
    variants[variant ?? "primary"],
    sizes[size ?? "md"],
    className,
  );
}

/** Link that looks like a button and navigates within the app. */
export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...props
}: BaseProps & Omit<ComponentProps<typeof Link>, keyof BaseProps>) {
  return (
    <Link className={classes({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
}

/** Link that looks like a button and opens in a new tab. */
export function ExternalLink({
  variant,
  size,
  className,
  children,
  ...props
}: BaseProps &
  InternalProps &
  Omit<ComponentProps<"a">, keyof BaseProps | keyof InternalProps>) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={classes({ variant, size, className })}
      {...props}
    >
      {children}
    </a>
  );
}
