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
      backDelay: 1500,
      backSpeed: 30,
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
                    <span
                      ref={el}
                      className="font-semibold text-[#E0FFFE] text-[40px]"
                    />
                  </div>
                  <a href="">
                    <button class="relative flex items-center px-6 py-3 mt-20 cursor-pointer overflow-hidden font-medium transition-all bg-[#72C6CF] rounded-md group">
                      <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-primary rounded-md group-hover:translate-x-0"></span>
                      <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                        Get my CV
                      </span>
                    </button>
                  </a>
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
