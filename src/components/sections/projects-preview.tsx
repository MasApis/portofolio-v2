import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

/**
 * Placeholder projects shown until the MDX loader lands in F3. Keeping them
 * in a plain array means this component can switch to the loader later
 * without changing its markup.
 */
const featured = [
  {
    title: "Project Alpha",
    description:
      "A short case study template. Replace this with a project that shows how you think.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Beta",
    description:
      "Another placeholder. Lead with the problem, then the decision you made.",
    stack: ["React", "REST APIs", "SQL"],
  },
  {
    title: "Project Gamma",
    description:
      "A third placeholder. Finish with the result and what you would do differently.",
    stack: ["Node.js", "Docker"],
  },
];

export function ProjectsPreview() {
  return (
    <div>
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected work
        </h2>
        <Link
          href="/projects"
          className="inline-flex min-h-11 shrink-0 items-center text-sm text-brand-700 transition-colors hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
        >
          View all →
        </Link>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <li key={project.title}>
            <Card className="h-full hover:border-brand-300 dark:hover:border-brand-700">
              <CardTitle>{project.title}</CardTitle>
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

      <div className="mt-8">
        <ButtonLink href="/projects" variant="secondary">
          Browse all projects
        </ButtonLink>
      </div>
    </div>
  );
}
