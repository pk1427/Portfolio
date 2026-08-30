export type StackCategory = {
  id: string
  category: string
  skills: { title: string; href: string; icon: string }[]
}

export const stack: StackCategory[] = [
  {
    id: "01",
    category: "Languages",
    skills: [
      { title: "TypeScript", href: "https://www.typescriptlang.org/", icon: "typescript" },
      { title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "javascript" },
      { title: "Rust", href: "https://www.rust-lang.org/", icon: "rust" },
      { title: "Solidity", href: "https://soliditylang.org/", icon: "generic-sql" },
      { title: "SQL", href: "https://en.wikipedia.org/wiki/SQL", icon: "generic-sql" },
      { title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "html5" },
      { title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "css" },
    ],
  },
  {
    id: "02",
    category: "Blockchain & Web3",
    skills: [
      { title: "Ethereum", href: "https://ethereum.org/", icon: "ethereum" },
      { title: "Solana", href: "https://solana.com/", icon: "solana" },
      { title: "Polygon", href: "https://polygon.technology/", icon: "polygon" },
      { title: "Cardano", href: "https://cardano.org/", icon: "generic-api" },
      { title: "Hardhat", href: "https://hardhat.org/", icon: "generic-editor" },
      { title: "OpenZeppelin", href: "https://openzeppelin.com/", icon: "generic-pdf" },
    ],
  },
  {
    id: "03",
    category: "Frontend & Backend",
    skills: [
      { title: "React.js", href: "https://react.dev/", icon: "react" },
      { title: "Next.js", href: "https://nextjs.org/", icon: "nextdotjs" },
      { title: "Tailwind CSS", href: "https://tailwindcss.com/", icon: "tailwindcss" },
      { title: "Node.js", href: "https://nodejs.org/", icon: "nodedotjs" },
      { title: "Express.js", href: "https://expressjs.com/", icon: "express" },
      { title: "PostgreSQL", href: "https://www.postgresql.org/", icon: "postgresql" },
      { title: "MongoDB", href: "https://www.mongodb.com/", icon: "mongodb" },
      { title: "Prisma", href: "https://www.prisma.io/", icon: "prisma" },
      { title: "Ethers.js", href: "https://docs.ethers.org/", icon: "generic-api" },
      { title: "Wagmi", href: "https://wagmi.sh/", icon: "generic-api" },
    ],
  },
  {
    id: "04",
    category: "Tools & Platforms",
    skills: [
      { title: "Git", href: "https://git-scm.com/", icon: "git" },
      { title: "GitHub", href: "https://github.com/", icon: "github" },
      { title: "Docker", href: "https://www.docker.com/", icon: "docker" },
      { title: "Vercel", href: "https://vercel.com/", icon: "vercel" },
      { title: "Figma", href: "https://www.figma.com/", icon: "figma" },
      { title: "Chainlink", href: "https://chain.link/", icon: "generic-api" },
    ],
  },
]
