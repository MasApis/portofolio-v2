import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site.config";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Badge tone="brand">
        {siteConfig.availableForWork
          ? "Available for work"
          : "Open to opportunities"}
      </Badge>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
        Hi, I&apos;m {siteConfig.name}.
      </h1>

      <p className="mt-4 max-w-xl text-lg text-ink-body">
        {siteConfig.tagline}
      </p>

      <p className="mt-4 max-w-xl text-ink-muted">{siteConfig.description}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/projects" size="lg">
          View projects
        </ButtonLink>
        <ButtonLink href="/about" variant="secondary" size="lg">
          About me
        </ButtonLink>
      </div>
    </div>
  );
}
