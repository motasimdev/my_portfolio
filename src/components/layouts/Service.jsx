import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { LiaTvSolid } from "react-icons/lia";

const Service = () => {
  return (
    <>
      <section id="service" className="h-[680px] scroll-mt-[50px]">
        <div className="pt-[120px] h-[550px] bg-[linear-gradient(180deg,rgba(11,86,99,1)_0%,rgba(21,93,105,1)_36%,rgba(28,98,110,1)_45%,rgba(39,106,117,1)_54%,rgba(58,119,129,1)_62%,rgba(80,134,143,1)_67%,rgba(255,255,255,1)_100%)]">
          <Container>
            <div className="">
              <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center pb-[60px]">
                My Services
              </h3>
              <Flex className={"justify-between"}>
                <div className=" w-[380px] h-[380px] p-5 border border-white/20 bg-black/15 backdrop-blur-[15px] ">
                  <LiaTvSolid className="m-auto text-6xl text-white" />
                  <h3 className="text-center text-2xl text-[#E0FFFE] py-5">
                    Web Design
                  </h3>
                  <p className="text-white text-base text-justify leading-[32px]">
                    I create modern, responsive, and visually appealing website
                    designs focused on user experience and clean layout. Using
                    tools like Figma and Tailwind CSS, I ensure every design is
                    unique, functional, and perfectly aligned with your brand.
                  </p>
                </div>
                <div className=" w-[380px] h-[380px] p-5 border border-white/20 bg-black/15 backdrop-blur-[15px] ">
                  <LiaTvSolid className="m-auto text-6xl text-white" />
                  <h3 className="text-center text-2xl text-[#E0FFFE] py-5">
                    MERN Development
                  </h3>
                  <p className="text-white text-base text-justify leading-[32px]">
                    I develop full-stack web applications using MongoDB,
                    Express, React, and Node.js. From backend logic to frontend
                    design, I ensure powerful, scalable, and user-friendly
                    solutions.
                  </p>
                </div>
                <div className=" w-[380px] h-[380px] p-5 border border-white/20 bg-black/15 backdrop-blur-[15px] ">
                  <LiaTvSolid className="m-auto text-6xl text-white" />
                  <h3 className="text-center text-2xl text-[#E0FFFE] py-5">
                    API Development
                  </h3>
                  <p className="text-white text-base text-justify leading-[32px]">
                    I create secure and efficient RESTful APIs using Node.js and
                    Express. My APIs are well-structured, fast, and easy to
                    integrate with any frontend or mobile application.
                  </p>
                </div>
              </Flex>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Service;
