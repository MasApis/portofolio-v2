import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site.config";

export function AboutPreview() {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        About
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
        <p className="text-lg text-ink-body">{siteConfig.bio}</p>

        <dl className="grid gap-4 self-end sm:grid-cols-2 md:grid-cols-1">
          <div>
            <dt className="text-sm text-ink-muted">Role</dt>
            <dd className="mt-1 font-medium text-ink">{siteConfig.role}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-muted">Location</dt>
            <dd className="mt-1 font-medium text-ink">{siteConfig.location}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8">
        <ButtonLink href="/about" variant="secondary" size="sm">
          More about me
        </ButtonLink>
      </div>
    </div>
  );
}
