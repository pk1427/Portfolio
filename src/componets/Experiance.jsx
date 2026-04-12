import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-semibold tracking-[-0.04em] text-white"
      >
        Built In Real Teams
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mb-12 max-w-2xl text-center text-sm leading-7 text-slate-400 sm:text-base"
      >
        Experience across blockchain and full-stack teams where delivery,
        reliability, and execution speed mattered.
      </motion.p>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 sm:block" />
        {EXPERIENCES.map((experience, index) => (
          <div
            key={`${experience.company}-${experience.year}`}
            className="relative mb-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_25px_80px_rgba(2,6,23,0.35)] sm:grid-cols-[180px_1fr]"
          >
            <div className="absolute left-4 top-8 hidden h-3 w-3 rounded-full border border-sky-300/50 bg-sky-300 sm:block" />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="sm:pl-8"
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
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                {experience.role}
              </h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm text-sky-300 transition hover:text-sky-200"
              >
                {experience.company}
              </a>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {experience.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {experience.technologies.map((tech) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
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
