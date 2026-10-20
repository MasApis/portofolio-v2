import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/section";
import { PrintButton } from "@/components/ui/print-button";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae of ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function CvPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <PageHeader
        title="Curriculum Vitae"
        description={`${siteConfig.role} · ${siteConfig.location}`}
      />

      <div className="mt-8 flex flex-wrap gap-3 print:hidden">
        <PrintButton />
      </div>

      <div className="cv-body mt-12 space-y-10">
        <section>
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
            Summary
          </h2>
          <p className="mt-3 text-ink-body">{siteConfig.bio}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
            Experience
          </h2>
          <ol className="mt-4 space-y-6">
            {siteConfig.experience.map((item) => (
              <li key={`${item.company}-${item.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-semibold text-ink">{item.role}</h3>
                  <p className="text-sm text-ink-muted">{item.period}</p>
                </div>
                <p className="mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                  {item.company}
                </p>
                <ul className="mt-2 space-y-1.5">
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
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
            Skills
          </h2>
          <dl className="mt-4 space-y-3">
            {siteConfig.skills.map((group) => (
              <div key={group.category} className="flex gap-3">
                <dt className="w-28 shrink-0 font-medium text-ink">
                  {group.category}
                </dt>
                <dd className="text-ink-body">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-1.5 text-ink-body">
            <li>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-700 hover:underline dark:text-brand-300"
              >
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.socials.github && (
              <li>
                GitHub:{" "}
                <a
                  href={`https://github.com/${siteConfig.socials.github}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand-700 hover:underline dark:text-brand-300"
                >
                  {siteConfig.socials.github}
                </a>
              </li>
            )}
            <li>Location: {siteConfig.location}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
