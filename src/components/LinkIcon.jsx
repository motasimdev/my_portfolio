import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import LINK_ICON from "../assets/icons/linkIcon.json";

const LinkIcon = ({ size, href, text }) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  // desktop hover
  const handleIcon = () => {
    if (window.innerWidth >= 1024) {
      playerRef.current?.playFromBeginning();
    }
  };
  return (
    <a
      href={href}
      className={`pl-6 pr-3 py-2 lg:text-primary text-[15px] text-shadow-lg lg:text-lg font-medium flex gap-x-2 shadow-lg items-center border border-white/20 bg-white/10 backdrop-blur-[px] cursor-pointer `}
      onMouseEnter={handleIcon}
      onFocus={handleIcon}
    >
      {text}
      <Player ref={playerRef} icon={LINK_ICON} size={size} />
    </a>
  );
};

export default LinkIcon;
