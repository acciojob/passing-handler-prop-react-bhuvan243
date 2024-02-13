import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [currentColor, setCurrentColor] = useState("");
  const [colorId, setColorId] = useState("")
  function changeColor() {
    const getColor = applyColor();
    setCurrentColor(getColor.background);
    setColorId(getColor.key)
  }
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: currentColor }}
      onClick={changeColor}
      data-testid={colorId}
    >
      <h4>Selection</h4>
    </div>
  );
};

export default Selection;
