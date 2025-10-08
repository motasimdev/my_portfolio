import React, { useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
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
      backDelay: 800,
      backSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section id="banner" className="bg-primary pt-[0px] lg:pt-[105px]">
        <div className="bg-[url(https://res.cloudinary.com/dxihqxcjs/image/upload/c_auto,ar_3:4/myPortfolioPic_cmhtcu.jpg)] bg-no-repeat bg-center bg-cover">
          <div className="lg:bg-[#3B939D] bg-black/50 pb-[75px] lg:pb-[100px] pt-[140px] lg:pt-[140px] px-3 lg:px-0">
            <Container>
              <div className="relative">
                <Flex>
                  <div className="">
                    <h3 className="font-semibold text-white text-[18px] lg:text-[30px] relative z-60">
                      Hello,
                    </h3>
                    <h2 className="font-semibold text-[#E0FFFE] text-[34px] lg:text-[60px] py-1 relative z-60 lg:z-0">
                      I am Motasim Billah
                    </h2>
                    <div className="">
                      <span
                        ref={el}
                        className="font-semibold text-[#E0FFFE] text-[24px] lg:text-[40px] relative z-60"
                      />
                    </div>
                    <Flex className={"gap-x-5 mt-12 lg:mt-0"}>
                      {/* ==================btn 1======== */}
                      <a href="">
                        <button class="relative flex items-center px-3 lg:px-6 py-2 lg:py-3 lg:mt-20 cursor-pointer overflow-hidden font-medium transition-all bg-[#72C6CF] rounded-md group z-60">
                          <span class="absolute top-0 right-0 inline-block w-3 lg:w-4 h-3 lg:h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span class="absolute top-0 right-0 w-4 lg:w-5 h-4 lg:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                          </span>
                          <span class="absolute bottom-0 rotate-180 left-0 inline-block w-3 lg:w-4 h-3 lg:h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-ml-4 group-hover:-mb-4">
                            <span class="absolute top-0 right-0 w-4 lg:w-5 h-4 lg:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                          </span>
                          <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-primary rounded-md group-hover:translate-x-0"></span>
                          <span class="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-[#E0FFFE] font-medium lg:font-bold text-[12px] lg:text-[16px]">
                            Get my CV
                          </span>
                        </button>
                      </a>
                      {/* ==================btn 1======== */}

                      {/* ==================btn 2======== */}

                      <div class="flex justify-center items-center lg:mt-19">
                        <button
                          href="/"
                          class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-primary to-[#72C6CF] lg:to- text-white font-semibold hover:translate-y-1 transition-all duration-300 hover: hover: cursor-pointer relative z-60"
                        >
                          <svg
                            class="w-4.5 lg:w-7"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-400">
                            GitHub
                          </span>
                        </button>
                      </div>

                      {/* ==================btn 2======== */}
                    </Flex>
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
                        "hidden lg:block absolute top-[-170px] lg:top-[-280px] translate-x-1/2 lg:translate-x-0 right-1/2 lg:right-[-30px] w-[360px] lg:w-[560px] rounded-full z-40"
                      }
                    />
                  </div>
                  <motion.div
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
                    className="hidden absolute top-[-170px] lg:top-[-280px] right-1/2 lg:right-[-30px] translate-x-1/2 lg:translate-x-0 h-[480px] lg:h-0 w-[360px] lg:w-[560px] rounded-full bg-black/30 z-50 pointer-events-none"
                  ></motion.div>
                </Flex>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
