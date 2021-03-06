import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./Slider.css";

class Slider extends React.Component {
  onChange = (range) => {
    this.props.onChange({
      value: range,
    });
  };
  onChangeComplete = (range) => {
    this.props.onChangeComplete({
      value: range,
    });
  };
  render() {
    const { min, max, step, value } = this.props.data;
    return (
      <div className="slider">
        <InputRange
          minValue={min}
          maxValue={max}
          step={step}
          onChange={this.onChange}
          value={value}
          onChangeComplete={this.onChangeComplete}
        />
      </div>
    );
  }
}

export default Slider;
