import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies of things I have built, and the decisions behind them.",
};

/**
 * Placeholder list until the MDX loader lands in F3. Kept as a plain array
 * so swapping in the loader does not change the markup below.
 */
const projects = [
  {
    title: "Project Alpha",
    status: "active",
    year: "2026",
    description:
      "A short case study template. Replace this with a project that shows how you think.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Beta",
    status: "active",
    year: "2025",
    description:
      "Another placeholder. Lead with the problem, then the decision you made.",
    stack: ["React", "REST APIs", "SQL"],
  },
  {
    title: "Project Gamma",
    status: "archived",
    year: "2024",
    description:
      "A third placeholder. Finish with the result and what you would do differently.",
    stack: ["Node.js", "Docker"],
  },
];

const statusTone = {
  active: "brand",
  archived: "neutral",
} as const;

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <PageHeader
        title="Projects"
        description="Case studies of things I have built, and the decisions behind them."
      />

      <ul className="mt-12 space-y-5">
        {projects.map((project) => (
          <li key={project.title}>
            <Card className="hover:border-brand-300 dark:hover:border-brand-700">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <CardTitle>{project.title}</CardTitle>
                  <p className="mt-1 text-sm text-ink-muted">{project.year}</p>
                </div>
                <Badge
                  tone={statusTone[project.status as keyof typeof statusTone]}
                >
                  {project.status}
                </Badge>
              </div>

              <CardDescription>{project.description}</CardDescription>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
