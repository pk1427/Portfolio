import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  const [featuredProject, ...otherProjects] = PROJECTS;

  return (
    <section id="projects" className="pb-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-kicker">Selected Work</span>
        <h2 className="section-title max-w-3xl">
          Projects that feel closer to products and protocols than tutorials.
        </h2>
        <p className="section-copy max-w-3xl">
          The layout here is now built to sell execution quality: flagship
          project first, stronger visual hierarchy, clearer mechanics, and more
          polished card composition for the rest of the portfolio.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.08 }}
        className="glass-card mt-12 overflow-hidden p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-amber-300/10 via-orange-400/10 to-rose-500/10 p-6 sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,63,94,0.12),_transparent_35%)]" />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                {featuredProject.tag && (
                  <span className="rounded-full border border-amber-400/25 bg-amber-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-amber-200">
                    {featuredProject.tag}
                  </span>
                )}
                {featuredProject.metrics?.map((metric) => (
                  <span key={metric} className="chip text-xs">
                    {metric}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                {featuredProject.title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                {featuredProject.description}
              </p>

              {featuredProject.features && (
                <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                    Feature set
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {featuredProject.features}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Launch Demo
                </a>
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-sky-400/10"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-300/15 via-transparent to-rose-400/15 blur-2xl" />
            <div className="relative rounded-[1.9rem] border border-white/10 bg-[#08101e] p-4">
              <div className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                  Production-style case study
                </span>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {featuredProject.metrics?.map((metric, index) => (
                  <div
                    key={metric}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-slate-600">
                      Signal {index + 1}
                    </p>
                    <p className="mt-3 text-sm font-medium text-slate-200">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 36 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group glass-card overflow-hidden"
          >
            <div className="relative p-5 sm:p-6">
              <div
                className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${project.accent} opacity-15`}
              />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-[#08101d] p-3">
                <div className="mb-3 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                    Build Preview
                  </span>
                </div>
                <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            <div className="px-5 pb-6 sm:px-6 sm:pb-7">
              <div className="flex flex-wrap gap-3">
                {project.metrics?.map((metric) => (
                  <span key={metric} className="chip text-xs">
                    {metric}
                  </span>
                ))}
              </div>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400/50 hover:bg-sky-400/10"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
