import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Service = () => {
  return (
    <>
      <section className="bg-primary h-[300px]">
        <Container>
          <div className="">
            <h3 className="text-[#E0FFFE] font-semibold text-4xl text-center py-[40px]">
              My Services
            </h3>
            <Flex className={"justify-between"}>
              <div className="w-[380px] h-[460px] border border-white/20 bg-black/15 backdrop-blur-[15px] p-5">
                <h3 className="text-center text-2xl text-[#E0FFFE] py-5">
                  {" "}
                  Web Design
                </h3>
                <p className="text-[#E0FFFE] text-base text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum aliquid rem deserunt, deleniti omnis eligendi
                  suscipit reprehenderit sit! Libero labore delectus, harum
                  quisquam voluptatum perspiciatis quae provident odio tempora
                  quo tempore ullam iure itaque perferendis quam reiciendis ea
                  dolorem debitis commodi voluptate! Quasi quidem, repellendus
                  perferendis minus sequi inventore nesciunt reiciendis
                  accusantium quis odit facere ut atque dolor dolorem iusto!
                </p>
              </div>
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Service;
