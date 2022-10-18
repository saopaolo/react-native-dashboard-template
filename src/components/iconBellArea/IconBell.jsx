import React, { useState } from "react";

import "./_iconbell.scss";

const IconBell = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="icon"
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      {isHovered ? (
        <i name="bell" type="solid" className="bx bxs-bell icon__active"></i>
      ) : (
        <i name="bell" className="bx bx-bell icon__normal"></i>
      )}
    </div>
  );
};

export default IconBell;
