"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Any navigation closes the mobile menu. `pathname` is the trigger we
  // intentionally depend on; setOpen is a stable setter from useState.
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the intended trigger
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-line-soft bg-page/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={
                      isActive(pathname, item.href) ? "page" : undefined
                    }
                    className={cn(
                      "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                      isActive(pathname, item.href)
                        ? "text-brand-700 dark:text-brand-300"
                        : "text-ink-body hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg text-ink-body transition-colors hover:bg-sunken hover:text-ink sm:hidden"
          >
            {open ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.75"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.75"
                stroke="currentColor"
                className="size-5"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line-soft bg-page sm:hidden"
        >
          <ul className="mx-auto max-w-5xl px-6 py-2">
            {siteConfig.mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={
                    isActive(pathname, item.href) ? "page" : undefined
                  }
                  className={cn(
                    "block rounded-lg px-2 py-2.5 text-sm transition-colors",
                    isActive(pathname, item.href)
                      ? "text-brand-700 dark:text-brand-300"
                      : "text-ink-body hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
