export const profile = {
  name: "Prasad Kapure",
  handle: "pk1427",
  wordmark: "PRASAD",
  title: "Blockchain Developer",
  roles: [
    "Smart Contract Engineer",
    "Full-Stack Web3 Developer",
    "DeFi Infrastructure",
  ],
  meta: "Pune, IND",
  age: 21,
  location: "Pune, India",
  timezone: "Asia/Kolkata",
  avatar: "/facedemo.jpeg",
  avatarPhoto: "/pratham.png",
  email: "prasadkapure553@gmail.com",
  resumeUrl: "/Prasad_Kapure_Resume.pdf",
  calendlyUrl: "https://calendly.com/prasadkapure",
  availability: "Open to blockchain developer and smart contract engineering roles",
} as const

export const bio: { text: string; strong?: string[] }[] = [
  {
    text: "I'm Prasad Kapure (call me pk1427) - a Blockchain Developer with hands-on experience in smart contracts, DeFi applications, and multi-chain Web3 products across Ethereum, Solana, Polygon, Cardano, Base, Casper, and Stellar ecosystems.",
  },
  {
    text: "I build production-grade smart contracts, dApps, and Web3 tooling with Solidity, Rust, TypeScript, and Next.js - from contract architecture through to the interface.",
    strong: ["Solidity, Rust, TypeScript, and Next.js"],
  },
  {
    text: "On the backend I work with Node.js, Express, PostgreSQL, and Prisma, with a focus on strong validation, correctness, and practical on-chain data handling.",
    strong: ["Node.js, Express, PostgreSQL, and Prisma"],
  },
]

export type SocialLink = {
  name: string
  href: string
  isExternal: boolean
  icon: "resume" | "mail" | "github" | "linkedin" | "x" | "send" | "instagram"
}

export const socialLinks: SocialLink[] = [
  { name: "Resume", href: profile.resumeUrl, isExternal: true, icon: "resume" },
  { name: "Contact", href: "/contact", isExternal: false, icon: "send" },
  {
    name: "GitHub",
    href: "https://github.com/pk1427",
    isExternal: true,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prasad-kapure-9b5560240/",
    isExternal: true,
    icon: "linkedin",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/PrasadKapure5",
    isExternal: true,
    icon: "x",
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    isExternal: true,
    icon: "mail",
  },
]
