import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="py-[100px] bg-[#3B939D]">
          <Container>
            <div className="bg-[radial-gradient(circle,rgba(11,86,99,1)_0%,rgba(23,102,114,1)_0%,rgba(31,113,124,1)_25%,rgba(38,122,132,1)_38%,rgba(43,128,138,1)_53%,rgba(48,134,144,1)_66%,rgba(52,139,149,1)_79%,rgba(59,147,157,1)_100%)] text-center py-6 mb-[60px]">
              <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center">
                Contact
              </h3>
            </div>
            <div className="bg-primary p-12">
              <Flex className={"justify-between"}>
                <div className="w-[48%] flex flex-col gap-y-10">
                    <input type="text" placeholder="your name" className="py-5 px-5 w-full border border-none focus:outline-0 bg-[#E0FFFE]"/>
                    <input type="email" placeholder="your email" className="py-5 px-5 w-full border border-none focus:outline-0 bg-[#E0FFFE]"/>
                    <input type="number" placeholder="your phone" className="no-spinner py-5 px-5 w-full border border-none focus:outline-0 bg-[#E0FFFE]"/>
                </div>
                <div className="w-[48%] flex items-center justify-center">
                    <textarea name="" id="" placeholder="your massege" className="py-4 px-5 h-[272px] w-full bg-[#E0FFFE] border-none focus:outline-0 resize-none"></textarea>
                </div>
              </Flex>
              <div className="flex items-center justify-center mt-10">
                <button className="py-5 px-10 bg-[#E0FFFE] text-lg font-medium border border-primary cursor-pointer hover:bg-primary hover:border hover:border-[#E0FFFE] hover:text-[#E0FFFE] transition-all duration-300">Let's Connect</button>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Contact;
