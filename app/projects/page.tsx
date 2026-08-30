import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"
import { siteUrl } from "@/lib/content/site"

const description =
  "Blockchain products built by Prasad Kapure - Solidity, Rust, TypeScript and Next.js, from smart contract architecture through to the interface."

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    title: "Projects | Prasad Kapure",
    description,
    url: `${siteUrl}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Prasad Kapure",
    description,
  },
}

export default function ProjectsPage() {
  return <ProjectList />
}
