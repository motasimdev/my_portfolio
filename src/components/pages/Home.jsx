import React from "react";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Skills from "../layouts/Skills";
import Service from "../layouts/Service";
import Portfolio from "../layouts/Portfolio";
import Contact from "../layouts/Contact";
import { motion, useScroll } from "motion/react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="h-2 bg-primary w-full origin-left fixed top-0 left-0 z-[100]"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>
      <Banner />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
