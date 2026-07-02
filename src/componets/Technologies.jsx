import { DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiChainlink,
  SiEthers,
  SiExpress,
  SiGit,
  SiIpfs,
  SiMongodb,
  SiNextdotjs,
  SiOpenzeppelin,
  SiPolygon,
  SiPostgresql,
  SiPrisma,
  SiRust,
  SiSolana,
  SiSolidity,
  SiStellar,
  SiTypescript,
  SiVite,
  SiWalletconnect,
} from "react-icons/si";
import {
  LuCoins,
  LuDatabase,
  LuDice5,
  LuFingerprint,
  LuLandmark,
  LuLayers,
  LuLock,
  LuNetwork,
  LuShieldCheck,
  LuTrendingUp,
  LuWallet,
} from "react-icons/lu";
import { TbHammer } from "react-icons/tb";
import { SiEthereum } from "react-icons/si";
import { motion } from "framer-motion";

const protocolFocus = [
  {
    icon: LuTrendingUp,
    label: "Prediction Markets",
    detail: "BharatMarket: Polygon CPMM pricing, YES/NO trading, Chainlink resolution",
    color: "text-amber-200",
  },
  {
    icon: LuLandmark,
    label: "Treasury & Risk",
    detail: "TreasuryOS: treasury snapshots, reports, and on-chain attestations",
    color: "text-violet-300",
  },
  {
    icon: LuCoins,
    label: "Grant Funding",
    detail: "GrantFlow: milestone escrow, validation, and staged fund releases",
    color: "text-teal-300",
  },
  {
    icon: LuFingerprint,
    label: "Identity",
    detail: "IdentifyMe: wallet-linked profiles with on-chain access control",
    color: "text-cyan-300",
  },
];

const skillGroups = [
  {
    title: "Chains & Protocols",
    icon: LuNetwork,
    skills: [
      { icon: SiEthereum, label: "Ethereum", note: "EVM contracts", color: "text-slate-100" },
      { icon: SiSolana, label: "Solana", note: "Anchor programs", color: "text-emerald-300" },
      { icon: SiPolygon, label: "Polygon", note: "BharatMarket", color: "text-violet-300" },
      { icon: SiStellar, label: "Stellar", note: "Liquidity routing research", color: "text-sky-300" },
      { icon: LuLandmark, label: "Casper / Base", note: "GrantFlow integrations", color: "text-cyan-200" },
      { icon: LuCoins, label: "USDC rails", note: "Stablecoin flows", color: "text-amber-200" },
    ],
  },
  {
    title: "Smart Contracts",
    icon: LuShieldCheck,
    skills: [
      { icon: SiSolidity, label: "Solidity", note: "Market logic", color: "text-slate-100" },
      { icon: SiRust, label: "Rust", note: "Solana logic", color: "text-orange-300" },
      { icon: TbHammer, label: "Hardhat", note: "Testing + deploys", color: "text-yellow-200" },
      { icon: SiOpenzeppelin, label: "OpenZeppelin", note: "Secure primitives", color: "text-indigo-300" },
      { icon: LuDice5, label: "Switchboard", note: "Verifiable randomness", color: "text-fuchsia-300" },
      { icon: LuLock, label: "Fhenix", note: "Encrypted DeFi lending", color: "text-purple-300" },
    ],
  },
  {
    title: "Oracle & Wallet UX",
    icon: LuWallet,
    skills: [
      { icon: SiChainlink, label: "Chainlink", note: "Oracle workflows", color: "text-blue-300" },
      { icon: SiEthers, label: "Ethers.js", note: "Contract reads", color: "text-violet-200" },
      { icon: SiWalletconnect, label: "Wallet UX", note: "User signing flows", color: "text-teal-200" },
      { icon: LuLayers, label: "Wagmi/RainbowKit", note: "Network states", color: "text-pink-200" },
    ],
  },
  {
    title: "Product Engineering",
    icon: LuDatabase,
    skills: [
      { icon: SiTypescript, label: "TypeScript", note: "Typed app logic", color: "text-blue-300" },
      { icon: RiReactjsLine, label: "React", note: "Interactive UI", color: "text-cyan-300" },
      { icon: SiNextdotjs, label: "Next.js", note: "Full-stack apps", color: "text-white" },
      { icon: SiVite, label: "Vite", note: "Fast builds", color: "text-purple-300" },
      { icon: DiNodejsSmall, label: "Node.js", note: "APIs + services", color: "text-green-300" },
      { icon: SiExpress, label: "Express", note: "Backend routes", color: "text-slate-200" },
      { icon: SiPostgresql, label: "PostgreSQL", note: "Trading + treasury data", color: "text-sky-300" },
      { icon: SiPrisma, label: "Prisma", note: "TreasuryOS indexer", color: "text-slate-100" },
      { icon: SiMongodb, label: "MongoDB", note: "App storage", color: "text-emerald-300" },
      { icon: SiIpfs, label: "IPFS", note: "NFT metadata", color: "text-teal-300" },
      { icon: SiGit, label: "Git", note: "Team workflow", color: "text-orange-300" },
    ],
  },
];

const Technologies = () => {
  return (
    <section id="stack" className="section-shell">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden border-y border-white/10 py-10 sm:py-12 lg:py-14"
      >
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="section-header">
              <span className="section-kicker">Technical Stack</span>
              <h2 className="section-title max-w-xl">
                Ethereum, Solana, Polygon, and the product layer around them.
              </h2>
              <p className="section-copy">
                This stack is organized around the work I have actually done:
                smart contracts, oracle integrations, wallet flows, indexers,
                APIs, and product frontends.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:mt-8">
              {protocolFocus.map(({ icon: Icon, label, detail, color }, index) => (
                <motion.div
                  key={label}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid grid-cols-[42px_1fr] items-center gap-3 rounded-lg border border-white/10 bg-[#10120f]/80 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.02] transition hover:-translate-y-0.5 hover:border-teal-200/25 hover:bg-[#121711]/80 sm:grid-cols-[48px_1fr] sm:gap-4 sm:p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.045] sm:h-12 sm:w-12">
                    <Icon className={`text-xl sm:text-2xl ${color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{label}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-white/10 bg-gradient-to-br from-teal-200/10 via-white/[0.035] to-amber-200/10 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.25)] sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                How I connect the pieces
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:leading-7">
                Most Web3 products need the same pieces to work together:
                contracts that define the rules, off-chain services that make
                data easy to query, and a frontend that explains what happens
                before and after the user signs.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {["Contracts", "Indexed data", "Wallet UX"].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/10 bg-black/20 px-2 py-2 text-center text-[11px] font-semibold text-slate-200 sm:px-3 sm:text-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {skillGroups.map(({ title, icon: GroupIcon, skills }, groupIndex) => (
              <motion.div
                key={title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
                className="rounded-lg border border-white/10 bg-[#0f120e]/85 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.025] sm:p-5"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-teal-200/20 bg-teal-200/10 sm:h-10 sm:w-10">
                      <GroupIcon className="text-lg text-teal-100 sm:text-xl" />
                    </div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
                  </div>
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">
                    {skills.length} skills
                  </span>
                </div>

                <div className="grid grid-cols-2 items-stretch gap-2 min-[460px]:gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {skills.map(({ icon: Icon, label, note, color }, skillIndex) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 320, damping: 24 }}
                      className="group min-h-[112px] rounded-lg border border-white/10 bg-white/[0.035] p-3 transition duration-300 hover:border-teal-200/30 hover:bg-white/[0.06] sm:min-h-[118px] sm:p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#090b09] sm:h-11 sm:w-11">
                          <Icon className={`text-xl sm:text-2xl ${color}`} />
                        </div>
                        <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-600 sm:text-[10px] sm:tracking-[0.18em]">
                          0{skillIndex + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-100 sm:mt-4">
                        {label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{note}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
