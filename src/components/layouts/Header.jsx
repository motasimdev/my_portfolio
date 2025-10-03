import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";

const Header = () => {
  return (
    <>
      <div className="py-7 bg-primary relative">
        <Container>
          <div className="py-3 px-12 border border-white/20 bg-white/15 backdrop-blur-[15px] rounded-full">
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
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      About me
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Skills
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Service
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Portfolio
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="text-base font-medium text-[#E0FFFE] hover:text-white transition-all duration-300">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </Flex>
        <Image
          src={
            "https://res.cloudinary.com/dxihqxcjs/image/upload/ar_3:4,c_auto/myPortfolioPic_cmhtcu.jpg"
          }
          className={"absolute top-[-50px] right-[-40px] w-[440px] rounded-full z-[-50]"}
        />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
