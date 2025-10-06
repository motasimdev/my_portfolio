import React from "react";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-24 h-24 border-4 border-[#00FFF0] rounded-full flex justify-center items-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-[#00FFF0] font-bold text-lg"
          >
            MB
          </motion.span>
        </motion.div>

        {/* Text Animation */}
        <motion.p
          className="text-[#E0FFFE] mt-5 text-lg tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </>
  );
};

export default Loader;
