import { EXPERIENCES } from "../constants"; // Importing experiences data

const Experience = () => {
  return (
    <div className="pb-24">
      {/* Section Heading */}
      <h2 className="my-20 text-center text-4xl font-bold">Experience</h2>

      {/* Experiences Section */}
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year Section */}
            <div className="w-full lg:w-1/4 text-center lg:text-right lg:pr-8">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </div>

            {/* Role and Company Section */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-xl">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>

              {/* Technologies Section */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
