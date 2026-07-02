import { useMemo, useState } from "react";
import { PROJECTS } from "../constants/index";
import { motion, AnimatePresence } from "framer-motion";
import { LuLayoutGrid } from "react-icons/lu";

const renderProjectPreview = (project, className = "aspect-[16/10]") => {
  if (project.preview === "live") {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-black ${className}`}>
        <iframe
          src={project.live}
          title={`${project.title} live preview`}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-black"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-lg bg-black ${className}`}>
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
};

const renderWindowFrame = (
  children,
  label = "Build Preview",
  className = ""
) => (
  <div className={`rounded-lg border border-white/10 bg-[#090b09] p-2.5 sm:p-3 ${className}`}>
    <div className="mb-2.5 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 sm:mb-3">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-sm bg-rose-400" />
        <span className="h-2 w-2 rounded-sm bg-amber-300" />
        <span className="h-2 w-2 rounded-sm bg-emerald-400" />
      </div>
      <span className="truncate text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px] sm:tracking-[0.24em]">
        {label}
      </span>
    </div>
    <div className="overflow-hidden rounded-md border border-white/10 bg-black">
      {children}
    </div>
  </div>
);

const Projects = () => {
  const categories = useMemo(
    () => ["All", ...new Set(PROJECTS.map((project) => project.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-shell">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <span className="section-kicker">Selected Work</span>
        <h2 className="section-title max-w-3xl">
          Projects across markets, treasury, grants, and identity.
        </h2>
        <p className="section-copy max-w-3xl">
          Each project focuses on the same practical questions: what should live
          on-chain, what data needs to be indexed, and how users understand what
          they are signing.
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 flex flex-wrap gap-2 sm:mt-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`inline-flex items-center gap-1.5 rounded-md border px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] transition sm:text-[13px] sm:tracking-[0.2em] ${
              activeCategory === category
                ? "border-teal-200/50 bg-teal-200/15 text-teal-100"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-slate-200"
            }`}
          >
            {category === "All" && <LuLayoutGrid className="text-sm" />}
            {category}
          </button>
        ))}
      </motion.div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 36 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[rgba(16,18,15,0.78)] shadow-[0_20px_75px_rgba(0,0,0,0.32)] ring-1 ring-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-teal-200/30 hover:bg-[#111610]/90 hover:shadow-[0_28px_95px_rgba(0,0,0,0.42)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative p-3 sm:p-5">
                  <div
                    className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${project.accent} opacity-15`}
                  />
                  {renderWindowFrame(
                    renderProjectPreview(project, "aspect-[16/9]"),
                    "Build Preview",
                    "relative"
                  )}
                </div>

                <div className="flex flex-col px-3 pb-5 pt-0 sm:px-5 sm:pb-6 lg:py-5 lg:pl-0 lg:pr-5">
                  <div className="flex flex-wrap gap-2">
                    {project.category && (
                      <span className="rounded-md border border-amber-200/25 bg-amber-200/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-100 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
                        {project.category}
                      </span>
                    )}
                    {project.metrics?.map((metric) => (
                      <span key={metric} className="chip text-xs">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400 sm:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.72fr]">
                    <div className="rounded-lg border border-white/10 bg-black/15 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        Architecture
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="rounded-lg border border-teal-200/15 bg-teal-200/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-teal-100">
                        Lesson
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {project.deliverySignal}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.live || project.github) && (
                    <div className="mt-6 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary-action"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="secondary-action"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
