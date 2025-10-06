import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import { motion } from "motion/react"

const About = () => {
  return (
    <>
      <section id="aboutMe" className="bg-primary py-[60px] scroll-mt-[15px] h-[700px] flex items-center">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[50%] flex flex-col gap-y-[60px] relative">
              <div className="bg-[#72C6CF] w-[400px] h-[90px] ml-auto"></div>
              <div className="bg-[#72C6CF] w-[400px] h-[90px] ml-auto"></div>
              
              
             
               
                <motion.img
                // ======animate=======
                initial={{
                x: 150,
              }}
                whileInView={{
                  x : 0,
                  y:0,
                }}
                viewport={{
                  once:false,
                  amount:0.2,
                }}
                transition={{
                  duration:2,
                }}
                whileHover={{
                  scale:1.04
                }}
                // ========animate=====
                src={
                  "https://res.cloudinary.com/dxihqxcjs/image/upload/v1759516688/portfolioPic2_mgpmbt.png"
                }
                alt={""}
                className={"absolute top-[-75px] left-0 w-[390px]"}
              />
              
            </div>
            <div className="w-[50%] py-[50px] px-[40px] bg-[#72C6CF]">
              <h3 className="text-primary font-semibold text-4xl text-center pb-[40px]">
                About me
              </h3>
              <p className="text-white font-medium text-base text-justify leading-[27px]">
               I am a passionate Front-End Web Developer specializing in HTML, CSS, Tailwind CSS, JavaScript, React.js, and Redux. I can convert Figma designs into responsive, pixel-perfect web templates and bring them to life using React.js. Experienced with jQuery plugins and focused on modern front-end development practices.
              </p>
              <Flex className="justify-center gap-x-6 pt-9">
                {/* <button className="border-white/20 bg-black/15 backdrop-blur-[15px] py-[14px] px-12 text-base font-medium text-[#E0FFFE]">
                  Hire me
                </button> */}
                <button className="border-white/20 bg-black/15 backdrop-blur-[15px] py-[14px] px-12 text-base font-medium text-[#E0FFFE] cursor-pointer hover:bg-primary transition-colors duration-300">
                  Download CV
                </button>
              </Flex>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default About;
