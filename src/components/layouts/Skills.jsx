import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { GrHtml5 } from "react-icons/gr";

const Skills = () => {
  return (
    <>
    <div className="py-[60px] bg-[#3B939D]">
        <Container>
            <div className="">
                <h3 className='text-primary font-semibold text-4xl text-center pb-[40px]'>Skills</h3>
                <Flex className={"flex-wrap gap-x-7 justify-between"}>
                    <div className="bg-[#D9D9D9] py-4 px-16">
                        <GrHtml5 className='text-[40px]'/>
                    </div>
                    <div className="bg-[#D9D9D9] py-4 px-16">
                        <GrHtml5 className='text-[40px]'/>
                    </div>
                    <div className="bg-[#D9D9D9] py-4 px-16">
                        <GrHtml5 className='text-[40px]'/>
                    </div>
                    <div className="bg-[#D9D9D9] py-4 px-16">
                        <GrHtml5 className='text-[40px]'/>
                    </div>
                    <div className="bg-[#D9D9D9] py-4 px-16">
                        <GrHtml5 className='text-[40px]'/>
                    </div>
                    <div className="bg-[#D9D9D9] py-4 px-16">
                        <GrHtml5 className='text-[40px]'/>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Skills