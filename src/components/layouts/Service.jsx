import React, { useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { LiaTvSolid } from "react-icons/lia";
import { MdConnectedTv } from "react-icons/md";
import { MdResetTv } from "react-icons/md";
import { motion } from "motion/react";

const Service = () => {
  return (
    <>
      <section id="service" className="h-275 lg:h-170 scroll-mt-0">
        <div className="pt-12.5 lg:pt-25 h-250 lg:h-137.5 serviceBg">
          <div className=" mb-10 lg:mb-15 py-3 lg:py-6 serviceHeadingBg">
            <h3 className="text-[#E0FFFE] font-semibold text-2xl lg:text-4xl text-center">
              My Services
            </h3>
          </div>
          <Container>
            <div className="">
              <div
                className={
                  "flex flex-col gap-y-6 lg:gap-y-0 md:flex-row lg:flex-row items-center justify-between"
                }
              >
                {/* =================1============== */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-82.2 lg:w-95 lg:h-95 p-5 border border-white/20 bg-black/15 backdrop-blur-[15px] shadow-[6px_11px_17px_0px_rgba(0,0,0,0.2)]"
                >
                  <LiaTvSolid className="m-auto text-4xl lg:text-6xl text-white" />
                  <h3 className="text-center text-xl lg:text-2xl text-[#E0FFFE] py-5">
                    Frontend Development
                  </h3>
                  <p className="text-white text-[13px] lg:text-base text-justify leading-8">
                    I create modern, responsive, and visually appealing website
                    designs focused on user experience and clean layout. Using
                    tools like Figma and Tailwind CSS, I ensure every design is
                    unique, functional, and perfectly aligned with your brand.
                  </p>
                </motion.div>
                {/* =================1============== */}
                {/* =================2============== */}

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-82.5 lg:w-95 lg:h-95 p-5 border border-white/20 bg-black/15 backdrop-blur-[15px] shadow-[6px_11px_17px_0px_rgba(0,0,0,0.2)]"
                >
                  <MdResetTv className="m-auto text-4xl lg:text-6xl text-white" />
                  <h3 className="text-center text-xl lg:text-2xl text-[#E0FFFE] py-5">
                    MERN Development
                  </h3>
                  <p className="text-white text-[13px] lg:text-base text-justify leading-[32px]">
                    I develop full-stack web applications using MongoDB,
                    Express, React, and Node.js. From backend logic to frontend
                    design, I ensure powerful, scalable, and user-friendly
                    solutions.
                  </p>
                </motion.div>

                {/* =================2============== */}
                {/* =================3============== */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-82.5 lg:w-[380px] lg:h-[380px] p-5 border border-white/20 bg-black/15 backdrop-blur-[15px] shadow-[6px_11px_17px_0px_rgba(0,_0,_0,_0.2)]"
                >
                  <MdConnectedTv className="m-auto text-4xl lg:text-6xl text-white" />
                  <h3 className="text-center text-xl lg:text-2xl text-[#E0FFFE] py-5">
                    API Development
                  </h3>
                  <p className="text-white text-[13px] lg:text-base text-justify leading-[32px]">
                    I create secure and efficient RESTful APIs using Node.js and
                    Express. My APIs are well-structured, fast, and easy to
                    integrate with any frontend or mobile application.
                  </p>
                </motion.div>
                {/* =================3============== */}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Service;
