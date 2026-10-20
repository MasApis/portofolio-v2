import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Labs",
  description: "Small, self-contained tools I build to solve my own problems.",
};

/**
 * Placeholder until phase F7, which adds the storage adapter and the first
 * working tool. Listed here so the section is not a dead end.
 */
const planned = [
  {
    title: "Tool placeholder",
    description:
      "A small utility for something I keep re-doing by hand. Replaced with a real tool in a later phase.",
  },
  {
    title: "Tool placeholder",
    description:
      "Another one. Keep these tiny — a tool that does one thing well beats a suite that does five things badly.",
  },
];

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <PageHeader
        title="Labs"
        description="Small, self-contained tools I build to solve my own problems."
      />

      <div className="mt-12 space-y-5">
        {planned.map((tool) => (
          <Card key={tool.title}>
            <CardTitle>{tool.title}</CardTitle>
            <CardDescription>{tool.description}</CardDescription>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-ink-muted">
        Nothing here works yet — the labs section is still being built.
      </p>
    </div>
  );
}
