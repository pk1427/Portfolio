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
    slug: "bharat-market",
    title: "BharatMarket",
    subheading: "Prediction Markets",
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
  {
    slug: "treasuryos",
    title: "TreasuryOS",
    subheading: "Treasury & Risk",
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
    slug: "grantflow",
    title: "GrantFlow",
    subheading: "Grant Funding",
    description:
      "GrantFlow is a milestone-based grant funding system. It lets grant creators define milestones, hold funds in escrow, validate progress, and release payments in stages.",
    image: "/projects/3_GrantFlow_poster.svg",
    links: {
      website: "https://grant-flow-ai-web.vercel.app/",
      github: "https://github.com/pk1427/GrantFlow-Ai",
    },
    technologies: [
      "Solidity",
      "TypeScript",
      "Node.js",
      "Escrow",
      "Casper",
      "Base",
      "Stellar",
      "Web3.js",
    ],
    status: "live",
  },
  {
    slug: "identifyme",
    title: "IdentifyMe",
    subheading: "Identity",
    description:
      "IdentifyMe is a wallet-linked identity app for creating user profiles without making every field public by default. Users connect a wallet, create a profile, and manage what parts of it are visible.",
    image: "/projects/4_IdentifyMe_poster.svg",
    links: {
      website: "https://identity-dapp.vercel.app/",
      github: "https://github.com/pk1427/identity-dapp",
    },
    technologies: [
      "Solidity",
      "Hardhat",
      "Next.js",
      "Ethers.js",
      "TypeScript",
      "BTT Testnet",
      "BitTorrent",
    ],
    status: "live",
  },
]
