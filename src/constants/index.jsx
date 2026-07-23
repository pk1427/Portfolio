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
  { value: "5+", label: "Production Web3 projects" },
  { value: "7", label: "Blockchain ecosystems" },
  { value: "10+", label: "Smart contracts developed" },
];

export const HERO_CONTENT = (
  <>
    Building production-grade smart contracts, DeFi applications, and
    multi-chain Web3 products across Ethereum, Solana, Polygon, Cardano,
    Base, Casper, and Stellar ecosystems.
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
    role: "Blockchain Developer",
    company: "AppAvengers",
    subtitle: "AppAvengers | Oct 2025 – Present",
    companyUrl: "https://appavengers.com",
    description:
      "Joined AppAvengers as a Blockchain Developer Intern and successfully transitioned to a full-time Blockchain Developer role after four months.\n- Built production-grade applications across Ethereum, Solana, and Cardano ecosystems.\n- Developed smart contracts, wallet integrations, and full-stack Web3 applications using Solidity, Rust, TypeScript, and Next.js.\n- Contributed to TreasuryOS, Cardano protocol integrations, and DeFi infrastructure initiatives.\n- Worked across frontend, backend, database, and blockchain layers to deliver end-to-end Web3 products.",
    technologies: [
      "Solidity",
      "Rust",
      "Anchor",
      "TypeScript",
      "Next.js",
      "Cardano",
      "Stellar",
      "Fhenix",
      "Solana",
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
      "TreasuryOS is an AI-powered treasury intelligence platform that transforms on-chain portfolio data into actionable treasury insights. It enables organizations to analyze wallet positions, assess risk exposure, run stress simulations, and publish verifiable on-chain attestations.",
    features:
      "Unified wallet and protocol adapters, Treasury Intelligence Engine, on-chain attestations via KeeperHub",
    architecture:
      "Unified wallet and protocol adapters aggregate treasury positions across Ethereum-based ecosystems. The Treasury Intelligence Engine generates composite risk scores, concentration analysis, and stress-testing scenarios. Treasury reports are persisted in PostgreSQL and can be published on-chain using KeeperHub attestations for transparency and auditability.",
    deliverySignal:
      "The biggest lesson was realizing that raw blockchain data is not enough. Teams need clear reports, risk visibility, and decision-making tools rather than wallet balances spread across multiple interfaces.",
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
