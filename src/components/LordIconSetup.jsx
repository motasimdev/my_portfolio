import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";

const LordIconSetup = ({ icon, href, text, sizes }) => {
  const [size, setSize] = useState(0);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  // icon size control
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(sizes?.sm ?? 18);
      } else if (window.innerWidth < 1024) {
        setSize(sizes?.md ?? 20);
      } else setSize(sizes?.lg ?? 25);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [sizes]);

  //mobile animate
  useEffect(() => {
    if (window.innerWidth < 1024 && containerRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          playerRef.current?.playFromBeginning();
          observer.disconnect();
        }
      });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // desktop hover
  const handleIcon = () => {
    if (window.innerWidth >= 1024) {
      playerRef.current?.playFromBeginning();
    }
  };

  return (
    <a
      target={"_blank"}
      href={href}
      className={`btn-shine py-1.5 lg:py-2 pl-4 pr-3 lg:text-primary text-[13px] text-shadow-lg lg:text-lg font-medium flex gap-x-2 shadow-lg items-center border border-white/20 bg-white/10 backdrop-blur-[px] cursor-pointer lg:hover:shadow-sm lg:hover:shadow-[#2c2c2c] transition-all duration-200`}
      ref={containerRef}
      onMouseEnter={handleIcon}
      onFocus={handleIcon}
    >
      {text}
      <Player ref={playerRef} icon={icon} size={size} />
    </a>
  );
};

export default LordIconSetup;
