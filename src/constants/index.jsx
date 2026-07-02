import bharatMarketScreenshot from "../assets/projects/bharat-market-screenshot.png";
import identifyMeScreenshot from "../assets/projects/identifyme-screenshot.png";
import treasuryOsPreview from "../assets/projects/treasuryos-preview.svg";

import GrantFlowScreenshot from "../assets/projects/image.png";
import resumePdf from "../Prasad_Kapure_Resume.pdf";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "4", label: "Main Web3 projects built" },
  { value: "6", label: "Ethereum, Solana, Polygon, Casper, Base, Stellar" },
  { value: "3+", label: "Domains: markets, treasury, funding, identity" },
];

export const HERO_CONTENT = (
  <>
    Early-career blockchain developer with internship and part-time experience
    across smart contracts, dApps, wallet flows, oracle integrations, and backend
    systems. Work spans Solana, Ethereum, Polygon, Casper, Base, and Stellar.
  </>
);

export const PROTOCOL_PRINCIPLES = [
  {
    title: "Clear contract rules",
    description:
      "On-chain logic is easier to trust when roles, state changes, and fund movement are simple enough to review.",
  },
  {
    title: "Practical testing",
    description:
      "The highest-risk paths get the most attention: permissions, settlement, failed transactions, and stale data.",
  },
  {
    title: "Usable wallet flows",
    description:
      "A dApp should explain what the user is signing, what changed on-chain, and what to do when a transaction fails.",
  },
];

export const EXPERIENCES = [
  {
    year: "Oct 2025 – Present",
    role: "Blockchain Developer (Intern → Part-time)",
    company: "AppAvengers",
    companyUrl: "https://appavengers.com",
    description:
      "Completed a 6-month blockchain developer internship and continued part-time. Built smart contract and dApp features across Solana and EVM projects, including a Solana lottery using Anchor, Rust, USDC flows, and Switchboard randomness. Also contributed to DeFi research and frontend/backend integration work where contract behavior needed to be clear in the product.",
    technologies: [
      "Solidity",
      "Rust",
      "Anchor",
      "Solana",
      "Switchboard",
      "Fhenix",
      "TypeScript",
      "Stellar",
    ],
    current: true,
  },
  {
    year: "Feb 2025 – Jun 2025",
    role: "Blockchain Developer Intern",
    company: "Finsocial Digital Systems",
    companyUrl: "https://finsocial.tech",
    description:
      "Worked on Solidity contracts for token swaps, futures trading, and exchange-style flows. Integrated Chainlink price feeds for market data, PnL tracking, and settlement calculations.",
    technologies: [
      "Solidity",
      "Hardhat",
      "OpenZeppelin",
      "Chainlink",
      "PostgreSQL",
    ],
  },
  {
    year: "Mar 2025 – May 2025",
    role: "Blockchain Developer Intern",
    company: "Quadb Technologies",
    companyUrl: "https://quadbtech.com",
    description:
      "Worked on Web3 development tasks involving Solidity contracts, RPC-based interactions, and dApp integration. Gained more practice translating product requirements into contract calls and frontend flows.",
    technologies: ["Solidity", "TypeScript", "Web3.js", "Git", "EVM"],
  },
  {
    year: "May 2024 – Jul 2024",
    role: "Software Developer Intern",
    company: "Brandlane",
    companyUrl: "https://brandlane.in/",
    description:
      "Built responsive web pages, supported company and careers site work, and helped with deployment tasks. This role strengthened my frontend and full-stack fundamentals before I moved deeper into blockchain development.",
    technologies: [
      "React.js",
      "SCSS",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Hostinger",
    ],
  },
];

export const PROJECTS = [
  {
    title: "BharatMarket",
    image: bharatMarketScreenshot,
    category: "Prediction Markets",
    accent: "from-amber-300 via-orange-400 to-red-500",
    description:
      "BharatMarket is a prediction market on Polygon Amoy where users trade YES/NO outcomes with USDC. It uses a CPMM pricing model so prices move with liquidity and demand, and Chainlink Functions helps resolve markets from external data.",
    features:
      "CPMM pricing, YES/NO outcome tokens, liquidity pools, oracle resolution, wallet execution, USDC settlement",
    architecture:
      "Smart contracts handle market creation, trading, liquidity accounting, and settlement. A PostgreSQL and Prisma indexer stores market data, user positions, and activity so the frontend can load quickly without reading every state change on-chain.",
    deliverySignal:
      "The main lesson was how much detail goes into financial UX: prices, pending transactions, position changes, and resolution status all need to be obvious before users sign.",
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
    github: "https://github.com/pk1427/Bharat-Market-main",
    live: "https://bharat-market-main.vercel.app",
    metrics: ["CPMM engine", "Polygon Amoy", "USDC flows"],
  },
  {
    title: "TreasuryOS",
    image: treasuryOsPreview,
    category: "Treasury & Risk",
    accent: "from-violet-300 via-purple-400 to-fuchsia-500",
    description:
      "TreasuryOS helps teams track ETH, WETH, and USDC holdings and understand basic treasury risk. It turns wallet balances into snapshots, reports, and stress tests instead of leaving users to inspect everything manually.",
    features:
      "Wallet risk scanning, concentration & stress-test modeling, on-chain attestation, treasury snapshot indexing",
    architecture:
      "The backend stores treasury snapshots and attestation history over time. The risk engine uses those snapshots for concentration checks and stablecoin depeg simulations, while KeeperHub records review attestations on-chain.",
    deliverySignal:
      "The main lesson was that raw chain data is only useful when it is organized for decisions. The harder part was making reports clear enough for a team to act on.",
    technologies: [
      "Solidity",
      "TypeScript",
      "Next.js",
      "Wagmi",
      "PostgreSQL",
      "Prisma",
      "Ethereum (Sepolia)",
    ],
    github: "https://github.com/pk1427/treasuryos",
    live: "https://treasuryos-web.vercel.app/",
    metrics: ["Risk Engine", "Sepolia", "On-chain Attestation"],
  },
  {
    title: "GrantFlow",
    image: GrantFlowScreenshot,
    category: "Grant Funding",
    accent: "from-teal-300 via-cyan-400 to-emerald-400",
    description:
      "GrantFlow is a milestone-based grant funding system. It lets grant creators define milestones, hold funds in escrow, validate progress, and release payments in stages.",
    features:
      "Milestone grants, escrow settlement, grant creation, milestone validation, controlled fund releases",
    architecture:
      "The first version was built on Casper, with planned integrations for Base and Stellar. The contract layer manages grant state, escrowed funds, milestone status, and payment releases, while the frontend separates creator and recipient workflows.",
    deliverySignal:
      "This project helped me think through trust boundaries. Some grant workflows need human review, but contracts can still make fund handling clearer and harder to misuse.",
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
    github: "https://github.com/pk1427/GrantFlow-Ai",
    live: "https://grant-flow-ai-web.vercel.app/",
    metrics: [
      "Milestone escrow",
      "Grant workflows",
      "Casper -> Base -> Stellar",
    ],
  },
  {
    title: "IdentifyMe",
    image: identifyMeScreenshot,
    category: "Identity",
    accent: "from-cyan-300 via-sky-500 to-indigo-500",
    description:
      "IdentifyMe is a wallet-linked identity app for creating user profiles without making every field public by default. Users connect a wallet, create a profile, and manage what parts of it are visible.",
    architecture:
      "The contract layer manages profile ownership and access rules. The frontend handles wallet login, profile editing, visibility settings, and update flows.",
    deliverySignal:
      "The main lesson was to treat privacy as part of the product, not an extra setting. Users need to know what is public, what is restricted, and what they can change later.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Next.js",
      "Ethers.js",
      "TypeScript",
      "BTT Testnet",
      "BitTorrent",
    ],
    github: "https://github.com/pk1427/identity-dapp",
    live: "https://identity-dapp.vercel.app/",
    metrics: ["Identity graph", "On-chain profiles", "Access controls"],
  },
];

export const TECHNOLOGIES = [
  "Solidity",
  "EVM",
  "Chainlink",
  "Escrow",
  "Casper",
  "Base",
  "Stellar",
  "Rust",
  "Anchor",
  "Solana",
  "SPL Token",
  "Switchboard",
  "Fhenix",
  "Polygon",
  "USDC",
  "ERC-721",
  "TypeScript",
  "JavaScript",
  "SQL",
  "React",
  "Next.js",
  "Ethers.js",
  "Web3.js",
  "Wagmi",
  "RainbowKit",
  "Node.js",
  "Express.js",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "IPFS",
  "Hardhat",
  "OpenZeppelin",
  "Git",
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "+91-9657584288",
  email: "prasadkapure553@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasad-kapure-9b5560240/",
  github: "https://github.com/pk1427",
  x: "https://x.com/PrasadKapure5?t=eKzhZo9kopjcQPSe8EZHQg&s=08",
  instagram: "https://instagram.com/prasad_kapure_",
  resume: resumePdf,
};
