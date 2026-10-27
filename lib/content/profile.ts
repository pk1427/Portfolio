export const profile = {
  name: "Prasad Kapure",
  handle: "pk1427",
  wordmark: "PRASAD",
  title: "Full-Stack Engineer · Web3 & DeFi Developer",
  roles: [
    "Full-Stack Engineer",
    "Web3 & DeFi Developer",
    "Full-Stack Developer (Web3 + Mobile + Backend)",
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
  availability: "Open to full-stack, Web3, and smart contract engineering roles",
} as const

export const bio: { text: string; strong?: string[] }[] = [
  {
    text: "I'm Prasad Kapure (call me pk1427), a full-stack engineer who builds complete products: databases, secure backends, web and mobile interfaces, and the smart contracts behind them.",
  },
  {
    text: "On the web and mobile side I work with TypeScript, React, Next.js, React Native and Expo; on the backend with Node.js, Express, PostgreSQL, Prisma and Supabase (Auth, Storage, Edge Functions, RLS), with a focus on validation, correctness and security.",
    strong: ["TypeScript, React, Next.js, React Native, Expo", "Node.js, Express, PostgreSQL, Prisma, Supabase"],
  },
  {
    text: "In Web3 I build smart contracts and DeFi products with Solidity and Rust across Ethereum, Solana, Polygon, Cardano, Base, Casper and Stellar, plus AI-assisted tooling such as treasury analytics, and games with deterministic, testable logic.",
    strong: ["Solidity and Rust", "Ethereum, Solana, Polygon, Cardano, Base, Casper, Stellar"],
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