import React, { useState, useEffect, useRef } from "react";
import { yearFilter } from "../../actions";
import { connect } from "react-redux";
import "./dryear.css";
import Slider from "./Slider";

function Dryear(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const [data, setDat] = useState({
    min: 1950,
    max: 2021,
    step: 1,
    value: { min: 2000, max: 2021 },
  });
  const myRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setClickedOutside(false);
      setIsOpen(false);
    };
  }, [clickedOutside]);
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };

  const onChange = (data) => {
    setDat((prevState) => ({
      ...prevState,
      value: data.value,
    }));
  };
  const onChangeComplete = (data) => {
    props.yearFilter({
      arr: props.moviesLoaded,
      min: data.value,
      max: data.value.max,
    });
  };
  const handleClick = () => {
    setClickedOutside(false);
    setIsOpen(!isOpen);
  };
  const itemList = () => {
    return (
      <div className="dropdownYear__items">
        <Slider
          data={data}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      </div>
    );
  };

  return (
    <div
      ref={myRef}
      className={
        !clickedOutside && isOpen ? "dropdownYear active" : "dropdownYear"
      }
      onClick={handleClick}
    >
      <div className="dropdownYear__text">Release date</div>
      {itemList()}
    </div>
  );
}
const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

function mapDispatchToProps(dispatch) {
  return {
    yearFilter: (values) => dispatch(yearFilter(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dryear);
