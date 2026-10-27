import { achievements } from "@/lib/content/milestones"
import { experiences } from "@/lib/content/experience"
import { profile } from "@/lib/content/profile"
import { siteUrl } from "@/lib/content/site"
import { stack } from "@/lib/content/stack"

export default function StructuredData() {
  const currentEmployers = experiences
    .filter((experience) => experience.isCurrent)
    .map((experience) => ({
      "@type": "Organization",
      name: experience.company,
      url: experience.website,
    }))

  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    alternateName: profile.handle,
    jobTitle: profile.title,
    description:
      "Full-stack engineer building production apps across React/Next.js, React Native, Node.js, Supabase and PostgreSQL, plus smart contracts and DeFi on Ethereum, Solana, and Polygon.",
    url: siteUrl,
    image: `${siteUrl}${profile.avatar}`,
    email: `mailto:${profile.email}`,
    nationality: "Indian",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "Maharashtra",
      addressLocality: "Pune",
    },
    sameAs: [
      "https://www.linkedin.com/in/prasad-kapure-9b5560240",
      "https://github.com/pk1427",
      "https://x.com/PrasadKapure5",
    ],
    knowsAbout: stack.flatMap((category) =>
      category.skills.map((skill) => skill.title)
    ),
    ...(currentEmployers.length ? { worksFor: currentEmployers } : {}),
    ...(achievements.length
      ? {
          award: achievements.map((item) => ({
            "@type": "Award" as const,
            name: item.title,
            description: item.description,
          })),
        }
      : {}),
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        description:
          "Portfolio, projects and experience of Prasad Kapure - Full-Stack & Web3 Engineer.",
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}