import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import LordIconSetup from "../LordIconSetup";
import LINK_ICON from "/src/assets/icons/linkIcon.json";
import GITHUB_ICON from "/src/assets/icons/github.json";

const Portfolioo = () => {
  return (
    <>
      <section id="portfolio" className="h-full scroll-mt-0">
        <div className="pt-25 h-full portfolioBg">
          <div className="text-center py-3 lg:py-6 mb-10 lg:mb-15 portfolioHeadingBg ">
            <h3 className="text-[#E0FFFE] font-semibold text-2xl md:text-3xl lg:text-4xl text-center">
              Portfolio
            </h3>
          </div>
          <Container>
            <div className="">
              <div className="px-3 lg:px-0 flex flex-col gap-y-8 mg:gap-y-15">
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
                    <p className="md:pr-14 text-white text-[13px] lg:text-base text-justify leading-6 lg:leading-8 line-clamp-4 lg:line-clamp-4">
                    GoTrip is a travel and tour website designed to showcase travel packages, destinations, hotels, and travel-related services. The site focuses on providing users with an attractive and easy-to-navigate interface to explore trips and tour options. It appears to be built using modern frontend technologies and is hosted on Vercel, making it fast, responsive, and suitable as a travel agency landing page or portfolio project.
                    </p>
                    <Flex
                      className={
                        "justify-center md:justify-normal gap-x-5 mt-4 md:mt-9 lg:mt-15"
                      }
                    >
                      <div className="">
                        <LordIconSetup icon={LINK_ICON} text={"Live Link"} />
                      </div>
                      <div className="">
                        <LordIconSetup
                          icon={GITHUB_ICON}
                          text={"Github Source"}
                        />
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
                    <Flex
                      className={
                        "justify-center md:justify-normal gap-x-5 mt-4 md:mt-9 lg:mt-15"
                      }
                    >
                      <div className="">
                        <LordIconSetup icon={LINK_ICON} text={"Live Link"} />
                      </div>
                      <div className="">
                        <LordIconSetup
                          icon={GITHUB_ICON}
                          text={"Github Source"}
                        />
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
