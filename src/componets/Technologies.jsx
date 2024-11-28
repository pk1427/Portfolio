import { DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Section Heading */}
      <h2 className="my-20 text-center text-4xl font-bold">Technologies</h2>

      {/* Icons Section */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* React Icon */}
        <div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        {/* Next.js Icon */}
        <div className="p-4">
          <TbBrandNextjs className="text-7xl text-white" />
        </div>

        {/* MongoDB Icon */}
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>

        {/* Node.js Icon */}
        <div className="p-4">
          <DiNodejsSmall className="text-7xl text-green-600" />
        </div>

        {/* CSS Icon */}
        <div className="p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
