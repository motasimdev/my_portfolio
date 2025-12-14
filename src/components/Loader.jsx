import React from "react";
import { motion } from "motion/react";
import logo from "/src/assets/logo4.png";

const Loader = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black z-[9999] fixed inset-0">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className=""
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
            <motion.img src={logo} alt="" />
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
          Just Start...
        </motion.p>
      </div>
    </>
  );
};

export default Loader;
