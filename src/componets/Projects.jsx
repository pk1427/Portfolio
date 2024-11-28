import { PROJECTS } from "../constants"; // Importing projects data

const Projects = () => {
  return (
    <div className="pb-24">
      {/* Section Heading */}
      <h2 className="my-20 text-center text-4xl font-bold">Projects</h2>

      {/* Projects Section */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
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
            <div className="text-center">
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
            </div>

            {/* Project Technologies */}
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
