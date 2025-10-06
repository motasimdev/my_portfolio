import React, { useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import { motion } from "motion/react";
import Typed from "typed.js";

const Banner = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Front-End Developer",
        "React Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
      backDelay:1500,
      backSpeed:30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section id="banner" className="bg-primary pt-[105px]">
        <div className="bg-[#3B939D] pb-[190px] pt-[140px]">
          <Container>
            <div className="relative">
              <Flex>
                <div className="">
                  <h3 className="font-semibold text-white text-[30px]">
                    Hello,
                  </h3>
                  <h2 className="font-semibold text-[#E0FFFE] text-[60px] py-1">
                    I am Motasim Billah
                  </h2>
                  <div className="App">
                    <span ref={el} className="font-semibold text-[#E0FFFE] text-[40px]"/>
                  </div>
                  <button className="border-white/20 bg-black/15 backdrop-blur-[15px] py-[14px] px-12 text-base font-medium text-[#E0FFFE] cursor-pointer hover:bg-primary transition-colors duration-300">
                  My CV
                  </button>
                </div>
                <div className="">
                  <motion.img
                    // ========animate=====
                    initial={{
                      y: -100,
                    }}
                    whileInView={{
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.5,
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
