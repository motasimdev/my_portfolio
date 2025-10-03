import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";

const Header = () => {
  return (
    <>
      <div className="py-7 bg-primary relative">
        <Container className={"overflow-hidden"}>
          <div className="py-3 px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full relative z-10">
            <Flex className="justify-between">
              <div className="">logo</div>
              <div className="">
                <ul className="flex items-center gap-x-6">
                  <Link to={"/"}>
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Home
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      About me
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-primary hover:text-white transition-all duration-300">
                      Skills
                    </li>
                  </Link>
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
        <Container className={"relative"}>
          <Image
            src={
              "https://res.cloudinary.com/dxihqxcjs/image/upload/ar_3:4,c_auto/myPortfolioPic_cmhtcu.jpg"
            }
            className={
              "absolute top-[-120px] right-[-20px] w-[540px] rounded-full z-0"
            }
          />
        </Container>
      </div>
    </>
  );
};

export default Header;
