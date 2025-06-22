import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

// export const HERO_CONTENT = `I’m a passionate Full Stack and Blockchain Developer with hands-on experience in smart contract development, DEX platforms, and cross-chain infrastructure. I specialize in building scalable, secure decentralized applications using Solidity, React, Node.js, and TypeScript. I've interned at Finsocial and Quadb Technologies, working on real-world blockchain systems using Chainlink, PostgreSQL, and EVM infra.`;
export const HERO_CONTENT = (
  <>
    I’m a passionate Full Stack and Blockchain Developer with hands-on
    experience in smart contract development, DEX platforms, and cross-chain
    infrastructure. I specialize in building scalable, secure decentralized
    applications using Solidity, React, Node.js, and TypeScript. I've interned
    at{" "}
    <a
      href="https://finsocial.tech"
      className="text-blue-400 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Finsocial
    </a>{" "}
    and{" "}
    <a
      href="https://quadbtech.com"
      className="text-blue-400 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quadb Technologies
    </a>
    , working on real-world blockchain systems using Chainlink, PostgreSQL, and
    EVM infra.
  </>
);

// export const EXPERIENCES = [
//   {
//     year: "Feb 2025 – Jun 2025",
//     role: "Blockchain Developer Intern",
//     company: "Finsocial Digital Systems",
//     description: `Built smart contracts for token swaps, SLTP, and futures trading on a DEX. Developed real-time PNL tracking with Chainlink price feeds and integrated PostgreSQL for trade data management.`,
//     technologies: [
//       "Solidity",
//       "Hardhat",
//       "Remix",
//       "OpenZeppelin",
//       "PostgreSQL",
//       "Chainlink",
//     ],
//   },
//   {
//     year: "Feb 2025 – May 2025",
//     role: "Blockchain Developer Intern",
//     company: "Quadb Technologies",
//     description: `Selected after completing in-house blockchain developer training. Adapted Sendai’s Solana infra to EVM-compatible architecture. Contributed to agent logic, RPC integration, and modular contract design.`,
//     technologies: ["Solidity", "TypeScript", "Web3.js", "Git", "EVM"],
//   },
//   {
//     year: "May 2024 - July 2024",
//     role: "Software Developer Intern (Full Stack)",
//     company: "BrandLane",
//     description: `Launched Careers and Company pages, boosting user engagement. Converted UI designs into responsive web pages and maintained Hostinger deployment with 99.9% uptime.`,
//     technologies: [
//       "React.js",
//       "SCSS",
//       "CSS",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Hostinger",
//     ],
//   },
// ];

export const EXPERIENCES = [
  {
    year: "Feb 2025 – Jun 2025",
    role: "Blockchain Developer Intern",
    company: (
      <a
        href="https://finsocial.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
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
        className="text-blue-400 underline"
      >
        Quadb Technologies
      </a>
    ),
    description: `Selected after completing in-house blockchain developer training. Adapted Sendai’s Solana infra to EVM-compatible architecture. Contributed to agent logic, RPC integration, and modular contract design.`,
    technologies: ["Solidity", "TypeScript", "Web3.js", "Git", "EVM"],
  },
  {
    year: "May 2024 - July 2024",
    role: "Software Developer Intern (Full Stack)",
    company: (
      <a
        href="
    https://brandlane.in/,"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
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
  },
  {
    title: "CreatorConnect",
    image: project2,
    description:
      "Developing a decentralized content sharing platform with wallet-based authentication and ERC-20 tokens for rewarding content creators. Leveraging IPFS for distributed storage and implementing React for a seamless UI/UX.",
    technologies: [
      "Solidity",
      "OpenZeppelin",
      "ERC-20",
      "Ethereum",
      "React.js",
      "IPFS",
    ],
    github: "https://github.com/pk1427/creator-connect",
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
  },
];

export const CONTACT = {
  address: "Gandhinagar, Gujarat 382421",
  phoneNo: "+91-9657584288",
  email: "prasadkapure553@gmail.com",
  linkedin: "linkedin.com/in/prasad-kapure-9b5560240",
  github: "github.com/pk1427",
};
