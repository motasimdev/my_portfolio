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
          <div className="">
            <h4 className="text-white font-medium text-lg">Connect with me</h4>
            <Flex className={"gap-x-2"}>
              <a href="">
                <AiOutlineFacebook className="text-[#E0FFFE] text-2xl" />
              </a>
              <a href="">
                <AiOutlineLinkedin className="text-[#E0FFFE] text-2xl" />
              </a>
              <a href="">
                <RiTwitterXLine className="text-[#E0FFFE] text-2xl" />
              </a>
              <a href="">
                <AiOutlineInstagram className="text-[#E0FFFE] text-2xl" />
              </a>
              <a href="">
                <IoLogoGithub className="text-[#E0FFFE] text-2xl" />
              </a>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
