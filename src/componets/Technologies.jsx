import { DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiSolidity,
  SiTypescript,
  SiPostgresql,
  SiOpenzeppelin,
  SiChainlink,
  SiGit,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants";

const stackCards = [
  {
    title: "Contract layer",
    description: "Solidity, Hardhat, OpenZeppelin, Chainlink, market logic",
    accent: "from-sky-400/25 to-cyan-300/5",
  },
  {
    title: "Product layer",
    description: "React, Next.js, wallet UX, state flows, polished interfaces",
    accent: "from-violet-400/25 to-fuchsia-300/5",
  },
  {
    title: "Infra layer",
    description: "Node.js, PostgreSQL, MongoDB, Solana, deployment workflows",
    accent: "from-emerald-400/25 to-teal-300/5",
  },
];

const iconCards = [
  { icon: SiSolidity, label: "Solidity", color: "text-slate-100" },
  { icon: SiEthereum, label: "Ethereum", color: "text-sky-400" },
  { icon: SiChainlink, label: "Chainlink", color: "text-blue-500" },
  { icon: SiOpenzeppelin, label: "OpenZeppelin", color: "text-violet-400" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
  { icon: RiReactjsLine, label: "React", color: "text-cyan-400" },
  { icon: TbBrandNextjs, label: "Next.js", color: "text-white" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-indigo-400" },
  { icon: SiMongodb, label: "MongoDB", color: "text-emerald-400" },
  { icon: DiNodejsSmall, label: "Node.js", color: "text-green-400" },
  { icon: SiGit, label: "Git", color: "text-orange-400" },
  { icon: FaCss3Alt, label: "CSS", color: "text-sky-500" },
];

const Technologies = () => {
  return (
    <section id="stack" className="pb-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.7 }}
        className="glass-card overflow-hidden p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <span className="section-kicker">Stack Architecture</span>
            <h2 className="section-title max-w-lg">
              A sharper stack story, not just a wall of logos.
            </h2>
            <p className="section-copy">
              The strongest Web3 portfolios explain how the tooling supports the
              product. This section now frames the stack around the layers I use
              to ship protocol-driven experiences end to end.
            </p>

            <div className="mt-8 grid gap-4">
              {stackCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`rounded-[1.6rem] border border-white/10 bg-gradient-to-br ${card.accent} p-[1px]`}
                >
                  <div className="rounded-[calc(1.6rem-1px)] bg-slate-950/90 p-5">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                      Layer {index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_80%_10%,_rgba(168,85,247,0.18),_transparent_32%)] blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-[#07101f] p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {iconCards.map(({ icon: Icon, label, color }, index) => (
                  <motion.div
                    key={label}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 24 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="group rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className={`text-4xl ${color}`} />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
                        Core
                      </span>
                    </div>
                    <p className="mt-8 text-base font-medium text-slate-200">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-sky-400/10 via-transparent to-violet-400/10 p-5">
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">
                  Delivery mindset
                </p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  I don&apos;t separate smart contracts from UX. I build the
                  contract logic, wallet flow, and frontend experience as one
                  system so the product feels coherent in production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
