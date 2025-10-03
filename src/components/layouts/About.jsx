import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const About = () => {
  return (
    <>
    <div className="bg-primary ">
        <Container>
            <Flex className={"justify-between"}>
                <div className="w-[50%]"></div>
                <div className="w-[50%] py-[50px] px-[40px] bg-[#72C6CF]">
                    <h3 className='text-primary font-semibold text-4xl text-center pb-[40px]'>About me</h3>
                    <p className='text-white font-medium text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, nobis aspernatur amet temporibus fugiat iure ratione, possimus, eius accusantium soluta tempore ipsa! Recusandae, qui perferendis. Perferendis officia nam iste esse praesentium saepe temporibus quae. Adipisci, facere voluptates. Aspernatur, tempore? Reprehenderit ullam cum rem labore tempora minima dolores blanditiis? Harum sapiente recusandae rerum fugit saepe dolorem beatae.</p>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default About