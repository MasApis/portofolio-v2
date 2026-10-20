import type { Metadata } from "next";

import { AboutPreview } from "@/components/sections/about-preview";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";

export const metadata: Metadata = {
  description:
    "Fullstack developer focused on building clean, fast, and maintainable web systems.",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <Hero />

      <div className="space-y-16 border-t border-line-soft pt-16">
        <AboutPreview />
      </div>

      <div className="border-t border-line-soft pt-16">
        <ProjectsPreview />
      </div>

      <div className="border-t border-line-soft pt-16">
        <Contact />
      </div>
    </div>
  );
}
