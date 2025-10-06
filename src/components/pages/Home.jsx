import React, { useEffect, useState } from "react";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Skills from "../layouts/Skills";
import Service from "../layouts/Service";
import Portfolio from "../layouts/Portfolio";
import Contact from "../layouts/Contact";
import { motion, useScroll } from "motion/react";
import Loader from "../Loader";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <motion.div
        className="h-2 bg-[#E0FFFE] w-full origin-left fixed top-0 left-0 z-[100]"
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <About />
          <Skills />
          <Service />
          <Portfolio />
          <Contact />
        </>
      )}
    </>
  );
};

export default Home;
