import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import { motion } from "motion/react";
import Slider from "../Slider";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="h-[720px] scroll-mt-0">
        <div className="pt-[100px] h-[550px]  bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(80,134,143,1)_36%,rgba(58,119,129,1)_45%,rgba(39,106,117,1)_54%,rgba(28,98,110,1)_62%,rgba(21,93,105,1)_67%,rgba(11,86,99,1)_100%)]">
          <Container>
            <div className="">
              <div className="text-center py-3 lg:py-6 mb-[40px] lg:mb-[60px] bg-[radial-gradient(circle,rgba(23,102,114,1)_0%,rgba(54,122,133,1)_19%,rgba(70,132,143,1)_32%,rgba(83,141,151,1)_47%,rgba(116,163,171,1)_68%,rgba(153,187,193,1)_100%,rgba(255,255,255,1)_100%)]">
                <h3 className="text-[#E0FFFE] font-semibold text-2xl lg:text-4xl text-center">
                  Portfolio
                </h3>
              </div>
              <Slider/>

              <div className="hidden lg:flex items-center justify-between">
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
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
