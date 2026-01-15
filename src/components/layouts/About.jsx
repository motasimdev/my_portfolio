import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";

const About = () => {
  return (
    <>
      <section
        id="aboutMe"
        className="bg-primary pt-[110px] lg:pt-[60px] pb-[0px] lg:pb-[60px] scroll-mt-[15px] h-[600px] lg:h-[700px] flex items-center"
      >
        <Container>
          <div className={"lg:flex lg:items-center justify-between"}>
            <div className="lg:w-[50%] lg:flex lg:flex-col lg:gap-y-[60px] relative">
              <div className="hidden lg:block bg-[#72C6CF] w-[100px] lg:w-[400px] h-[50px] lg:h-[90px] ml-auto"></div>
              <div className="hidden lg:block bg-[#72C6CF] w-[100px] lg:w-[400px] h-[50px] lg:h-[90px] ml-auto"></div>

              <motion.img
                // ======animate=======
                initial={{
                  x: 100,
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 2,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                }}
                // ========animate=====
                src={
                  "https://res.cloudinary.com/dxihqxcjs/image/upload/v1759516688/portfolioPic2_mgpmbt.png"
                }
                alt={""}
                className={
                  " lg:block absolute top-[-120px] lg:top-[-75px] left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-0 w-[190px] lg:w-[390px]"
                }
              />
            </div>
            <div className="m-auto w-[90%] lg:w-[50%] py-[30px] lg:py-[50px] px-[30px] lg:px-[40px] bg-[#72C6CF]">
              <h3 className="text-primary font-semibold text-3xl lg:text-4xl text-center pb-[20px] lg:pb-[40px] relative z-10">
                <span className="py-2 lg:py-2 px-4 lg:px-[160px] border border-white/20 bg-primary/15 backdrop-blur-[15px] font-semibold">
                  About me
                </span>
              </h3>
              <p className="text-white font-medium text-sm lg:text-base text-justify leading-[22px] lg:leading-[27px]">
                I am a passionate Front-End Web Developer specializing in HTML,
                CSS, Tailwind CSS, JavaScript, React.js, and Redux. I can
                convert Figma designs into responsive, pixel-perfect web
                templates and bring them to life using React.js. Experienced
                with jQuery plugins and focused on modern front-end development
                practices.
              </p>
              <Flex className="justify-center gap-x-6 pt-9">
                <button className="hidden lg:block cursor-pointer font-semibold overflow-hidden relative bg-black/15 backdrop-blur-[15px] border-[#72C6CF] group px-4 lg:px-8 py-3 lg:py-3">
                  <span className="relative z-10 text-primary group-hover:text-white text-md duration-500">
                    Download CV
                  </span>
                  <span className="absolute w-full h-full bg-primary -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                  <span className="absolute w-full h-full bg-primary -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>

                <button className="lg:hidden group flex h-fit w-fit flex-col items-center justify-center rounded-full bg-[#72C6CF] px-[2em] py-[0.5em] shadow-[inset_0px_0px_0px_0px_#0B5663,inset_0px_0px_1px_0px_#0B5663,0px_0px_4px_0px_#0B5663,0px_2px_4px_0px_#0B5663] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#0B5663,inset_0px_2px_4px_0px_#0B5663,0px_2px_16px_0px_#0B5663,0px_2px_16px_0px_#0B5663]">
                  <p className="font-nunito text-sm font-medium text-primary duration-200 group-active:translate-y-[5%]">
                    Get my CV
                  </p>
                </button>
              </Flex>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
