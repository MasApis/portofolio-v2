import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Heading level for accessibility. Default is h2. */
  as?: "h1" | "h2";
};

export function Section({
  id,
  title,
  description,
  children,
  className,
  as: Heading = "h2",
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16", className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <Heading className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </Heading>
          )}
          {description && (
            <p className="mt-2 max-w-2xl text-ink-body">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

/** Page-level heading block used by every non-home route. */
export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="border-b border-line-soft py-14">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-2xl text-lg text-ink-body">{description}</p>
      )}
    </header>
  );
}
