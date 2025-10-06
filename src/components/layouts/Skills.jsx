import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiHtml5Line } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine, RiNpmjsFill } from "react-icons/ri";
import { TbBrandRedux, TbBrandReact } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMongodb, SiChakraui } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { DiMaterializecss } from "react-icons/di";
import { VscVscodeInsiders } from "react-icons/vsc";
import { CgTrello } from "react-icons/cg";
import { PiFigmaLogoDuotone } from "react-icons/pi";

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-[100px] bg-[#3B939D] scroll-mt-0">
        <Container>
          <div className="">
            <div className="bg-[radial-gradient(circle,rgba(11,86,99,1)_0%,rgba(23,102,114,1)_0%,rgba(31,113,124,1)_25%,rgba(38,122,132,1)_38%,rgba(43,128,138,1)_53%,rgba(48,134,144,1)_66%,rgba(52,139,149,1)_79%,rgba(59,147,157,1)_100%)] text-center py-6 mb-[60px]">
              <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center">
                My Skills
              </h3>
            </div>

            <Flex className={"flex-wrap gap-x-7 gap-y-13 justify-between"}>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] gap-x-4 cursor-pointer">
                <RiHtml5Line className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">HTML</p>
              </div>

              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] gap-x-4 cursor-pointer">
                <TbBrandCss3 className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">CSS</p>
              </div>

              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandJavascript className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Javascript</p>
              </div>

              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <RiTailwindCssFill className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">
                  Tailwind Css
                </p>
              </div>

              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <RiBootstrapLine className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Bootstrap</p>
              </div>

              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandReact className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">React</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandRedux className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Redux</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandNextjs className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Next Js</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandNodejs className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Node Js</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <SiMongodb className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Mongodb</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <DiMaterializecss className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">
                  Materialize ui
                </p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <BiLogoJquery className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Jquery</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <SiChakraui className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Chakra ui</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <FaGithub className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Github</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <CgTrello className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Trello</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <RiNpmjsFill className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Npm</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <VscVscodeInsiders className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Vs Code</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <PiFigmaLogoDuotone className="text-[30px] text-[#E0FFFE]" />
                <p className="font-medium text-[#E0FFFE] text-md">Figma</p>
              </div>
              {/* <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandAdobeIllustrator className="text-[30px]" />
                <p className="font-medium text-[#E0FFFE] text-md">Illustrator</p>
              </div>
              <div className="bg-primary flex justify-center items-center h-[50px] w-[160px] cursor-pointer">
                <TbBrandAdobePhotoshop className="text-[30px]" />
                <p className="font-medium text-[#E0FFFE] text-md">Photoshop</p>
              </div> */}
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skills;
