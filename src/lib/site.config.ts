/**
 * Single source of truth for all site content and profile data.
 *
 * To personalize this site, edit this file and drop your photo into
 * `public/images/`. Nothing else needs to change.
 */

export const siteConfig = {
  name: "Abdul Hafidz",
  fullName: "ABDUL HAFIDZ",
  role: "Fullstack Developer",
  tagline: "Building clean, fast, and maintainable systems.",
  description:
    "Fullstack developer focused on building clean, fast, and maintainable web systems. Currently exploring modern web technologies and shipping small, useful tools.",
  bio: "Self-taught developer focused on web technologies. I like working on tools that solve a real problem, and writing about what I learn along the way.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pundong.my.id",
  email: "you@gmail.com",
  avatar: "/images/avatar.jpg",
  location: "Indonesia",
  availableForWork: true,

  socials: {
    github: "MasApis",
    linkedin: "",
    email: "you@gmail.com",
  },

  mainNav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/labs", label: "Labs" },
    { href: "/about", label: "About" },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PHP", "REST APIs", "SQL"],
    },
    {
      category: "Tooling",
      items: ["Git", "Linux", "Docker", "Vercel"],
    },
  ],

  experience: [
    {
      company: "Company Name",
      role: "Software Developer",
      period: "2024 — Present",
      summary:
        "Placeholder entry. Replace with your actual role, team, and the problems you solved.",
      highlights: [
        "Built and maintained internal tools used by the team daily",
        "Improved page load performance across the main application",
        "Introduced code review and automated checks to the workflow",
      ],
    },
    {
      company: "Organization Name",
      role: "Junior Developer",
      period: "2023 — 2024",
      summary:
        "Placeholder entry. Replace with your actual role, team, and the problems you solved.",
      highlights: [
        "Developed features from design handoff through deployment",
        "Fixed reported bugs and improved error handling",
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
