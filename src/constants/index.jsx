import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "3+", label: "Production internships" },
  { value: "Web3", label: "Protocol-first mindset" },
  { value: "CPMM", label: "Market mechanism shipped" },
];

export const HERO_CONTENT = (
  <>
    I&apos;m a full stack blockchain developer focused on shipping products that
    feel closer to protocols than portfolio demos. I&apos;ve worked across
    Solidity, Solana, oracle integrations, wallet UX, and real-time frontends
    at teams like Finsocial, Quadb Technologies, and AppAvengers.
  </>
);

export const EXPERIENCES = [
  {
    year: "Sep 2025 - Present",
    role: "Blockchain Developer Intern",
    company: "AppAvengers",
    companyUrl: "https://appavengers.com",
    description:
      "Focusing on Ethereum smart contracts, Solana with Anchor, and decentralized application development across production-oriented Web3 projects.",
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
      "Built DEX smart contracts for token swaps, SLTP, and futures trading while integrating Chainlink-powered market data and PostgreSQL-backed trading workflows.",
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
      "Contributed to EVM-compatible infrastructure after in-house blockchain training, working on RPC integration, agent logic, and modular contract architecture.",
    technologies: ["Solidity", "TypeScript", "Web3.js", "Git", "EVM"],
  },
  {
    year: "May 2024 – Jul 2024",
    role: "Software Developer Intern",
    company: "Brandlane",
    companyUrl: "https://brandlane.in/",
    description:
      "Delivered responsive pages, launched growth-oriented company and careers experiences, and supported production deployments with high uptime.",
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
    image: project2,
    featured: true,
    tag: "Featured Project",
    accent: "from-amber-300 via-orange-400 to-red-500",
    description:
      "Built a full-stack decentralized prediction market on Polygon Amoy enabling users to trade YES/NO outcomes using a CPMM-based pricing model. The platform supports wallet-based trading, liquidity provisioning, and oracle-driven market resolution using Chainlink Functions. Designed as a production-style Web3 application with real-time on-chain interaction and stablecoin (USDC) integration.",
    features:
      "YES/NO trading, liquidity pools, oracle-based resolution, wallet integration",
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
    image: project4,
    accent: "from-violet-300 via-fuchsia-400 to-purple-500",
    description:
      "Built a decentralized lottery platform on Solana with transparent draw mechanics, wallet-based participation, and past lottery tracking for a production-style experience.",
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
    image: project1,
    accent: "from-cyan-300 via-sky-500 to-indigo-500",
    description:
      "Built a decentralized identity platform where users create, edit, and manage profiles on-chain with wallet-based discovery and configurable visibility controls.",
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
      "Built a Web3 fantasy sports product with NFT player cards, skill-based gameplay, token rewards, and wallet onboarding powered by Wagmi and RainbowKit.",
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
  {
    title: "Twitch Party Games",
    image: project3,
    accent: "from-fuchsia-300 via-pink-400 to-rose-500",
    description:
      "Created a Twitch extension for real-time multiplayer experiences like Trivia and Tic-Tac-Toe using WebSockets for low-latency player interaction.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSocket",
      "Twitch API",
    ],
    github: "https://github.com/pk1427/twitch-party-games",
    live: "https://twitch-party-games.vercel.app/",
    metrics: ["Realtime sessions", "Twitch extension", "Interactive gameplay"],
  },
];

export const TECHNOLOGIES = [
  "Solidity",
  "Chainlink",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Wagmi",
  "Hardhat",
  "OpenZeppelin",
  "Git",
  "Rust",
  "Anchor",
  "Solana",
];

export const CONTACT = {
  address: "Gandhinagar, Gujarat 382421",
  phoneNo: "+91-9657584288",
  email: "prasadkapure553@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasad-kapure-9b5560240/",
  github: "https://github.com/pk1427",
  x: "https://x.com/PrasadKapure5?t=eKzhZo9kopjcQPSe8EZHQg&s=08",
  instagram: "https://instagram.com/prasad_kapure_",
  resume: "/resume.pdf",
};
