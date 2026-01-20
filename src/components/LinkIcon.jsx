import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import LINK_ICON from "../assets/icons/link.json";

const LinkIcon = ({ size, className, href }) => {
  const playerRef = useRef(null);

  //   useEffect(() => {
  //     playerRef.current?.playFromBeginning();
  //   }, []);

  return (
    <span
      href={href}
      className={className}
      onMouseEnter={() => playerRef.current?.playFromBeginning()}
    >
      <Player ref={playerRef} icon={LINK_ICON} size={size} />
    </span>
  );
};

export default LinkIcon;
