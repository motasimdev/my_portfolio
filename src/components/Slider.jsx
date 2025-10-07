import React from 'react'
import { motion } from "motion/react";
import SliderItems from './SliderItems';

const Slider = () => {
  return (
    <>
    <div className="overflow-hidden w-full py-10">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
      >
        <SliderItems />
        <SliderItems /> {/* duplicate for continuous loop */}
      </motion.div>
    </div>
    </>
  )
}

export default Slider