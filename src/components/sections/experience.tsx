import { siteConfig } from "@/lib/site.config";

export function Experience() {
  return (
    <ol className="space-y-8">
      {siteConfig.experience.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative pl-6">
          <span
            aria-hidden="true"
            className="absolute top-2 left-0 size-2.5 rounded-full bg-brand-500 ring-4 ring-brand-100 dark:ring-brand-950"
          />

          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold text-ink">{item.role}</h3>
            <p className="text-sm text-ink-muted">{item.period}</p>
          </div>

          <p className="mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-300">
            {item.company}
          </p>

          <p className="mt-3 text-ink-body">{item.summary}</p>

          {item.highlights.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5 text-ink-body">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-ink-muted"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
