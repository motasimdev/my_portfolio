import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { LiaTvSolid } from "react-icons/lia";

const Service = () => {
  return (
    <>
      <section className=" h-[480px]">
        <div className="bg-[linear-gradient(180deg,rgba(11,86,99,1)_0%,rgba(21,93,105,1)_36%,rgba(28,98,110,1)_45%,rgba(39,106,117,1)_54%,rgba(58,119,129,1)_62%,rgba(80,134,143,1)_67%,rgba(255,255,255,1)_100%)] h-[350px]">
          <Container>
          <div className="">
            <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center py-[40px]">
              My Services
            </h3>
            <Flex className={"justify-between"}>
              <div className="w-[380px] h-[360px] border border-white/20 bg-black/15 backdrop-blur-[15px] p-5">
                <h3 className="text-center text-2xl text-[#E0FFFE] py-5">
                  <LiaTvSolid className=""/>
                  Web Design
                </h3>
                <p className="text-[#E0FFFE] text-base text-justify">
                 I create modern, responsive, and visually appealing website designs focused on user experience and clean layout. Using tools like Figma and Tailwind CSS, I ensure every design is unique, functional, and perfectly aligned with your brand.
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
