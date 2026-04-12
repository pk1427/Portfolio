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

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="stack" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="mb-4 text-center text-4xl font-semibold tracking-[-0.04em] text-white"
      >
        Stack That Supports Shipping
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base"
      >
        Smart contract logic, wallet UX, oracle integrations, and full-stack
        product delivery for Web3 systems that need more than a demo.
      </motion.p>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.45)]"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(4)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiSolidity className="text-5xl text-slate-300" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3.5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiEthereum className="text-5xl text-sky-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(4.5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiChainlink className="text-5xl text-blue-500" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5.5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiOpenzeppelin className="text-5xl text-violet-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiTypescript className="text-5xl text-blue-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2.5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <RiReactjsLine className="text-5xl text-cyan-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(3)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <TbBrandNextjs className="text-5xl text-white" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(4)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiPostgresql className="text-5xl text-indigo-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiMongodb className="text-5xl text-emerald-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(2)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <DiNodejsSmall className="text-5xl text-green-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(5.5)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <SiGit className="text-5xl text-orange-400" />
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconVariants(6)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <FaCss3Alt className="text-5xl text-sky-500" />
            </motion.div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
              Core toolkit
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
              End-to-end stack for modern Web3 product delivery
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Technologies;
