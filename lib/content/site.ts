import { profile } from "./profile"

export const siteUrl = "https://prasadkapure.dev"

export const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export const sectionIds = {
  about: "about",
  connect: "connect",
  experience: "experience",
  projects: "projects",
  stack: "stack",
  activity: "activity",
  buildBattles: "build-battles",
  contact: "contact",
} as const

export const skillsVenn = {
  image: "/pratham.png",
  skills: {
    top: "Full-Stack Development",
    left: "Smart Contracts",
    right: "Mobile & Web Apps",
    bottom: "Backend & Security\nDeFi Products\nProduct Thinking",
  },
}

export const footer = {
  text: "Designed and developed by",
  developer: profile.name,
  note: "Built in the open.",
}