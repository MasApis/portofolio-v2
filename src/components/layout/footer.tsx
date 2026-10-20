import { cacheLife } from "next/cache";
import Link from "next/link";

import { siteConfig } from "@/lib/site.config";

/**
 * The copyright year changes at most once a year, so it is cached with a
 * long lifetime instead of being recomputed on every request. Without
 * `use cache`, `new Date()` is unstable and fails prerendering under
 * Cache Components.
 */
async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="size-4"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.75"
      stroke="currentColor"
      className="size-4"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path strokeLinecap="round" d="m2 7 10 6 10-6" />
    </svg>
  );
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="site-footer mt-20 border-t border-line-soft">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          © {year} {siteConfig.fullName}. All rights reserved.
        </p>

        <ul className="flex items-center gap-1 text-sm text-ink-body">
          {siteConfig.socials.github && (
            <li>
              <a
                href={`https://github.com/${siteConfig.socials.github}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 transition-colors hover:text-brand-700 dark:hover:text-brand-300"
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
          )}
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3 transition-colors hover:text-brand-700 dark:hover:text-brand-300"
            >
              <MailIcon />
              Email
            </a>
          </li>
          <li>
            <Link
              href="/cv"
              className="inline-flex min-h-11 items-center rounded-lg px-3 transition-colors hover:text-brand-700 dark:hover:text-brand-300"
            >
              CV
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
