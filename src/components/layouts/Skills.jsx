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
import Marquee from "react-fast-marquee";
import { MdWidthFull } from "react-icons/md";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="py-12.5 lg:py-30 bg-[#3B939D] scroll-mt-7"
      >
        <Container>
          <div className="">
            <div className="bg-[radial-gradient(circle,rgba(11,86,99,1)_0%,rgba(23,102,114,1)_0%,rgba(31,113,124,1)_25%,rgba(38,122,132,1)_38%,rgba(43,128,138,1)_53%,rgba(48,134,144,1)_66%,rgba(52,139,149,1)_79%,rgba(59,147,157,1)_100%)] text-center py-3 lg:py-6 mb-10 lg:mb-[100px]">
              <h3 className="text-[#E0FFFE] font-semibold text-2xl lg:text-4xl text-center">
                My Skills
              </h3>
            </div>
            <Marquee speed={50} gradient={false}>
              <Flex className={"flex-wrap gap-x-0 md:gap-x-14 lg:gap-x-10 justify-between"}>
                <div className="bg-primary flex justify-center items-center h-9 lg:h-12.5 w-27.5 lg:w-40 gap-x-4 cursor-pointer">
                  <RiHtml5Line className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    HTML
                  </p>
                </div>

                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] gap-x-4 cursor-pointer">
                  <TbBrandCss3 className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    CSS
                  </p>
                </div>

                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <TbBrandJavascript className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Javascript
                  </p>
                </div>

                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <RiTailwindCssFill className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Tailwind Css
                  </p>
                </div>

                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <RiBootstrapLine className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Bootstrap
                  </p>
                </div>

                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <TbBrandReact className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    React
                  </p>
                </div>
              </Flex>
            </Marquee>

            <Marquee speed={50} direction="right">
              <Flex className={"flex-wrap gap-x-0 md:gap-x-14 lg:gap-x-10 my-13 justify-between m"
                }
              >
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <TbBrandRedux className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Redux
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <TbBrandNextjs className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Next Js
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <TbBrandNodejs className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Node Js
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <SiMongodb className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Mongodb
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <DiMaterializecss className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Materialize ui
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <BiLogoJquery className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Jquery
                  </p>
                </div>
              </Flex>
            </Marquee>

            <Marquee speed={50}>
              <Flex className={"flex-wrap gap-x-0 md:gap-x-14 lg:gap-x-10 justify-between"}>
                <div className="bg-primary flex justify-center items-center gap-x-2 h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <SiChakraui className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Chakra ui
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center gap-x-2 h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <FaGithub className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Github
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <CgTrello className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Trello
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <RiNpmjsFill className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Npm
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <VscVscodeInsiders className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Vs Code
                  </p>
                </div>
                <div className="bg-primary flex justify-center items-center h-[36px] lg:h-[50px] w-[110px] lg:w-[160px] cursor-pointer">
                  <PiFigmaLogoDuotone className="text-4 lg:text-[30px] text-[#E0FFFE]" />
                  <p className="font-medium text-[#E0FFFE] text-[13px] lg:text-md">
                    Figma
                  </p>
                </div>
              </Flex>
            </Marquee>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Skills;
