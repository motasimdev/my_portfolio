import React, { useRef } from "react";
import Container from "../Container";
import Flex from "../Flex";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio_gmail",
        "template_vrea17d",
        form.current,
        "UjZ4D8DWM-OkkLbtZ"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };
  return (
    <>
      <section id="contact">
        <div className="py-[50px] lg:py-[100px] bg-[#3B939D]">
          <Container>
            <div className="bg-[radial-gradient(circle,rgba(11,86,99,1)_0%,rgba(23,102,114,1)_0%,rgba(31,113,124,1)_25%,rgba(38,122,132,1)_38%,rgba(43,128,138,1)_53%,rgba(48,134,144,1)_66%,rgba(52,139,149,1)_79%,rgba(59,147,157,1)_100%)] text-center py-3 lg:py-6 mb-[40px] lg:mb-[60px]">
              <h3 className="text-[#E0FFFE] font-semibold text-2xl lg:text-4xl text-center">
                Contact
              </h3>
            </div>
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="bg-primary p-12">
                <Flex className={"justify-between"}>
                  <div className="w-[48%] flex flex-col gap-y-3 lg:gap-y-10">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="your name"
                      className="placeholder:text-[14px] lg:placeholder:text-md py-3 lg:py-5 px-3 lg:px-5 w-full border border-none focus:outline-0 bg-[#E0FFFE]"
                    />
                    <input
                      type="email"
                      name="user_email"
                      placeholder="your email"
                      className="placeholder:text-[14px] lg:placeholder:text-md py-3 lg:py-5 px-3 lg:px-5 w-full border border-none focus:outline-0 bg-[#E0FFFE]"
                    />
                    <input
                      type="tel"
                      name="user_phone"
                      placeholder="your phone"
                      className="placeholder:text-[14px] lg:placeholder:text-md no-spinner py-3 lg:py-5 px-3 lg:px-5 w-full border border-none focus:outline-0 bg-[#E0FFFE]"
                    />
                  </div>
                  <div className="w-[48%] flex items-center justify-center">
                    <textarea
                      name="message"
                      id=""
                      placeholder="your message"
                      className="placeholder:text-[14px] lg:placeholder:text-md py-3 lg:py-5 px-3 lg:px-5 h-[169px] lg:h-[272px] w-full bg-[#E0FFFE] border-none focus:outline-0 resize-none"
                    ></textarea>
                  </div>
                </Flex>
                <div className="flex items-center justify-center mt-10">
                  <button type="submit" className="py-3 lg:py-5 px-7 lg:px-10 bg-[#E0FFFE] text-sm lg:text-lg font-medium border border-primary cursor-pointer hover:bg-primary hover:border hover:border-[#E0FFFE] hover:text-[#E0FFFE] transition-all duration-300">
                    Let's Connect
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Contact;
