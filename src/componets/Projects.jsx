import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-center text-4xl font-semibold tracking-[-0.04em] text-white"
      >
        Protocol-Style Project Showcase
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mb-12 max-w-3xl text-center text-sm leading-7 text-slate-400 sm:text-base"
      >
        Selected work that reflects how I think about on-chain systems,
        mechanics, execution quality, and product-grade Web3 experiences.
      </motion.p>

      <div className="grid gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_30px_100px_rgba(2,6,23,0.4)] ${
              project.featured ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]" : ""
            }`}
          >
            <div className="relative overflow-hidden p-6 sm:p-8">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 transition duration-500 group-hover:opacity-20`}
              />
              <div className="relative">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  {project.tag && (
                    <span className="rounded-full border border-amber-400/25 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-amber-200">
                      {project.tag}
                    </span>
                  )}
                  {project.metrics?.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  {project.description}
                </p>
                {project.features && (
                  <p className="mt-4 text-sm text-sky-200">
                    <span className="font-medium text-white">Features:</span>{" "}
                    {project.features}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-sky-400/10"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 sm:p-8 sm:pt-0 lg:p-8">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 p-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-20`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative aspect-[4/3] w-full rounded-[1.25rem] object-cover"
                />
              </div>

              {!project.featured && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.metrics?.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
