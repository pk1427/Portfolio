import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp"; // Add CryptoLottery image

export const HERO_CONTENT = (
  <>
    I'm a passionate Full Stack and Blockchain Developer with hands-on
    experience in smart contract development, DEX platforms, and cross-chain
    infrastructure. I specialize in building scalable, secure decentralized
    applications using Solidity, React, Node.js, and TypeScript. I've interned
    at{" "}
    <a
      href="https://finsocial.tech"
      className="text-purple-400 hover:text-purple-300 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      Finsocial
    </a>
    {", "}
    <a
      href="https://quadbtech.com"
      className="text-purple-400 hover:text-purple-300 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quadb Technologies
    </a>
    {", and "}
    <a
      href="https://appavengers.com"
      className="text-purple-400 hover:text-purple-300 underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      AppAvengers
    </a>
    , working on real-world blockchain systems using Chainlink, Solana,
    PostgreSQL, and EVM infra.
  </>
);

export const EXPERIENCES = [
  {
    year: "Sep 2025 - Present",
    role: "Blockchain Developer Intern",
    company: (
      <a
        href="https://appavengers.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline transition-colors"
      >
        AppAvengers
      </a>
    ),
    description: `Focusing on Ethereum smart contracts, Solana (Anchor framework), and decentralized application development. Contributing to innovative Web3 projects with hands-on blockchain development experience.`,
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
    company: (
      <a
        href="https://finsocial.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline transition-colors"
      >
        Finsocial Digital Systems
      </a>
    ),
    description: `Built smart contracts for token swaps, SLTP, and futures trading on a DEX. Developed real-time PNL tracking with Chainlink price feeds and integrated PostgreSQL for trade data management.`,
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
    company: (
      <a
        href="https://quadbtech.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline transition-colors"
      >
        Quadb Technologies
      </a>
    ),
    description: `Selected after completing in-house blockchain developer training. Adapted Sendai's Solana infra to EVM-compatible architecture. Contributed to agent logic, RPC integration, and modular contract design.`,
    technologies: ["Solidity", "TypeScript", "Web3.js", "Git", "EVM"],
  },
  {
    year: "May 2024 - July 2024",
    role: "Software Developer Intern (Full Stack)",
    company: (
      <a
        href="https://brandlane.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline transition-colors"
      >
        Brandlane
      </a>
    ),
    description: `Launched Careers and Company pages, boosting user engagement. Converted UI designs into responsive web pages and maintained Hostinger deployment with 99.9% uptime.`,
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
    title: "CryptoLottery",
    image: project4,
    description:
      "Built a decentralized lottery platform on Solana blockchain with fair, transparent, and secure lottery mechanisms. Features include active lottery participation, past lottery tracking, and wallet integration for seamless transactions.",
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
    liveDemo: "https://lottery-solana-wine.vercel.app/", // ✅ Added
  },
  {
    title: "IdentifyMe",
    image: project1,
    description:
      "Built a decentralized platform enabling users to create, edit, and manage profiles securely on the blockchain. Users can control visibility of personal and professional details and access profiles via wallet addresses or usernames.",
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
    liveDemo: "https://identity-dapp.vercel.app/", // ✅ Added
  },
  {
    title: "FantasyX",
    image: project2,
    description:
      "Developing a Web3 fantasy sports betting platform with NFT player cards, skill-based gameplay, and token rewards. Integrated wallet authentication using Wagmi & RainbowKit, and stored metadata on IPFS.",
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
    liveDemo: "https://fantasyx-frontend.vercel.app/", // ✅ Replace if different
  },
  {
    title: "Twitch Party Games",
    image: project3,
    description:
      "Created a Twitch extension enabling real-time games like Trivia and Tic-Tac-Toe, using WebSocket for interactive sessions.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebSocket",
      "Twitch API",
    ],
    github: "https://github.com/pk1427/twitch-party-games",
    liveDemo: "https://twitch-party-games.vercel.app/", // ✅ Replace if different
  },
];


export const CONTACT = {
  address: "Gandhinagar, Gujarat 382421",
  phoneNo: "+91-9657584288",
  email: "prasadkapure553@gmail.com",
  linkedin: "https://www.linkedin.com/in/prasad-kapure-9b5560240/",
  github: "https://github.com/pk1427",
  instagram: "https://instagram.com/prasad_kapure_",
  twitter: "https://x.com/PrasadKapure5?t=eKzhZo9kopjcQPSe8EZHQg&s=08",
};