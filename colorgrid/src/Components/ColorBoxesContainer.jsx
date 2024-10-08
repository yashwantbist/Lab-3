// src/Components/ColorBoxesContainer.jsx
import ColorBox from "./ColorBox";
import colors from "../Data/data";

export default function ColorBoxesContainer() {
  return (
    <div className="gridContainer"
    style={{background: "2px solid black"}}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <div style={{background: "20px solid black"}}
        key={i}>
          {Array.from({ length: 5 }, (_, j) => (
            <ColorBox key={j} color={colors[i * 5 + j]} />
          ))}
        </div>
      ))}
    </div>
  );
};

