import { DiNodejsSmall } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiSolidity,
  SiTypescript,
  SiPostgresql,
  SiOpenzeppelin,
  SiChainlink,
  SiGit,
  SiFramer,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* Solidity */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiSolidity className="text-7xl text-gray-500" />
        </motion.div>

        {/* Ethereum */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-4"
        >
          <SiEthereum className="text-7xl text-blue-400" />
        </motion.div>

        {/* Chainlink */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="p-4"
        >
          <SiChainlink className="text-7xl text-blue-600" />
        </motion.div>

        {/* OpenZeppelin */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="p-4"
        >
          <SiOpenzeppelin className="text-7xl text-purple-700" />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>

        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Next.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl text-white" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <SiPostgresql className="text-7xl text-indigo-500" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <DiNodejsSmall className="text-7xl text-green-600" />
        </motion.div>

        {/* Git */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="p-4"
        >
          <SiGit className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
