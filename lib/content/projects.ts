export type Project = {
  slug: string
  title: string
  subheading?: string
  description: string
  image: string
  video?: string
  links: { website?: string; github?: string }
  technologies: string[]
  status: "live" | "building"
}

export const projects: Project[] = [
  {
    slug: "treasuryos",
    title: "TreasuryOS",
    subheading: "Web3 / AI",
    description:
      "TreasuryOS is an AI-powered treasury intelligence platform that transforms on-chain portfolio data into actionable treasury insights. It enables organizations to analyze wallet positions, assess risk exposure, run stress simulations, and publish verifiable on-chain attestations.",
    image: "/projects/2_TreasuryOS_poster.svg",
    links: {
      website: "https://treasuryos-web.vercel.app/",
      github: "https://github.com/pk1427/treasuryos",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Viem",
      "OpenRouter",
      "KeeperHub",
      "Ethereum",
      "Uniswap V3",
      "Aave V3",
    ],
    status: "live",
  },
  {
    slug: "page-duel",
    title: "Page Duel",
    subheading: "Full-Stack · Game (formerly Book People)",
    description:
      "Page Duel is a competitive two-player reading game where players race to count the people on book pages across 5, 10, or 15-round matches. A deterministic, seeded game engine powers reproducible sessions; results are decided by total people counted, then round wins, with sudden-death logic where needed. It includes Supabase Auth with player profiles, persisted match history with round-level detail, a versioned book catalog with covers and page images in Supabase Storage, and a separate admin dashboard for validating, uploading, publishing and unpublishing books via a server-side Edge Function. Security is enforced with Row Level Security and admin authorization.",
    image: "/projects/page-duel-poster.svg",
    links: {
      website: "https://page-duel-book-prep.vercel.app/setup",
      github: "https://github.com/pk1427/page-duel",
    },
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Edge Functions",
      "Python",
      "pnpm",
    ],
    status: "building",
  },
  {
    slug: "backstop",
    title: "Backstop",
    subheading: "Web3 · DeFi",
    description:
      "Backstop is a self-custodial liquidation-liquidity prototype on Ethereum Sepolia. Capital providers pre-authorize reusable, policy-bounded strategies (size, discount range, asset pair, expiry) while funds stay in their own wallet. Chainlink CRE publishes confidential, borrower-bound quotes, and a liquidator settles atomically through 1inch Aqua, with the contract verifying strategy hash, quote validity, size, discount and minimum collateral onchain. Includes live Aave V3 Sepolia position monitoring and a controlled-market demo path, with Privy embedded wallets.",
    image: "/projects/backstop-poster.png",
    links: {
      website: "https://backstopfi.vercel.app/",
      github: "https://github.com/pk1427/backstop",
    },
    technologies: [
      "Solidity",
      "Foundry",
      "TypeScript",
      "Next.js",
      "Chainlink CRE",
      "1inch Aqua",
      "Privy",
      "Aave V3",
    ],
    status: "building",
  },
  {
    slug: "bharat-market",
    title: "BharatMarket",
    subheading: "DeFi / Web3",
    description:
      "BharatMarket is a prediction market on Polygon Amoy where users trade YES/NO outcomes with USDC. It uses a CPMM pricing model so prices move with liquidity and demand, and Chainlink Functions helps resolve markets from external data.",
    image: "/projects/1_BharatMarket_poster.svg",
    links: {
      website: "https://bharat-market-main.vercel.app",
      github: "https://github.com/pk1427/Bharat-Market-main",
    },
    technologies: [
      "Solidity",
      "Hardhat",
      "Chainlink",
      "Next.js",
      "TypeScript",
      "Ethers.js",
      "Wagmi",
      "RainbowKit",
      "Polygon",
      "USDC",
    ],
    status: "live",
  },
]