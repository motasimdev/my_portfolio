
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import LordIconSetup from "../LordIconSetup";
import LINK_ICON from "/src/assets/icons/linkIcon.json";
import GITHUB_ICON from "/src/assets/icons/github.json";


const Portfolioo = () => {
  return (
    <>
      <section
        id="portfolio"
        className="h-[600px] md:h-[600px] lg:h-[720px] scroll-mt-0"
      >
        <div className="pt-[100px] h-full lg:h-[575px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(80,134,143,1)_36%,rgba(58,119,129,1)_45%,rgba(39,106,117,1)_54%,rgba(28,98,110,1)_62%,rgba(21,93,105,1)_67%,rgba(11,86,99,1)_100%)]">
          <Container>
            <div className="">
              <div className="text-center py-3 lg:py-6 mb-10 lg:mb-15 bg-[radial-gradient(circle,rgba(23,102,114,1)_0%,rgba(54,122,133,1)_19%,rgba(70,132,143,1)_32%,rgba(83,141,151,1)_47%,rgba(116,163,171,1)_68%,rgba(153,187,193,1)_100%,rgba(255,255,255,1)_100%)]">
                <h3 className="text-[#E0FFFE] font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
                  Portfolio
                </h3>
              </div>

              <div className="px-3 lg:px-0">
                  {/* =========project 1======== */}
                  <div className="p-1.5 pb-4 md:p-2 border border-white/20 bg-white/10 backdrop-blur-sm md:flex justify-between shadow-[6px_11px_17px_0px_rgba(0,0,0,0.2)]">
                    <div className="md:w-[44%] lg:w-[50%] overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto/f_auto,q_auto/v1768544464/gotrip_spaofy.jpg"
                        alt="project"
                        className="h-50 md:h-62.5 lg:h-100 w-full"
                      />
                    </div>
                    <div className="md:w-[53%] lg:pt-8 lg:w-[45%] px-2 lg:px-0">
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold text-[#E0FFFE] text-center md:text-left py-3 lg:py-5">
                        Project Brief
                      </h4>
                      <p className="md:pr-14 text-white text-[13px] lg:text-base text-justify leading-6 lg:leading-8">
                        It’s an E-commerce Web Application with product listing,
                        add to cart, remove from cart, product search, responsive
                        design, dynamic UI with React.js, state management with v
                        Redux, and many more.
                      </p>
                      <Flex className={"justify-center md:justify-normal gap-x-5 mt-4 md:mt-9 lg:mt-15"}>
                        <div className="">
                          <LordIconSetup icon={LINK_ICON} text={"Live Link"}/>
                        </div>
                        <div className="">
                          <LordIconSetup icon={GITHUB_ICON} text={"Github Source"}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                  {/* =========project 1======== */}
                  {/* =========project 2======== */}
                  <div className="p-1.5 pb-4 md:p-2 border border-white/20 bg-white/10 backdrop-blur-sm md:flex justify-between shadow-[6px_11px_17px_0px_rgba(0,0,0,0.2)]">
                    <div className="md:w-[44%] lg:w-[50%] overflow-hidden">
                      <img
                        src="https://res.cloudinary.com/dxihqxcjs/image/upload/f_auto,q_auto/f_auto,q_auto/v1768544464/gotrip_spaofy.jpg"
                        alt="project"
                        className="h-50 md:h-62.5 lg:h-100 w-full"
                      />
                    </div>
                    <div className="md:w-[53%] lg:pt-8 lg:w-[45%] px-2 lg:px-0">
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold text-[#E0FFFE] text-center md:text-left py-3 lg:py-5">
                        Project Brief
                      </h4>
                      <p className="md:pr-14 text-white text-[13px] lg:text-base text-justify leading-6 lg:leading-8">
                        It’s an E-commerce Web Application with product listing,
                        add to cart, remove from cart, product search, responsive
                        design, dynamic UI with React.js, state management with v
                        Redux, and many more.
                      </p>
                      <Flex className={"justify-center md:justify-normal gap-x-5 mt-4 md:mt-9 lg:mt-15"}>
                        <div className="">
                          <LordIconSetup icon={LINK_ICON} text={"Live Link"}/>
                        </div>
                        <div className="">
                          <LordIconSetup icon={GITHUB_ICON} text={"Github Source"}/>
                        </div>
                      </Flex>
                    </div>
                  </div>
                  {/* =========project 2======== */}
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Portfolioo;
