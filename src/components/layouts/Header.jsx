import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";

const Header = () => {
  return (
    <>
      <div className="py-7 bg-primary">
        <Container>
          <div className="py-3 px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full relative z-50">
            <Flex className="justify-between">
              <div className="">logo</div>
              <div className="">
                <ul className="flex items-center gap-x-6">
                  <Link to={"/"}>
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Home
                    </li>
                  </Link>
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
                  <Link to={"/"}>
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Service
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Portfolio
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Contact
                    </li>
                  </Link>
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
