import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 50 && y < 300) {
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
            className={` px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full relative z-1000 ${
              sticky ? "bg-teal-300 shadow-lg" : "bg-transparent"
            }`}
          >
            <Flex className="justify-between">
              <div className="bg-[#] px-2 rounded-lg">
                <a href="#banner">
                  <div className="flex py-1 items-center gap-x-3">
                    <picture>
                      <img src="https://res.cloudinary.com/dxihqxcjs/image/upload/v1763727300/logoWhiteType_umu7xh.svg" alt="" className="w-16"/>
                    </picture>
                    {/* <Mylogo4/> */}
                    {/* <MyName/> */}
                  </div>
                </a>
              </div>
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

      {/* ===========responsive=============== */}
      <div className="py-1.5 px-3 lg:hidden fixed w-full border border-white/20 bg-white/15 backdrop-blur-[15px] z-100">
        <Container>
          <div className="">
            <div className="flex justify-between">
              <button className="cursor-pointer" onClick={() => setMenu(!menu)}>
                {menu ? (
                  <RxCross1 className="text-[#E0FFFE]" />
                ) : (
                  <FaBars className="text-[#E0FFFE]" />
                )}
              </button>
              <Link to={"/"} className="text-[#E0FFFE] font-bold">
                <img src={"https://res.cloudinary.com/dxihqxcjs/image/upload/v1763727300/logoWhiteType_umu7xh.svg"} alt="Motasim Billah Logo" className="w-15"/>
                
              </Link>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
                
                ${menu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <ul className="border-white/20 bg-[#E0FFFE] backdrop-blur-[15px] text-center p-5 mt-2">
                <a href="#banner">
                  <li className=" text-primary font-medium text-sm py-1.5">
                    Home
                  </li>
                </a>
                <a href="#aboutMe">
                  <li className=" text-primary font-medium text-sm py-1.5">
                    About
                  </li>
                </a>
                <a href="#skills">
                  <li className=" text-primary font-medium text-sm py-1.5">
                    Skills
                  </li>
                </a>
                <a href="#service">
                  <li className=" text-primary font-medium text-sm py-1.5">
                    Service
                  </li>
                </a>
                <a href="#portfolio">
                  <li className=" text-primary font-medium text-sm py-1.5">
                    Portfolio
                  </li>
                </a>
                <a href="#contact">
                  <li className=" text-primary font-medium text-sm py-1.5">
                    Contact
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* ===========responsive=============== */}
    </>
  );
};

export default Header;
