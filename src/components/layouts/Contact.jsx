import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Contact = () => {
  return (
    <>
      <section>
        <div className="py-[100px] bg-[#3B939D]">
          <Container>
            <div className="bg-[radial-gradient(circle,rgba(11,86,99,1)_0%,rgba(23,102,114,1)_0%,rgba(31,113,124,1)_25%,rgba(38,122,132,1)_38%,rgba(43,128,138,1)_53%,rgba(48,134,144,1)_66%,rgba(52,139,149,1)_79%,rgba(59,147,157,1)_100%)] text-center py-6 mb-[60px]">
              <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center">
                Contact
              </h3>
            </div>
            <div className="bg-primary p-10">
              <Flex>
                <div className="w-[45%]">
                    <input type="text" placeholder="your name" className="py-4 px-5 w-[100%] border border-none focus:outline-0 bg-[#3B939D]"/>
                </div>
                <div className="w-[45%]"></div>
              </Flex>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Contact;
