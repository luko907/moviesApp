import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./ReactSlider.css";
import { yearFilter } from "../../actions";
function Slider(props) {
  const [value, setValue] = useState(1950);
  /*  const [final, setFinal] = useState(null); */
  useEffect(() => {
    /* console.log(final); */
  });

  return (
    <div className="slider-parent">
      <input
        type="range"
        min="1950"
        max="2021"
        value={value}
        onChange={({ target: { value: radius } }) => {
          setValue(radius);
          /* setFinal(radius); */
        }}
      />
      <div className="buble">{value}</div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    yearFilter: () => dispatch(yearFilter()),
  };
}

export default connect(null, mapDispatchToProps)(Slider);
