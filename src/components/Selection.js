import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [currentColor, setCurrentColor] = useState("");
  function changeColor() {
    const getColor = applyColor();
    setCurrentColor(getColor);
  }
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: currentColor }}
      onClick={changeColor}
    >
      <h4>Selection</h4>
    </div>
  );
};

export default Selection;
