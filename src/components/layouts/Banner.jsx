import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Banner = () => {
  return (
    <>
      <div className="bg-[#3B939D] py-[160px]">
        <Container>
          <div className="">
            <Flex>
              <div className="">
                <h3 className="font-semibold text-white text-[42px]">Hello,</h3>
                <h2 className="font-semibold text-[#E0FFFE] text-[60px] py-4">
                  I am Motasim Billah
                </h2>
                <h4 className="font-semibold text-white text-[42px]">
                  I am a MERN Stack Developer
                </h4>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
