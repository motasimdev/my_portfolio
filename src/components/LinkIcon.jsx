import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import LINK_ICON from "../assets/icons/link.json";

const LinkIcon = ({ size, href, text }) => {
  const playerRef = useRef(null);

  //   useEffect(() => {
  //     playerRef.current?.playFromBeginning();
  //   }, []);

  return (
    <a
      href={href}
      className={`px-6 py-2 text-white text-[15px] lg:text-lg font-medium flex gap-x-2 shadow-lg items-center border border-white/20 bg-white/10 backdrop-blur-[px] cursor-pointer `}
      onMouseEnter={() => playerRef.current?.playFromBeginning()}
    >
      {text}
      <Player ref={playerRef} icon={LINK_ICON} size={size} />
    </a>
  );
};

export default LinkIcon;
