import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.6 }}
        className="section-header mb-8 sm:mb-12"
      >
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Production Web3 engineering across chains.</h2>
        <p className="section-copy">
          Full-time blockchain developer building production-grade applications
          across Ethereum, Solana, and Cardano ecosystems with hands-on work
          in smart contracts, wallet integrations, DeFi infrastructure, and
          full-stack Web3 products.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 md:block" />
        {EXPERIENCES.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.year}`}
            className="relative mb-4 grid items-start gap-4 rounded-lg border border-white/10 bg-[#10120f]/75 p-4 shadow-[0_20px_75px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.025] transition duration-300 hover:-translate-y-0.5 hover:border-amber-200/25 hover:bg-[#121711]/80 sm:mb-6 sm:p-5 md:grid-cols-[220px_1fr] md:p-6"
          >
            <div className="absolute left-4 top-8 hidden h-3 w-3 rounded-sm border border-teal-200/50 bg-teal-200 md:block" />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="md:pl-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                {experience.role}
              </h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm text-teal-200 transition hover:text-white"
              >
                {experience.subtitle || experience.company}
              </a>
              <div className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {experience.description.split("\n").map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return null;
                  if (trimmed.startsWith("-")) {
                    return (
                      <p key={i} className="ml-4 list-disc">
                        {trimmed.slice(2)}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className={i > 0 ? "mt-2" : ""}>
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                {experience.technologies.map((tech) => (
                  <span
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
