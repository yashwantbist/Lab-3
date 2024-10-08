// src/Components/ColorBox.jsx
import  { useState } from "react";
import colors from "../Data/data";

export default function ColorBox ({ color }) {
  const [currentColor, setCurrentColor] = useState(color);

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div className="grid-item"
      style={{ background: currentColor, width: "50px", height: "50px" }}
      onClick={handleClick}
    />
  );
};

