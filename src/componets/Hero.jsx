import profilePic from "../assets/Prasad_Photo.jpg";
import { HERO_CONTENT, HERO_STATS, CONTACT } from "../constants/index";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <section id="about" className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.span
              variants={childVariants}
              className="mb-6 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-amber-200"
            >
              Shipping Web3 products like protocols
            </motion.span>

            <motion.h1
              variants={childVariants}
              className="max-w-4xl text-5xl font-semibold leading-none tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl"
            >
              Building markets, infra, and dApps with protocol-level thinking.
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={childVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                View Featured Work
              </a>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-sky-400/10"
              >
                Open Resume
              </a>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="mt-12 grid w-full gap-4 sm:grid-cols-3"
            >
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-left shadow-[0_20px_80px_rgba(15,23,42,0.3)]"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto max-w-xl"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-cyan-300/10 to-amber-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_30px_120px_rgba(8,15,37,0.8)]">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Active focus
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Prediction markets, oracle resolution, stablecoin rails
                  </p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Available
                </span>
              </div>

              <motion.img
                src={profilePic}
                alt="Prasad Kapure"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                width={550}
                loading="eager"
              />

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Strength
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Smart contracts + frontend execution in one workflow.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Builder mode
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Product UX shaped around protocol mechanics.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
