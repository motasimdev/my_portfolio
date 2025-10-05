import React from "react";
import Container from "../Container";

const Portfolio = () => {
  return (
    <>
      <section className="h-[680px] scroll-mt-0">
        <div className="pt-[100px] h-[550px]  bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(80,134,143,1)_36%,rgba(58,119,129,1)_45%,rgba(39,106,117,1)_54%,rgba(28,98,110,1)_62%,rgba(21,93,105,1)_67%,rgba(11,86,99,1)_100%)]">
          <Container>
            <div className="">
              <div className="text-center py-6 mb-[60px] bg-[radial-gradient(circle,rgba(23,102,114,1)_0%,rgba(54,122,133,1)_19%,rgba(70,132,143,1)_32%,rgba(83,141,151,1)_47%,rgba(116,163,171,1)_68%,rgba(153,187,193,1)_100%,rgba(255,255,255,1)_100%)]">
                <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center">
                  Portfolio
                </h3>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
