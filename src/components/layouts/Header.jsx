import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";

const Header = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handlScroll);
    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);

  return (
    <>
      <div className={`py-7 w-full bg-primary z-30 fixed top-0 left-0 ${sticky ? "bg-transparent" : "bg-primary shadow-lg"}`}>
        <Container>
          <div
            className={`py-3 px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full relative z-50 `}
          >
            <Flex className="justify-between">
              <div className="">logo</div>
              <div className="">
                <ul className="flex items-center gap-x-6">
                  <a href="#banner">
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Home
                    </li>
                  </a>
                  <a href="#aboutMe" className="scroll-smooth">
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      About me
                    </li>
                  </a>
                  <a href="#skills">
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Skills
                    </li>
                  </a>
                  <a href="#service">
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Service
                    </li>
                  </a>
                  <a href="#portfolio">
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Portfolio
                    </li>
                  </a>
                  <a href="#contact">
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Contact
                    </li>
                  </a>
                </ul>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
