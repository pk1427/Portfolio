import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"
import { siteUrl } from "@/lib/content/site"

const description =
  "Full-stack & Web3 projects by Prasad Kapure - TreasuryOS, Page Duel, Backstop, BharatMarket. Built with React, Next.js, React Native, TypeScript, Solidity, Rust, Supabase, and more."

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