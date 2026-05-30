import project3 from "../assets/projects/project-3.webp";
import bharatMarketScreenshot from "../assets/projects/bharat-market-screenshot.png";
import cryptoLotteryScreenshot from "../assets/projects/crypto-lottery-screenshot.png";
import identifyMeScreenshot from "../assets/projects/identifyme-screenshot.png";
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
  { value: "2", label: "EVM + Solana ecosystems" },
  { value: "CPMM", label: "Market engine implemented" },
];

export const HERO_CONTENT = (
  <>
    I&apos;m a blockchain engineer building smart-contract systems, market
    mechanisms, oracle workflows, and wallet-native product surfaces. My work
    sits at the boundary of Solidity/Rust contracts, protocol UX, and production
    frontend execution.
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
    title: "CryptoLottery",
    image: cryptoLotteryScreenshot,
    accent: "from-violet-300 via-fuchsia-400 to-purple-500",
    description:
      "Built a Solana lottery application with Anchor-backed program logic, wallet participation, transparent draw mechanics, and historical lottery tracking.",
    architecture:
      "Program-first flow with account state, participant tracking, draw lifecycle handling, and a frontend tuned for wallet execution.",
    technologies: [
      "Solana",
      "Rust",
      "Anchor",
      "React",
      "TypeScript",
      "Vite",
      "Web3.js",
    ],
    github: "https://github.com/pk1427/Aa-Solana-lottery",
    live: "https://lottery-solana-wine.vercel.app/",
    metrics: ["Solana lottery", "Wallet flows", "Transparent mechanics"],
  },
  {
    title: "IdentifyMe",
    image: identifyMeScreenshot,
    accent: "from-cyan-300 via-sky-500 to-indigo-500",
    description:
      "Built an on-chain identity product where users create, edit, and discover wallet-linked profiles with configurable visibility controls.",
    architecture:
      "Profile state and access rules live on-chain, while the app focuses on clear identity discovery and update flows.",
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
  address: "Gandhinagar, Gujarat 382421",
  phoneNo: "+91-9657584288",
  email: "prasadkapure553@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasad-kapure-9b5560240/",
  github: "https://github.com/pk1427",
  x: "https://x.com/PrasadKapure5?t=eKzhZo9kopjcQPSe8EZHQg&s=08",
  instagram: "https://instagram.com/prasad_kapure_",
  resume: resumePdf,
};
