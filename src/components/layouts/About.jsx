import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

const About = () => {
  return (
    <>
    <section className="bg-primary py-[60px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="w-[50%] flex flex-col gap-y-[60px] relative">
                    <div className="bg-[#72C6CF] w-[400px] h-[90px] ml-auto"></div>
                    <div className="bg-[#72C6CF] w-[400px] h-[90px] ml-auto"></div>
                    <Image src={"https://res.cloudinary.com/dxihqxcjs/image/upload/v1759516688/portfolioPic2_mgpmbt.png"} alt={""} className={"absolute top-[-75px] left-0 w-[390px]"}/>
                </div>
                <div className="w-[50%] py-[50px] px-[40px] bg-[#72C6CF]">
                    <h3 className='text-primary font-semibold text-4xl text-center pb-[40px]'>About me</h3>
                    <p className='text-white font-medium text-base text-justify leading-[27px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, nobis aspernatur amet temporibus fugiat iure ratione, possimus, eius accusantium soluta tempore ipsa! Recusandae, qui perferendis. Perferendis officia nam iste esse praesentium saepe temporibus quae. Adipisci, facere voluptates. Aspernatur, tempore? Reprehenderit ullam cum rem labore tempora minima dolores blanditiis? Harum sapiente recusandae rerum fugit saepe dolorem beatae.</p>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default About