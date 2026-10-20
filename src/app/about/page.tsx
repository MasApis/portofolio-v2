import type { Metadata } from "next";

import { Experience } from "@/components/sections/experience";
import { PageHeader, Section } from "@/components/sections/section";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site.config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}, a ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <PageHeader title="About me" description={siteConfig.bio} />

      <Section title="What I do">
        <div className="space-y-4 text-ink-body">
          <p>
            I build web software end to end: from the data model and API up
            through the interface. I care about the parts that are easy to skip
            — clear naming, sensible defaults, and documentation that stays
            accurate.
          </p>
          <p>
            Most of what I know I learned by building. I like small tools that
            solve a real problem, and I like understanding why something works
            rather than just copying a snippet that happened to work.
          </p>
        </div>
      </Section>

      <Section title="Experience">
        <Experience />
      </Section>

      <Section title="Skills">
        <div className="space-y-6">
          {siteConfig.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium tracking-wide text-ink-muted uppercase">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Currently">
        <ul className="space-y-3 text-ink-body">
          <li className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 size-1 shrink-0 rounded-full bg-ink-muted"
            />
            <span>
              Based in {siteConfig.location}, working remotely and open to new
              opportunities.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 size-1 shrink-0 rounded-full bg-ink-muted"
            />
            <span>
              Learning in public — writing about what I build in the blog.
            </span>
          </li>
          <li className="flex gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 size-1 shrink-0 rounded-full bg-ink-muted"
            />
            <span>
              Always happy to talk about well-written software and useful side
              projects.
            </span>
          </li>
        </ul>
      </Section>
    </div>
  );
}
