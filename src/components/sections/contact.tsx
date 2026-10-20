import { ButtonLink, ExternalLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site.config";

export function Contact() {
  return (
    <div className="rounded-2xl border border-line-soft bg-raised p-8 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Get in touch
      </h2>

      <p className="mt-3 max-w-xl text-ink-body">
        {siteConfig.availableForWork
          ? "I'm currently open to new opportunities. If you have something in mind, or just want to say hello, feel free to reach out."
          : "I'm always happy to talk about interesting problems. Feel free to reach out."}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ExternalLink href={`mailto:${siteConfig.email}`} size="lg">
          Email me
        </ExternalLink>

        {siteConfig.socials.github && (
          <ExternalLink
            href={`https://github.com/${siteConfig.socials.github}`}
            variant="secondary"
            size="lg"
          >
            GitHub
          </ExternalLink>
        )}

        <ButtonLink href="/cv" variant="ghost" size="lg">
          Download CV
        </ButtonLink>
      </div>
    </div>
  );
}
