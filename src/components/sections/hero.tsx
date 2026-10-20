import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site.config";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Badge tone="brand">
        {siteConfig.availableForWork
          ? "Available for work"
          : "Open to opportunities"}
      </Badge>

      <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        Hi, I&apos;m {siteConfig.name}.
      </h1>

      <p className="mt-5 max-w-xl text-lg text-ink-body sm:text-xl">
        {siteConfig.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/projects" size="lg">
          View projects
        </ButtonLink>
        <ButtonLink href="/about" variant="secondary" size="lg">
          About me
        </ButtonLink>
        <ButtonLink href="/cv" variant="ghost" size="lg">
          Resume
        </ButtonLink>
      </div>
    </section>
  );
}
