import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiHtml5Line } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandRedux, TbBrandReact  } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoJquery } from "react-icons/bi";
import { DiMaterializecss } from "react-icons/di";

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
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] gap-x-4">
                <RiHtml5Line className="text-[50px]" />
                <p className="font-medium text-black text-2xl">HTML</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px] gap-x-4">
                <TbBrandCss3 className="text-[50px]" />
                <p className="font-medium text-black text-2xl">CSS</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <TbBrandJavascript className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Javascript</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <RiTailwindCssFill className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Tailwind Css</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <RiBootstrapLine className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Bootstrap</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <TbBrandReact  className="text-[50px]" />
                <p className="font-medium text-black text-2xl">React</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <TbBrandRedux className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Redux</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <TbBrandNextjs className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Next Js</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <TbBrandNodejs className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Node Js</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <SiMongodb className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Mongodb</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <DiMaterializecss className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Materialize ui</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <BiLogoJquery className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Jquery</p>
              </div>
              <div className="bg-[#D9D9D9] flex justify-center items-center h-[82px] w-[250px]">
                <FaGithub className="text-[50px]" />
                <p className="font-medium text-black text-2xl">Github</p>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
