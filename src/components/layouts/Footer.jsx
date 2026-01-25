import React from "react";
import Container from "../Container";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import Flex from "../Flex";

const Footer = () => {
  return (
    <>
      <div className="bg-primary py-10">
        <Container>
          <div className="text-center">
            <h4 className="text-white font-medium text-[13px] lg:text-lg pb-3">
              © 2025 All rights reserved | Designed & Developed by Motasim
              Billah
            </h4>
            <Flex className={"gap-x-4 justify-center"}>
              <a href="">
                <AiOutlineFacebook className="text-[#6ec1be] hover:text-[#E0FFFE] transition-all duration-200 text-2xl" />
              </a>
              <a href="">
                <AiOutlineLinkedin className="text-[#6ec1be] hover:text-[#E0FFFE] transition-all duration-200 text-2xl" />
              </a>
              <a href="">
                <RiTwitterXLine className="text-[#6ec1be] hover:text-[#E0FFFE] transition-all duration-200 text-2xl" />
              </a>
              <a href="">
                <AiOutlineInstagram className="text-[#6ec1be] hover:text-[#E0FFFE] transition-all duration-200 text-2xl" />
              </a>
              <a href="">
                <IoLogoGithub className="text-[#6ec1be] hover:text-[#E0FFFE] transition-all duration-200 text-2xl" />
              </a>
            </Flex>
          </div>
          <a href="https://lordicon.com/" className="px-3 lg:px-0 pt-3 md:pt-0 flex justify-center md:justify-end text-[12px] lg:text-sm">Icons by Lordicon.com</a>
        </Container>
      </div>
    </>
  );
};

export default Footer;
