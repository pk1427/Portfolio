import profilePic from "../assets/Prasad_Photo.jpg";
import { HERO_CONTENT } from "../constants/index";
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
      staggerChildren: 0.5, // Use a comma here instead of ending with a parenthesis
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
      duration: 0.5, // Use a colon here and enclose in curly braces
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Profile Picture Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-4 ">
            <motion.img
              src={profilePic}
              alt="Prasad Kapure"
              className="border border-stone-900 rounded-3xl"
              width={550}
              // height={250}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* Hero Content Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-40"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl "
            >
              Prasad Kapure
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Blockchain Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="mb-6 mx-10 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
