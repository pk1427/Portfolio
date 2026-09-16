export type Experience = {
  id: string
  company: string
  role: string
  location: string
  period: { start: string; end?: string }
  logo?: string
  website?: string
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: "appavengers",
    company: "AppAvengers",
    role: "Blockchain Developer",
    location: "Remote - 10 mos",
    period: { start: "Oct 2025", end: "July 2026" },
    logo: "/experience/Appavengers.webp",
    website: "https://www.appavengers.co",
    isCurrent: true,
  },
  {
    id: "finsocial",
    company: "Finsocial Digital Systems",
    role: "Blockchain Developer Intern",
    location: "Remote - 5 mos",
    period: { start: "Feb 2025", end: "Jun 2025" },
    logo: "/experience/finsocial_digital_logo.jpeg",
    website: "https://finsocial.tech",
  },
  {
    id: "quadb",
    company: "Quadb Technologies",
    role: "Blockchain Developer Intern",
    location: "Remote - 3 mos",
    period: { start: "Mar 2025", end: "May 2025" },
    logo: "/experience/Quadb_tech.jpeg",
    website: "https://quadbtech.com",
  },
  {
    id: "brandlane",
    company: "Brandlane",
    role: "Software Developer Intern",
    location: "Remote - 3 mos",
    period: { start: "May 2024", end: "Jul 2024" },
    logo: "/experience/Brandlane.webp",
    website: "https://brandlane.in/",
  },
]
