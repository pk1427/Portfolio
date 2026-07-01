import project4 from "../assets/projects/project-4.webp";
import bharatMarketScreenshot from "../assets/projects/bharat-market-screenshot.png";
import identifyMeScreenshot from "../assets/projects/identifyme-screenshot.png";

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
  { value: "4", label: "Protocol-style products shipped" },
  { value: "6", label: "Ethereum, Solana, Polygon, Casper, Base, Stellar" },
  { value: "3+", label: "Domains: markets, treasury, funding, identity" },
];

export const HERO_CONTENT = (
  <>
    I&apos;m a protocol-minded blockchain engineer building production-grade
    Web3 systems across Solana, EVM, and emerging multi-chain ecosystems —
    smart contracts, DeFi protocols, prediction markets, oracle integrations,
    multi-chain grant/escrow infrastructure, and treasury risk infrastructure.
    My work sits at the boundary of protocol design, Solidity/Rust contracts,
    settlement logic, and production frontend execution.
  </>
);

export const PROTOCOL_PRINCIPLES = [
  {
    title: "Mechanism design",
    description:
      "Pricing, liquidity, rewards, resolution, and user incentives are modeled as product-critical protocol behavior.",
  },
  {
    title: "Security posture",
    description:
      "Contract flows are built with explicit assumptions, access boundaries, deterministic state transitions, and testable failure paths.",
  },
  {
    title: "Production UX",
    description:
      "Wallet actions, pending states, network handling, and data freshness are treated as core protocol surfaces.",
  },
];

export const EXPERIENCES = [
  {
    year: "Oct 2025 – Present",
    role: "Blockchain Developer (Intern → Part-time)",
    company: "AppAvengers",
    companyUrl: "https://appavengers.com",
    description:
      "Developed a decentralized lottery platform on Solana using Anchor and Rust with USDC-based participation, integrating Switchboard-powered randomness and automated winner selection. Contributed to an Aave-inspired DeFi lending prototype using Fhenix encryption on Ethereum, and researched liquidity aggregation and routing architectures within the Stellar ecosystem — progressing to part-time with independent research and architecture responsibilities.",
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
      "Built Solidity smart contracts powering token swaps, futures trading, and decentralized exchange workflows. Integrated multiple Chainlink price feeds for real-time market data, PnL tracking, and settlement calculations.",
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
      "Migrated Solana-oriented systems to EVM-compatible smart contract architecture, engineering modular Solidity contracts and RPC-based interaction layers across multiple modules.",
    technologies: ["Solidity", "TypeScript", "Web3.js", "Git", "EVM"],
  },
  {
    year: "May 2024 – Jul 2024",
    role: "Software Developer Intern",
    company: "Brandlane",
    companyUrl: "https://brandlane.in/",
    description:
      "Delivered responsive production pages, launched company and careers experiences, and supported deployments with reliability-focused execution.",
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
      "Designed and built a decentralized prediction market on Polygon Amoy where users trade YES/NO outcomes against a CPMM pricing model. The system combines wallet-based trading, liquidity provisioning, USDC flows, and Chainlink Functions for oracle-driven resolution.",
    features:
      "CPMM pricing, YES/NO outcome tokens, liquidity pools, oracle resolution, wallet execution, USDC settlement",
    architecture:
      "Contracts handle market creation, collateralized trading, liquidity accounting, and resolution boundaries while the frontend keeps wallet actions and market state legible.",
    deliverySignal:
      "Built as protocol infrastructure where market outcomes settle through explicit contract and oracle boundaries.",
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
    image: project4,
    category: "Treasury & Risk",
    accent: "from-violet-300 via-purple-400 to-fuchsia-500",
    description:
      "Built a multi-chain treasury monitoring platform that scans wallet holdings across multiple assets (ETH, WETH, USDC) to generate deterministic risk reports, modeling concentration and stress-test scenarios including stablecoin depeg simulations.",
    features:
      "Wallet risk scanning, concentration & stress-test modeling, on-chain attestation, treasury snapshot indexing",
    architecture:
      "An indexer and database architecture track treasury snapshots and attestation history over time, while on-chain attestation via KeeperHub publishes immutable, verifiable risk reports.",
    deliverySignal:
      "Built as treasury risk infrastructure for protocols and DAOs that need verifiable, on-chain reporting on multi-asset holdings.",
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
    title: "GrantFlow AI",
    image: GrantFlowScreenshot,
    category: "Funding Protocol",
    accent: "from-teal-300 via-cyan-400 to-emerald-400",
    description:
      "AI-verifiable funding protocol for milestone-based grants across multiple blockchains. Designed an agentic coordination layer where capital moves automatically when publicly verifiable work is completed.",
    features:
      "Milestone grants, escrow settlement, AI evidence verification, risk scoring, fraud signals, builder reputation",
    architecture:
      "Smart contracts manage grant creation, milestone states, escrow boundaries, reputation primitives, and payment execution while AI verifier agents analyze GitHub repositories, deployment URLs, smart contracts, and documentation to produce confidence scores and signed attestations.",
    deliverySignal:
      "Built as ecosystem protocol infrastructure for funders, DAOs, accelerators, and public goods programs, not a standalone grant application.",
    technologies: [
      "Solidity",
      "TypeScript",
      "Node.js",
      "AI Agents",
      "Escrow",
      "Casper",
      "Base",
      "Stellar",
      "Web3.js",
    ],
    github: "https://github.com/pk1427/GrantFlow-Ai",
    live: "https://grant-flow-ai-web.vercel.app/",
    metrics: [
      "Funding Protocol",
      "AI Verification + Escrow",
      "Casper -> Base -> Stellar",
    ],
  },
  {
    title: "IdentifyMe",
    image: identifyMeScreenshot,
    category: "Identity",
    accent: "from-cyan-300 via-sky-500 to-indigo-500",
    description:
      "Built an on-chain identity product where users create, edit, and discover wallet-linked profiles with configurable visibility controls.",
    architecture:
      "Profile state and access rules live on-chain, while the app focuses on clear identity discovery and update flows.",
    deliverySignal:
      "Built as a wallet-native identity primitive with on-chain profile state and configurable access rules.",
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
  "AI Agents",
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