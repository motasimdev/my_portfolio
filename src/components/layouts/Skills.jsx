import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiHtml5Line } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine, RiNpmjsFill  } from "react-icons/ri";
import { TbBrandRedux, TbBrandReact  } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNodejs, TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from "react-icons/tb";
import { SiMongodb, SiChakraui  } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { DiMaterializecss } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";
import { CgTrello } from "react-icons/cg";
import { PiFigmaLogoDuotone } from "react-icons/pi";

const Skills = () => {
  return (
    <>
      <div className="py-[60px] bg-[#3B939D]">
        <Container>
          <div className="">
            <h3 className="text-primary font-semibold text-4xl text-center pb-[40px]">
              Skills
            </h3>
            <Flex className={"flex-wrap gap-x-7 gap-y-7 justify-between"}>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] gap-x-4 cursor-pointer">
                <RiHtml5Line className="text-[50px]" />
                <p className="font-medium text-black text-2xl">HTML</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] gap-x-4 cursor-pointer">
                <TbBrandCss3 className="text-[50px]" />
                <p className="font-medium text-black text-2xl">CSS</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandJavascript className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Javascript</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <RiTailwindCssFill className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Tailwind Css</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <RiBootstrapLine className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Bootstrap</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandReact  className="text-[50px]" />
                <p className="font-medium text-black text-2xl">React</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandRedux className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Redux</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandNextjs className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Next Js</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandNodejs className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Node Js</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <SiMongodb className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Mongodb</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <DiMaterializecss className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Materialize ui</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <BiLogoJquery className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Jquery</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <SiChakraui  className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Chakra ui</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <FaGithub className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Github</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <CgTrello className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Trello</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <RiNpmjsFill  className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Npm</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <VscVscodeInsiders  className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Vs Code</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <PiFigmaLogoDuotone  className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Figma</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandAdobeIllustrator   className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Illustrator</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] cursor-pointer">
                <TbBrandAdobePhotoshop    className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Photoshop</p>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
