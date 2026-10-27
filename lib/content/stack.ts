export type StackCategory = {
  id: string
  category: string
  skills: { title: string; href: string; icon: string }[]
}

export const stack: StackCategory[] = [
  {
    id: "01",
    category: "Frontend",
    skills: [
      { title: "TypeScript", href: "https://www.typescriptlang.org/", icon: "typescript" },
      { title: "React", href: "https://react.dev/", icon: "react" },
      { title: "Next.js", href: "https://nextjs.org/", icon: "nextdotjs" },
      { title: "Tailwind CSS", href: "https://tailwindcss.com/", icon: "tailwindcss" },
      { title: "React Native", href: "https://reactnative.dev/", icon: "react" },
      { title: "Expo", href: "https://expo.dev/", icon: "expo" },
      { title: "Expo Router", href: "https://docs.expo.dev/router/introduction/", icon: "expo" },
    ],
  },
  {
    id: "02",
    category: "Backend & Data",
    skills: [
      { title: "Node.js", href: "https://nodejs.org/", icon: "nodedotjs" },
      { title: "Express", href: "https://expressjs.com/", icon: "express" },
      { title: "PostgreSQL", href: "https://www.postgresql.org/", icon: "postgresql" },
      { title: "Prisma", href: "https://www.prisma.io/", icon: "prisma" },
      { title: "Supabase", href: "https://supabase.com/", icon: "supabase" },
      { title: "Python", href: "https://www.python.org/", icon: "python" },
      { title: "REST APIs", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Resources/REST", icon: "generic-api" },
    ],
  },
  {
    id: "03",
    category: "Web3 & DeFi",
    skills: [
      { title: "Solidity", href: "https://soliditylang.org/", icon: "solidity" },
      { title: "Rust", href: "https://www.rust-lang.org/", icon: "rust" },
      { title: "Ethers.js", href: "https://docs.ethers.org/", icon: "ethers" },
      { title: "Viem", href: "https://viem.sh/", icon: "generic-api" },
      { title: "Wagmi", href: "https://wagmi.sh/", icon: "wagmi" },
      { title: "Chainlink", href: "https://chain.link/", icon: "chainlink" },
      { title: "Ethereum", href: "https://ethereum.org/", icon: "ethereum" },
      { title: "Solana", href: "https://solana.com/", icon: "solana" },
      { title: "Polygon", href: "https://polygon.technology/", icon: "polygon" },
    ],
  },
  {
    id: "04",
    category: "Engineering & Tools",
    skills: [
      { title: "pnpm", href: "https://pnpm.io/", icon: "pnpm" },
      { title: "Git", href: "https://git-scm.com/", icon: "git" },
      { title: "GitHub", href: "https://github.com/", icon: "github" },
      { title: "Docker", href: "https://www.docker.com/", icon: "docker" },
      { title: "Vercel", href: "https://vercel.com/", icon: "vercel" },
      { title: "Testing", href: "https://jestjs.io/", icon: "jest" },
      { title: "Monorepos", href: "https://turbo.build/", icon: "turborepo" },
    ],
  },
]