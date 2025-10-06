import React, { useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      // offset: 100, // scroll offset before animation triggers
      once: true, // true = animation happens only once
    });
    AOS.refresh();
  }, []);

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
                  <Image
                    data-aos="fade-down"
                    src={
                      "https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto,w_600,c_auto,ar_3:4/myPortfolioPic_cmhtcu.jpg"
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
