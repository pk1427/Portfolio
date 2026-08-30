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
    top: "Smart Contracts",
    left: "Web3 Infrastructure",
    right: "DeFi Products",
    bottom: "Product Thinking\n& User Research",
  },
}

export const footer = {
  text: "Designed and developed by",
  developer: profile.name,
  note: "Built in the open.",
}
