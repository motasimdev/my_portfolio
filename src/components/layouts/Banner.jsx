import React, { useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import { motion } from "motion/react"

const Banner = () => {

  return (
    <>
      <section id="banner" className="bg-primary pt-[105px]">
        <div className="bg-[#3B939D] py-[170px]">
          <Container>
            <div className="relative">
              <Flex>
                <div className="">
                  <h3 className="font-semibold text-white text-[42px]">
                    Hello,
                  </h3>
                  <h2 className="font-semibold text-[#E0FFFE] text-[60px] py-4">
                    I am Motasim Billah
                  </h2>
                  <h4 className="font-semibold text-white text-[42px]">
                    I am a MERN Stack Developer
                  </h4>
                </div>
                <div className="">
                  <motion.img
                  // ========animate=====
                  initial={{
                      y:-100,
                  }}
                  whileInView={{
                    y:0,
                  }}
                  viewport={{
                    once:true,
                  }}
                  transition={{
                    duration:1.5,
                  }}
                  // ========animate=====

                    src={
                      "https://res.cloudinary.com/dxihqxcjs/image/upload/c_auto,ar_3:4/myPortfolioPic_cmhtcu.jpg"
                    }
                    className={
                      "absolute top-[-320px] right-[-30px] w-[560px] rounded-full z-40"
                    }
                  />
                </div>
              </Flex>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Banner;
