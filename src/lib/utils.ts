import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names, resolving conflicting Tailwind utilities so
 * that the last one wins (e.g. `cn("p-2", "p-4")` returns `"p-4"`).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format an ISO date string for display, e.g. "Jan 15, 2026". */
export function formatDate(date: string, locale = "en-US") {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Read a public env var, falling back when it is unset or empty. */
export function envUrl(fallback: string) {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  return value && value.length > 0 ? value : fallback;
}
