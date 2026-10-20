import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-sunken text-ink-body border-line-soft",
  brand:
    "bg-brand-50 text-brand-800 border-brand-200 dark:bg-brand-950 dark:text-brand-200 dark:border-brand-800",
} as const;

export type BadgeProps = ComponentProps<"span"> & {
  tone?: keyof typeof tones;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5",
        "text-xs font-medium whitespace-nowrap",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
