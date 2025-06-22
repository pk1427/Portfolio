import { PROJECTS } from "../constants/index"; // Importing projects data
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-24">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>

      {/* Projects Section */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center w-full max-w-xl lg:w-3/4 bg-stone-800 p-6 rounded-lg shadow-lg"
          >
            {/* Project Image */}
            <img
              src={project.image}
              height={250}
              alt={project.title}
              className="mb-6 rounded"
            />

            {/* Project Title and Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
            </motion.div>

            {/* Project Technologies */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-purple-700 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-900 transition-colors duration-300"
              >
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
