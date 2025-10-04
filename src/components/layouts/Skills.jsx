import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <div className="py-[60px] bg-[#3B939D]">
        <Container>
          <div className="">
            <h3 className="text-primary font-semibold text-4xl text-center pb-[40px]">
              Skills
            </h3>
            <Flex className={"flex-wrap gap-x-7 justify-between"}>
              <div className="bg-[#D9D9D9] py-4 px-10">
                <Flex className={"gap-x-3"}>
                  <GrHtml5 className="text-[40px]" />
                  <p className="font-medium text-black text-2xl">HTML</p>
                </Flex>
              </div>
              <div className="bg-[#D9D9D9] py-4 px-10">
                <Flex className={"gap-x-3"}>
                  <TbBrandCss3 className="text-[50px]" />
                  <p className="font-medium text-black text-2xl">CSS</p>
                </Flex>
              </div>
              <div className="bg-[#D9D9D9] py-4 px-10">
                <Flex className={"gap-x-3"}>
                  <TbBrandJavascript className="text-[50px]" />
                  <p className="font-medium text-black text-2xl">Javascript</p>
                </Flex>
              </div>
              <div className="bg-[#D9D9D9] py-4 px-10">
                <Flex className={"gap-x-3"}>
                  <GrHtml5 className="text-[40px]" />
                  <p className="font-medium text-black text-2xl">HTML</p>
                </Flex>
              </div>
              <div className="bg-[#D9D9D9] py-4 px-10">
                <Flex className={"gap-x-3"}>
                  <GrHtml5 className="text-[40px]" />
                  <p className="font-medium text-black text-2xl">HTML</p>
                </Flex>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
