import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

const Banner = () => {
  return (
    <>
      <section id="banner" className="bg-[#3B939D] pb-[170px] pt-[300px]">
        <Container>
          <div className="relative">
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
              <div className="">
                <Image
                  src={
                    "https://res.cloudinary.com/dxihqxcjs/image/upload/ar_3:4,c_auto/myPortfolioPic_cmhtcu.jpg"
                  }
                  className={
                    "absolute top-[-320px] right-[-30px] w-[560px] rounded-full z-0"
                  }
                />
              </div>
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
