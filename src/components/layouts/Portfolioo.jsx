import React from "react";
import Container from "../Container";

const Portfolioo = () => {
  return (
    <>
      <section id="portfolio" className="h-[600px] md:h-[600px] lg:h-[720px] scroll-mt-0 ">
        <div className="pt-[100px] h-full lg:h-[550px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(80,134,143,1)_36%,rgba(58,119,129,1)_45%,rgba(39,106,117,1)_54%,rgba(28,98,110,1)_62%,rgba(21,93,105,1)_67%,rgba(11,86,99,1)_100%)]">
          <Container>
            <div className="">
              <div className="text-center py-3 lg:py-6 mb-[40px] lg:mb-[60px] bg-[radial-gradient(circle,rgba(23,102,114,1)_0%,rgba(54,122,133,1)_19%,rgba(70,132,143,1)_32%,rgba(83,141,151,1)_47%,rgba(116,163,171,1)_68%,rgba(153,187,193,1)_100%,rgba(255,255,255,1)_100%)]">
                <h3 className="text-[#E0FFFE] font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
                  Portfolio
                </h3>
              </div>

              <div className="px-3 lg:px-0">
                {/* =========project 1======== */}
                <div className="p-1.5 md:p-2 border border-white/20 bg-white/10 backdrop-blur-[8px] md:flex justify-between shadow-[6px_11px_17px_0px_rgba(0,_0,_0,_0.2)]">
                  <div className="md:w-[50%] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto/f_auto,q_auto/v1768544464/gotrip_spaofy.jpg"
                      
                      alt="project"
                      className="h-[200px] md:h-[250px] lg:h-[400px] w-full"
                    />
                  </div>
                  <div className="md:w-[45%] px-2 lg:px-0">
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold text-[#E0FFFE] text-center md:text-left py-3 lg:py-5">
                      Project Brief
                    </h4>
                    <p className="text-white text-[13px] lg:text-base text-justify leading-6 lg:leading-[32px]">
                      It’s an E-commerce Web Application with product listing,
                      add to cart, remove from cart, product search, responsive
                      design, dynamic UI with React.js, state management with
                      Redux, and many more.
                    </p>
                  </div>
                </div>
                {/* =========project 1======== */}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Portfolioo;
