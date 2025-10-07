import React from "react";
import { motion } from "motion/react";

const SliderItems = () => {
  return (
    <>
      <div className="min-w-[300px] h-[200px] bg-red-500 text-white flex justify-center items-center rounded-xl">
        {/* project 1 */}
        <motion.div
          // ====animate=======
          initial={{
            rotateY: 120,
          }}
          whileInView={{
            rotateY: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 1,
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.1 },
          }}
          // ====animate=======
          className="group relative w-[220px] h-[420px] border border-white/20 bg-black/15 backdrop-blur-[15px] flex justify-center items-center shadow-[6px_11px_17px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <img
            src="https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto,w_600/orebi_ws4jqk.png"
            alt="portfolio"
            className={"w-[200px] h-[400px]"}
          />

          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-[#0000005f] absolute top-0 left-0 w-[220px] h-[420px] flex flex-col items-center justify-center gap-y-2">
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              view project
            </a>
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform -translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              source code
            </a>
          </div>
        </motion.div>
        {/* project 1 */}
      </div>
      <div className="min-w-[300px] h-[200px] bg-green-500 text-white flex justify-center items-center rounded-xl">
        {/* project 2 */}
        <motion.div
          // ====animate=======
          initial={{
            rotateY: 120,
          }}
          whileInView={{
            rotateY: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 1,
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.1 },
          }}
          // ====animate=======
          className="group relative w-[220px] h-[420px] border border-white/20 bg-black/15 backdrop-blur-[15px] flex justify-center items-center shadow-[6px_11px_17px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <img
            src={
              "https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto,w_600/ummah_qeaqq7.png"
            }
            className={"w-[200px] h-[400px]"}
            alt="portfolio"
          />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-[#0000005f] absolute top-0 left-0 w-[220px] h-[420px] flex flex-col items-center justify-center gap-y-2">
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              view project
            </a>
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform -translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              source code
            </a>
          </div>
        </motion.div>
        {/* project 2 */}
      </div>
      <div className="min-w-[300px] h-[200px] bg-blue-500 text-white flex justify-center items-center rounded-xl">
        {/* project 3 */}
        <motion.div
          // ====animate=======
          initial={{
            rotateY: 120,
          }}
          whileInView={{
            rotateY: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 1,
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.1 },
          }}
          // ====animate=======
          className="group relative w-[220px] h-[420px] border border-white/20 bg-black/15 backdrop-blur-[15px] flex justify-center items-center shadow-[6px_11px_17px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <img
            src={
              "https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto/creative_agency_prxqxk.png"
            }
            className={"w-[200px] h-[400px]"}
            alt="portfolio"
          />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-[#0000005f] absolute top-0 left-0 w-[220px] h-[420px] flex flex-col items-center justify-center gap-y-2">
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              view project
            </a>
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform -translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              source code
            </a>
          </div>
        </motion.div>
        {/* project 3 */}
      </div>
      <div className="min-w-[300px] h-[200px] bg-purple-500 text-white flex justify-center items-center rounded-xl">
        {/* project 4 */}
        <motion.div
          // ====animate=======
          initial={{
            rotateY: 120,
          }}
          whileInView={{
            rotateY: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 1,
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.1 },
          }}
          // ====animate=======
          className="group relative w-[220px] h-[420px] border border-white/20 bg-black/15 backdrop-blur-[15px] flex justify-center items-center shadow-[6px_11px_17px_0px_rgba(0,_0,_0,_0.2)]"
        >
          <img
            src={
              "https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto/uomo_yxt047.png"
            }
            className={"w-[200px] h-[400px]"}
            alt="portfolio"
          />
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-[#0000005f] absolute top-0 left-0 w-[220px] h-[420px] flex flex-col items-center justify-center gap-y-2">
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              view project
            </a>
            <a
              href=""
              target="_"
              className="py-3 px-4 text-white hover:text-primary border transform -translate-x-[50px] group-hover:translate-x-0 transition-all duration-300 ease-in-out"
            >
              source code
            </a>
          </div>
        </motion.div>
        {/* project 4 */}
      </div>
    </>
  );
};

export default SliderItems;
