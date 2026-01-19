import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

const LinkIcon = () => {
  const LINK_ICON = require("/src/assets/icons/linkIcon.json");
  const playerRef = useRef < Player > null;

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <>
      <Player ref={LINK_ICON} icon={ICON}    />
    </>
  );
};

export default LinkIcon;
