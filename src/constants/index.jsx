import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import bharatMarketScreenshot from "../assets/projects/bharat-market-screenshot.png";
import identifyMeScreenshot from "../assets/projects/identifyme-screenshot.png";

import GrantFlowScreenshot from "../assets/projects/image.png";
import resumePdf from "../Resume_27.pdf";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "5", label: "Protocol-style products" },
  { value: "4", label: "EVM, Solana, Casper, Stellar" },
  { value: "CPMM", label: "Market engine implemented" },
];

export const HERO_CONTENT = (
  <>
    I&apos;m a blockchain engineer building smart-contract systems, market
    mechanisms, AI-verifiable funding infrastructure, oracle workflows, and
    wallet-native product surfaces. My work sits at the boundary of protocol
    design, Solidity/Rust contracts, settlement logic, and production frontend
    execution.
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
    year: "Sep 2025 - Present",
    role: "Blockchain Developer Intern",
    company: "AppAvengers",
    companyUrl: "https://appavengers.com",
    description:
      "Building Ethereum and Solana systems with contract logic, Anchor programs, and application flows designed around real user transactions.",
    technologies: [
      "Solidity",
      "Rust",
      "Anchor",
      "TypeScript",
      "React",
      "Vite",
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
      "Built DEX smart contracts for token swaps, SLTP, and futures trading, integrating Chainlink market data and PostgreSQL-backed trading workflows.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Remix",
      "OpenZeppelin",
      "PostgreSQL",
      "Chainlink",
    ],
  },
  {
    year: "Feb 2025 – May 2025",
    role: "Blockchain Developer Intern",
    company: "Quadb Technologies",
    companyUrl: "https://quadbtech.com",
    description:
      "Contributed to EVM-compatible infrastructure, RPC integration, agent logic, and modular contract architecture after in-house blockchain training.",
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
    featured: true,
    tag: "Featured Project",
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
    title: "GrantFlow AI",
    image: GrantFlowScreenshot,
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
  {
    title: "FantasyX",
    image: project3,
    accent: "from-emerald-300 via-teal-400 to-cyan-500",
    description:
      "Built a Web3 fantasy sports product with NFT player cards, skill-based gameplay, token rewards, IPFS metadata, and wallet onboarding.",
    architecture:
      "ERC-721 assets, reward mechanics, metadata storage, and frontend wallet flows are composed into a game-like product loop.",
    deliverySignal:
      "Built as a full product flow around NFT ownership, metadata, and reward mechanics.",
    technologies: [
      "Solidity",
      "Hardhat",
      "ERC-721",
      "IPFS",
      "React.js",
      "Wagmi",
      "RainbowKit",
    ],
    github: "https://github.com/pk1427/FantasyX",
    live: "https://fantasyx-frontend.vercel.app/",
    metrics: ["NFT gameplay", "Wallet auth", "Reward mechanics"],
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
  "TypeScript",
  "React",
  "Next.js",
  "Ethers.js",
  "Wagmi",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
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
