import profilePic from "../assets/Prasad_Photo.jpg";
import {
  HERO_CONTENT,
  HERO_STATS,
  CONTACT,
  PROTOCOL_PRINCIPLES,
} from "../constants/index";
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
    <section id="about" className="pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-28 lg:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] xl:grid-cols-[minmax(0,1.42fr)_minmax(380px,0.58fr)]">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.span
              variants={childVariants}
              className="mb-5 inline-flex max-w-full items-center rounded-md border border-amber-200/25 bg-amber-200/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-100 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.28em]"
            >
              Senior protocol developer direction
            </motion.span>

            <motion.h1
              variants={childVariants}
              className="max-w-5xl text-[42px] font-semibold leading-[1.02] text-white min-[420px]:text-5xl sm:text-6xl lg:text-[72px] xl:text-[82px]"
            >
              Building markets, infra, and dApps with protocol-grade execution.
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={childVariants}
              className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 min-[420px]:flex-row sm:mt-10 lg:justify-start"
            >
              <a
                href="#projects"
                className="primary-action"
              >
                View Featured Work
              </a>
              <a
                href={CONTACT.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-action"
              >
                Open Resume
              </a>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="mt-10 grid w-full gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4"
            >
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-[#10120f]/75 p-4 text-left shadow-[0_18px_65px_rgba(0,0,0,0.25)] sm:p-5"
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
            className="relative mx-auto w-full max-w-[390px] sm:max-w-[420px] lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#10120f]/85 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.5)] sm:p-4">
              <div className="mb-3 flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 sm:mb-4 sm:items-center sm:px-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Active focus
                  </p>
                  <p className="mt-1 text-xs font-medium leading-5 text-white sm:text-sm">
                    Markets, treasury risk, funding infra, wallet-safe UX
                  </p>
                </div>
                <span className="shrink-0 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-[11px] font-medium text-emerald-100 sm:px-3 sm:text-xs">
                  Available
                </span>
              </div>

              <div className="overflow-hidden rounded-lg border border-white/10">
                <motion.img
                  src={profilePic}
                  alt="Prasad Kapure"
                  className="aspect-[5/6] w-full object-cover object-[50%_32%]"
                  width={550}
                  loading="eager"
                />
              </div>

              <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Strength
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Smart contracts + frontend execution in one workflow.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
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

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid items-stretch gap-4 sm:mt-16 lg:grid-cols-3"
      >
        {PROTOCOL_PRINCIPLES.map((principle, index) => (
          <div
            key={principle.title}
            className="rounded-lg border border-white/10 bg-[#10120f]/70 p-5 transition hover:border-teal-200/25 hover:bg-[#121711]/80"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Principle {index + 1}
            </p>
            <h2 className="mt-4 text-xl font-semibold text-white">
              {principle.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {principle.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;