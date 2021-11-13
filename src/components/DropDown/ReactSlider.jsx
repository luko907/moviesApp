import React, { useState, useEffect } from "react";
import "./ReactSlider.css";
export default function Slider(props) {
  const [value, setValue] = useState(1950);
  const [final, setFinal] = useState(null);
  useEffect(() => {});

  return (
    <div className="slider-parent">
      <input
        type="range"
        min="1950"
        max="2021"
        value={value}
        onChange={({ target: { value: radius } }) => {
          setValue(radius);
          setFinal(radius);
        }}
      />
      <div className="buble">{value}</div>
    </div>
  );
}
