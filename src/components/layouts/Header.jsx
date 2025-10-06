import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";

const Header = () => {
  const [menu , setMenu] = useState (false)
    const [sticky, setSticky] = useState(true);

  useEffect(() => {
     const handleScroll = () => {
      const y = window.scrollY;

      if (y > 50 && y < 500) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`hidden lg:block py-7 w-full z-50 fixed top-0 transition-transform duration-300 left-0 ${
          sticky ? "translate-y-0 bg-transparent" : "-translate-y-full"
        }`}
      >
        <Container>
          <div
            className={`py-3 px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full relative z-50 ${
              sticky ? "bg-teal-300 shadow-lg" : "bg-transparent"
            }`}
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

        {/* ===========responsive=============== */}
        <Container>
          <div
            className={`py-3 px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full relative z-50 ${
              sticky ? "bg-teal-300 shadow-lg" : "bg-transparent"
            }`}
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

        {/* ===========responsive=============== */}
      </div>
    </>
  );
};

export default Header;
