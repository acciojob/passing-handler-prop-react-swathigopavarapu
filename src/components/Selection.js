
import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [bgStyle, setBgStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={bgStyle}
      onClick={() => applyColor(setBgStyle)}
    >
      {/* The box content (optional) */}
    </div>
  );
};

export default Selection;
